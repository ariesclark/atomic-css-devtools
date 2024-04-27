import { useState } from "react";
import { DevtoolsProvider } from "../../src/devtools-context";
import { SidebarPane } from "../../src/sidebar-pane";
import { css } from "../../styled-system/css";
import { Box, Flex, HStack, Stack } from "../../styled-system/jsx";
import { button } from "../../styled-system/recipes";
import { browserContext } from "./browser-context";
import { ElementInspector } from "./element-inspector";
import { listeners } from "./inspected";

function Playground() {
  const [isInspecting, setIsInspecting] = useState(false);

  return (
    <Flex direction="column" w="100%" h="100%" p="4">
      {isInspecting && (
        <ElementInspector
          onInspect={() => {
            setIsInspecting(false);
            listeners.get("selectionChanged")?.();
          }}
        />
      )}
      <Stack mb="4">
        <HStack>
          <div
            className={css({
              fontSize: "4xl",
              color: "yellow.500",
              my: "4",
              p: "4",
            })}
          >
            Atomic CSS Devtools
          </div>
          <div
            className={css({
              fontSize: "4xl",
              p: "4",
              color: "blue.400",
            })}
          >
            [data-inspected-element]
          </div>
        </HStack>
        <HStack>
          <button
            className={button()}
            onClick={() => {
              setIsInspecting(true);
            }}
          >
            Select an element to inspect it
          </button>
        </HStack>
      </Stack>

      <Box border="1px solid" w="100%" h="100%">
        <DevtoolsProvider value={browserContext}>
          <SidebarPane />
        </DevtoolsProvider>
      </Box>
    </Flex>
  );
}

export default Playground;
