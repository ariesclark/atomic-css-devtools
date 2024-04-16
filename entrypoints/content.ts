import { onMessage, sendMessage } from "webext-bridge/content-script";
import { WindowEnv, inspectApi } from "./devtools-pane/inspect-api";
import type {
  DevtoolMessage,
  MessageMap,
  OnMessageProxy,
  SendMessageProxy,
} from "./devtools-pane/message-typings";

export default defineContentScript({
  matches: ["<all_urls>"],
  main(_ctx) {
    import.meta.env.DEV && console.log("Started content.ts");

    window.addEventListener("resize", function () {
      const env: WindowEnv = {
        location: window.location.href,
        widthPx: window.innerWidth,
        heightPx: window.innerHeight,
        deviceWidthPx: window.screen.width,
        deviceHeightPx: window.screen.height,
        dppx: window.devicePixelRatio,
      };
      api.resize(env);
    });

    window.addEventListener("focus", () => {
      api.focus(null);
    });

    onMsg.inspectElement((message) => {
      const rule = inspectApi.inspectElement(message.data.selectors);
      return rule;
    });
    onMsg.computePropertyValue((message) => {
      return inspectApi.computePropertyValue(
        message.data.selectors,
        message.data.prop
      );
    });
    onMsg.updateStyleRule((message) => {
      let hasUpdated, computedValue;
      if (message.data.kind === "inlineStyle") {
        const element = inspectApi.traverseSelectors(message.data.selectors);
        if (!element) return { hasUpdated: false, computedValue: null };

        hasUpdated = inspectApi.updateInlineStyle({
          element,
          prop: message.data.prop,
          value: message.data.value,
          atIndex: message.data.atIndex,
          isCommented: message.data.isCommented,
          mode: "edit",
        });
      } else {
        let doc = document;
        if (message.data.selectors.length > 1) {
          const element = inspectApi.traverseSelectors(message.data.selectors);
          if (!element) return { hasUpdated: false, computedValue: null };

          doc = element.ownerDocument;
        }

        hasUpdated = inspectApi.updateStyleRule({
          doc,
          selector: message.data.selectors[0],
          prop: message.data.prop,
          value: message.data.value,
        });
      }

      if (hasUpdated) {
        computedValue = inspectApi.computePropertyValue(
          message.data.selectors,
          message.data.prop
        );
      }

      return {
        hasUpdated: Boolean(hasUpdated),
        computedValue: computedValue ?? null,
      };
    });

    onMsg.appendInlineStyle((message) => {
      const element = inspectApi.traverseSelectors(message.data.selectors);
      if (!element) return { hasUpdated: false, computedValue: null };

      const hasUpdated = inspectApi.updateInlineStyle({
        element,
        prop: message.data.prop,
        value: message.data.value,
        atIndex: message.data.atIndex,
        isCommented: message.data.isCommented,
        mode: "insert",
      });
      if (!hasUpdated) return { hasUpdated: false, computedValue: null };

      const computedValue = inspectApi.computePropertyValue(
        message.data.selectors,
        message.data.prop
      );

      return {
        hasUpdated: Boolean(hasUpdated),
        computedValue: computedValue ?? null,
      };
    });
  },
});

const api = new Proxy<SendMessageProxy>({} as any, {
  get<T extends keyof MessageMap>(_target: any, propKey: T) {
    const context = "devtools";
    const tabId = null as any;

    return async function (arg?: any) {
      // console.log(`Calling ${propKey} with payload`, arg);
      return sendMessage(propKey, arg, { context, tabId });
    } as MessageMap[T] extends DevtoolMessage<infer Data, infer Return>
      ? (args: Data) => Promise<Return>
      : (args: MessageMap[T]) => Promise<void>;
  },
});

const onMsg = new Proxy<OnMessageProxy>({} as any, {
  get<T extends keyof MessageMap>(_target: any, propKey: T) {
    return function (cb: (message: any) => any) {
      return onMessage(propKey, (message) => {
        // console.log(`Received ${propKey} with message`, message.data);
        return cb(message);
      });
    };
  },
});
