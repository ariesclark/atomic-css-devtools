export const shorthandProperties = {
  animation: [
    "animationName",
    "animationDuration",
    "animationTimingFunction",
    "animationDelay",
    "animationIterationCount",
    "animationDirection",
    "animationFillMode",
    "animationPlayState",
  ],
  background: [
    "backgroundImage",
    "backgroundPosition",
    "backgroundSize",
    "backgroundRepeat",
    "backgroundAttachment",
    "backgroundOrigin",
    "backgroundClip",
    "backgroundColor",
  ],
  backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
  border: ["borderWidth", "borderStyle", "borderColor"],
  borderBlockEnd: [
    "borderBlockEndWidth",
    "borderBlockEndStyle",
    "borderBlockEndColor",
  ],
  borderBlockStart: [
    "borderBlockStartWidth",
    "borderBlockStartStyle",
    "borderBlockStartColor",
  ],
  borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
  borderColor: [
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ],
  borderImage: [
    "borderImageSource",
    "borderImageSlice",
    "borderImageWidth",
    "borderImageOutset",
    "borderImageRepeat",
  ],
  borderInlineEnd: [
    "borderInlineEndWidth",
    "borderInlineEndStyle",
    "borderInlineEndColor",
  ],
  borderInlineStart: [
    "borderInlineStartWidth",
    "borderInlineStartStyle",
    "borderInlineStartColor",
  ],
  borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
  borderRadius: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomRightRadius",
    "borderBottomLeftRadius",
  ],
  borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
  borderStyle: [
    "borderTopStyle",
    "borderRightStyle",
    "borderBottomStyle",
    "borderLeftStyle",
  ],
  borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
  borderWidth: [
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
  ],
  columnRule: ["columnRuleWidth", "columnRuleStyle", "columnRuleColor"],
  columns: ["columnWidth", "columnCount"],
  container: ["contain", "content"],
  containIntrinsicSize: [
    "containIntrinsicSizeInline",
    "containIntrinsicSizeBlock",
  ],
  cue: ["cueBefore", "cueAfter"],
  flex: ["flexGrow", "flexShrink", "flexBasis"],
  flexFlow: ["flexDirection", "flexWrap"],
  font: [
    "fontStyle",
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantLigatures",
    "fontVariantNumeric",
    "fontVariantPosition",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "lineHeight",
    "fontFamily",
  ],
  fontSynthesis: [
    "fontSynthesisWeight",
    "fontSynthesisStyle",
    "fontSynthesisSmallCaps",
  ],
  fontVariant: [
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantLigatures",
    "fontVariantNumeric",
    "fontVariantPosition",
  ],
  gap: ["columnGap", "rowGap"],
  grid: [
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridTemplateAreas",
    "gridAutoColumns",
    "gridAutoRows",
    "gridAutoFlow",
  ],
  gridArea: ["gridRowStart", "gridColumnStart", "gridRowEnd", "gridColumnEnd"],
  gridColumn: ["gridColumnStart", "gridColumnEnd"],
  gridGap: ["gridColumnGap", "gridRowGap"],
  gridRow: ["gridRowStart", "gridRowEnd"],
  gridTemplate: [
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridTemplateAreas",
  ],
  inset: ["top", "right", "bottom", "left"],
  listStyle: ["listStyleType", "listStylePosition", "listStyleImage"],
  margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
  mask: [
    "maskImage",
    "maskMode",
    "maskRepeat",
    "maskPosition",
    "maskClip",
    "maskOrigin",
    "maskSize",
    "maskComposite",
  ],
  maskBorder: [
    "maskBorderSource",
    "maskBorderMode",
    "maskBorderSlice",
    "maskBorderWidth",
    "maskBorderOutset",
    "maskBorderRepeat",
  ],
  offset: [
    "offsetPosition",
    "offsetPath",
    "offsetDistance",
    "offsetRotate",
    "offsetAnchor",
  ],
  outline: ["outlineWidth", "outlineStyle", "outlineColor"],
  overflow: ["overflowX", "overflowY"],
  padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
  pause: ["pauseBefore", "pauseAfter"],
  placeContent: ["alignContent", "justifyContent"],
  placeItems: ["alignItems", "justifyItems"],
  placeSelf: ["alignSelf", "justifySelf"],
  rest: ["restBefore", "restAfter"],
  scrollMargin: [
    "scrollMarginTop",
    "scrollMarginRight",
    "scrollMarginBottom",
    "scrollMarginLeft",
  ],
  scrollPadding: [
    "scrollPaddingTop",
    "scrollPaddingRight",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
  ],
  scrollPaddingBlock: ["scrollPaddingBlockStart", "scrollPaddingBlockEnd"],
  scrollPaddingInline: ["scrollPaddingInlineStart", "scrollPaddingInlineEnd"],
  scrollSnapMargin: [
    "scrollSnapMarginTop",
    "scrollSnapMarginRight",
    "scrollSnapMarginBottom",
    "scrollSnapMarginLeft",
  ],
  scrollSnapMarginBlock: [
    "scrollSnapMarginBlockStart",
    "scrollSnapMarginBlockEnd",
  ],
  scrollSnapMarginInline: [
    "scrollSnapMarginInlineStart",
    "scrollSnapMarginInlineEnd",
  ],
  scrollTimeline: ["scrollTimelineSource", "scrollTimelineOrientation"],
  textDecoration: [
    "textDecorationLine",
    "textDecorationStyle",
    "textDecorationColor",
  ],
  textEmphasis: ["textEmphasisStyle", "textEmphasisColor"],
  transition: [
    "transitionProperty",
    "transitionDuration",
    "transitionTimingFunction",
    "transitionDelay",
  ],
};

export const longhands = Object.values(shorthandProperties).reduce(
  (a, b) => [...a, ...b],
  [],
);

export const shorthandForLonghand = {} as Record<string, string>;
Object.entries(shorthandProperties).forEach(([longhand, shorthands]) => {
  shorthands.forEach((shorthand) => {
    shorthandForLonghand[shorthand as keyof typeof shorthandProperties] =
      longhand;
  });
});
