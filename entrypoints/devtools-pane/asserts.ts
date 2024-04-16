// we have to check against the constructor.name because:
// - `{rule}.type` is still available but deprecated
// - `{rule} instanceof CSS{rule}` might not be the same in different JS contexts (e.g. iframe)

const isCSSStyleRule = (rule: CSSRule): rule is CSSStyleRule => {
  return rule.constructor.name === "CSSStyleRule";
};

const isCSSMediaRule = (rule: CSSRule): rule is CSSMediaRule => {
  return rule.constructor.name === "CSSMediaRule";
};

const isCSSLayerBlockRule = (rule: CSSRule): rule is CSSLayerBlockRule => {
  return rule.constructor.name === "CSSLayerBlockRule";
};

const isCSSLayerStatementRule = (
  rule: CSSRule
): rule is CSSLayerStatementRule => {
  return rule.constructor.name === "CSSLayerStatementRule";
};

const isElement = (obj: any): obj is Element => {
  return obj.constructor.name === "Element";
};

const isHTMLIFrameElement = (obj: any): obj is HTMLIFrameElement => {
  return obj.constructor.name === "HTMLIFrameElement";
};

const isDocument = (obj: any): obj is Document => {
  return obj.constructor.name === "Document";
};

const isShadowRoot = (obj: any): obj is ShadowRoot => {
  return obj.constructor.name === "ShadowRoot";
};

const isHTMLStyleElement = (obj: any): obj is HTMLStyleElement => {
  return obj.constructor.name === "HTMLStyleElement";
};

export const asserts = {
  isCSSStyleRule,
  isCSSMediaRule,
  isCSSLayerBlockRule,
  isCSSLayerStatementRule,
  isElement,
  isHTMLIFrameElement,
  isDocument,
  isShadowRoot,
  isHTMLStyleElement,
};
