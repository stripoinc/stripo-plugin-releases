var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var dist = {};
var Block = {};
var BlockCompositionType = {};
var hasRequiredBlockCompositionType;
function requireBlockCompositionType() {
  if (hasRequiredBlockCompositionType) return BlockCompositionType;
  hasRequiredBlockCompositionType = 1;
  Object.defineProperty(BlockCompositionType, "__esModule", { value: true });
  BlockCompositionType.BlockCompositionType = void 0;
  var BlockCompositionType$1;
  (function(BlockCompositionType2) {
    BlockCompositionType2["BLOCK"] = "BLOCK";
    BlockCompositionType2["STRUCTURE"] = "STRUCTURE";
  })(BlockCompositionType$1 || (BlockCompositionType.BlockCompositionType = BlockCompositionType$1 = {}));
  return BlockCompositionType;
}
var hasRequiredBlock;
function requireBlock() {
  if (hasRequiredBlock) return Block;
  hasRequiredBlock = 1;
  Object.defineProperty(Block, "__esModule", { value: true });
  Block.Block = void 0;
  var BlockCompositionType_1 = requireBlockCompositionType();
  var Block$1 = (
    /** @class */
    function() {
      function Block2() {
      }
      Block2.prototype.isEnabled = function() {
        return true;
      };
      Block2.prototype.canBeSavedAsModule = function() {
        return false;
      };
      Block2.prototype.getContextActionsIds = function() {
        return void 0;
      };
      Block2.prototype.getCustomRenderer = function() {
        return void 0;
      };
      Block2.prototype.getUniqueBlockClassname = function() {
        return "esd-".concat(this.getId());
      };
      Block2.prototype.onDocumentInit = function() {
        return void 0;
      };
      Block2.prototype.onSelect = function(node) {
        return void 0;
      };
      Block2.prototype.onCopy = function(targetNode, sourceNode) {
        return void 0;
      };
      Block2.prototype.onDelete = function(node) {
        return void 0;
      };
      Block2.prototype.onCreated = function(node) {
      };
      Block2.prototype.onDocumentChanged = function() {
      };
      Block2.prototype.getBlockCompositionType = function() {
        return BlockCompositionType_1.BlockCompositionType.BLOCK;
      };
      Block2.prototype.shouldDisplayQuickAddIcon = function() {
        return false;
      };
      Block2.prototype.allowInnerBlocksSelection = function() {
        return true;
      };
      Block2.prototype.allowInnerBlocksDND = function() {
        return true;
      };
      return Block2;
    }()
  );
  Block.Block = Block$1;
  return Block;
}
var BlockRenderer = {};
var hasRequiredBlockRenderer;
function requireBlockRenderer() {
  if (hasRequiredBlockRenderer) return BlockRenderer;
  hasRequiredBlockRenderer = 1;
  Object.defineProperty(BlockRenderer, "__esModule", { value: true });
  BlockRenderer.BlockRenderer = void 0;
  var BlockRenderer$1 = (
    /** @class */
    /* @__PURE__ */ function() {
      function BlockRenderer2() {
      }
      return BlockRenderer2;
    }()
  );
  BlockRenderer.BlockRenderer = BlockRenderer$1;
  return BlockRenderer;
}
var BlocksPanel = {};
var hasRequiredBlocksPanel;
function requireBlocksPanel() {
  if (hasRequiredBlocksPanel) return BlocksPanel;
  hasRequiredBlocksPanel = 1;
  Object.defineProperty(BlocksPanel, "__esModule", { value: true });
  BlocksPanel.BlocksPanel = void 0;
  var BlocksPanel$1 = (
    /** @class */
    function() {
      function BlocksPanel2() {
      }
      BlocksPanel2.prototype.getBlockItemHtml = function(block) {
        return void 0;
      };
      BlocksPanel2.prototype.isBlockHintVisible = function(block) {
        return true;
      };
      BlocksPanel2.prototype.getBlockHint = function(block) {
        return {
          title: block.title,
          description: block.description
        };
      };
      BlocksPanel2.prototype.getBlocksPanelHeaderHtml = function() {
        return void 0;
      };
      BlocksPanel2.prototype.getModulesPanelCollapsedHtml = function() {
        return void 0;
      };
      BlocksPanel2.prototype.isModulesPanelCollapsedHintVisible = function() {
        return true;
      };
      BlocksPanel2.prototype.getHintDelay = function() {
        return void 0;
      };
      BlocksPanel2.prototype.getModulesPanelHint = function() {
        return void 0;
      };
      return BlocksPanel2;
    }()
  );
  BlocksPanel.BlocksPanel = BlocksPanel$1;
  return BlocksPanel;
}
var ContextAction = {};
var hasRequiredContextAction;
function requireContextAction() {
  if (hasRequiredContextAction) return ContextAction;
  hasRequiredContextAction = 1;
  Object.defineProperty(ContextAction, "__esModule", { value: true });
  ContextAction.ContextAction = void 0;
  var ContextAction$1 = (
    /** @class */
    /* @__PURE__ */ function() {
      function ContextAction2() {
      }
      return ContextAction2;
    }()
  );
  ContextAction.ContextAction = ContextAction$1;
  return ContextAction;
}
var AddCustomFont = {};
var hasRequiredAddCustomFont;
function requireAddCustomFont() {
  if (hasRequiredAddCustomFont) return AddCustomFont;
  hasRequiredAddCustomFont = 1;
  Object.defineProperty(AddCustomFont, "__esModule", { value: true });
  AddCustomFont.ADD_CUSTOM_FONT_OPTION = void 0;
  AddCustomFont.ADD_CUSTOM_FONT_OPTION = "ADD_CUSTOM_FONT_OPTION";
  return AddCustomFont;
}
var AiAssistantValueType = {};
var hasRequiredAiAssistantValueType;
function requireAiAssistantValueType() {
  if (hasRequiredAiAssistantValueType) return AiAssistantValueType;
  hasRequiredAiAssistantValueType = 1;
  Object.defineProperty(AiAssistantValueType, "__esModule", { value: true });
  AiAssistantValueType.AiAssistantValueType = void 0;
  var AiAssistantValueType$1;
  (function(AiAssistantValueType2) {
    AiAssistantValueType2["SUBJECT"] = "subject";
    AiAssistantValueType2["HIDDEN_PREHEADER"] = "hiddenPreheader";
    AiAssistantValueType2["TEXT_BLOCK"] = "textBlock";
  })(AiAssistantValueType$1 || (AiAssistantValueType.AiAssistantValueType = AiAssistantValueType$1 = {}));
  return AiAssistantValueType;
}
var BlockAttributes = {};
var hasRequiredBlockAttributes;
function requireBlockAttributes() {
  if (hasRequiredBlockAttributes) return BlockAttributes;
  hasRequiredBlockAttributes = 1;
  var __assign = BlockAttributes && BlockAttributes.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(BlockAttributes, "__esModule", { value: true });
  BlockAttributes.BlockAttr = void 0;
  var containerAttributes = {
    widthPercent: "width-percent"
  };
  var emptyContainerAttributes = __assign(__assign({}, containerAttributes), { blocks: "blocks" });
  var imageAttributes = {
    src: "src",
    alt: "alt",
    href: "href"
  };
  var buttonAttributes = {
    href: "href"
  };
  BlockAttributes.BlockAttr = {
    EMPTY_CONTAINER: emptyContainerAttributes,
    CONTAINER: containerAttributes,
    BLOCK_IMAGE: imageAttributes,
    BLOCK_BUTTON: buttonAttributes
  };
  return BlockAttributes;
}
var BlockType = {};
var hasRequiredBlockType;
function requireBlockType() {
  if (hasRequiredBlockType) return BlockType;
  hasRequiredBlockType = 1;
  Object.defineProperty(BlockType, "__esModule", { value: true });
  BlockType.BlockType = void 0;
  var BlockType$1;
  (function(BlockType2) {
    BlockType2["BLOCK_IMAGE"] = "BLOCK_IMAGE";
    BlockType2["BLOCK_TEXT"] = "BLOCK_TEXT";
    BlockType2["BLOCK_BUTTON"] = "BLOCK_BUTTON";
    BlockType2["BLOCK_SPACER"] = "BLOCK_SPACER";
    BlockType2["BLOCK_VIDEO"] = "BLOCK_VIDEO";
    BlockType2["BLOCK_SOCIAL"] = "BLOCK_SOCIAL";
    BlockType2["BLOCK_BANNER"] = "BLOCK_BANNER";
    BlockType2["BLOCK_TIMER"] = "BLOCK_TIMER";
    BlockType2["BLOCK_MENU"] = "BLOCK_MENU";
    BlockType2["BLOCK_MENU_ITEM"] = "BLOCK_MENU_ITEM";
    BlockType2["BLOCK_HTML"] = "BLOCK_HTML";
    BlockType2["BLOCK_AMP_CAROUSEL"] = "BLOCK_AMP_CAROUSEL";
    BlockType2["BLOCK_AMP_ACCORDION"] = "BLOCK_AMP_ACCORDION";
    BlockType2["BLOCK_AMP_FORM"] = "BLOCK_AMP_FORM";
    BlockType2["CONTAINER"] = "CONTAINER";
    BlockType2["FORM_CONTAINER"] = "FORM_CONTAINER";
    BlockType2["STRUCTURE"] = "STRUCTURE";
    BlockType2["STRIPE"] = "STRIPE";
    BlockType2["EMPTY_CONTAINER"] = "EMPTY_CONTAINER";
    BlockType2["CUSTOM_BLOCK_LINK"] = "CUSTOM_BLOCK_LINK";
    BlockType2["CUSTOM_BLOCK_IMAGE"] = "CUSTOM_BLOCK_IMAGE";
    BlockType2["CUSTOM_BLOCK_TEXT"] = "CUSTOM_BLOCK_TEXT";
  })(BlockType$1 || (BlockType.BlockType = BlockType$1 = {}));
  return BlockType;
}
var BuiltInControlTypes = {};
var hasRequiredBuiltInControlTypes;
function requireBuiltInControlTypes() {
  if (hasRequiredBuiltInControlTypes) return BuiltInControlTypes;
  hasRequiredBuiltInControlTypes = 1;
  var _a;
  Object.defineProperty(BuiltInControlTypes, "__esModule", { value: true });
  BuiltInControlTypes.BuiltInControlTypes = BuiltInControlTypes.GeneralStylesControls = BuiltInControlTypes.MessageSettingsControls = BuiltInControlTypes.ContainerControls = BuiltInControlTypes.StructureControls = BuiltInControlTypes.StripeControls = BuiltInControlTypes.CarouselControls = BuiltInControlTypes.AccordionControls = BuiltInControlTypes.MenuControls = BuiltInControlTypes.SocialControls = BuiltInControlTypes.CustomTextControls = BuiltInControlTypes.CustomImageControls = BuiltInControlTypes.CustomLinkControls = BuiltInControlTypes.HTMLControls = BuiltInControlTypes.ImageControls = BuiltInControlTypes.SpacerControls = BuiltInControlTypes.TimerControls = BuiltInControlTypes.VideoControls = BuiltInControlTypes.AmpFormControls = BuiltInControlTypes.TextControls = BuiltInControlTypes.ButtonControls = BuiltInControlTypes.BannerChildControls = BuiltInControlTypes.BannerControls = BuiltInControlTypes.GeneralControls = void 0;
  var BlockType_1 = requireBlockType();
  var GeneralControls;
  (function(GeneralControls2) {
    GeneralControls2["ANCHOR_LINK_CONTAINER"] = "anchorLinkFormContainer";
    GeneralControls2["APPLY_CONDITION"] = "applyCondition";
    GeneralControls2["APPLY_CONDITION_SWITCHER"] = "applyConditionSwitcher";
    GeneralControls2["BACKGROUND_COLOR"] = "backgroundColor";
    GeneralControls2["BACKGROUND_IMAGE"] = "generalImageContainer";
    GeneralControls2["TEXT_COLOR"] = "textColor";
    GeneralControls2["TEXT_STYLE"] = "textStyle";
    GeneralControls2["TEXT_SIZE"] = "textSize";
    GeneralControls2["TEXT_LINE_SPACING"] = "textLineSpacing";
    GeneralControls2["FIXED_HEIGHT_SWITCHER"] = "fixedHeightSwitcherForm";
    GeneralControls2["HIDDEN_NODE"] = "hiddenNode";
    GeneralControls2["SMART_BLOCK"] = "smartBlock";
    GeneralControls2["SYNCHRONIZED_MODULE"] = "synchronizedModuleForm";
    GeneralControls2["FONT_FAMILY"] = "generalFontFamilyForm";
    GeneralControls2["BLOCK_PADDINGS"] = "blockPaddings";
    GeneralControls2["STRUCTURE_PADDINGS"] = "internalStructurePaddings";
  })(GeneralControls || (BuiltInControlTypes.GeneralControls = GeneralControls = {}));
  var BannerControls;
  (function(BannerControls2) {
    BannerControls2["ALIGNMENT"] = "bannerAlignment";
    BannerControls2["ALT_TEXT"] = "bannerAltText";
    BannerControls2["ANCHOR_LINK_CONTAINER"] = "bannerAnchorLinkContainerForm";
    BannerControls2["ASPECT_RATIO"] = "bannerAspectRatioForm";
    BannerControls2["BACKGROUND_COLOR"] = "bannerBackgroundColor";
    BannerControls2["BACKGROUND_IMAGE_CONTAINER"] = "bannerBackgroundImageContainer";
    BannerControls2["SIZE"] = "bannerBlockBannerSize";
    BannerControls2["BLOCK_LINK"] = "bannerBlockLink";
    BannerControls2["CHILD_ROTATION"] = "bannerChildRotationForm";
    BannerControls2["CROP"] = "bannerCropForm";
    BannerControls2["FILTER"] = "bannerFilter";
    BannerControls2["MARGIN"] = "bannerMarginForm";
    BannerControls2["MIME_TYPE"] = "bannerMimeTypeForm";
    BannerControls2["RESPONSIVE_IMAGE"] = "bannerResponsiveImageForm";
  })(BannerControls || (BuiltInControlTypes.BannerControls = BannerControls = {}));
  var BannerChildControls;
  (function(BannerChildControls2) {
    BannerChildControls2["ADDITIONAL_IMAGE"] = "bannerAdditionalImageForm";
    BannerChildControls2["ADDITIONAL_IMAGE_ASPECT_RATIO"] = "bannerAdditionalImageAspectRatioForm";
    BannerChildControls2["CHILD_COLOR"] = "bannerChildColorForm";
    BannerChildControls2["CHILD_FLIP"] = "bannerChildFlipForm";
    BannerChildControls2["CHILD_OPACITY"] = "bannerChildOpacityForm";
    BannerChildControls2["TEXT_ALIGNMENT"] = "bannerTextAlignmentForm";
    BannerChildControls2["TEXT_FONT"] = "bannerTextFontContainer";
    BannerChildControls2["TEXT_LETTER_CASE"] = "bannerTextLetterCaseForm";
    BannerChildControls2["TEXT_STYLE"] = "bannerTextStyleForm";
  })(BannerChildControls || (BuiltInControlTypes.BannerChildControls = BannerChildControls = {}));
  var ButtonControls;
  (function(ButtonControls2) {
    ButtonControls2["ADJUST_TO_WIDTH"] = "adjustToWidth";
    ButtonControls2["ALIGNMENT"] = "buttonAlignment";
    ButtonControls2["BORDER"] = "buttonBorder";
    ButtonControls2["BORDER_RADIUS"] = "buttonBorderRadius";
    ButtonControls2["COLOR"] = "buttonColor";
    ButtonControls2["EXTERNAL_INDENT"] = "buttonExternalIndent";
    ButtonControls2["FIXED_HEIGHT_CONTAINER"] = "buttonFixedHeightContainerForm";
    ButtonControls2["FONT_COLOR"] = "buttonFontColor";
    ButtonControls2["FONT_FAMILY"] = "buttonFontFamily";
    ButtonControls2["FONT_SIZE"] = "buttonFontSize";
    ButtonControls2["ICON"] = "buttonIconContainer";
    ButtonControls2["ICON_ALIGN"] = "buttonIconAlign";
    ButtonControls2["ICON_INDENT"] = "buttonIconIndent";
    ButtonControls2["ICON_WIDTH"] = "buttonIconWidth";
    ButtonControls2["IMAGE"] = "buttonImageForm";
    ButtonControls2["INTERNAL_INDENT"] = "buttonInternalIndent";
    ButtonControls2["LINK"] = "buttonLink";
    ButtonControls2["MIME_TYPE"] = "buttonMimeTypeForm";
    ButtonControls2["SWITCHER_HOVERED_STYLES"] = "buttonSwitcherHoveredStylesForm";
    ButtonControls2["TEXT"] = "buttonText";
    ButtonControls2["TEXT_STYLE_AND_COLOR"] = "buttonTextStyleAndColorForm";
    ButtonControls2["HOVERED_BORDER_COLOR"] = "hoveredStyleBorderButtonForm";
    ButtonControls2["HOVERED_COLOR"] = "hoveredButtonColorForm";
    ButtonControls2["HOVERED_TEXT_COLOR"] = "hoveredButtonTextColorForm";
  })(ButtonControls || (BuiltInControlTypes.ButtonControls = ButtonControls = {}));
  var TextControls;
  (function(TextControls2) {
    TextControls2["HIDDEN_NODE"] = "hiddenNodeText";
    TextControls2["PARAGRAPH_STYLE"] = "paragraphStyleForm";
    TextControls2["ALIGN"] = "textAlignmentForm";
    TextControls2["ANCHOR_CONTAINER"] = "textAnchorForm";
    TextControls2["FONT_BACKGROUND_COLOR"] = "textBlockFontBackgroundColor";
    TextControls2["FONT_COLOR"] = "textBlockFontColor";
    TextControls2["FONT_FAMILY"] = "textBlockFontFamily";
    TextControls2["FONT_SIZE"] = "textBlockFontSize";
    TextControls2["DIRECTION"] = "textBlockDirectionForm";
    TextControls2["INSERT_FORM"] = "textBlockInsertForm";
    TextControls2["LINK_DATA"] = "textBlockLinkDataForm";
    TextControls2["FORMAT"] = "textBlockTextFormatForm";
    TextControls2["FIXED_HEIGHT_CONTAINER"] = "textFixedHeightContainerForm";
    TextControls2["INTERNAL_INDENTS"] = "textInternalIndents";
    TextControls2["LINE_HEIGHT"] = "textLineHeightForm";
    TextControls2["LINKS_COLOR"] = "textLinksFontColorForm";
    TextControls2["MIME_TYPE"] = "textMimeTypeForm";
    TextControls2["NO_LINE_WRAPS"] = "textNoLineWrapsForm";
  })(TextControls || (BuiltInControlTypes.TextControls = TextControls = {}));
  var AmpFormControls;
  (function(AmpFormControls2) {
    AmpFormControls2["AMP_FORM_HIDDEN_NODE"] = "ampFormHiddenNodeForm";
    AmpFormControls2["AMP_FORM_MIME_TYPE"] = "ampFormMimeTypeForm";
  })(AmpFormControls || (BuiltInControlTypes.AmpFormControls = AmpFormControls = {}));
  var VideoControls;
  (function(VideoControls2) {
    VideoControls2["CUSTOM_THUMBNAIL_CONTAINER"] = "customThumbnailContainerForm";
    VideoControls2["METADATA_LINK"] = "metadataLink";
    VideoControls2["PLAY_BUTTON"] = "playButton";
    VideoControls2["ALIGNMENT"] = "videoAlignment";
    VideoControls2["ALT_TEXT"] = "videoAltText";
    VideoControls2["EXTERNAL_INDENTS"] = "videoExternalIndents";
    VideoControls2["MIME_TYPE"] = "videoMimeTypeForm";
    VideoControls2["RESPONSIVE"] = "videoResponsive";
    VideoControls2["SIZE"] = "videoSizeContainer";
  })(VideoControls || (BuiltInControlTypes.VideoControls = VideoControls = {}));
  var TimerControls;
  (function(TimerControls2) {
    TimerControls2["ALIGNMENT"] = "timerAlignment";
    TimerControls2["ALT_TEXT"] = "timerAltText";
    TimerControls2["BACKGROUND_COLOR"] = "timerBackgroundColor";
    TimerControls2["DATE_TIME"] = "timeDateTime";
    TimerControls2["DIGITAL_LABELS"] = "timerDigitalLabels";
    TimerControls2["DIGITS_FONT_COLOR_CONTAINER"] = "timerDigitsFontColorContainer";
    TimerControls2["DIGITS_FONT_CONTAINER"] = "timerDigitsFontContainer";
    TimerControls2["DISPLAY_DAYS_SWITCHER"] = "timerDisplayDaysSwitcher";
    TimerControls2["EXPIRATION_IMAGE"] = "timerExpirationImage";
    TimerControls2["EXPIRATION_IMAGE_SWITCHER"] = "timerExpirationSwitcher";
    TimerControls2["EXTERNAL_INDENT"] = "timerExternalIndex";
    TimerControls2["LABELS_CASE"] = "timerLabelsCase";
    TimerControls2["LABELS_FONT_COLOR_CONTAINER"] = "timerLabelsFontColorContainer";
    TimerControls2["LABELS_FONT_CONTAINER"] = "timerLabelsFontContainer";
    TimerControls2["LABEL_LANGUAGE"] = "timerLabelsLanguage";
    TimerControls2["LINK"] = "timerLink";
    TimerControls2["MIME_TYPE"] = "timerMimeTypeForm";
    TimerControls2["RESPONSIVE"] = "timerResponsive";
    TimerControls2["RETINA_DISPLAY_SUPPORT"] = "timerRetinaDisplaySupport";
    TimerControls2["SEPARATOR"] = "timerSeparator";
    TimerControls2["SEPARATOR_FONT_COLOR"] = "timerSeparatorFontColor";
    TimerControls2["SEPARATOR_FONT_CONTAINER"] = "timerSeparatorFontContainer";
    TimerControls2["SIZE"] = "timerSize";
    TimerControls2["TIME_ZONE"] = "timerTimeZone";
  })(TimerControls || (BuiltInControlTypes.TimerControls = TimerControls = {}));
  var SpacerControls;
  (function(SpacerControls2) {
    SpacerControls2["ALIGNMENT"] = "spacerAlignment";
    SpacerControls2["BORDER"] = "spacerBorder";
    SpacerControls2["EXTERNAL_INDENT"] = "spacerExternalIndent";
    SpacerControls2["MIME_TYPE"] = "spacerMimeTypeForm";
    SpacerControls2["MODE"] = "spacerMode";
    SpacerControls2["SIZE"] = "spacerSize";
  })(SpacerControls || (BuiltInControlTypes.SpacerControls = SpacerControls = {}));
  var ImageControls;
  (function(ImageControls2) {
    ImageControls2["ALT_TEXT"] = "altText";
    ImageControls2["LINK"] = "blockLink";
    ImageControls2["ALIGNMENT"] = "imageAlignment";
    ImageControls2["ANCHOR_LINK_CONTAINER"] = "imageAnchorLinkContainerForm";
    ImageControls2["BORDER_RADIUS"] = "imageBorderRadiusForm";
    ImageControls2["IMAGE"] = "imageImageForm";
    ImageControls2["MARGIN"] = "imageMargin";
    ImageControls2["MIME_TYPE"] = "imageMimeTypeForm";
    ImageControls2["RESPONSIVE"] = "imageResponsive";
    ImageControls2["ROLLOVER_IMAGE"] = "imageRolloverImageForm";
    ImageControls2["ROLLOVER_SWITCHER"] = "imageRolloverSwitcherForm";
    ImageControls2["SIZE"] = "imageSizeContainer";
  })(ImageControls || (BuiltInControlTypes.ImageControls = ImageControls = {}));
  var HTMLControls;
  (function(HTMLControls2) {
    HTMLControls2["EXTERNAL_INDENT"] = "htmlExternalIndent";
    HTMLControls2["MIME_TYPE"] = "htmlMimeTypeForm";
  })(HTMLControls || (BuiltInControlTypes.HTMLControls = HTMLControls = {}));
  var CustomLinkControls;
  (function(CustomLinkControls2) {
    CustomLinkControls2["IMAGE"] = "customBlockImageForm";
    CustomLinkControls2["COLOR_FORM"] = "customLinkColorForm";
    CustomLinkControls2["HREF_FORM"] = "customLinkHrefForm";
    CustomLinkControls2["TEXT_FORM"] = "customLinkTextForm";
    CustomLinkControls2["UNDERLINE_FORM"] = "customLinkUnderlineForm";
    CustomLinkControls2["WORD_BREAK_FORM"] = "customLinkWordBreakForm";
  })(CustomLinkControls || (BuiltInControlTypes.CustomLinkControls = CustomLinkControls = {}));
  var CustomImageControls;
  (function(CustomImageControls2) {
    CustomImageControls2["ALT_TEXT_FORM"] = "customBlockImageAltTextForm";
    CustomImageControls2["WITHOUT_LINK_FORM"] = "customBlockImageWithOutLinkForm";
  })(CustomImageControls || (BuiltInControlTypes.CustomImageControls = CustomImageControls = {}));
  var CustomTextControls;
  (function(CustomTextControls2) {
    CustomTextControls2["ALIGN"] = "customTextBlockTextAlign";
    CustomTextControls2["FONT_SIZE"] = "customTextFontSizeController";
  })(CustomTextControls || (BuiltInControlTypes.CustomTextControls = CustomTextControls = {}));
  var SocialControls;
  (function(SocialControls2) {
    SocialControls2["ICON_SIZE"] = "iconSize";
    SocialControls2["EXTERNAL_INDENT"] = "socialExternalIndent";
    SocialControls2["ICON_SPACER"] = "socialIconsSpacer";
    SocialControls2["ICON_TYPE"] = "socialIconTypeForm";
    SocialControls2["ITEM"] = "socialItemForm";
    SocialControls2["ITEM_TEXT_CUSTOMIZATION"] = "socialItemTextCustomizationForm";
    SocialControls2["MIME_TYPE"] = "socialMimeTypeForm";
    SocialControls2["NETWORK_ALIGNMENT"] = "socialNetworkAlignment";
  })(SocialControls || (BuiltInControlTypes.SocialControls = SocialControls = {}));
  var MenuControls;
  (function(MenuControls2) {
    MenuControls2["EXTERNAL_INDENT"] = "externalIndent";
    MenuControls2["ALIGNMENT"] = "menuAlignment";
    MenuControls2["RESPONSIVE_MENU"] = "menuResponsive";
    MenuControls2["FIT_TO_CONTAINER"] = "menuFitToContainer";
    MenuControls2["FONT_FAMILY"] = "menuFontFamily";
    MenuControls2["FONT_SIZE"] = "menuFontSize";
    MenuControls2["HIDDEN"] = "menuHidden";
    MenuControls2["ICONS_CONFIGURATION"] = "menuIconsConfiguration";
    MenuControls2["ITEMS"] = "menuItemsForm";
    MenuControls2["ITEMS_COUNT"] = "menuItemsCount";
    MenuControls2["ITEM_INTERNAL_INDENTS"] = "menuItemInternalIndents";
    MenuControls2["MIME_TYPE"] = "menuMimeTypeForm";
    MenuControls2["SEPARATE_ITEMS"] = "menuSeparateItems";
    MenuControls2["SEPARATE_ITEMS_COLOR_SWITCHER"] = "menuSeparateItemsColorSwitcher";
    MenuControls2["SEPARATOR"] = "menuSeparatorForm";
    MenuControls2["STYLES"] = "menuStylesForm";
    MenuControls2["TEXT_STYLE_AND_COLOR"] = "menuTextStyleAndColor";
    MenuControls2["TYPE_CONTAINER"] = "menuTypeContainerForm";
  })(MenuControls || (BuiltInControlTypes.MenuControls = MenuControls = {}));
  var AccordionControls;
  (function(AccordionControls2) {
    AccordionControls2["MIME_TYPE"] = "ampAccordionMimeTypeForm";
    AccordionControls2["ANIMATED_OPENING"] = "ampAccordionAnimatedOpeningForm";
    AccordionControls2["AUTO_COLLAPSING"] = "ampAccordionAutoCollapsingForm";
    AccordionControls2["BORDER_FORM"] = "ampAccordionBorderForm";
    AccordionControls2["FONT_FAMILY"] = "ampAccordionFontFamily";
    AccordionControls2["ICON_SIZE"] = "ampAccordionIconSizeForm";
    AccordionControls2["SECTIONS_GAP_FORM"] = "ampAccordionSectionsGapForm";
    AccordionControls2["SECTIONS_MAIN_FORM"] = "ampAccordionSectionsMainForm";
    AccordionControls2["TITLES_BACKGROUND_COLOR"] = "ampAccordionTitlesBackgroundColor";
    AccordionControls2["TITLE_ALIGNMENT_FORM"] = "ampAccordionTitleAlignmentForm";
    AccordionControls2["TITLE_FONT_SIZE"] = "AmpAccordionTitleFontSizeController";
    AccordionControls2["TITLE_ICON_IMAGE"] = "ampAccordionTitleIconImageForm";
    AccordionControls2["TITLE_ICON_SWITCHER"] = "ampAccordionTitleIconSwitcherForm";
    AccordionControls2["TITLE_TEXT_STYLE_AND_COLOR"] = "AmpAccordionTitleTextStyleAndColorController";
  })(AccordionControls || (BuiltInControlTypes.AccordionControls = AccordionControls = {}));
  var CarouselControls;
  (function(CarouselControls2) {
    CarouselControls2["MIME_TYPE"] = "ampCarouselMimeTypeForm";
    CarouselControls2["AUTOPLAY"] = "ampCarouselAutoplayForm";
    CarouselControls2["AUTOPLAY_DELAY"] = "ampCarouselDelayForm";
    CarouselControls2["LOOP"] = "ampCarouselLoopForm";
    CarouselControls2["SLIDES"] = "ampSlidesForm";
    CarouselControls2["SLIDE_ALT_TEXT"] = "ampSlideAltTextForm";
    CarouselControls2["SLIDE_IMAGE"] = "ampSlideImageForm";
    CarouselControls2["SLIDE_IMAGE_FIT"] = "ampCarouselSlideImageFitForm";
    CarouselControls2["SLIDE_LINK"] = "ampSlideLinkForm";
    CarouselControls2["SLIDE_RADIUS"] = "ampCarouselSlideRadiusForm";
    CarouselControls2["SLIDE_THUMBNAIL_SWITCHER"] = "ampCarouselSlideThumbnailSwitcherForm";
    CarouselControls2["THUMBNAIL_BORDER_STYLE"] = "ampCarouselThumbnailBorderStyleForm";
    CarouselControls2["THUMBNAIL_CONTAINER"] = "ampCarouselThumbnailContainerForm";
    CarouselControls2["THUMBNAIL_CUSTOM_REVIEW"] = "ampCarouselThumbnailCustomPreviewImageForm";
    CarouselControls2["THUMBNAIL_RADIUS"] = "ampCarouselThumbnailRadiusForm";
    CarouselControls2["AMP_GENERAL_LINK"] = "AMP_GENERAL_LINK_CONTROLLER";
    CarouselControls2["AMP_GENERAL_LINK_SWITCHER"] = "AMP_GENERAL_LINK_SWITCHER";
  })(CarouselControls || (BuiltInControlTypes.CarouselControls = CarouselControls = {}));
  var StripeControls;
  (function(StripeControls2) {
    StripeControls2["BORDER_FORM"] = "stripeBorderForm";
    StripeControls2["COLOR"] = "stripeColorForm";
    StripeControls2["CONTENT_COLOR"] = "stripeContentColor";
    StripeControls2["IMAGE_CONTAINER"] = "stripeImageContainerForm";
    StripeControls2["INTERNAL_INDENTS"] = "stripeInternalIndents";
    StripeControls2["MESSAGE_AREA"] = "stripeMessageAreaForm";
    StripeControls2["MIME_TYPE"] = "stripeMimeTypeForm";
  })(StripeControls || (BuiltInControlTypes.StripeControls = StripeControls = {}));
  var StructureControls;
  (function(StructureControls2) {
    StructureControls2["RESPONSIVE_STRUCTURE"] = "responsiveStructure";
    StructureControls2["BG_COLOR"] = "structureBgColorForm";
    StructureControls2["BORDER_RADIUS"] = "structureBorderRadiusForm";
    StructureControls2["CONTAINER_GAP"] = "structureContainerGap";
    StructureControls2["CONTAINER_INVERSION"] = "structureContainerInversion";
    StructureControls2["DYNAMIC_CONTAINERS"] = "structureDynamicContainers";
    StructureControls2["EXTERNAL_INDENTS"] = "structureExternalIndents";
    StructureControls2["IMAGE_CONTAINER"] = "structureImageContainerForm";
    StructureControls2["INTERNAL_INDENTS"] = "structureInternalIndents";
    StructureControls2["ITEM"] = "structureItem";
    StructureControls2["MIME_TYPE"] = "structureMimeType";
    StructureControls2["BORDER_FORM"] = "structureBorderForm";
  })(StructureControls || (BuiltInControlTypes.StructureControls = StructureControls = {}));
  var ContainerControls;
  (function(ContainerControls2) {
    ContainerControls2["BACKGROUND_COLOR"] = "containerBackgroundColorForm";
    ContainerControls2["BORDER_FORM"] = "containerBorderForm";
    ContainerControls2["BORDER_RADIUS"] = "containerBorderRadiusForm";
    ContainerControls2["EXTERNAL_INDENTS"] = "containerExternalIndentsForm";
    ContainerControls2["IMAGE_CONTAINER"] = "containerImageContainerForm";
    ContainerControls2["MIME_TYPE"] = "containerMimeTypeForm";
    ContainerControls2["DISPLAY_CONDITIONS"] = "displayConditions";
  })(ContainerControls || (BuiltInControlTypes.ContainerControls = ContainerControls = {}));
  var MessageSettingsControls;
  (function(MessageSettingsControls2) {
    MessageSettingsControls2["DISPLAY_OFFER_BADGE"] = "displayOfferBadgeForm";
    MessageSettingsControls2["DISPLAY_PROMO_CODE_BADGE"] = "displayPromoCodeBadgeForm";
    MessageSettingsControls2["END_DISCOUNT_OFFER"] = "endDiscountOfferForm";
    MessageSettingsControls2["GMAIL_PROMOTIONS_TAB"] = "gmailPromotionsTabForm";
    MessageSettingsControls2["HIDDEN_PRE_HEADER"] = "hiddenPreHeaderForm";
    MessageSettingsControls2["PROMO_IMAGE_CAROUSEL"] = "promoImageCarouselForm";
    MessageSettingsControls2["INCLUDE_SENDER_LOGO"] = "includeSenderLogoForm";
    MessageSettingsControls2["SUBJECT_TITLE"] = "subjectTitleForm";
    MessageSettingsControls2["UTM_PARAMETERS"] = "utmParametersForm";
    MessageSettingsControls2["UTM_PARAMETERS_CAMPAIGN"] = "utmParameterCampaignForm";
    MessageSettingsControls2["UTM_PARAMETERS_CUSTOM"] = "utmParametersCustomForm";
    MessageSettingsControls2["UTM_PARAMETERS_CUSTOM_ITEM"] = "utmParametersCustomItemForm";
  })(MessageSettingsControls || (BuiltInControlTypes.MessageSettingsControls = MessageSettingsControls = {}));
  var GeneralStylesControls;
  (function(GeneralStylesControls2) {
    GeneralStylesControls2["BUTTONS_ADJUST_TO_WIDTH_CONTAINER"] = "buttonsAdjustToWidthFormContainer";
    GeneralStylesControls2["BUTTONS_BORDER"] = "buttonsBorder";
    GeneralStylesControls2["BUTTONS_BORDER_RADIUS_CONTAINER"] = "buttonsBorderRadiusContainer";
    GeneralStylesControls2["BUTTONS_COLOR_CONTAINER"] = "buttonsColorContainer";
    GeneralStylesControls2["BUTTONS_FONT_FAMILY_CONTAINER"] = "buttonsFontFamilyContainer";
    GeneralStylesControls2["BUTTONS_FONT_SIZE_CONTAINER"] = "buttonsFontSizeFormContainer";
    GeneralStylesControls2["BUTTONS_HOVERED_BUTTON_STYLE"] = "buttonsHoveredButtonStyleForm";
    GeneralStylesControls2["BUTTONS_INTERNAL_INDENTS_CONTAINER"] = "buttonsInternalIndentsContainer";
    GeneralStylesControls2["BUTTONS_LETTER_SPACING_CONTAINER"] = "buttonsLetterSpacingContainer";
    GeneralStylesControls2["BUTTONS_OUTLOOK_SUPPORT_CONTAINER"] = "buttonsOutlookSupportContainer";
    GeneralStylesControls2["BUTTONS_TEXT_STYLE_AND_COLOR_CONTAINER"] = "buttonsTextStyleAndColorFormContainer";
    GeneralStylesControls2["DEFAULT_STRUCTURE_INTERNAL_INDENTS"] = "defaultStructureInternalIndents";
    GeneralStylesControls2["GENERAL_BACKGROUND_COLOR_CONTAINER"] = "generalBackgroundColorContainer";
    GeneralStylesControls2["GENERAL_IMAGE_CONTAINER"] = "generalImageContainer";
    GeneralStylesControls2["HEADINGS_FONT_FAMILY_CONTAINER"] = "headingsFontFamilyContainer";
    GeneralStylesControls2["HEADINGS_H1_CONTROLS_CONTAINER"] = "headingH1controlsContainer";
    GeneralStylesControls2["HEADINGS_H2_CONTROLS_CONTAINER"] = "headingH2controlsContainer";
    GeneralStylesControls2["HEADINGS_H3_CONTROLS_CONTAINER"] = "headingH3controlsContainer";
    GeneralStylesControls2["HEADINGS_H4_CONTROLS_CONTAINER"] = "headingH4controlsContainer";
    GeneralStylesControls2["HEADINGS_H5_CONTROLS_CONTAINER"] = "headingH5controlsContainer";
    GeneralStylesControls2["HEADINGS_H6_CONTROLS_CONTAINER"] = "headingH6controlsContainer";
    GeneralStylesControls2["HEADINGS_LETTER_SPACING_CONTAINER"] = "headingsLetterSpacingFormContainer";
    GeneralStylesControls2["HEADINGS_PARAGRAPH_BOTTOM_MARGIN"] = "headingsParagraphBottomMarginForm";
    GeneralStylesControls2["HEADINGS_TYPES_BUTTON_BAR"] = "headingsTypesButtonBarForm";
    GeneralStylesControls2["LISTS_STYLES"] = "listsStyles";
    GeneralStylesControls2["MARGIN_AROUND_MESSAGE"] = "marginAroundMessage";
    GeneralStylesControls2["MESSAGE_ALIGNMENT"] = "messageAlignment";
    GeneralStylesControls2["MESSAGE_CONTENT_WIDTH"] = "messageContentWidth";
    GeneralStylesControls2["RESPONSIVE_DESIGN"] = "responsiveDesign";
    GeneralStylesControls2["RIGHT_TO_LEFT_CONTAINER"] = "rightToLeftContainer";
    GeneralStylesControls2["STRIPES_CONTENT_CONTROLS_CONTAINER"] = "stripesContentControlsContainer";
    GeneralStylesControls2["STRIPES_FONT_FAMILY_CONTAINER"] = "stripesFontFamilyFormContainer";
    GeneralStylesControls2["STRIPES_FOOTER_CONTROLS_CONTAINER"] = "stripesFooterControlsContainer";
    GeneralStylesControls2["STRIPES_HEADER_CONTROLS_CONTAINER"] = "stripesHeaderControlsContainer";
    GeneralStylesControls2["STRIPES_INFO_AREA_CONTROLS_CONTAINER"] = "stripesInfoAreaControlsContainer";
    GeneralStylesControls2["STRIPES_LETTER_SPACING_CONTAINER"] = "stripesLetterSpacingFormContainer";
    GeneralStylesControls2["STRIPES_LINE_HEIGHT_CONTAINER"] = "stripesLineHeightFormContainer";
    GeneralStylesControls2["STRIPE_TYPES_BUTTON_BAR"] = "stripeTypesButtonBarForm";
    GeneralStylesControls2["UNDERLINE_LINKS_CONTAINER"] = "underlineLinksContainer";
  })(GeneralStylesControls || (BuiltInControlTypes.GeneralStylesControls = GeneralStylesControls = {}));
  BuiltInControlTypes.BuiltInControlTypes = (_a = {}, _a[BlockType_1.BlockType.BLOCK_BANNER] = BannerControls, _a[BlockType_1.BlockType.BLOCK_BUTTON] = ButtonControls, _a[BlockType_1.BlockType.BLOCK_TEXT] = TextControls, _a[BlockType_1.BlockType.BLOCK_VIDEO] = VideoControls, _a[BlockType_1.BlockType.BLOCK_TIMER] = TimerControls, _a[BlockType_1.BlockType.BLOCK_SPACER] = SpacerControls, _a[BlockType_1.BlockType.BLOCK_IMAGE] = ImageControls, _a[BlockType_1.BlockType.BLOCK_HTML] = HTMLControls, _a[BlockType_1.BlockType.BLOCK_SOCIAL] = SocialControls, _a[BlockType_1.BlockType.BLOCK_MENU] = MenuControls, _a[BlockType_1.BlockType.BLOCK_AMP_FORM] = AmpFormControls, _a[BlockType_1.BlockType.BLOCK_AMP_ACCORDION] = AccordionControls, _a[BlockType_1.BlockType.BLOCK_AMP_CAROUSEL] = CarouselControls, _a[BlockType_1.BlockType.STRIPE] = StripeControls, _a[BlockType_1.BlockType.STRUCTURE] = StructureControls, _a[BlockType_1.BlockType.CONTAINER] = ContainerControls, _a[BlockType_1.BlockType.CUSTOM_BLOCK_LINK] = CustomLinkControls, _a[BlockType_1.BlockType.CUSTOM_BLOCK_IMAGE] = CustomImageControls, _a[BlockType_1.BlockType.CUSTOM_BLOCK_TEXT] = CustomTextControls, _a.BANNER_CHILD = BannerChildControls, _a.MESSAGE_SETTINGS = MessageSettingsControls, _a.GENERAL_STYLES = GeneralStylesControls, _a.GENERAL = GeneralControls, _a);
  return BuiltInControlTypes;
}
var ContextActionType = {};
var hasRequiredContextActionType;
function requireContextActionType() {
  if (hasRequiredContextActionType) return ContextActionType;
  hasRequiredContextActionType = 1;
  Object.defineProperty(ContextActionType, "__esModule", { value: true });
  ContextActionType.ContextActionType = void 0;
  var ContextActionType$1;
  (function(ContextActionType2) {
    ContextActionType2["SAVE_AS_MODULE"] = "saveAsModule";
    ContextActionType2["UPDATE_MODULE"] = "updateModule";
    ContextActionType2["IMPROVE_WITH_AI"] = "improveWithAI";
    ContextActionType2["MOVE"] = "move";
    ContextActionType2["COPY"] = "copy";
    ContextActionType2["REMOVE"] = "remove";
    ContextActionType2["CLEAR_CONTAINER"] = "clearContainer";
    ContextActionType2["REMOVE_CONTAINER"] = "removeContainer";
    ContextActionType2["EXTERNAL_DISPLAY_CONDITION"] = "externalDisplayCondition";
  })(ContextActionType$1 || (ContextActionType.ContextActionType = ContextActionType$1 = {}));
  return ContextActionType;
}
var EditorStatePropertyType = {};
var hasRequiredEditorStatePropertyType;
function requireEditorStatePropertyType() {
  if (hasRequiredEditorStatePropertyType) return EditorStatePropertyType;
  hasRequiredEditorStatePropertyType = 1;
  Object.defineProperty(EditorStatePropertyType, "__esModule", { value: true });
  EditorStatePropertyType.EditorStatePropertyType = void 0;
  var EditorStatePropertyType$1;
  (function(EditorStatePropertyType2) {
    EditorStatePropertyType2["previewDeviceMode"] = "previewDeviceMode";
  })(EditorStatePropertyType$1 || (EditorStatePropertyType.EditorStatePropertyType = EditorStatePropertyType$1 = {}));
  return EditorStatePropertyType;
}
var PanelPosition = {};
var hasRequiredPanelPosition;
function requirePanelPosition() {
  if (hasRequiredPanelPosition) return PanelPosition;
  hasRequiredPanelPosition = 1;
  Object.defineProperty(PanelPosition, "__esModule", { value: true });
  PanelPosition.PanelPosition = void 0;
  var PanelPosition$1;
  (function(PanelPosition2) {
    PanelPosition2["BLOCKS_SETTINGS"] = "BLOCKS_SETTINGS";
    PanelPosition2["SETTINGS_BLOCKS"] = "SETTINGS_BLOCKS";
  })(PanelPosition$1 || (PanelPosition.PanelPosition = PanelPosition$1 = {}));
  return PanelPosition;
}
var PreviewDeviceMode = {};
var hasRequiredPreviewDeviceMode;
function requirePreviewDeviceMode() {
  if (hasRequiredPreviewDeviceMode) return PreviewDeviceMode;
  hasRequiredPreviewDeviceMode = 1;
  Object.defineProperty(PreviewDeviceMode, "__esModule", { value: true });
  PreviewDeviceMode.PreviewDeviceMode = void 0;
  var PreviewDeviceMode$1;
  (function(PreviewDeviceMode2) {
    PreviewDeviceMode2["DESKTOP"] = "DESKTOP";
    PreviewDeviceMode2["MOBILE"] = "MOBILE";
  })(PreviewDeviceMode$1 || (PreviewDeviceMode.PreviewDeviceMode = PreviewDeviceMode$1 = {}));
  return PreviewDeviceMode;
}
var SettingsTab = {};
var hasRequiredSettingsTab;
function requireSettingsTab() {
  if (hasRequiredSettingsTab) return SettingsTab;
  hasRequiredSettingsTab = 1;
  Object.defineProperty(SettingsTab, "__esModule", { value: true });
  SettingsTab.SettingsTab = void 0;
  var SettingsTab$1;
  (function(SettingsTab2) {
    SettingsTab2["SETTINGS"] = "settings";
    SettingsTab2["STYLES"] = "styles";
    SettingsTab2["DATA"] = "data";
  })(SettingsTab$1 || (SettingsTab.SettingsTab = SettingsTab$1 = {}));
  return SettingsTab;
}
var UIElementsAttributes = {};
var hasRequiredUIElementsAttributes;
function requireUIElementsAttributes() {
  if (hasRequiredUIElementsAttributes) return UIElementsAttributes;
  hasRequiredUIElementsAttributes = 1;
  var __assign = UIElementsAttributes && UIElementsAttributes.__assign || function() {
    __assign = Object.assign || function(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  Object.defineProperty(UIElementsAttributes, "__esModule", { value: true });
  UIElementsAttributes.UEAttr = void 0;
  var UIElementAttributes = {
    name: "name",
    disabled: "disabled"
  };
  var buttonAttributes = __assign(__assign({}, UIElementAttributes), { caption: "caption" });
  var checkBoxAttributes = __assign(__assign({}, UIElementAttributes), { caption: "caption" });
  var counterAttributes = __assign(__assign({}, UIElementAttributes), { minValue: "min-value", maxValue: "max-value", step: "step" });
  var datePickerAttributes = __assign(__assign({}, UIElementAttributes), { placeholder: "placeholder", minDate: "min-date" });
  var labelAttributes = __assign(__assign({}, UIElementAttributes), { text: "text", hint: "hint" });
  var messageAttributes = __assign(__assign({}, UIElementAttributes), { type: "type" });
  var radioButtonsAttributes = __assign(__assign({}, UIElementAttributes), { buttons: "buttons" });
  var selectAttributes = __assign(__assign({}, UIElementAttributes), { searchable: "searchable", multiSelect: "multi-select", placeholder: "placeholder", items: "items" });
  var fontFamilySelectAttributes = __assign(__assign({}, selectAttributes), { addCustomFontOption: "add-custom-font-option" });
  var selectItemAttributes = __assign(__assign({}, UIElementAttributes), { text: "text", value: "value" });
  var checkItemAttributes = __assign(__assign({}, UIElementAttributes), { text: "text", hint: "hint", icon: "icon", value: "value" });
  var checkButtonsAttributes = __assign(__assign({}, UIElementAttributes), { buttons: "buttons" });
  var radioItemAttributes = __assign(__assign({}, UIElementAttributes), { text: "text", hint: "hint", icon: "icon", value: "value" });
  var textAttributes = __assign(__assign({}, UIElementAttributes), { placeholder: "placeholder" });
  var textAreaAttributes = __assign(__assign({}, UIElementAttributes), { resizable: "resizable", placeholder: "placeholder" });
  var iconAttributes = __assign(__assign({}, UIElementAttributes), { img: "img", src: "src", title: "title", width: "width", height: "height", imageClass: "image-class", hint: "hint", disabled: "disabled", isActive: "is-active", visibility: "visibility", transform: "transform" });
  var nestedControlAttributes = __assign(__assign({}, UIElementAttributes), { controlId: "control-id" });
  UIElementsAttributes.UEAttr = {
    DEFAULT: UIElementAttributes,
    BUTTON: buttonAttributes,
    CHECKBOX: checkBoxAttributes,
    CHECK_BUTTONS: checkButtonsAttributes,
    COLOR: UIElementAttributes,
    COUNTER: counterAttributes,
    DATEPICKER: datePickerAttributes,
    LABEL: labelAttributes,
    MESSAGE: messageAttributes,
    RADIO_BUTTONS: radioButtonsAttributes,
    SELECTPICKER: selectAttributes,
    FONT_FAMILY_SELECT: fontFamilySelectAttributes,
    SWITCHER: UIElementAttributes,
    TEXT: textAttributes,
    TEXTAREA: textAreaAttributes,
    ICON: iconAttributes,
    CHECK_ITEM: checkItemAttributes,
    SELECT_ITEM: selectItemAttributes,
    RADIO_ITEM: radioItemAttributes,
    NESTED_CONTROL: nestedControlAttributes
  };
  return UIElementsAttributes;
}
var UIElementType = {};
var hasRequiredUIElementType;
function requireUIElementType() {
  if (hasRequiredUIElementType) return UIElementType;
  hasRequiredUIElementType = 1;
  Object.defineProperty(UIElementType, "__esModule", { value: true });
  UIElementType.UIElementType = void 0;
  var UIElementType$1;
  (function(UIElementType2) {
    UIElementType2["BUTTON"] = "UE-BUTTON";
    UIElementType2["CHECKBOX"] = "UE-CHECKBOX";
    UIElementType2["CHECK_BUTTONS"] = "UE-CHECK-BUTTONS";
    UIElementType2["COLOR"] = "UE-COLOR";
    UIElementType2["COUNTER"] = "UE-COUNTER";
    UIElementType2["DATEPICKER"] = "UE-DATEPICKER";
    UIElementType2["LABEL"] = "UE-LABEL";
    UIElementType2["MESSAGE"] = "UE-MESSAGE";
    UIElementType2["RADIO_BUTTONS"] = "UE-RADIO-BUTTONS";
    UIElementType2["SELECTPICKER"] = "UE-SELECT";
    UIElementType2["SWITCHER"] = "UE-SWITCHER";
    UIElementType2["TEXT"] = "UE-TEXT";
    UIElementType2["TEXTAREA"] = "UE-TEXTAREA";
    UIElementType2["CHECK_ITEM"] = "UE-CHECK-ITEM";
    UIElementType2["RADIO_ITEM"] = "UE-RADIO-ITEM";
    UIElementType2["SELECT_ITEM"] = "UE-SELECT-ITEM";
    UIElementType2["ICON"] = "UE-ICON";
    UIElementType2["MERGETAGS"] = "UE-MERGETAGS";
    UIElementType2["FONT_FAMILY_SELECT"] = "UE-FONT-FAMILY-SELECT";
    UIElementType2["NESTED_CONTROL"] = "UE-NESTED-CONTROL";
  })(UIElementType$1 || (UIElementType.UIElementType = UIElementType$1 = {}));
  return UIElementType;
}
var BackgroundColorBuiltInControl = {};
var BuiltInControl = {};
var hasRequiredBuiltInControl;
function requireBuiltInControl() {
  if (hasRequiredBuiltInControl) return BuiltInControl;
  hasRequiredBuiltInControl = 1;
  Object.defineProperty(BuiltInControl, "__esModule", { value: true });
  BuiltInControl.BuiltInControl = void 0;
  var BuiltInControl$1 = (
    /** @class */
    function() {
      function BuiltInControl2() {
      }
      BuiltInControl2.prototype.getTargetNodes = function(root) {
        return [root];
      };
      BuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      BuiltInControl2.prototype.getModificationDescription = function() {
        return void 0;
      };
      BuiltInControl2.prototype.getAdditionalModifications = function(_root) {
        return void 0;
      };
      return BuiltInControl2;
    }()
  );
  BuiltInControl.BuiltInControl = BuiltInControl$1;
  return BuiltInControl;
}
var hasRequiredBackgroundColorBuiltInControl;
function requireBackgroundColorBuiltInControl() {
  if (hasRequiredBackgroundColorBuiltInControl) return BackgroundColorBuiltInControl;
  hasRequiredBackgroundColorBuiltInControl = 1;
  var __extends = BackgroundColorBuiltInControl && BackgroundColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(BackgroundColorBuiltInControl, "__esModule", { value: true });
  BackgroundColorBuiltInControl.BackgroundColorBuiltInControl = void 0;
  var BuiltInControl_1 = requireBuiltInControl();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var BackgroundColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(BackgroundColorBuiltInControl2, _super);
      function BackgroundColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      BackgroundColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.BACKGROUND_COLOR;
      };
      return BackgroundColorBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  BackgroundColorBuiltInControl.BackgroundColorBuiltInControl = BackgroundColorBuiltInControl$1;
  return BackgroundColorBuiltInControl;
}
var BackgroundImageBuiltInControl = {};
var hasRequiredBackgroundImageBuiltInControl;
function requireBackgroundImageBuiltInControl() {
  if (hasRequiredBackgroundImageBuiltInControl) return BackgroundImageBuiltInControl;
  hasRequiredBackgroundImageBuiltInControl = 1;
  var __extends = BackgroundImageBuiltInControl && BackgroundImageBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(BackgroundImageBuiltInControl, "__esModule", { value: true });
  BackgroundImageBuiltInControl.BackgroundImageBuiltInControl = void 0;
  var BuiltInControl_1 = requireBuiltInControl();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var BackgroundImageBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(BackgroundImageBuiltInControl2, _super);
      function BackgroundImageBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      BackgroundImageBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.BACKGROUND_IMAGE;
      };
      BackgroundImageBuiltInControl2.prototype.getTargetNodes = function(root) {
        return [root];
      };
      BackgroundImageBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return BackgroundImageBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  BackgroundImageBuiltInControl.BackgroundImageBuiltInControl = BackgroundImageBuiltInControl$1;
  return BackgroundImageBuiltInControl;
}
var BlockPaddingsBuiltInControl = {};
var hasRequiredBlockPaddingsBuiltInControl;
function requireBlockPaddingsBuiltInControl() {
  if (hasRequiredBlockPaddingsBuiltInControl) return BlockPaddingsBuiltInControl;
  hasRequiredBlockPaddingsBuiltInControl = 1;
  var __extends = BlockPaddingsBuiltInControl && BlockPaddingsBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(BlockPaddingsBuiltInControl, "__esModule", { value: true });
  BlockPaddingsBuiltInControl.BlockPaddingsBuiltInControl = void 0;
  var BuiltInControl_1 = requireBuiltInControl();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var BlockPaddingsBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(BlockPaddingsBuiltInControl2, _super);
      function BlockPaddingsBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      BlockPaddingsBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.BLOCK_PADDINGS;
      };
      BlockPaddingsBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return BlockPaddingsBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  BlockPaddingsBuiltInControl.BlockPaddingsBuiltInControl = BlockPaddingsBuiltInControl$1;
  return BlockPaddingsBuiltInControl;
}
var ButtonBorderRadiusBuiltInControl = {};
var ButtonBuiltInControl = {};
var BlockName = {};
var hasRequiredBlockName;
function requireBlockName() {
  if (hasRequiredBlockName) return BlockName;
  hasRequiredBlockName = 1;
  Object.defineProperty(BlockName, "__esModule", { value: true });
  BlockName.ESD_BLOCK_STRUCTURE = BlockName.ESD_BLOCK_IMAGE = BlockName.ESD_BLOCK_TEXT = BlockName.ESD_BLOCK_BUTTON = void 0;
  BlockName.ESD_BLOCK_BUTTON = "esd-block-button";
  BlockName.ESD_BLOCK_TEXT = "esd-block-text";
  BlockName.ESD_BLOCK_IMAGE = "esd-block-image";
  BlockName.ESD_BLOCK_STRUCTURE = "esd-structure";
  return BlockName;
}
var hasRequiredButtonBuiltInControl;
function requireButtonBuiltInControl() {
  if (hasRequiredButtonBuiltInControl) return ButtonBuiltInControl;
  hasRequiredButtonBuiltInControl = 1;
  var __extends = ButtonBuiltInControl && ButtonBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonBuiltInControl, "__esModule", { value: true });
  ButtonBuiltInControl.ButtonBuiltInControl = void 0;
  var BlockName_1 = requireBlockName();
  var BuiltInControl_1 = requireBuiltInControl();
  var ButtonBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonBuiltInControl2, _super);
      function ButtonBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonBuiltInControl2.prototype.getTargetNodes = function(root) {
        var buttons = root.querySelectorAll(".".concat(BlockName_1.ESD_BLOCK_BUTTON));
        return buttons.length ? buttons : [root];
      };
      return ButtonBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  ButtonBuiltInControl.ButtonBuiltInControl = ButtonBuiltInControl$1;
  return ButtonBuiltInControl;
}
var hasRequiredButtonBorderRadiusBuiltInControl;
function requireButtonBorderRadiusBuiltInControl() {
  if (hasRequiredButtonBorderRadiusBuiltInControl) return ButtonBorderRadiusBuiltInControl;
  hasRequiredButtonBorderRadiusBuiltInControl = 1;
  var __extends = ButtonBorderRadiusBuiltInControl && ButtonBorderRadiusBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonBorderRadiusBuiltInControl, "__esModule", { value: true });
  ButtonBorderRadiusBuiltInControl.ButtonBorderRadiusBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonBorderRadiusBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonBorderRadiusBuiltInControl2, _super);
      function ButtonBorderRadiusBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonBorderRadiusBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].BORDER_RADIUS;
      };
      ButtonBorderRadiusBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return ButtonBorderRadiusBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonBorderRadiusBuiltInControl.ButtonBorderRadiusBuiltInControl = ButtonBorderRadiusBuiltInControl$1;
  return ButtonBorderRadiusBuiltInControl;
}
var ButtonAlignBuiltInControl = {};
var hasRequiredButtonAlignBuiltInControl;
function requireButtonAlignBuiltInControl() {
  if (hasRequiredButtonAlignBuiltInControl) return ButtonAlignBuiltInControl;
  hasRequiredButtonAlignBuiltInControl = 1;
  var __extends = ButtonAlignBuiltInControl && ButtonAlignBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonAlignBuiltInControl, "__esModule", { value: true });
  ButtonAlignBuiltInControl.ButtonAlignBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonAlignBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonAlignBuiltInControl2, _super);
      function ButtonAlignBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonAlignBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].ALIGNMENT;
      };
      ButtonAlignBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return ButtonAlignBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonAlignBuiltInControl.ButtonAlignBuiltInControl = ButtonAlignBuiltInControl$1;
  return ButtonAlignBuiltInControl;
}
var ButtonBorderBuiltInControl = {};
var hasRequiredButtonBorderBuiltInControl;
function requireButtonBorderBuiltInControl() {
  if (hasRequiredButtonBorderBuiltInControl) return ButtonBorderBuiltInControl;
  hasRequiredButtonBorderBuiltInControl = 1;
  var __extends = ButtonBorderBuiltInControl && ButtonBorderBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonBorderBuiltInControl, "__esModule", { value: true });
  ButtonBorderBuiltInControl.ButtonBorderBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonBorderBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonBorderBuiltInControl2, _super);
      function ButtonBorderBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonBorderBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].BORDER;
      };
      ButtonBorderBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return ButtonBorderBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonBorderBuiltInControl.ButtonBorderBuiltInControl = ButtonBorderBuiltInControl$1;
  return ButtonBorderBuiltInControl;
}
var ButtonColorBuiltInControl = {};
var hasRequiredButtonColorBuiltInControl;
function requireButtonColorBuiltInControl() {
  if (hasRequiredButtonColorBuiltInControl) return ButtonColorBuiltInControl;
  hasRequiredButtonColorBuiltInControl = 1;
  var __extends = ButtonColorBuiltInControl && ButtonColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonColorBuiltInControl, "__esModule", { value: true });
  ButtonColorBuiltInControl.ButtonColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonColorBuiltInControl2, _super);
      function ButtonColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].COLOR;
      };
      return ButtonColorBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonColorBuiltInControl.ButtonColorBuiltInControl = ButtonColorBuiltInControl$1;
  return ButtonColorBuiltInControl;
}
var ButtonFontColorBuiltInControl = {};
var hasRequiredButtonFontColorBuiltInControl;
function requireButtonFontColorBuiltInControl() {
  if (hasRequiredButtonFontColorBuiltInControl) return ButtonFontColorBuiltInControl;
  hasRequiredButtonFontColorBuiltInControl = 1;
  var __extends = ButtonFontColorBuiltInControl && ButtonFontColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonFontColorBuiltInControl, "__esModule", { value: true });
  ButtonFontColorBuiltInControl.ButtonFontColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonFontColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonFontColorBuiltInControl2, _super);
      function ButtonFontColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonFontColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].FONT_COLOR;
      };
      return ButtonFontColorBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonFontColorBuiltInControl.ButtonFontColorBuiltInControl = ButtonFontColorBuiltInControl$1;
  return ButtonFontColorBuiltInControl;
}
var ButtonHoverBorderColorBuiltInControl = {};
var hasRequiredButtonHoverBorderColorBuiltInControl;
function requireButtonHoverBorderColorBuiltInControl() {
  if (hasRequiredButtonHoverBorderColorBuiltInControl) return ButtonHoverBorderColorBuiltInControl;
  hasRequiredButtonHoverBorderColorBuiltInControl = 1;
  var __extends = ButtonHoverBorderColorBuiltInControl && ButtonHoverBorderColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonHoverBorderColorBuiltInControl, "__esModule", { value: true });
  ButtonHoverBorderColorBuiltInControl.ButtonHoverBorderColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonHoverBorderColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonHoverBorderColorBuiltInControl2, _super);
      function ButtonHoverBorderColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonHoverBorderColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].HOVERED_BORDER_COLOR;
      };
      return ButtonHoverBorderColorBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonHoverBorderColorBuiltInControl.ButtonHoverBorderColorBuiltInControl = ButtonHoverBorderColorBuiltInControl$1;
  return ButtonHoverBorderColorBuiltInControl;
}
var ButtonHoverColorBuiltInControl = {};
var hasRequiredButtonHoverColorBuiltInControl;
function requireButtonHoverColorBuiltInControl() {
  if (hasRequiredButtonHoverColorBuiltInControl) return ButtonHoverColorBuiltInControl;
  hasRequiredButtonHoverColorBuiltInControl = 1;
  var __extends = ButtonHoverColorBuiltInControl && ButtonHoverColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonHoverColorBuiltInControl, "__esModule", { value: true });
  ButtonHoverColorBuiltInControl.ButtonHoverColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonHoverColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonHoverColorBuiltInControl2, _super);
      function ButtonHoverColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonHoverColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].HOVERED_COLOR;
      };
      ButtonHoverColorBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return ButtonHoverColorBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonHoverColorBuiltInControl.ButtonHoverColorBuiltInControl = ButtonHoverColorBuiltInControl$1;
  return ButtonHoverColorBuiltInControl;
}
var ButtonHoverTextColorBuiltInControl = {};
var hasRequiredButtonHoverTextColorBuiltInControl;
function requireButtonHoverTextColorBuiltInControl() {
  if (hasRequiredButtonHoverTextColorBuiltInControl) return ButtonHoverTextColorBuiltInControl;
  hasRequiredButtonHoverTextColorBuiltInControl = 1;
  var __extends = ButtonHoverTextColorBuiltInControl && ButtonHoverTextColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonHoverTextColorBuiltInControl, "__esModule", { value: true });
  ButtonHoverTextColorBuiltInControl.ButtonHoverTextColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonHoverTextColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonHoverTextColorBuiltInControl2, _super);
      function ButtonHoverTextColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonHoverTextColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].HOVERED_TEXT_COLOR;
      };
      return ButtonHoverTextColorBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonHoverTextColorBuiltInControl.ButtonHoverTextColorBuiltInControl = ButtonHoverTextColorBuiltInControl$1;
  return ButtonHoverTextColorBuiltInControl;
}
var ButtonInternalIndentsBuiltInControl = {};
var hasRequiredButtonInternalIndentsBuiltInControl;
function requireButtonInternalIndentsBuiltInControl() {
  if (hasRequiredButtonInternalIndentsBuiltInControl) return ButtonInternalIndentsBuiltInControl;
  hasRequiredButtonInternalIndentsBuiltInControl = 1;
  var __extends = ButtonInternalIndentsBuiltInControl && ButtonInternalIndentsBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonInternalIndentsBuiltInControl, "__esModule", { value: true });
  ButtonInternalIndentsBuiltInControl.ButtonInternalIndentsBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonInternalIndentsBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonInternalIndentsBuiltInControl2, _super);
      function ButtonInternalIndentsBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonInternalIndentsBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].INTERNAL_INDENT;
      };
      ButtonInternalIndentsBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return ButtonInternalIndentsBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonInternalIndentsBuiltInControl.ButtonInternalIndentsBuiltInControl = ButtonInternalIndentsBuiltInControl$1;
  return ButtonInternalIndentsBuiltInControl;
}
var ButtonTextBuiltInControl = {};
var hasRequiredButtonTextBuiltInControl;
function requireButtonTextBuiltInControl() {
  if (hasRequiredButtonTextBuiltInControl) return ButtonTextBuiltInControl;
  hasRequiredButtonTextBuiltInControl = 1;
  var __extends = ButtonTextBuiltInControl && ButtonTextBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(ButtonTextBuiltInControl, "__esModule", { value: true });
  ButtonTextBuiltInControl.ButtonTextBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var ButtonBuiltInControl_1 = requireButtonBuiltInControl();
  var ButtonTextBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(ButtonTextBuiltInControl2, _super);
      function ButtonTextBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      ButtonTextBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_BUTTON].TEXT;
      };
      return ButtonTextBuiltInControl2;
    }(ButtonBuiltInControl_1.ButtonBuiltInControl)
  );
  ButtonTextBuiltInControl.ButtonTextBuiltInControl = ButtonTextBuiltInControl$1;
  return ButtonTextBuiltInControl;
}
var Control = {};
var hasRequiredControl;
function requireControl() {
  if (hasRequiredControl) return Control;
  hasRequiredControl = 1;
  Object.defineProperty(Control, "__esModule", { value: true });
  Control.Control = void 0;
  var Control$1 = (
    /** @class */
    function() {
      function Control2() {
      }
      Control2.prototype.onRender = function() {
      };
      Control2.prototype.onDestroy = function() {
      };
      return Control2;
    }()
  );
  Control.Control = Control$1;
  return Control;
}
var SettingsPanelRegistry = {};
var hasRequiredSettingsPanelRegistry;
function requireSettingsPanelRegistry() {
  if (hasRequiredSettingsPanelRegistry) return SettingsPanelRegistry;
  hasRequiredSettingsPanelRegistry = 1;
  Object.defineProperty(SettingsPanelRegistry, "__esModule", { value: true });
  SettingsPanelRegistry.SettingsPanelRegistry = void 0;
  var SettingsPanelRegistry$1 = (
    /** @class */
    /* @__PURE__ */ function() {
      function SettingsPanelRegistry2() {
      }
      return SettingsPanelRegistry2;
    }()
  );
  SettingsPanelRegistry.SettingsPanelRegistry = SettingsPanelRegistry$1;
  return SettingsPanelRegistry;
}
var SettingsPanelTab = {};
var hasRequiredSettingsPanelTab;
function requireSettingsPanelTab() {
  if (hasRequiredSettingsPanelTab) return SettingsPanelTab;
  hasRequiredSettingsPanelTab = 1;
  Object.defineProperty(SettingsPanelTab, "__esModule", { value: true });
  SettingsPanelTab.SettingsPanelTab = void 0;
  var SettingsPanelTab$1 = (
    /** @class */
    function() {
      function SettingsPanelTab2(tabId, controlsIds) {
        this.tabId = tabId;
        this.controlsIds = controlsIds;
      }
      SettingsPanelTab2.prototype.getTabId = function() {
        return this.tabId;
      };
      SettingsPanelTab2.prototype.getLabel = function() {
        return this.label;
      };
      SettingsPanelTab2.prototype.getControlsIds = function() {
        return this.controlsIds;
      };
      SettingsPanelTab2.prototype.withLabel = function(label) {
        this.label = label;
        return this;
      };
      SettingsPanelTab2.prototype.addControl = function(controlId, position) {
        if (position < 0) {
          this.controlsIds.unshift(controlId);
        } else if (position > this.controlsIds.length) {
          this.controlsIds.push(controlId);
        } else {
          this.controlsIds.splice(position, 0, controlId);
        }
        return this;
      };
      SettingsPanelTab2.prototype.deleteControl = function(controlId) {
        var index = this.controlsIds.indexOf(controlId);
        if (index !== -1) {
          this.controlsIds.splice(index, 1);
        }
      };
      return SettingsPanelTab2;
    }()
  );
  SettingsPanelTab.SettingsPanelTab = SettingsPanelTab$1;
  return SettingsPanelTab;
}
var StructureBorderBuiltInControl = {};
var StructureBuiltInControl = {};
var hasRequiredStructureBuiltInControl;
function requireStructureBuiltInControl() {
  if (hasRequiredStructureBuiltInControl) return StructureBuiltInControl;
  hasRequiredStructureBuiltInControl = 1;
  var __extends = StructureBuiltInControl && StructureBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(StructureBuiltInControl, "__esModule", { value: true });
  StructureBuiltInControl.StructureBuiltInControl = void 0;
  var BlockName_1 = requireBlockName();
  var BuiltInControl_1 = requireBuiltInControl();
  var StructureBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(StructureBuiltInControl2, _super);
      function StructureBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      StructureBuiltInControl2.prototype.getTargetNodes = function(root) {
        var structures = root.querySelectorAll(".".concat(BlockName_1.ESD_BLOCK_STRUCTURE));
        return structures.length ? structures : [root];
      };
      return StructureBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  StructureBuiltInControl.StructureBuiltInControl = StructureBuiltInControl$1;
  return StructureBuiltInControl;
}
var hasRequiredStructureBorderBuiltInControl;
function requireStructureBorderBuiltInControl() {
  if (hasRequiredStructureBorderBuiltInControl) return StructureBorderBuiltInControl;
  hasRequiredStructureBorderBuiltInControl = 1;
  var __extends = StructureBorderBuiltInControl && StructureBorderBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(StructureBorderBuiltInControl, "__esModule", { value: true });
  StructureBorderBuiltInControl.StructureBorderBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var StructureBuiltInControl_1 = requireStructureBuiltInControl();
  var StructureBorderBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(StructureBorderBuiltInControl2, _super);
      function StructureBorderBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      StructureBorderBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.STRUCTURE].BORDER_FORM;
      };
      StructureBorderBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return StructureBorderBuiltInControl2;
    }(StructureBuiltInControl_1.StructureBuiltInControl)
  );
  StructureBorderBuiltInControl.StructureBorderBuiltInControl = StructureBorderBuiltInControl$1;
  return StructureBorderBuiltInControl;
}
var StructurePaddingsBuiltInControl = {};
var hasRequiredStructurePaddingsBuiltInControl;
function requireStructurePaddingsBuiltInControl() {
  if (hasRequiredStructurePaddingsBuiltInControl) return StructurePaddingsBuiltInControl;
  hasRequiredStructurePaddingsBuiltInControl = 1;
  var __extends = StructurePaddingsBuiltInControl && StructurePaddingsBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(StructurePaddingsBuiltInControl, "__esModule", { value: true });
  StructurePaddingsBuiltInControl.StructurePaddingsBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var StructureBuiltInControl_1 = requireStructureBuiltInControl();
  var StructurePaddingsBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(StructurePaddingsBuiltInControl2, _super);
      function StructurePaddingsBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      StructurePaddingsBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.STRUCTURE_PADDINGS;
      };
      StructurePaddingsBuiltInControl2.prototype.getLabels = function() {
        return void 0;
      };
      return StructurePaddingsBuiltInControl2;
    }(StructureBuiltInControl_1.StructureBuiltInControl)
  );
  StructurePaddingsBuiltInControl.StructurePaddingsBuiltInControl = StructurePaddingsBuiltInControl$1;
  return StructurePaddingsBuiltInControl;
}
var FontFamilyBuiltInControl = {};
var TextBuiltInControl = {};
var hasRequiredTextBuiltInControl;
function requireTextBuiltInControl() {
  if (hasRequiredTextBuiltInControl) return TextBuiltInControl;
  hasRequiredTextBuiltInControl = 1;
  var __extends = TextBuiltInControl && TextBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(TextBuiltInControl, "__esModule", { value: true });
  TextBuiltInControl.TextBuiltInControl = void 0;
  var BlockName_1 = requireBlockName();
  var BuiltInControl_1 = requireBuiltInControl();
  var TextBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(TextBuiltInControl2, _super);
      function TextBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TextBuiltInControl2.prototype.getTargetNodes = function(root) {
        var texts = root.querySelectorAll(".".concat(BlockName_1.ESD_BLOCK_TEXT));
        return texts.length ? texts : [root];
      };
      return TextBuiltInControl2;
    }(BuiltInControl_1.BuiltInControl)
  );
  TextBuiltInControl.TextBuiltInControl = TextBuiltInControl$1;
  return TextBuiltInControl;
}
var hasRequiredFontFamilyBuiltInControl;
function requireFontFamilyBuiltInControl() {
  if (hasRequiredFontFamilyBuiltInControl) return FontFamilyBuiltInControl;
  hasRequiredFontFamilyBuiltInControl = 1;
  var __extends = FontFamilyBuiltInControl && FontFamilyBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(FontFamilyBuiltInControl, "__esModule", { value: true });
  FontFamilyBuiltInControl.FontFamilyBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var FontFamilyBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(FontFamilyBuiltInControl2, _super);
      function FontFamilyBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      FontFamilyBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.FONT_FAMILY;
      };
      return FontFamilyBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  FontFamilyBuiltInControl.FontFamilyBuiltInControl = FontFamilyBuiltInControl$1;
  return FontFamilyBuiltInControl;
}
var TextLineSpacingBuiltInControl = {};
var hasRequiredTextLineSpacingBuiltInControl;
function requireTextLineSpacingBuiltInControl() {
  if (hasRequiredTextLineSpacingBuiltInControl) return TextLineSpacingBuiltInControl;
  hasRequiredTextLineSpacingBuiltInControl = 1;
  var __extends = TextLineSpacingBuiltInControl && TextLineSpacingBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(TextLineSpacingBuiltInControl, "__esModule", { value: true });
  TextLineSpacingBuiltInControl.TextLineSpacingBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var TextLineSpacingBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(TextLineSpacingBuiltInControl2, _super);
      function TextLineSpacingBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TextLineSpacingBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.TEXT_LINE_SPACING;
      };
      return TextLineSpacingBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  TextLineSpacingBuiltInControl.TextLineSpacingBuiltInControl = TextLineSpacingBuiltInControl$1;
  return TextLineSpacingBuiltInControl;
}
var LinkColorBuiltInControl = {};
var hasRequiredLinkColorBuiltInControl;
function requireLinkColorBuiltInControl() {
  if (hasRequiredLinkColorBuiltInControl) return LinkColorBuiltInControl;
  hasRequiredLinkColorBuiltInControl = 1;
  var __extends = LinkColorBuiltInControl && LinkColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(LinkColorBuiltInControl, "__esModule", { value: true });
  LinkColorBuiltInControl.LinkColorBuiltInControl = void 0;
  var BlockType_1 = requireBlockType();
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var LinkColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(LinkColorBuiltInControl2, _super);
      function LinkColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      LinkColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes[BlockType_1.BlockType.BLOCK_TEXT].LINKS_COLOR;
      };
      return LinkColorBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  LinkColorBuiltInControl.LinkColorBuiltInControl = LinkColorBuiltInControl$1;
  return LinkColorBuiltInControl;
}
var TextColorBuiltInControl = {};
var hasRequiredTextColorBuiltInControl;
function requireTextColorBuiltInControl() {
  if (hasRequiredTextColorBuiltInControl) return TextColorBuiltInControl;
  hasRequiredTextColorBuiltInControl = 1;
  var __extends = TextColorBuiltInControl && TextColorBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(TextColorBuiltInControl, "__esModule", { value: true });
  TextColorBuiltInControl.TextColorBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var TextColorBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(TextColorBuiltInControl2, _super);
      function TextColorBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TextColorBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.TEXT_COLOR;
      };
      return TextColorBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  TextColorBuiltInControl.TextColorBuiltInControl = TextColorBuiltInControl$1;
  return TextColorBuiltInControl;
}
var TextSizeBuiltInControl = {};
var hasRequiredTextSizeBuiltInControl;
function requireTextSizeBuiltInControl() {
  if (hasRequiredTextSizeBuiltInControl) return TextSizeBuiltInControl;
  hasRequiredTextSizeBuiltInControl = 1;
  var __extends = TextSizeBuiltInControl && TextSizeBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(TextSizeBuiltInControl, "__esModule", { value: true });
  TextSizeBuiltInControl.TextSizeBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var TextSizeBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(TextSizeBuiltInControl2, _super);
      function TextSizeBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TextSizeBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.TEXT_SIZE;
      };
      return TextSizeBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  TextSizeBuiltInControl.TextSizeBuiltInControl = TextSizeBuiltInControl$1;
  return TextSizeBuiltInControl;
}
var TextStyleBuiltInControl = {};
var hasRequiredTextStyleBuiltInControl;
function requireTextStyleBuiltInControl() {
  if (hasRequiredTextStyleBuiltInControl) return TextStyleBuiltInControl;
  hasRequiredTextStyleBuiltInControl = 1;
  var __extends = TextStyleBuiltInControl && TextStyleBuiltInControl.__extends || /* @__PURE__ */ function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(TextStyleBuiltInControl, "__esModule", { value: true });
  TextStyleBuiltInControl.TextStyleBuiltInControl = void 0;
  var BuiltInControlTypes_1 = requireBuiltInControlTypes();
  var TextBuiltInControl_1 = requireTextBuiltInControl();
  var TextStyleBuiltInControl$1 = (
    /** @class */
    function(_super) {
      __extends(TextStyleBuiltInControl2, _super);
      function TextStyleBuiltInControl2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      TextStyleBuiltInControl2.prototype.getParentControlId = function() {
        return BuiltInControlTypes_1.BuiltInControlTypes.GENERAL.TEXT_STYLE;
      };
      return TextStyleBuiltInControl2;
    }(TextBuiltInControl_1.TextBuiltInControl)
  );
  TextStyleBuiltInControl.TextStyleBuiltInControl = TextStyleBuiltInControl$1;
  return TextStyleBuiltInControl;
}
var Extension = {};
var hasRequiredExtension;
function requireExtension() {
  if (hasRequiredExtension) return Extension;
  hasRequiredExtension = 1;
  Object.defineProperty(Extension, "__esModule", { value: true });
  Extension.Extension = void 0;
  var Extension$1 = (
    /** @class */
    function() {
      function Extension2(i18n, styles2, uiElements, uiElementTagRegistry, controls2, settingsPanelRegistry, contextActions, blocks, externalSmartElementsLibrary2, externalImageLibrary, previewStyles2, externalAiAssistant2, externalDisplayConditionsLibrary, externalVideoLibrary, blocksPanel) {
        if (uiElements === void 0) {
          uiElements = [];
        }
        if (controls2 === void 0) {
          controls2 = [];
        }
        if (contextActions === void 0) {
          contextActions = [];
        }
        if (blocks === void 0) {
          blocks = [];
        }
        this.uiElements = [];
        this.controls = [];
        this.contextActions = [];
        this.blocks = [];
        this.i18n = i18n;
        this.styles = styles2;
        this.previewStyles = previewStyles2;
        this.uiElements = uiElements;
        this.uiElementTagRegistry = uiElementTagRegistry;
        this.controls = controls2;
        this.settingsPanelRegistry = settingsPanelRegistry;
        this.contextActions = contextActions;
        this.blocks = blocks;
        this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
        this.externalImageLibrary = externalImageLibrary;
        this.externalAiAssistant = externalAiAssistant2;
        this.externalDisplayConditionsLibrary = externalDisplayConditionsLibrary;
        this.externalVideoLibrary = externalVideoLibrary;
        this.blocksPanel = blocksPanel;
        this.id = Math.random().toString(36).substring(2);
      }
      Extension2.prototype.getI18n = function() {
        return this.i18n;
      };
      Extension2.prototype.getStyles = function() {
        return this.styles;
      };
      Extension2.prototype.getPreviewStyles = function() {
        return this.previewStyles;
      };
      Extension2.prototype.getUiElements = function() {
        return this.uiElements;
      };
      Extension2.prototype.getUiElementTagRegistry = function() {
        return this.uiElementTagRegistry;
      };
      Extension2.prototype.getControls = function() {
        return this.controls;
      };
      Extension2.prototype.getSettingsPanelRegistry = function() {
        return this.settingsPanelRegistry;
      };
      Extension2.prototype.getContextActions = function() {
        return this.contextActions;
      };
      Extension2.prototype.getBlocks = function() {
        return this.blocks;
      };
      Extension2.prototype.getId = function() {
        return this.id;
      };
      Extension2.prototype.getExternalSmartElementsLibrary = function() {
        return this.externalSmartElementsLibrary;
      };
      Extension2.prototype.getExternalImageLibrary = function() {
        return this.externalImageLibrary;
      };
      Extension2.prototype.getExternalAiAssistant = function() {
        return this.externalAiAssistant;
      };
      Extension2.prototype.getExternalDisplayConditionsLibrary = function() {
        return this.externalDisplayConditionsLibrary;
      };
      Extension2.prototype.getExternalVideoLibrary = function() {
        return this.externalVideoLibrary;
      };
      Extension2.prototype.getBlocksPanel = function() {
        return this.blocksPanel;
      };
      return Extension2;
    }()
  );
  Extension.Extension = Extension$1;
  return Extension;
}
var ExtensionBuilder = {};
var hasRequiredExtensionBuilder;
function requireExtensionBuilder() {
  if (hasRequiredExtensionBuilder) return ExtensionBuilder;
  hasRequiredExtensionBuilder = 1;
  Object.defineProperty(ExtensionBuilder, "__esModule", { value: true });
  ExtensionBuilder.ExtensionBuilder = void 0;
  var Extension_1 = requireExtension();
  var ExtensionBuilder$1 = (
    /** @class */
    function() {
      function ExtensionBuilder2() {
        this.uiElements = [];
        this.controls = [];
        this.contextActions = [];
        this.blocks = [];
      }
      ExtensionBuilder2.prototype.withLocalization = function(i18n) {
        this.i18n = i18n;
        return this;
      };
      ExtensionBuilder2.prototype.withStyles = function(styles2) {
        this.styles = styles2;
        return this;
      };
      ExtensionBuilder2.prototype.withPreviewStyles = function(styles2) {
        this.previewStyles = styles2;
        return this;
      };
      ExtensionBuilder2.prototype.addContextAction = function(contextAction) {
        this.contextActions.push(contextAction);
        return this;
      };
      ExtensionBuilder2.prototype.addUiElement = function(uiElement) {
        this.uiElements.push(uiElement);
        return this;
      };
      ExtensionBuilder2.prototype.withUiElementTagRegistry = function(uiElementTagRegistry) {
        this.uiElementTagRegistry = uiElementTagRegistry;
        return this;
      };
      ExtensionBuilder2.prototype.addControl = function(control) {
        this.controls.push(control);
        return this;
      };
      ExtensionBuilder2.prototype.withSettingsPanelRegistry = function(settingsPanelRegistry) {
        this.settingsPanelRegistry = settingsPanelRegistry;
        return this;
      };
      ExtensionBuilder2.prototype.withExternalSmartElementsLibrary = function(externalSmartElementsLibrary2) {
        this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
        return this;
      };
      ExtensionBuilder2.prototype.withExternalImageLibrary = function(externalImageLibrary) {
        this.externalImageLibrary = externalImageLibrary;
        return this;
      };
      ExtensionBuilder2.prototype.withExternalAiAssistant = function(externalAiAssistant2) {
        this.externalAiAssistant = externalAiAssistant2;
        return this;
      };
      ExtensionBuilder2.prototype.withExternalDisplayCondition = function(externalDisplayCondition) {
        this.externalDisplayConditionsLibrary = externalDisplayCondition;
        return this;
      };
      ExtensionBuilder2.prototype.withExternalVideosLibrary = function(externalVideoLibrary) {
        this.externalVideoLibrary = externalVideoLibrary;
        return this;
      };
      ExtensionBuilder2.prototype.withBlocksPanel = function(blocksPanel) {
        this.blocksPanel = blocksPanel;
        return this;
      };
      ExtensionBuilder2.prototype.addBlock = function(block) {
        this.blocks.push(block);
        return this;
      };
      ExtensionBuilder2.prototype.build = function() {
        return new Extension_1.Extension(this.i18n, this.styles, this.uiElements, this.uiElementTagRegistry, this.controls, this.settingsPanelRegistry, this.contextActions, this.blocks, this.externalSmartElementsLibrary, this.externalImageLibrary, this.previewStyles, this.externalAiAssistant, this.externalDisplayConditionsLibrary, this.externalVideoLibrary, this.blocksPanel);
      };
      return ExtensionBuilder2;
    }()
  );
  ExtensionBuilder.ExtensionBuilder = ExtensionBuilder$1;
  return ExtensionBuilder;
}
var ModificationDescription = {};
var hasRequiredModificationDescription;
function requireModificationDescription() {
  if (hasRequiredModificationDescription) return ModificationDescription;
  hasRequiredModificationDescription = 1;
  Object.defineProperty(ModificationDescription, "__esModule", { value: true });
  ModificationDescription.ModificationDescription = void 0;
  var ModificationDescription$1 = (
    /** @class */
    function() {
      function ModificationDescription2(key) {
        this.key = key;
      }
      ModificationDescription2.prototype.withParams = function(params) {
        this.params = params;
        return this;
      };
      ModificationDescription2.prototype.getValue = function() {
        return {
          key: this.key,
          params: this.params
        };
      };
      return ModificationDescription2;
    }()
  );
  ModificationDescription.ModificationDescription = ModificationDescription$1;
  return ModificationDescription;
}
var UIElement = {};
var hasRequiredUIElement;
function requireUIElement() {
  if (hasRequiredUIElement) return UIElement;
  hasRequiredUIElement = 1;
  Object.defineProperty(UIElement, "__esModule", { value: true });
  UIElement.UIElement = void 0;
  var UIElement$1 = (
    /** @class */
    function() {
      function UIElement2() {
      }
      UIElement2.prototype.onDestroy = function() {
      };
      UIElement2.prototype.getValue = function() {
      };
      UIElement2.prototype.setValue = function(_value) {
      };
      UIElement2.prototype.onAttributeUpdated = function(_name, _value) {
      };
      return UIElement2;
    }()
  );
  UIElement.UIElement = UIElement$1;
  return UIElement;
}
var UIElementTagRegistry = {};
var hasRequiredUIElementTagRegistry;
function requireUIElementTagRegistry() {
  if (hasRequiredUIElementTagRegistry) return UIElementTagRegistry;
  hasRequiredUIElementTagRegistry = 1;
  Object.defineProperty(UIElementTagRegistry, "__esModule", { value: true });
  UIElementTagRegistry.UIElementTagRegistry = void 0;
  var UIElementTagRegistry$1 = (
    /** @class */
    /* @__PURE__ */ function() {
      function UIElementTagRegistry2() {
      }
      return UIElementTagRegistry2;
    }()
  );
  UIElementTagRegistry.UIElementTagRegistry = UIElementTagRegistry$1;
  return UIElementTagRegistry;
}
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonTextBuiltInControl = exports.LinkColorBuiltInControl = exports.BackgroundImageBuiltInControl = exports.BackgroundColorBuiltInControl = exports.FontFamilyBuiltInControl = exports.BuiltInControl = exports.ADD_CUSTOM_FONT_OPTION = exports.BlockAttr = exports.AiAssistantValueType = exports.BlockCompositionType = exports.AmpFormControls = exports.GeneralControls = exports.GeneralStylesControls = exports.MessageSettingsControls = exports.ContainerControls = exports.StructureControls = exports.StripeControls = exports.CarouselControls = exports.AccordionControls = exports.MenuControls = exports.SocialControls = exports.CustomTextControls = exports.CustomImageControls = exports.CustomLinkControls = exports.HTMLControls = exports.ImageControls = exports.SpacerControls = exports.TimerControls = exports.VideoControls = exports.TextControls = exports.ButtonControls = exports.BannerChildControls = exports.BannerControls = exports.BlockType = exports.SettingsTab = exports.BuiltInControlTypes = exports.ContextActionType = exports.UEAttr = exports.UIElementType = exports.ModificationDescription = exports.Extension = exports.ExtensionBuilder = exports.SettingsPanelTab = exports.Block = exports.BlockRenderer = exports.ContextAction = exports.SettingsPanelRegistry = exports.Control = exports.UIElementTagRegistry = exports.UIElement = void 0;
    exports.ButtonBorderRadiusBuiltInControl = exports.ButtonHoverColorBuiltInControl = exports.ButtonAlignBuiltInControl = exports.ButtonHoverBorderColorBuiltInControl = exports.ButtonHoverTextColorBuiltInControl = exports.TextLineSpacingBuiltInControl = exports.ButtonBorderBuiltInControl = exports.PanelPosition = exports.BlocksPanel = exports.StructureBorderBuiltInControl = exports.TextStyleBuiltInControl = exports.TextSizeBuiltInControl = exports.PreviewDeviceMode = exports.EditorStatePropertyType = exports.ButtonColorBuiltInControl = exports.ButtonFontColorBuiltInControl = exports.TextColorBuiltInControl = exports.ButtonInternalIndentsBuiltInControl = exports.StructurePaddingsBuiltInControl = exports.BlockPaddingsBuiltInControl = void 0;
    var Block_1 = requireBlock();
    Object.defineProperty(exports, "Block", { enumerable: true, get: function() {
      return Block_1.Block;
    } });
    var BlockRenderer_1 = requireBlockRenderer();
    Object.defineProperty(exports, "BlockRenderer", { enumerable: true, get: function() {
      return BlockRenderer_1.BlockRenderer;
    } });
    var BlocksPanel_1 = requireBlocksPanel();
    Object.defineProperty(exports, "BlocksPanel", { enumerable: true, get: function() {
      return BlocksPanel_1.BlocksPanel;
    } });
    var ContextAction_1 = requireContextAction();
    Object.defineProperty(exports, "ContextAction", { enumerable: true, get: function() {
      return ContextAction_1.ContextAction;
    } });
    var AddCustomFont_1 = requireAddCustomFont();
    Object.defineProperty(exports, "ADD_CUSTOM_FONT_OPTION", { enumerable: true, get: function() {
      return AddCustomFont_1.ADD_CUSTOM_FONT_OPTION;
    } });
    var AiAssistantValueType_1 = requireAiAssistantValueType();
    Object.defineProperty(exports, "AiAssistantValueType", { enumerable: true, get: function() {
      return AiAssistantValueType_1.AiAssistantValueType;
    } });
    var BlockAttributes_1 = requireBlockAttributes();
    Object.defineProperty(exports, "BlockAttr", { enumerable: true, get: function() {
      return BlockAttributes_1.BlockAttr;
    } });
    var BlockCompositionType_1 = requireBlockCompositionType();
    Object.defineProperty(exports, "BlockCompositionType", { enumerable: true, get: function() {
      return BlockCompositionType_1.BlockCompositionType;
    } });
    var BlockType_1 = requireBlockType();
    Object.defineProperty(exports, "BlockType", { enumerable: true, get: function() {
      return BlockType_1.BlockType;
    } });
    var BuiltInControlTypes_1 = requireBuiltInControlTypes();
    Object.defineProperty(exports, "AccordionControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.AccordionControls;
    } });
    Object.defineProperty(exports, "AmpFormControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.AmpFormControls;
    } });
    Object.defineProperty(exports, "BannerChildControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.BannerChildControls;
    } });
    Object.defineProperty(exports, "BannerControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.BannerControls;
    } });
    Object.defineProperty(exports, "BuiltInControlTypes", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.BuiltInControlTypes;
    } });
    Object.defineProperty(exports, "ButtonControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.ButtonControls;
    } });
    Object.defineProperty(exports, "CarouselControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.CarouselControls;
    } });
    Object.defineProperty(exports, "ContainerControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.ContainerControls;
    } });
    Object.defineProperty(exports, "CustomImageControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.CustomImageControls;
    } });
    Object.defineProperty(exports, "CustomLinkControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.CustomLinkControls;
    } });
    Object.defineProperty(exports, "CustomTextControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.CustomTextControls;
    } });
    Object.defineProperty(exports, "GeneralControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.GeneralControls;
    } });
    Object.defineProperty(exports, "GeneralStylesControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.GeneralStylesControls;
    } });
    Object.defineProperty(exports, "HTMLControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.HTMLControls;
    } });
    Object.defineProperty(exports, "ImageControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.ImageControls;
    } });
    Object.defineProperty(exports, "MenuControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.MenuControls;
    } });
    Object.defineProperty(exports, "MessageSettingsControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.MessageSettingsControls;
    } });
    Object.defineProperty(exports, "SocialControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.SocialControls;
    } });
    Object.defineProperty(exports, "SpacerControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.SpacerControls;
    } });
    Object.defineProperty(exports, "StripeControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.StripeControls;
    } });
    Object.defineProperty(exports, "StructureControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.StructureControls;
    } });
    Object.defineProperty(exports, "TextControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.TextControls;
    } });
    Object.defineProperty(exports, "TimerControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.TimerControls;
    } });
    Object.defineProperty(exports, "VideoControls", { enumerable: true, get: function() {
      return BuiltInControlTypes_1.VideoControls;
    } });
    var ContextActionType_1 = requireContextActionType();
    Object.defineProperty(exports, "ContextActionType", { enumerable: true, get: function() {
      return ContextActionType_1.ContextActionType;
    } });
    var EditorStatePropertyType_1 = requireEditorStatePropertyType();
    Object.defineProperty(exports, "EditorStatePropertyType", { enumerable: true, get: function() {
      return EditorStatePropertyType_1.EditorStatePropertyType;
    } });
    var PanelPosition_1 = requirePanelPosition();
    Object.defineProperty(exports, "PanelPosition", { enumerable: true, get: function() {
      return PanelPosition_1.PanelPosition;
    } });
    var PreviewDeviceMode_1 = requirePreviewDeviceMode();
    Object.defineProperty(exports, "PreviewDeviceMode", { enumerable: true, get: function() {
      return PreviewDeviceMode_1.PreviewDeviceMode;
    } });
    var SettingsTab_1 = requireSettingsTab();
    Object.defineProperty(exports, "SettingsTab", { enumerable: true, get: function() {
      return SettingsTab_1.SettingsTab;
    } });
    var UIElementsAttributes_1 = requireUIElementsAttributes();
    Object.defineProperty(exports, "UEAttr", { enumerable: true, get: function() {
      return UIElementsAttributes_1.UEAttr;
    } });
    var UIElementType_1 = requireUIElementType();
    Object.defineProperty(exports, "UIElementType", { enumerable: true, get: function() {
      return UIElementType_1.UIElementType;
    } });
    var BackgroundColorBuiltInControl_1 = requireBackgroundColorBuiltInControl();
    Object.defineProperty(exports, "BackgroundColorBuiltInControl", { enumerable: true, get: function() {
      return BackgroundColorBuiltInControl_1.BackgroundColorBuiltInControl;
    } });
    var BackgroundImageBuiltInControl_1 = requireBackgroundImageBuiltInControl();
    Object.defineProperty(exports, "BackgroundImageBuiltInControl", { enumerable: true, get: function() {
      return BackgroundImageBuiltInControl_1.BackgroundImageBuiltInControl;
    } });
    var BlockPaddingsBuiltInControl_1 = requireBlockPaddingsBuiltInControl();
    Object.defineProperty(exports, "BlockPaddingsBuiltInControl", { enumerable: true, get: function() {
      return BlockPaddingsBuiltInControl_1.BlockPaddingsBuiltInControl;
    } });
    var BuiltInControl_1 = requireBuiltInControl();
    Object.defineProperty(exports, "BuiltInControl", { enumerable: true, get: function() {
      return BuiltInControl_1.BuiltInControl;
    } });
    var ButtonBorderRadiusBuiltInControl_1 = requireButtonBorderRadiusBuiltInControl();
    Object.defineProperty(exports, "ButtonBorderRadiusBuiltInControl", { enumerable: true, get: function() {
      return ButtonBorderRadiusBuiltInControl_1.ButtonBorderRadiusBuiltInControl;
    } });
    var ButtonAlignBuiltInControl_1 = requireButtonAlignBuiltInControl();
    Object.defineProperty(exports, "ButtonAlignBuiltInControl", { enumerable: true, get: function() {
      return ButtonAlignBuiltInControl_1.ButtonAlignBuiltInControl;
    } });
    var ButtonBorderBuiltInControl_1 = requireButtonBorderBuiltInControl();
    Object.defineProperty(exports, "ButtonBorderBuiltInControl", { enumerable: true, get: function() {
      return ButtonBorderBuiltInControl_1.ButtonBorderBuiltInControl;
    } });
    var ButtonColorBuiltInControl_1 = requireButtonColorBuiltInControl();
    Object.defineProperty(exports, "ButtonColorBuiltInControl", { enumerable: true, get: function() {
      return ButtonColorBuiltInControl_1.ButtonColorBuiltInControl;
    } });
    var ButtonFontColorBuiltInControl_1 = requireButtonFontColorBuiltInControl();
    Object.defineProperty(exports, "ButtonFontColorBuiltInControl", { enumerable: true, get: function() {
      return ButtonFontColorBuiltInControl_1.ButtonFontColorBuiltInControl;
    } });
    var ButtonHoverBorderColorBuiltInControl_1 = requireButtonHoverBorderColorBuiltInControl();
    Object.defineProperty(exports, "ButtonHoverBorderColorBuiltInControl", { enumerable: true, get: function() {
      return ButtonHoverBorderColorBuiltInControl_1.ButtonHoverBorderColorBuiltInControl;
    } });
    var ButtonHoverColorBuiltInControl_1 = requireButtonHoverColorBuiltInControl();
    Object.defineProperty(exports, "ButtonHoverColorBuiltInControl", { enumerable: true, get: function() {
      return ButtonHoverColorBuiltInControl_1.ButtonHoverColorBuiltInControl;
    } });
    var ButtonHoverTextColorBuiltInControl_1 = requireButtonHoverTextColorBuiltInControl();
    Object.defineProperty(exports, "ButtonHoverTextColorBuiltInControl", { enumerable: true, get: function() {
      return ButtonHoverTextColorBuiltInControl_1.ButtonHoverTextColorBuiltInControl;
    } });
    var ButtonInternalIndentsBuiltInControl_1 = requireButtonInternalIndentsBuiltInControl();
    Object.defineProperty(exports, "ButtonInternalIndentsBuiltInControl", { enumerable: true, get: function() {
      return ButtonInternalIndentsBuiltInControl_1.ButtonInternalIndentsBuiltInControl;
    } });
    var ButtonTextBuiltInControl_1 = requireButtonTextBuiltInControl();
    Object.defineProperty(exports, "ButtonTextBuiltInControl", { enumerable: true, get: function() {
      return ButtonTextBuiltInControl_1.ButtonTextBuiltInControl;
    } });
    var Control_1 = requireControl();
    Object.defineProperty(exports, "Control", { enumerable: true, get: function() {
      return Control_1.Control;
    } });
    var SettingsPanelRegistry_1 = requireSettingsPanelRegistry();
    Object.defineProperty(exports, "SettingsPanelRegistry", { enumerable: true, get: function() {
      return SettingsPanelRegistry_1.SettingsPanelRegistry;
    } });
    var SettingsPanelTab_1 = requireSettingsPanelTab();
    Object.defineProperty(exports, "SettingsPanelTab", { enumerable: true, get: function() {
      return SettingsPanelTab_1.SettingsPanelTab;
    } });
    var StructureBorderBuiltInControl_1 = requireStructureBorderBuiltInControl();
    Object.defineProperty(exports, "StructureBorderBuiltInControl", { enumerable: true, get: function() {
      return StructureBorderBuiltInControl_1.StructureBorderBuiltInControl;
    } });
    var StructurePaddingsBuiltInControl_1 = requireStructurePaddingsBuiltInControl();
    Object.defineProperty(exports, "StructurePaddingsBuiltInControl", { enumerable: true, get: function() {
      return StructurePaddingsBuiltInControl_1.StructurePaddingsBuiltInControl;
    } });
    var FontFamilyBuiltInControl_1 = requireFontFamilyBuiltInControl();
    Object.defineProperty(exports, "FontFamilyBuiltInControl", { enumerable: true, get: function() {
      return FontFamilyBuiltInControl_1.FontFamilyBuiltInControl;
    } });
    var TextLineSpacingBuiltInControl_1 = requireTextLineSpacingBuiltInControl();
    Object.defineProperty(exports, "TextLineSpacingBuiltInControl", { enumerable: true, get: function() {
      return TextLineSpacingBuiltInControl_1.TextLineSpacingBuiltInControl;
    } });
    var LinkColorBuiltInControl_1 = requireLinkColorBuiltInControl();
    Object.defineProperty(exports, "LinkColorBuiltInControl", { enumerable: true, get: function() {
      return LinkColorBuiltInControl_1.LinkColorBuiltInControl;
    } });
    var TextColorBuiltInControl_1 = requireTextColorBuiltInControl();
    Object.defineProperty(exports, "TextColorBuiltInControl", { enumerable: true, get: function() {
      return TextColorBuiltInControl_1.TextColorBuiltInControl;
    } });
    var TextSizeBuiltInControl_1 = requireTextSizeBuiltInControl();
    Object.defineProperty(exports, "TextSizeBuiltInControl", { enumerable: true, get: function() {
      return TextSizeBuiltInControl_1.TextSizeBuiltInControl;
    } });
    var TextStyleBuiltInControl_1 = requireTextStyleBuiltInControl();
    Object.defineProperty(exports, "TextStyleBuiltInControl", { enumerable: true, get: function() {
      return TextStyleBuiltInControl_1.TextStyleBuiltInControl;
    } });
    var Extension_1 = requireExtension();
    Object.defineProperty(exports, "Extension", { enumerable: true, get: function() {
      return Extension_1.Extension;
    } });
    var ExtensionBuilder_1 = requireExtensionBuilder();
    Object.defineProperty(exports, "ExtensionBuilder", { enumerable: true, get: function() {
      return ExtensionBuilder_1.ExtensionBuilder;
    } });
    var ModificationDescription_1 = requireModificationDescription();
    Object.defineProperty(exports, "ModificationDescription", { enumerable: true, get: function() {
      return ModificationDescription_1.ModificationDescription;
    } });
    var UIElement_1 = requireUIElement();
    Object.defineProperty(exports, "UIElement", { enumerable: true, get: function() {
      return UIElement_1.UIElement;
    } });
    var UIElementTagRegistry_1 = requireUIElementTagRegistry();
    Object.defineProperty(exports, "UIElementTagRegistry", { enumerable: true, get: function() {
      return UIElementTagRegistry_1.UIElementTagRegistry;
    } });
  })(dist);
  return dist;
}
var distExports = requireDist();
class TextCustomControls extends distExports.SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"] = [
      new distExports.SettingsPanelTab("customStyles", ["backgroundColor"]).withLabel(this.api.translate("Custom styles")),
      new distExports.SettingsPanelTab("settings", ["paragraphStyleForm"]),
      new distExports.SettingsPanelTab("customSettings", ["backgroundColor"]).withLabel(this.api.translate("Custom settings"))
    ];
  }
}
const textBlockWithCustomControls = new distExports.ExtensionBuilder().withLocalization({
  "en": {
    "Custom styles": "EN Custom styles"
  },
  "uk": {
    "Custom styles": "UK Custom styles",
    "Custom settings": "UK Custom settings"
  }
}).withSettingsPanelRegistry(TextCustomControls).build();
class TextExtendedControls extends distExports.SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][1].addControl("fixedHeightSwitcherForm", 0);
  }
}
const textBlockWithExtendedControls = new distExports.ExtensionBuilder().withSettingsPanelRegistry(TextExtendedControls).build();
class TextRemovedControls extends distExports.SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][0].deleteControl("paragraphStyleForm");
  }
}
const textBlockWithRemovedControl = new distExports.ExtensionBuilder().withSettingsPanelRegistry(TextRemovedControls).build();
const BLOCK_ID$5 = "test-block-extension";
class BlockExtensionCustomBlockBasic extends distExports.Block {
  getId() {
    return BLOCK_ID$5;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  getTemplate() {
    return `<td><h1>Test block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customBlockBasic = new distExports.ExtensionBuilder().addBlock(BlockExtensionCustomBlockBasic).build();
const BLOCK_ID$4 = "atomic-block-alias-extension";
class AtomicBlockAlias extends distExports.Block {
  getId() {
    return BLOCK_ID$4;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Atomic Block Alias Extension");
  }
  getDescription() {
    return this.api.translate("Atomic Block Alias Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    const attrs = distExports.BlockAttr.BLOCK_IMAGE;
    return `<${distExports.BlockType.BLOCK_IMAGE} ${attrs.src}="src.jpg" ${attrs.alt}="alt"></${distExports.BlockType.BLOCK_IMAGE}>`;
  }
}
const atomicBlockAlias = new distExports.ExtensionBuilder().addBlock(AtomicBlockAlias).build();
const BLOCK_ID$3 = "test-custom-renderer-block-extension";
class CustomRenderer extends distExports.BlockRenderer {
  getPreviewHtml(node) {
    return "<td><h1>Custom content</h1></td>";
  }
}
class BlockExtensionCustomBlockWithCustomRenderer extends distExports.Block {
  getId() {
    return BLOCK_ID$3;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Custom Renderer Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Custom Renderer Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return CustomRenderer;
  }
  getTemplate() {
    return `<td><h1>Test custom renderer block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customBlockWithCustomRenderer = new distExports.ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomRenderer).build();
const BLOCK_ID$2 = "test-context-action-block-extension";
const CONTEXT_ACTION_ID = "test-block-context-action";
class TestBlockContextAction extends distExports.ContextAction {
  getId() {
    return CONTEXT_ACTION_ID;
  }
  getIconClass() {
    return "plus";
  }
  getLabel() {
    return this.api.translate("Test context action");
  }
  onClick(node) {
    console.log(`Test context action clicked for block: ${node.getOuterHTML()}`);
  }
}
class BlockExtensionCustomBlockWithCustomContextAction extends distExports.Block {
  getId() {
    return BLOCK_ID$2;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Context Action Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Context Action Block Extension");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  getTemplate() {
    return `<td><h1>Test Context Action Block Extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getContextActionsIds() {
    return [distExports.ContextActionType.REMOVE, CONTEXT_ACTION_ID];
  }
}
const customBlockWithCustomContextAction = new distExports.ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomContextAction).addContextAction(TestBlockContextAction).build();
const BLOCK_ID$1 = "structure-extension";
class StructureExtension extends distExports.Block {
  getId() {
    return BLOCK_ID$1;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure Extension");
  }
  getDescription() {
    return this.api.translate("Structure Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return true;
  }
  getTemplate() {
    return `<td>
              <h3>CUSTOM STRUCTURE</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="560" align="left" class="esd-container-frame">
                      <table cellpadding="0" cellspacing="0" width="100%" role="presentation">
                        <tbody>
                          <tr>
                            <td align="center" class="esd-empty-container" style="display: none"></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
}
const customStructure = new distExports.ExtensionBuilder().addBlock(StructureExtension).build();
const MEDIA_STRUCTURE_ID = "media-structure";
const MEDIA_BLOCK_ID = "media-block";
const QUICK_INSERT_BLOCK_ID = "quick-insert-block";
let BaseBlockExtension$3 = class BaseBlockExtension extends distExports.Block {
  constructor(id, name, icon, type) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.type = type;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return this.type;
  }
};
class MediaStructure extends BaseBlockExtension$3 {
  constructor() {
    super(MEDIA_STRUCTURE_ID, "Media structure", "new-window", distExports.BlockCompositionType.STRUCTURE);
  }
  _getEmptyContainer() {
    const tag = distExports.BlockType.EMPTY_CONTAINER;
    const attrs = distExports.BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.blocks}="${distExports.BlockType.BLOCK_IMAGE},${distExports.BlockType.BLOCK_BANNER},${distExports.BlockType.BLOCK_VIDEO},${MEDIA_BLOCK_ID}"></${tag}>`;
  }
  getTemplate() {
    return `<td>
              <h3>Media structure</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
}
class MediaBlock extends BaseBlockExtension$3 {
  constructor() {
    super(MEDIA_BLOCK_ID, "Media block", "magic", distExports.BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>Media block</h4></td>";
  }
}
class QuickInsertBlock extends BaseBlockExtension$3 {
  constructor() {
    super(QUICK_INSERT_BLOCK_ID, "Quick insert block", "save", distExports.BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>This block can be inserted in any empty container!</h4></td>";
  }
  shouldDisplayQuickAddIcon() {
    return true;
  }
}
const customEmptyContainer = new distExports.ExtensionBuilder().addBlock(MediaStructure).addBlock(MediaBlock).addBlock(QuickInsertBlock).build();
const RESTRICTED_DND = "restricted_dnd";
const RESTRICTED_SELECTION = "restricted_selection";
let BaseBlockExtension$2 = class BaseBlockExtension2 extends distExports.Block {
  constructor(id, name, icon) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  _getTextBlock(content) {
    const tag = distExports.BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = distExports.BlockType.BLOCK_BUTTON;
    const attrs = distExports.BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = distExports.BlockType.CONTAINER;
    const attrs = distExports.BlockAttr.CONTAINER;
    return `<${tag} ${attrs.widthPercent ? `${attrs.widthPercent}="${width}"` : ""}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
};
class RestrictedDND extends BaseBlockExtension$2 {
  constructor() {
    super(RESTRICTED_DND, "Restricted drag and drop", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Structure with restructed drag and drop</h3>
              ${this._getContainer(this._getButtonBlock("Non draggable button"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Non draggable text.</b></p>"), 100, 0, 20)}
            </td>`;
  }
  allowInnerBlocksDND() {
    return false;
  }
}
class RestrictedSelection extends BaseBlockExtension$2 {
  constructor() {
    super(RESTRICTED_SELECTION, "Restricted selection", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Structure with restricted inner block selection</h3>
              ${this._getContainer(this._getButtonBlock("Non selectable button"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Non selectable text.</b></p>"), 100, 0, 20)}
            </td>`;
  }
  allowInnerBlocksSelection() {
    return false;
  }
}
const interactionConstraints = new distExports.ExtensionBuilder().addBlock(RestrictedDND).addBlock(RestrictedSelection).build();
const SINGLE_CONTAINER$1 = "single-empty-container";
const CONTAINERS_ROW$1 = "containers-row";
const CONTAINERS_ROW2$1 = "containers-row2";
const CONTAINERS_COLUMN$1 = "containers-column";
let BaseBlockExtension$1 = class BaseBlockExtension3 extends distExports.Block {
  constructor(id, name, icon) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  _getEmptyContainer(width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = distExports.BlockType.EMPTY_CONTAINER;
    const attrs = distExports.BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.widthPercent ? `${attrs.widthPercent}="${width}"` : ""}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
            </${tag}>`;
  }
};
let SingleContainer$1 = class SingleContainer extends BaseBlockExtension$1 {
  constructor() {
    super(SINGLE_CONTAINER$1, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
};
let ContainersRow$1 = class ContainersRow extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW$1, "Containers row", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row</h3>
              ${this._getEmptyContainer(30)}
              ${this._getEmptyContainer(65, 4)}
            </td>`;
  }
};
let ContainersRow2$1 = class ContainersRow2 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW2$1, "Containers row 2", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content in between</h3>
              ${this._getEmptyContainer(30)}
              <span class="es-left" style="font-weight: bold; color: red; border: 1px solid green; padding: 5px; margin-left: 4%;">Custom Content</span>
              ${this._getEmptyContainer(30, 4)}
            </td>`;
  }
};
let ContainersColumn$1 = class ContainersColumn extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_COLUMN$1, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getEmptyContainer(100)}
              ${this._getEmptyContainer(100, 0, 20)}
            </td>`;
  }
};
const emptyContainerLayouts = new distExports.ExtensionBuilder().addBlock(SingleContainer$1).addBlock(ContainersRow$1).addBlock(ContainersRow2$1).addBlock(ContainersColumn$1).build();
const SINGLE_CONTAINER = "single-container";
const CONTAINERS_ROW = "containers-row";
const CONTAINERS_ROW2 = "containers-row2";
const CONTAINERS_ROW3 = "containers-row3";
const CONTAINERS_COLUMN = "containers-column";
class BaseBlockExtension4 extends distExports.Block {
  constructor(id, name, icon) {
    super();
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
  getId() {
    return this.id;
  }
  getIcon() {
    return this.icon;
  }
  getName() {
    return this.api.translate(this.name);
  }
  getDescription() {
    return this.api.translate(`${this.name} description`);
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
  }
  canBeSavedAsModule() {
    return false;
  }
  getTemplate() {
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  _getImageBlock(url) {
    const tag = distExports.BlockType.BLOCK_IMAGE;
    const attrs = distExports.BlockAttr.BLOCK_IMAGE;
    return `<${tag} ${attrs.src}="${url}" ${attrs.alt}="Image block" ${attrs.href}="https://google.com"></${tag}>`;
  }
  _getTextBlock(content) {
    const tag = distExports.BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = distExports.BlockType.BLOCK_BUTTON;
    const attrs = distExports.BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = distExports.BlockType.CONTAINER;
    const attrs = distExports.BlockAttr.CONTAINER;
    return `<${tag} ${attrs.widthPercent ? `${attrs.widthPercent}="${width}"` : ""}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
}
class SingleContainer2 extends BaseBlockExtension4 {
  constructor() {
    super(SINGLE_CONTAINER, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"))}
            </td>`;
  }
}
class ContainersRow3 extends BaseBlockExtension4 {
  constructor() {
    super(CONTAINERS_ROW, "Containers row with custom content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content</h3>
              ${this._getContainer("<tr><td>custom html <b>1</b></td></tr>", 30)}
              ${this._getContainer("<tr><td>custom html <b>2</b></td></tr>", 65, 4)}
            </td>`;
  }
}
class ContainersRow22 extends BaseBlockExtension4 {
  constructor() {
    super(CONTAINERS_ROW2, "Containers row with standard content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with standard content</h3>
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 30)}
              ${this._getContainer(this._getImageBlock("https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"), 65, 4)}
            </td>`;
  }
}
class ContainersRow32 extends BaseBlockExtension4 {
  constructor() {
    super(CONTAINERS_ROW3, "Containers row with custom content in between", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content in between</h3>
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 30)}
              <span class="es-left" style="font-weight: bold; color: red; border: 1px solid green; padding: 5px; margin-left: 4%;">Custom Content</span>
              ${this._getContainer(this._getImageBlock("https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"), 30, 4)}
            </td>`;
  }
}
class ContainersColumn2 extends BaseBlockExtension4 {
  constructor() {
    super(CONTAINERS_COLUMN, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 100, 0, 20)}
            </td>`;
  }
}
const containerLayouts = new distExports.ExtensionBuilder().addBlock(SingleContainer2).addBlock(ContainersRow3).addBlock(ContainersRow22).addBlock(ContainersRow32).addBlock(ContainersColumn2).build();
const BLOCK_ID = "init-actions-block";
class InitActionsBlock extends distExports.Block {
  getId() {
    return BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Init Actions Block Extension");
  }
  getDescription() {
    return this.api.translate("Init Actions Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<td><h1>Init Actions block extension</h1></td>`;
  }
  onDocumentInit() {
    return this.api.getDocumentModifier().modifyHtml(this.api.getDocumentRoot().querySelector(".esd-stripe")).setClass("modified-on-init");
  }
  onSelect(node) {
    return this.api.getDocumentModifier().modifyHtml(node).setClass("modified-on-select");
  }
}
const initActionsBlock = new distExports.ExtensionBuilder().addBlock(InitActionsBlock).build();
const ID$s = "text-override-ui-element";
class TestTagRegistry extends distExports.UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap["original-text"] = uiElementsTagsMap[distExports.UIElementType.TEXT];
    uiElementsTagsMap[distExports.UIElementType.TEXT] = ID$s;
  }
}
class UiElementExtensionTextUiElementOverridden extends distExports.UIElement {
  getId() {
    return ID$s;
  }
  onRender(container) {
    this.listener = this._onChange.bind(this);
    this.customTextInput = container.querySelector("#customText");
    this.customTextInput.addEventListener("change", this.listener);
    this.originalTextInput = container.querySelector("#originalText");
    this.originalTextInput.addEventListener("change", this.listener);
  }
  onDestroy() {
    this.customTextInput.removeEventListener("change", this.listener);
    this.originalTextInput.removeEventListener("change", this.listener);
  }
  _onChange(event) {
    this.api.onValueChanged(`${event.target.id}_${event.target.value}`);
  }
  getValue() {
    return this.customTextInput.value;
  }
  setValue(value) {
    this.customTextInput.value = value;
    this.originalTextInput.value = value;
  }
  getTemplate() {
    return `
            <div>
                <original-text id="originalText"></original-text>
                <input id="customText"/>
            </div>`;
  }
}
const textUiElementOverridden = new distExports.ExtensionBuilder().addUiElement(UiElementExtensionTextUiElementOverridden).withUiElementTagRegistry(TestTagRegistry).build();
const MessageStyle$1 = {
  DANGER: "error",
  SUCCESS: "success",
  WARNING: "warn",
  INFO: "info"
};
const CONTROL_ID$1 = "ui-elements-demo";
const MESSAGE_ELEMENT$1 = "message";
const TOGGLABLE_CONTAINER = "togglable";
const RADIO_BUTTONS_ELEMENT$1 = "radioButtons";
const SELECT_ELEMENT$1 = "select";
const CHECK_BUTTONS_ELEMENT$1 = "checkButtons";
const CHECKBOX_ELEMENT$1 = "checkbox";
const SWITCHER_ELEMENT$1 = "switcher";
const BUTTON_ELEMENT$1 = "button";
const COLOR_ELEMENT$1 = "color";
const DATEPICKER_ELEMENT$1 = "datepicker";
const COUNTER_ELEMENT$1 = "counter";
const TEXT_ELEMENT$1 = "text";
const TEXT_AREA_ELEMENT$1 = "textArea";
class TestUIElementsDemoPanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [new distExports.SettingsPanelTab(distExports.SettingsTab.SETTINGS, [CONTROL_ID$1])];
  }
}
class TestUIElementsDemoControl extends distExports.Control {
  getId() {
    return CONTROL_ID$1;
  }
  _getLabel(text, name = `${Math.random()}`) {
    const tag = distExports.UIElementType.LABEL;
    const attr = distExports.UEAttr.LABEL;
    return `<${tag} ${attr.text}="${text}" ${attr.name}="${name}"></${tag}>`;
  }
  _getMessage() {
    const tag = distExports.UIElementType.MESSAGE;
    const attr = distExports.UEAttr.MESSAGE;
    return `       
        <b>Message element allows you to provide user with required information.</b>
        ${this._getLabel("User action:")}           
        <${tag} ${attr.name}="${MESSAGE_ELEMENT$1}" ${attr.type}="${MessageStyle$1.INFO}"></${tag}>
    `;
  }
  _getRadioButton(text, value) {
    const tag = distExports.UIElementType.RADIO_ITEM;
    const attr = distExports.UEAttr.RADIO_ITEM;
    return `<${tag} ${attr.hint}="${text}" ${attr.text}="${text}" ${attr.value}="${value}"></${tag}>`;
  }
  _getRadioButtons() {
    const tag = distExports.UIElementType.RADIO_BUTTONS;
    const attr = distExports.UEAttr.RADIO_BUTTONS;
    return `
      <b>Radio buttons allow you to choose one item from the list of options.</b>
      ${this._getLabel("Select message style:")}
      <${tag} ${attr.name}="${RADIO_BUTTONS_ELEMENT$1}">
          ${Object.keys(MessageStyle$1).map((key) => this._getRadioButton(key, MessageStyle$1[key])).join("")}
      </${tag}>
    `;
  }
  _getSelectItem(text, value) {
    const tag = distExports.UIElementType.SELECT_ITEM;
    const attr = distExports.UEAttr.SELECT_ITEM;
    return `<${tag} ${attr.text}="${text}" ${attr.value}="${value}"></${tag}>`;
  }
  _getSelect() {
    const tag = distExports.UIElementType.SELECTPICKER;
    const attr = distExports.UEAttr.SELECTPICKER;
    return `
      <b>Select element allows you to choose one or several items from the list of options.</b>
        ${this._getLabel("Select message style:")}
        <${tag} ${attr.name}="${SELECT_ELEMENT$1}" ${attr.multiSelect}="true">
            ${Object.keys(MessageStyle$1).map((key) => this._getSelectItem(key, MessageStyle$1[key])).join("")}
        </${tag}>
    `;
  }
  getCheckItem(name, value) {
    const tag = distExports.UIElementType.CHECK_ITEM;
    const attr = distExports.UEAttr.CHECK_ITEM;
    return `<${tag} ${attr.hint}="${name}" ${attr.text}="${name}" ${attr.value}="${value}"></${tag}>`;
  }
  _getCheckButtons() {
    const tag = distExports.UIElementType.CHECK_BUTTONS;
    const attr = distExports.UEAttr.CHECK_BUTTONS;
    return `
      <b>CheckButtons are similar to RadioButtons but also allow to select several items.</b>
        ${this._getLabel("Select some items:")}
        <${tag} ${attr.name}="${CHECK_BUTTONS_ELEMENT$1}">
            ${["one", "two", "three"].map((key) => this.getCheckItem(key, key)).join("")}
        </${tag}>
    `;
  }
  _getCheckbox() {
    const tag = distExports.UIElementType.CHECKBOX;
    const attr = distExports.UEAttr.CHECKBOX;
    return `
      <b>Checkbox allows you to switch boolean state.</b>
      <${tag} ${attr.caption}="Disable inputs above:" ${attr.name}="${CHECKBOX_ELEMENT$1}"></${tag}>
    `;
  }
  _getSwitcher() {
    const tag = distExports.UIElementType.SWITCHER;
    const attr = distExports.UEAttr.SWITCHER;
    return `
      <b>Switcher allows you to switch boolean state too.</b>
      ${this._getLabel("Display inputs above:")}
      <${tag} ${attr.name}="${SWITCHER_ELEMENT$1}"></${tag}>
    `;
  }
  _getButton() {
    const tag = distExports.UIElementType.BUTTON;
    const attr = distExports.UEAttr.BUTTON;
    return `
      <b>Button allows you to perform single action.</b>
      ${this._getLabel("Clear message area:")}
      <${tag} ${attr.name}="${BUTTON_ELEMENT$1}" ${attr.caption}="DO IT"></${tag}>
    `;
  }
  _getColor() {
    const tag = distExports.UIElementType.COLOR;
    const attr = distExports.UEAttr.COLOR;
    return `
      <b>Colorpicker allows you to select color from the default and custom palettes.</b>
      ${this._getLabel("Select color:")}
      <${tag} ${attr.name}="${COLOR_ELEMENT$1}"></${tag}>
    `;
  }
  _getDatepicker() {
    const tag = distExports.UIElementType.DATEPICKER;
    const attr = distExports.UEAttr.DATEPICKER;
    return `
      <b>Datepicker allows to select date.</b>
      ${this._getLabel("Select date:")}
      <${tag} ${attr.name}="${DATEPICKER_ELEMENT$1}"></${tag}>
    `;
  }
  _getCounter() {
    const tag = distExports.UIElementType.COUNTER;
    const attr = distExports.UEAttr.COUNTER;
    return `
      <b>Counter allows to input numeric value.</b>
      ${this._getLabel("Pick a number between 1 and 10:")}
      <${tag} ${attr.name}="${COUNTER_ELEMENT$1}" ${attr.minValue}="1" ${attr.maxValue}="10" ${attr.step}="1"></${tag}>
    `;
  }
  _getText() {
    const tag = distExports.UIElementType.TEXT;
    const attr = distExports.UEAttr.TEXT;
    return `
      <b>Text allows you to input string value.</b>
      ${this._getLabel("What is your name?")}
      <${tag} ${attr.name}="${TEXT_ELEMENT$1}" ${attr.placeholder}="Enter your name here."></${tag}>
    `;
  }
  _getTextArea() {
    const tag = distExports.UIElementType.TEXTAREA;
    const attr = distExports.UEAttr.TEXTAREA;
    return `
      <b>Text area allows you to input multi-line text.</b>
      ${this._getLabel("List top 1 of your favourite dinosaurs.", "dinoLabel")}
      <${tag} ${attr.name}="${TEXT_AREA_ELEMENT$1}" ${attr.placeholder}="Dinosaurs go here."></${tag}>
    `;
  }
  getTemplate() {
    return `
    <div class="e2e-elements-container">
        ${this._getMessage()}    
        <hr>
        <div ${distExports.UEAttr.DEFAULT.name}="${TOGGLABLE_CONTAINER}">
          ${this._getRadioButtons()}    
          <hr>
          ${this._getSelect()}        
          <hr>
          ${this._getCheckButtons()}
          <hr>    
          ${this._getButton()}        
          <hr>
          ${this._getCheckbox()}
          <hr>               
        </div>
        ${this._getSwitcher()}      
        <hr>    
        ${this._getColor()}      
        <hr>    
        ${this._getDatepicker()}      
        <hr>    
        ${this._getCounter()}      
        <hr>    
        ${this._getText()}      
        <hr>    
        ${this._getTextArea()}
    </div>
    `;
  }
  onRender() {
    this._setFormValues();
    this._listenToFormUpdates();
  }
  _setFormValues() {
    this.api.updateValues({
      [MESSAGE_ELEMENT$1]: "Interact with inputs to perform an action.",
      [RADIO_BUTTONS_ELEMENT$1]: MessageStyle$1.INFO,
      [SELECT_ELEMENT$1]: Object.values(MessageStyle$1),
      [CHECK_BUTTONS_ELEMENT$1]: { one: true },
      [CHECKBOX_ELEMENT$1]: false,
      [SWITCHER_ELEMENT$1]: true,
      [COLOR_ELEMENT$1]: "#008000",
      [DATEPICKER_ELEMENT$1]: /* @__PURE__ */ new Date(),
      [COUNTER_ELEMENT$1]: 1
    });
  }
  _listenToFormUpdates() {
    this.api.onValueChanged(RADIO_BUTTONS_ELEMENT$1, (value) => this._onRadioButtonsChange(value));
    this.api.onValueChanged(SELECT_ELEMENT$1, (value) => this._onSelectChange(value));
    this.api.onValueChanged(CHECK_BUTTONS_ELEMENT$1, (value) => this._onCheckButtonsChange(value));
    this.api.onValueChanged(BUTTON_ELEMENT$1, (value) => this._onButtonClick(value));
    this.api.onValueChanged(CHECKBOX_ELEMENT$1, (value) => this._onCheckboxChange(value));
    this.api.onValueChanged(SWITCHER_ELEMENT$1, (value) => this._onSwitcherChange(value));
    this.api.onValueChanged(COLOR_ELEMENT$1, (value) => this._onColorChange(value));
    this.api.onValueChanged(DATEPICKER_ELEMENT$1, (value) => this._onDateChange(value));
    this.api.onValueChanged(COUNTER_ELEMENT$1, (value) => this._onCounterChange(value));
    this.api.onValueChanged(TEXT_ELEMENT$1, (value) => this._onTextChange(value));
    this.api.onValueChanged(TEXT_AREA_ELEMENT$1, (value) => this._onTextAreaChange(value));
  }
  _updateMessage(message, overwrite) {
    const previousMessages = overwrite ? "" : this.api.getValues()[MESSAGE_ELEMENT$1];
    this.api.updateValues({
      [MESSAGE_ELEMENT$1]: `${previousMessages ? `${previousMessages}<br>` : ""}${message}`
    });
  }
  _onRadioButtonsChange(value) {
    this.api.setUIEAttribute(MESSAGE_ELEMENT$1, distExports.UEAttr.MESSAGE.type, value);
    this._updateMessage(`<b>Radio item selected</b>: '${value}'`);
  }
  _onSelectChange(value) {
    this.api.setUIEAttribute(
      RADIO_BUTTONS_ELEMENT$1,
      distExports.UEAttr.RADIO_BUTTONS.buttons,
      Object.keys(MessageStyle$1).filter((key) => value.includes(MessageStyle$1[key])).map((key) => ({
        [distExports.UEAttr.RADIO_ITEM.hint]: key,
        [distExports.UEAttr.RADIO_ITEM.text]: key,
        [distExports.UEAttr.RADIO_ITEM.value]: MessageStyle$1[key]
      }))
    );
    this._updateMessage(`<b>Select items selected</b>: '${value.join(", ")}'`);
  }
  _onCheckButtonsChange(value) {
    this._updateMessage(`<b>Check buttons selected</b>: '${JSON.stringify(value).replace(/"/g, "")}'`);
  }
  _onCheckboxChange(value) {
    this._updateMessage(`<b>Checkbox changed</b>: '${value}'`);
    this.api.setUIEAttribute(RADIO_BUTTONS_ELEMENT$1, distExports.UEAttr.RADIO_BUTTONS.disabled, value);
    this.api.setUIEAttribute(SELECT_ELEMENT$1, distExports.UEAttr.SELECTPICKER.disabled, value);
    this.api.setUIEAttribute(CHECK_BUTTONS_ELEMENT$1, distExports.UEAttr.CHECK_BUTTONS.disabled, value);
    this.api.setUIEAttribute(BUTTON_ELEMENT$1, distExports.UEAttr.BUTTON.disabled, value);
  }
  _onSwitcherChange(value) {
    this._updateMessage(`<b>Switcher changed</b>: '${value}'`);
    this.api.setVisibility(TOGGLABLE_CONTAINER, value);
  }
  _onButtonClick() {
    this._updateMessage(`All gone!`, true);
  }
  _onColorChange(value) {
    this._updateMessage(`<b>Color selected</b>: '<span style="color: ${value}; background: #FFFFFF; font-weight: bold;">${value}</span>'`);
  }
  _onDateChange(value) {
    this._updateMessage(`<b>Date selected</b>: '${value.toLocaleDateString()}'`);
  }
  _onCounterChange(value) {
    let choice = value;
    if (value === 6) {
      choice = "😱";
    }
    if (value === 9) {
      choice = "";
    }
    this._updateMessage(`<b>You've chosen</b>: '${choice}'`);
    this.api.setUIEAttribute("dinoLabel", distExports.UEAttr.LABEL.text, `List top ${value} of your favourite dinosaurs.`);
  }
  _onTextChange(value) {
    this._updateMessage(`${value}'s come to see us!`);
  }
  _onTextAreaChange(value = "") {
    value = value.trim();
    const requiredNumber = this.api.getValues()[COUNTER_ELEMENT$1];
    const enteredNumber = value.split("\n").length;
    if (requiredNumber > enteredNumber) {
      this._updateMessage(`<b>Enter ${requiredNumber - enteredNumber} more dinosaurs!</b>`);
    } else if (requiredNumber < enteredNumber) {
      this._updateMessage(`<b>Hold your dinosaurs!</b>`);
    } else {
      this._updateMessage(`<b>Top ${requiredNumber} of dinosaurs:</b><hr>${value.replace(/\n/g, "<br>")}`);
    }
  }
  onTemplateNodeUpdated(node) {
  }
}
const demoUiElement = new distExports.ExtensionBuilder().addControl(TestUIElementsDemoControl).withSettingsPanelRegistry(TestUIElementsDemoPanelRegistry).build();
const generalSettingsStyles = new distExports.ExtensionBuilder().withStyles(".e2e-general-settings button {color: red;}").build();
const previewStyles = new distExports.ExtensionBuilder().withPreviewStyles(`
    .ue-action-buttons-wrapper {
      background-color: red;
    }
    .ue-dots-icon {
      background-color: orange;
    }
  `).build();
class ExternalSmartElementsLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalSmartElementsLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Smart-elements Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png">                            <h4>Product 1</h4>                            <p>Price: <span>1$</span></p>                        </div>                          <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 2" src="https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/476a8650-10d7-11ed-84c9-c741af01c2be.png">                            <h4>Product 2</h4>                            <p>Price: <span>2$</span></p>                        </div>                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 3" src="https://localfiles.stripocdn.email/content/guids/CABINET_4cadb6ae00602dd6c9de933a7b396358e344a1541c288f2785cd19a41ebe0d35/images/nature.png">                            <h4>Product 3</h4>                            <p>Price: <span>3$</span></p>                        </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalSmartElementsLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onElementClick(e) {
    const exampleOfSmartElementObject = {
      p_title: e.querySelector("h4").innerText,
      p_name: e.querySelector("h4").innerText,
      p_price: e.querySelector("span").innerText,
      p_image: e.querySelector("img").getAttribute("src")
    };
    this.close();
    this.dataSelectCallback(exampleOfSmartElementObject);
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openSmartElementsLibrary(onDataSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const externalSmartElementsLibrary = new distExports.ExtensionBuilder().withExternalSmartElementsLibrary(ExternalSmartElementsLibrary).build();
let ExternalImagesLibraryExample$1 = class ExternalImagesLibraryExample {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "imageSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalImagesLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Images Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/9091542014595406.png">                        </div>                          <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/95981542014634835.png">                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_0397152026e82dd10a59009fd4c00284/images/53971542021195762.png">                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalImagesLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onImageClick.bind(this));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onImageClick(e) {
    if (!e.target.matches("img")) {
      return;
    }
    const exampleOfCallbackImageObject = {
      originalName: "9091542014595406.png",
      width: 600,
      height: 410,
      size: 169e3,
      url: e.target.getAttribute("src")
    };
    this.imageSelectCallback(exampleOfCallbackImageObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openImageLibrary(currentImageUrl, onImageSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.imageSelectCallback = onImageSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
};
const externalImagesLibrary = new distExports.ExtensionBuilder().withExternalImageLibrary(ExternalImagesLibraryExample$1).build();
const ID$r = "external-merge-tags-ui-element";
let MergeTagsTagRegistry$1 = class MergeTagsTagRegistry extends distExports.UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[distExports.UIElementType.MERGETAGS] = ID$r;
  }
};
class DemoMergeTagsUiElementExtension extends distExports.UIElement {
  getId() {
    return ID$r;
  }
  onRender(container) {
    this.listener = this._onClick.bind(this);
    this.mergeTagsButton = container.querySelector("#mergeTagsButton");
    this.mergeTagsButton.addEventListener("click", this.listener);
  }
  onDestroy() {
    this.mergeTagsButton.removeEventListener("click", this.listener);
  }
  _onClick(event) {
    this.openMergeTagLibrary();
  }
  openMergeTagLibrary() {
    var _a;
    if (!this.mergeTagsLibrary) {
      this.mergeTagsLibrary = new ExternalMergeTagsLibrary$1();
    }
    this.mergeTagsLibrary.openMergeTagsLibrary((_a = this.selectedMergeTag) == null ? void 0 : _a.value, (data) => {
      this.api.onValueChanged(data);
    });
  }
  onAttributeUpdated(name, value) {
    if (name === "mergeTag") {
      this.selectedMergeTag = value;
      this.selectedMergeTag && this.openMergeTagLibrary();
    }
  }
  getTemplate() {
    return `
            <div>
              <UE-BUTTON id="mergeTagsButton" class="btn btn-primary">${this.api.translate("Open merge tags")}</UE-BUTTON>
            </div>`;
  }
}
let ExternalMergeTagsLibrary$1 = class ExternalMergeTagsLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "selectedMergetag", null);
    __publicField(this, "dataSelectCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '             <div id="externalMergeTags" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Your merge tags</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" tag-value="*|FNAME|*" tag-label="John Doe" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Name                        </div>                        <div class="thumbnail" tag-value="%%Phone%%" tag-label="User phone number" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Phone                        </div>                        <div class="thumbnail" tag-value="Merge Tag 3" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag 3                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    const style = document.createElement("style");
    style.innerHTML = "#externalMergeTags .thumbnail.selected {color: blue; box-shadow: 0 0 0 2px blue; }";
    document.head.appendChild(style);
    this.externalLibrary = document.getElementById("externalMergeTags");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
  }
  onElementClick(thumbnail) {
    const exampleOfMergeTagValue = thumbnail.getAttribute("tag-value");
    const exampleOfMergeTagLabel = thumbnail.getAttribute("tag-label");
    this.close();
    this.dataSelectCallback({
      value: exampleOfMergeTagValue,
      label: exampleOfMergeTagLabel
    });
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  renderMergeTags() {
    var _a;
    const selectedElement = this.externalLibrary.querySelector(".selected");
    selectedElement && selectedElement.classList.remove("selected");
    if (this.selectedMergetag) {
      (_a = this.externalLibrary.querySelector(`[tag-value="${this.selectedMergetag}"]`)) == null ? void 0 : _a.classList.add("selected");
    }
    this.externalLibrary.style.visibility = "visible";
  }
  openMergeTagsLibrary(mergeTag, onDataSelectCallback) {
    this.selectedMergetag = mergeTag;
    this.renderMergeTags();
    this.dataSelectCallback = onDataSelectCallback;
  }
};
const externalMergetags = new distExports.ExtensionBuilder().addUiElement(DemoMergeTagsUiElementExtension).withLocalization({
  "en": {
    "Open merge tags": "Open merge tags"
  },
  "uk": {
    "Open merge tags": "Відкрити мерж теги"
  }
}).withUiElementTagRegistry(MergeTagsTagRegistry$1).build();
const ID$q = "custom-font-family-select";
const ORIGINAL_ID$1 = "original-font-family-select";
let TagRegistry$1 = class TagRegistry extends distExports.UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[ORIGINAL_ID$1] = uiElementsTagsMap[distExports.UIElementType.FONT_FAMILY_SELECT];
    uiElementsTagsMap[distExports.UIElementType.FONT_FAMILY_SELECT] = ID$q;
  }
};
let CustomFontFamilySelect$1 = class CustomFontFamilySelect extends distExports.UIElement {
  getId() {
    return ID$q;
  }
  onRender(container) {
    this.listener = this._onChange.bind(this);
    this.originalSelect = container.querySelector("#originalSelect");
    this.originalSelect.addEventListener("change", this.listener);
  }
  onAttributeUpdated(name, value) {
    this.originalSelect.setUIEAttribute(name, value);
    super.onAttributeUpdated(name, value);
  }
  onDestroy() {
    this.originalSelect.removeEventListener("change", this.listener);
  }
  _getDialogTemplate() {
    return `<div style="display: flex;
    flex-direction: column;
    width: 320px;
    border: 1px solid gray;
    padding: 10px;
    gap: 10px;
    background: lightgray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);">
      Name:
      <input id="name">
      CSS declaration:
      <input id="fontFamily">
      URL:
      <input id="url">
      <button id="confirm">OK</button>
    </div>`;
  }
  _showDialog() {
    this.dialog = document.createElement("div");
    this.dialog.innerHTML = this._getDialogTemplate();
    this.api.ignoreClickOutside(true);
    document.body.appendChild(this.dialog);
    this.dialog.querySelector("#confirm").addEventListener("click", () => this._submitDialog());
  }
  _submitDialog() {
    const newFont = {
      name: this.dialog.querySelector("#name").value,
      fontFamily: this.dialog.querySelector("#fontFamily").value,
      url: this.dialog.querySelector("#url").value
    };
    this.api.addCustomFont(newFont);
    this.dialog.remove();
    this.dialog = void 0;
    this.api.ignoreClickOutside(false);
  }
  _onChange(event) {
    if (event.target.value !== distExports.ADD_CUSTOM_FONT_OPTION) {
      this.api.onValueChanged(event.target.value);
    } else if (!this.dialog) {
      this._showDialog();
    }
  }
  getValue() {
    return this.originalSelect.value;
  }
  setValue(value) {
    this.originalSelect.value = value;
  }
  getTemplate() {
    const attrs = distExports.UEAttr.FONT_FAMILY_SELECT;
    return `<${ORIGINAL_ID$1} id="originalSelect" style="width: 100%;" ${attrs.addCustomFontOption}="+ Insert custom font"></${ORIGINAL_ID$1}>`;
  }
};
const fontFamilyExtension = new distExports.ExtensionBuilder().addUiElement(CustomFontFamilySelect$1).withUiElementTagRegistry(TagRegistry$1).build();
const ID$p = "extendedFontFamily";
let PanelRegistry$h = class PanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$p, 0);
  }
};
class ExtendedFontFamilyControl extends distExports.FontFamilyBuiltInControl {
  getId() {
    return ID$p;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
  getModificationDescription() {
    return new distExports.ModificationDescription("Extended font family control modification.");
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-font-family-applied");
  }
}
const fontFamilyControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedFontFamilyControl).withSettingsPanelRegistry(PanelRegistry$h).build();
const ID$o = "extendedBackground";
let PanelRegistry$g = class PanelRegistry2 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(ID$o, 0);
  }
};
class ExtendedBackgroundControl extends distExports.BackgroundColorBuiltInControl {
  getId() {
    return ID$o;
  }
  getLabels() {
    return {
      title: "Extended background control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-background-applied");
  }
}
const backgroundControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedBackgroundControl).withSettingsPanelRegistry(PanelRegistry$g).build();
const ID$n = "extendedTextColor";
let PanelRegistry$f = class PanelRegistry3 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$n, 0);
  }
};
class ExtendedTextColorControl extends distExports.TextColorBuiltInControl {
  getId() {
    return ID$n;
  }
  getLabels() {
    return {
      title: "Extended text color control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-color-applied");
  }
}
const textColorControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedTextColorControl).withSettingsPanelRegistry(PanelRegistry$f).build();
const ID$m = "extendedTextStyle";
let PanelRegistry$e = class PanelRegistry4 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$m, 0);
  }
};
class ExtendedTextStyleControl extends distExports.TextStyleBuiltInControl {
  getId() {
    return ID$m;
  }
  getLabels() {
    return {
      title: "Extended text style control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-style-applied");
  }
}
const textStyleControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedTextStyleControl).withSettingsPanelRegistry(PanelRegistry$e).build();
const ID$l = "extendedTextSize";
let PanelRegistry$d = class PanelRegistry5 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$l, 0);
  }
};
class ExtendedTextSizeControl extends distExports.TextSizeBuiltInControl {
  getId() {
    return ID$l;
  }
  getLabels() {
    return {
      title: "Extended text size control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-size-applied");
  }
}
const textSizeControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedTextSizeControl).withSettingsPanelRegistry(PanelRegistry$d).build();
const ID$k = "nestedControlExtension";
const BACKGROUND_CONTROL = "backgroundControl";
const BACKGROUND_SWITCHER = "backgroundSwitcher";
let PanelRegistry$c = class PanelRegistry6 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(ID$k, 0);
  }
};
class NestedControlExtension extends distExports.Control {
  getId() {
    return ID$k;
  }
  getTemplate() {
    const { LABEL, SWITCHER, NESTED_CONTROL } = distExports.UIElementType;
    return `
            <div>
                <${LABEL} ${distExports.UEAttr.LABEL.text}="Enable background control:"></${LABEL}>
                <${SWITCHER} ${distExports.UEAttr.SWITCHER.name}="${BACKGROUND_SWITCHER}" class="e2e-background-switcher"></${SWITCHER}>
            </div>
            <${NESTED_CONTROL} ${distExports.UEAttr.NESTED_CONTROL.name}="${BACKGROUND_CONTROL}" 
                               ${distExports.UEAttr.NESTED_CONTROL.controlId}="${distExports.BuiltInControlTypes.GENERAL.BACKGROUND_COLOR}">                               
            </{NESTED_CONTROL}>`;
  }
  onRender() {
    this.api.onValueChanged(BACKGROUND_SWITCHER, this._enableBackgroundControl.bind(this));
  }
  onTemplateNodeUpdated(node) {
    const backgroundApplied = !!node.getAttribute("bgcolor");
    this.api.updateValues({ [BACKGROUND_SWITCHER]: backgroundApplied });
    this.api.setVisibility(BACKGROUND_CONTROL, backgroundApplied);
  }
  _enableBackgroundControl(enable) {
    this.api.setVisibility(BACKGROUND_CONTROL, enable);
  }
}
const nestedBackgroundControl = new distExports.ExtensionBuilder().addControl(NestedControlExtension).withSettingsPanelRegistry(PanelRegistry$c).build();
const ID$j = "stateChangeSubscriberExtension";
const LABEL_NAME = "label";
const SWITCHER_NAME$1 = "switcher";
let PanelRegistry$b = class PanelRegistry7 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(ID$j, 0);
  }
};
class StateChangeSubscriberExtension extends distExports.Control {
  getId() {
    return ID$j;
  }
  getTemplate() {
    const { LABEL, SWITCHER } = distExports.UIElementType;
    return `<div class="e2e-mode-class-control">
                <${LABEL} ${distExports.UEAttr.LABEL.name}="${LABEL_NAME}"></${LABEL}>
                <${SWITCHER} ${distExports.UEAttr.SWITCHER.name}="${SWITCHER_NAME$1}"></${SWITCHER}>
            </div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME$1, this._toggleClass.bind(this));
    this.api.onEditorStatePropUpdated(distExports.EditorStatePropertyType.previewDeviceMode, () => this._updateForm());
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this._updateForm();
  }
  _updateForm() {
    this.api.updateValues({
      [LABEL_NAME]: this._getViewMode() === distExports.PreviewDeviceMode.DESKTOP ? "Set desktop class" : "Set mobile class",
      [SWITCHER_NAME$1]: this.link.hasClass(this._getClass())
    });
  }
  _getViewMode() {
    return this.api.getEditorState()[distExports.EditorStatePropertyType.previewDeviceMode];
  }
  _getClass() {
    return this._getViewMode() === distExports.PreviewDeviceMode.DESKTOP ? "extension-desktop-class" : "extension-mobile-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new distExports.ModificationDescription(`Class for ${this._getViewMode()} added`));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new distExports.ModificationDescription(`Class for ${this._getViewMode()} removed`));
    }
  }
}
const stateChangeSubscriber = new distExports.ExtensionBuilder().addControl(StateChangeSubscriberExtension).withSettingsPanelRegistry(PanelRegistry$b).build();
const ID$i = "variableModeExtendedControl";
let PanelRegistry$a = class PanelRegistry8 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(ID$i, 0);
  }
};
class VariableModeExtendedControl extends distExports.BackgroundColorBuiltInControl {
  getId() {
    return ID$i;
  }
  getLabels() {
    return {
      title: this._getViewMode() === distExports.PreviewDeviceMode.DESKTOP ? "Set desktop background" : "Set mobile background"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass(`${this._getViewMode()}-background-applied`);
  }
  _getViewMode() {
    return this.api.getEditorState()[distExports.EditorStatePropertyType.previewDeviceMode];
  }
}
const variableModeExtendedControl = new distExports.ExtensionBuilder().addControl(VariableModeExtendedControl).withSettingsPanelRegistry(PanelRegistry$a).build();
const CONTROL_ID = "reinitializedControlExtension";
const ELEMENT_ID = "reinitializedElementExtension";
const SWITCHER_NAME = "switcher";
let PanelRegistry$9 = class PanelRegistry9 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(CONTROL_ID, 0);
  }
};
class ReinitializedElement extends distExports.UIElement {
  getId() {
    return ELEMENT_ID;
  }
  onRender(container) {
    this._checkbox = container.querySelector("input");
    this._listener = this._onChange.bind(this);
    this._checkbox.addEventListener("change", this._listener);
  }
  onDestroy() {
    this._checkbox.removeEventListener("change", this._listener);
  }
  _onChange(event) {
    this.api.onValueChanged(event.target.checked);
  }
  getValue() {
    return this._checkbox.checked;
  }
  setValue(value) {
    this._checkbox.checked = value;
  }
  getTemplate() {
    return '<div class="event-id-switcher"><input type="checkbox" title="Add class"></div>';
  }
}
class ReinitializedControlExtension extends distExports.Control {
  getId() {
    return CONTROL_ID;
  }
  getTemplate() {
    return `<div class="e2e-reinitialized-control"><${ELEMENT_ID} ${distExports.UEAttr.DEFAULT.name}="${SWITCHER_NAME}"></${ELEMENT_ID}></div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME, this._toggleClass.bind(this));
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this.api.updateValues({ [SWITCHER_NAME]: this.link.hasClass(this._getClass()) });
  }
  _getClass() {
    return "test-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new distExports.ModificationDescription("Class added"));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new distExports.ModificationDescription("Class removed"));
    }
  }
}
const reinitializedExtension = new distExports.ExtensionBuilder().addControl(ReinitializedControlExtension).addUiElement(ReinitializedElement).withSettingsPanelRegistry(PanelRegistry$9).build();
let ExternalAiAssistant$1 = class ExternalAiAssistant {
  constructor() {
    __publicField(this, "externalAiAssistant");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalAiAssistant" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Update Text</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="padding: 10px">                            <label style="display: inline-block; width: 100px" for="text">Text</label>                            <textarea style="width: 500px; height: 500px" id="text"></textarea>                        </div>                    </div>                    <div style="padding: 20px">                        <button class="okButton">OK</button>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalAiAssistant = document.getElementById("externalAiAssistant");
    this.externalAiAssistant.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelector(".okButton").addEventListener("click", (e) => this.onOkClick(e));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onOkClick(e) {
    const text = this.externalAiAssistant.querySelector("#text").value;
    this.close();
    this.dataSelectCallback(text);
  }
  close() {
    this.externalAiAssistant.style.visibility = "hidden";
  }
  openAiAssistant({ value, onDataSelectCallback, onCancelCallback, type }) {
    this.externalAiAssistant.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalAiAssistant.querySelector("#text").value = value;
  }
};
const externalAiAssistant = new distExports.ExtensionBuilder().withExternalAiAssistant(ExternalAiAssistant$1).build();
const AVAILABLE_CONDITION_NAMES$3 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$3 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$3 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$3 = {
  name: AVAILABLE_CONDITION_NAMES$3[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$3[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS$3 = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS$3 = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS$3 = "dropdownConcatenation";
let ExternalDisplayConditions$3 = class ExternalDisplayConditions {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector("select." + identifierClass);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS$3).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS$3).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$3).value;
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$3;
    }
    const deleteActionClass = "condition-delete-action-" + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = '<td style="width: 150px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS$3) + '</td>                <td style="width: 110px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS$3) + '</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ' + deleteActionClass + '"></span></td>';
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS$3);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS$3, AVAILABLE_CONDITION_NAMES$3);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS$3);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS$3, AVAILABLE_CONDITION_OPERATIONS$3);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector("." + deleteActionClass).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getIsContextActionEnabled() {
    return false;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS$3)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$3, AVAILABLE_CONDITION_CONCATENATIONS$3);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$3).values = AVAILABLE_CONDITION_CONCATENATIONS$3;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$3).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$3);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES$3),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS$3),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
};
const externalDisplayConditions = new distExports.ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$3).build();
const AVAILABLE_CONDITION_NAMES$2 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$2 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$2 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$2 = {
  name: AVAILABLE_CONDITION_NAMES$2[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$2[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS$2 = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS$2 = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS$2 = "dropdownConcatenation";
let ExternalDisplayConditions$2 = class ExternalDisplayConditions2 {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector("select." + identifierClass);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS$2).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS$2).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).value;
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$2;
    }
    const deleteActionClass = "condition-delete-action-" + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = '<td style="width: 150px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS$2) + '</td>                <td style="width: 110px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS$2) + '</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ' + deleteActionClass + '"></span></td>';
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS$2);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS$2, AVAILABLE_CONDITION_NAMES$2);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS$2);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS$2, AVAILABLE_CONDITION_OPERATIONS$2);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector("." + deleteActionClass).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getIsContextActionEnabled() {
    return true;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS$2)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2, AVAILABLE_CONDITION_CONCATENATIONS$2);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).values = AVAILABLE_CONDITION_CONCATENATIONS$2;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$2).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$2);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES$2),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS$2),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
};
const externalDisplayConditionsContextMenu = new distExports.ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$2).build();
const ID$h = "extendedBlockPaddings_text";
let PanelRegistry$8 = class PanelRegistry10 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$h, 0);
  }
};
class ExtendedBlockPaddingsControl extends distExports.BlockPaddingsBuiltInControl {
  getId() {
    return ID$h;
  }
  getLabels() {
    return {
      formName: {
        "DESKTOP": this.api.translate("Extended block paddings")
      }
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map(
      (node) => modifier.modifyHtml(node).setClass("custom-paddings-applied")
    );
    return modifier;
  }
}
const extendedBlockPaddingsControl = new distExports.ExtensionBuilder().addControl(ExtendedBlockPaddingsControl).withLocalization({
  "en": {
    "Extended block paddings": "EN Extended text block paddings"
  },
  "uk": {
    "Extended block paddings": "Зовнішні відступи блоку текст"
  }
}).withSettingsPanelRegistry(PanelRegistry$8).build();
const ID$g = "extendedStructurePaddings";
let PanelRegistry$7 = class PanelRegistry11 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.STRIPE][0].addControl(ID$g, 0);
  }
};
class ExtendedStructurePaddingsControl extends distExports.StructurePaddingsBuiltInControl {
  getId() {
    return ID$g;
  }
  getLabels() {
    return {
      formName: {
        "DESKTOP": this.api.translate("Extended structure paddings")
      }
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-structure-paddings-applied"));
    return modifier;
  }
}
const extendedStructurePaddingsControl = new distExports.ExtensionBuilder().addControl(ExtendedStructurePaddingsControl).withLocalization({ "en": {
  "Extended structure paddings": "EN Extended structure paddings"
} }).withSettingsPanelRegistry(PanelRegistry$7).build();
const ID$f = "extendedButtonInternalIndentsControl";
let PanelRegistry$6 = class PanelRegistry12 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.STRIPE][0].addControl(ID$f, 0);
  }
};
class ExtendedButtonInternalIndents extends distExports.ButtonInternalIndentsBuiltInControl {
  getId() {
    return ID$f;
  }
  getLabels() {
    return {
      formName: {
        "DESKTOP": this.api.translate("Extended buttons internal indents")
      }
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-internal-indents-applied"));
    return modifier;
  }
}
const extendedButtonInternalIndentsControl = new distExports.ExtensionBuilder().addControl(ExtendedButtonInternalIndents).withLocalization({ "en": {
  "Extended buttons internal indents": "EN Extended buttons internal indents"
} }).withSettingsPanelRegistry(PanelRegistry$6).build();
let ExternalVideoLibrary$1 = class ExternalVideoLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "videoSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalVideoLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; ">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Videos Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/23121555584914821.png"                                 title="Create Easy & Quick Event Reminder Using Template for Food Industry"                                 urlVideo="https://www.youtube.com/watch?v=rNmAdmOMp0Y"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1641555585106902.png"                                 title="How to Get Email Mobile & Browser Preview with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=R4NXtC3h598"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1881555585513981"                                 title="Stripo.email editor"                                 urlVideo="https://www.youtube.com/watch?v=ryqOEPk51Lg"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/24481555585355917"                                 title="How to Add Menu in Email with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=XPFWthaa35Q"                            />                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalVideoLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onSelectImage.bind(this));
  }
  onSelectImage(e) {
    if (!e.target.matches("img")) {
      return;
    }
    let image = e.target;
    let urlImage = image.getAttribute("src");
    let urlVideo = image.getAttribute("urlVideo");
    let hasCustomButton = image.getAttribute("hasButton");
    let originalName = image.getAttribute("title");
    let exampleOfCallbackVideoObject = {
      originalVideoName: originalName,
      originalImageName: originalName,
      urlImage,
      urlVideo,
      hasCustomButton
    };
    this.videoSelectCallback(exampleOfCallbackVideoObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  openExternalVideosLibraryDialog(currentImageUrl, onVideoSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.videoSelectCallback = onVideoSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
};
const externalVideosLibrary = new distExports.ExtensionBuilder().withExternalVideosLibrary(ExternalVideoLibrary$1).build();
const ID$e = "extendedButtonColor";
let PanelRegistry$5 = class PanelRegistry13 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON][0].addControl(ID$e, 0);
  }
};
class ExtendedButtonColorControl extends distExports.ButtonColorBuiltInControl {
  getId() {
    return ID$e;
  }
  getLabels() {
    return {
      title: "Extended button color control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-button-color-applied");
  }
}
const buttonColorControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedButtonColorControl).withSettingsPanelRegistry(PanelRegistry$5).build();
const ID$d = "extendedButtonBorder";
let PanelRegistry$4 = class PanelRegistry14 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(distExports.SettingsTab.STYLES, [ID$d])
    ];
  }
};
class ExtendedButtonBorderControl extends distExports.ButtonBorderBuiltInControl {
  getId() {
    return ID$d;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended border"),
      titleHint: this.api.translate("Extended border hint"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
}
const buttonBorderControlExtension = new distExports.ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$4).addControl(ExtendedButtonBorderControl).build();
const ID$c = "extendedLinkColor";
let PanelRegistry$3 = class PanelRegistry15 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT][0].addControl(ID$c, 0);
  }
};
class ExtendedLinkColorControl extends distExports.LinkColorBuiltInControl {
  getId() {
    return ID$c;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended link color control")
    };
  }
}
const linkColorControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedLinkColorControl).withSettingsPanelRegistry(PanelRegistry$3).build();
const GENERAL_BACKGROUND_IMAGE_ID = "extendedGeneralBackgroundImage";
let ExtendedBackgroundImageControl$1 = class ExtendedBackgroundImageControl extends distExports.BackgroundImageBuiltInControl {
  getId() {
    return GENERAL_BACKGROUND_IMAGE_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom Background Image"),
      titleHint: this.api.translate("Custom Background Image titleHint"),
      repeat: this.api.translate("Custom Background Image Repeat"),
      repeatHint: this.api.translate("Custom Background Image repeatHint"),
      horizontalPosition: this.api.translate("Custom Horizontal Position"),
      verticalPosition: this.api.translate("Custom Vertical Position"),
      backgroundWidth: this.api.translate("Custom Background Width"),
      backgroundHeight: this.api.translate("Custom Background Height")
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-background-applied");
  }
};
const ID$b = "extendedGeneralBackgroundImage";
let PanelRegistry$2 = class PanelRegistry16 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2.GENERAL_STYLES[0] = new distExports.SettingsPanelTab("GENERAL_SETTINGS", [GENERAL_BACKGROUND_IMAGE_ID]);
  }
};
class ExtendedBackgroundImageControl2 extends distExports.BackgroundImageBuiltInControl {
  getId() {
    return ID$b;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom Background Image"),
      titleHint: this.api.translate("Custom Background Image titleHint"),
      repeat: this.api.translate("Custom Background Image Repeat"),
      repeatHint: this.api.translate("Custom Background Image repeatHint"),
      horizontalPosition: this.api.translate("Custom Horizontal Position"),
      verticalPosition: this.api.translate("Custom Vertical Position"),
      backgroundWidth: this.api.translate("Custom Background Width"),
      backgroundHeight: this.api.translate("Custom Background Height")
    };
  }
}
const generalBackgroundImageControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedBackgroundImageControl2).withSettingsPanelRegistry(PanelRegistry$2).build();
const ID$a = "extendedButtonText";
let ButtonPanelRegistry$4 = class ButtonPanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.SETTINGS,
        [
          ID$a
        ]
      )
    ];
  }
};
class ExtendedButtonTextControl extends distExports.ButtonTextBuiltInControl {
  getId() {
    return ID$a;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button text control")
    };
  }
}
const buttonTextControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedButtonTextControl).withSettingsPanelRegistry(ButtonPanelRegistry$4).build();
const ID$9 = "extendedStructureBorder";
let PanelRegistry$1 = class PanelRegistry17 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.STRUCTURE][0].addControl(ID$9, 0);
  }
};
class ExtendedStructureBorderControl extends distExports.StructureBorderBuiltInControl {
  getId() {
    return ID$9;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended border"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleTitle: this.api.translate("Custom style label"),
      borderStyleHint: this.api.translate("Custom style hint")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const closestTable = root.closest("table");
    return modifier.modifyHtml(closestTable).setClass("custom-structure-border-applied");
  }
}
const structureBorderControlExtension = new distExports.ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$1).addControl(ExtendedStructureBorderControl).build();
const ID$8 = "extendedTextLineSpacing";
class PanelRegistry18 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_TEXT] = [
      new distExports.SettingsPanelTab(distExports.SettingsTab.SETTINGS, [ID$8])
    ];
  }
}
class ExtendedTextLineSpacingControl extends distExports.TextLineSpacingBuiltInControl {
  getId() {
    return ID$8;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended line spacing")
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-text-line-spacing-applied");
  }
}
const textLineSpacingControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedTextLineSpacingControl).withSettingsPanelRegistry(PanelRegistry18).build();
const ID$7 = "extendedButtonAlign";
let ButonPanelRegistry$1 = class ButonPanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.SETTINGS,
        [
          ID$7
        ]
      )
    ];
  }
};
class ExtendedButtonAlignControl extends distExports.ButtonAlignBuiltInControl {
  getId() {
    return ID$7;
  }
  getLabels() {
    return {
      desktopTitle: this.api.translate("Extended button align desktop"),
      mobileTitle: this.api.translate("Extended button align mobile")
    };
  }
}
const buttonAlignControlExtension = new distExports.ExtensionBuilder().addControl(ExtendedButtonAlignControl).withSettingsPanelRegistry(ButonPanelRegistry$1).build();
const ID$6 = "extendedButtonBorderRadius";
class ButonPanelRegistry2 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          ID$6
        ]
      )
    ];
  }
}
class ExtendedButtonBorderRadiusControl extends distExports.ButtonBorderRadiusBuiltInControl {
  getId() {
    return ID$6;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button border radius"),
      titleHint: this.api.translate("Extended hint border radius")
    };
  }
}
const buttonBorderRadiusExtension = new distExports.ExtensionBuilder().addControl(ExtendedButtonBorderRadiusControl).withSettingsPanelRegistry(ButonPanelRegistry2).build();
const ID$5 = "builtInButtonTextColor";
let ButtonPanelRegistry$3 = class ButtonPanelRegistry2 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          ID$5
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonTextColor extends distExports.ButtonFontColorBuiltInControl {
  getId() {
    return ID$5;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in text color")
    };
  }
}
const extensionBuiltInButtonTextColor = new distExports.ExtensionBuilder().addControl(ExtensionBuiltInButtonTextColor).withSettingsPanelRegistry(ButtonPanelRegistry$3).build();
const ID$4 = "builtInButtonHoverColor";
let ButtonPanelRegistry$2 = class ButtonPanelRegistry3 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          ID$4
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonHoverColor extends distExports.ButtonHoverColorBuiltInControl {
  getId() {
    return ID$4;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover color")
    };
  }
}
const extensionBuiltInButtonHoverColor = new distExports.ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverColor).withSettingsPanelRegistry(ButtonPanelRegistry$2).build();
const ID$3 = "builtInButtonBorderHover";
let ButtonPanelRegistry$1 = class ButtonPanelRegistry4 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          ID$3
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonBorderHover extends distExports.ButtonHoverBorderColorBuiltInControl {
  getId() {
    return ID$3;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover border color")
    };
  }
}
const extensionBuiltInButtonBorderHover = new distExports.ExtensionBuilder().addControl(ExtensionBuiltInButtonBorderHover).withSettingsPanelRegistry(ButtonPanelRegistry$1).build();
const ID$2 = "builtInButtonHoverTextColor";
class ButtonPanelRegistry5 extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          ID$2
        ]
      )
    ];
  }
}
class ExtensionBuiltInButtonHoverTextColor extends distExports.ButtonHoverTextColorBuiltInControl {
  getId() {
    return ID$2;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover text color")
    };
  }
}
const extensionBuiltInButtonHoverTextColor = new distExports.ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverTextColor).withSettingsPanelRegistry(ButtonPanelRegistry5).build();
class SimpleBlockRenderer extends distExports.BlockRenderer {
  /**
   * Generates a preview HTML string for the block.
   * It replaces the dynamic merge tag `#{NAME}` with the static default value from editor configuration or 'World'
   * to provide a representative preview in the editor UI.
   * @param {ImmutableHtmlNode} node The immutable HTML node representing the block.
   * @returns {string} The modified HTML string for preview.
   */
  getPreviewHtml(node) {
    var _a, _b;
    return node.getOuterHTML().replace(`#{NAME}`, ((_b = (_a = this.api.getEditorConfig()) == null ? void 0 : _a.extensionBlockParams) == null ? void 0 : _b.defVal) || "World");
  }
}
const CONTEXT_ACTION_MAGIC_BUTTON_ID = "simple-block-magic-button";
class SimpleBlockContextAction extends distExports.ContextAction {
  /**
   * Returns the unique identifier for this context action.
   * @returns {string} The unique ID.
   */
  getId() {
    return CONTEXT_ACTION_MAGIC_BUTTON_ID;
  }
  /**
   * Returns the CSS class name for the icon of this context action.
   * @returns {string} The icon class name.
   */
  getIconClass() {
    return "plus";
  }
  /**
   * Returns the display label for this context action.
   * Uses the translation API to support internationalization.
   * @returns {string} The translated label.
   */
  getLabel() {
    return this.api.translate("Magic button");
  }
  /**
   * Handles the click event when the context action is selected.
   * Shows an alert with the outer HTML of the clicked block node.
   * @param {ImmutableHtmlNode} node The HTML node the action is being performed on.
   */
  onClick(node) {
    alert(`Magic button clicked. Block content: ${node.getOuterHTML()}`);
  }
}
const BLOCK_SIMPLE_ID = "simple-block";
class SimpleBlock extends distExports.Block {
  /**
   * Returns the unique identifier for the block.
   * @returns {string} The unique identifier for this block.
   */
  getId() {
    return BLOCK_SIMPLE_ID;
  }
  /**
   * Determines if the block is enabled in the current editor context.
   * @returns {boolean}
   */
  isEnabled() {
    return true;
  }
  /**
   * Returns the icon representation for the block in the blocks panel.
   * @returns {string} The icon class name.
   */
  getIcon() {
    return "new-window";
  }
  /**
   * Returns the display name of the block shown in the blocks panel.
   * @returns {string} The translated display name.
   */
  getName() {
    return this.api.translate("Simple block");
  }
  /**
   * Returns the descriptive text for the block shown in the blocks panel.
   * @returns {string} The translated description.
   */
  getDescription() {
    return this.api.translate("Simple block description");
  }
  /**
   * Returns an array of context action IDs that apply to this block.
   * Removes the standard "copy" action and adds a custom magic button action to the context menu.
   * @returns {string[]} An array of context action IDs.
   */
  getContextActionsIds() {
    return [
      distExports.ContextActionType.MOVE,
      distExports.ContextActionType.REMOVE,
      CONTEXT_ACTION_MAGIC_BUTTON_ID
    ];
  }
  /**
   * Returns a custom renderer class for the block, if needed.
   * @returns {Class<SimpleBlockRenderer>} The custom renderer class.
   */
  getCustomRenderer() {
    return SimpleBlockRenderer;
  }
  /**
   * Returns an HTML string template that defines the structure of the block.
   * @returns {string} The HTML template string.
   */
  getTemplate() {
    return `
            <td align="left">
                <p>
                    Hello, #{NAME}
                </p>
            </td>
        `;
  }
  /**
   * Lifecycle hook called when the document is initialized.
   * This example removes any duplicate instances of this block from the document on init.
   * @returns {TemplateModifier | undefined} A modifier instance if changes were made, otherwise undefined.
   */
  onDocumentInit() {
    const blocks = this.api.getDocumentRoot().querySelectorAll(`.${this.getUniqueBlockClassname()}`);
    this.api.setViewOnly(!!blocks.length);
    let modifier = void 0;
    if (blocks.length > 1) {
      modifier = this.api.getDocumentModifier();
      for (let i = 1; i < blocks.length; i++) {
        modifier = modifier.modifyHtml(blocks[i]).delete();
      }
      modifier.apply(new distExports.ModificationDescription("Removed extra simple blocks on init"));
    }
    return modifier;
  }
  /**
   * Lifecycle hook called when the block is dropped into the editor.
   * This example allows only one instance of this block per template by setting it to view-only.
   * @param {ImmutableHtmlNode} node - The node that was dropped.
   * @returns {TemplateModifier | undefined} Always returns undefined in this example.
   */
  onDrop(node) {
    this.api.setViewOnly(true);
    return void 0;
  }
  /**
   * Lifecycle hook called when the block is deleted.
   * This example allows a new instance of the block to be added after deletion by setting view-only to false.
   * @param {ImmutableHtmlNode} node - The node that was deleted.
   * @returns {TemplateModifier | undefined} Always returns undefined in this example.
   */
  onDelete(node) {
    this.api.setViewOnly(false);
    return void 0;
  }
}
const en$1 = {
  "Simple block": "Simple block",
  "Simple block description": "An example of block extension",
  "Simple block settings advanced": "Advanced",
  "Background color": "Background color",
  "Set background color to {color}": "Set background color to {color}",
  "Use brand color": "Use brand color"
};
const uk$1 = {
  "Simple block": "Простий блок",
  "Simple block description": "Приклад власного блоку розширення",
  "Simple block settings advanced": "Просунуті",
  "Background color": "Колір фону",
  "Set background color to {color}": "Встановлено колір фону у {color}",
  "Use brand color": "Колір бренду"
};
const MessageStyle = {
  DANGER: "error",
  SUCCESS: "success",
  WARNING: "warn",
  INFO: "info"
};
const CONTROL_BUILD_IN_UI_ELEMENTS_DEMO_ID = "ui-elements-demo";
const MESSAGE_ELEMENT = "message";
const TOGGLEABLE_CONTAINER = "toggleable";
const RADIO_BUTTONS_ELEMENT = "radioButtons";
const SELECT_ELEMENT = "select";
const CHECK_BUTTONS_ELEMENT = "checkButtons";
const CHECKBOX_ELEMENT = "checkbox";
const SWITCHER_ELEMENT = "switcher";
const BUTTON_ELEMENT = "button";
const COLOR_ELEMENT = "color";
const DATEPICKER_ELEMENT = "datepicker";
const COUNTER_ELEMENT = "counter";
const TEXT_ELEMENT = "text";
const TEXT_AREA_ELEMENT = "textArea";
class BuildInUIElementsDemoControl extends distExports.Control {
  /**
   * Returns the unique identifier for this control.
   * @returns {string} The control's unique ID.
   */
  getId() {
    return CONTROL_BUILD_IN_UI_ELEMENTS_DEMO_ID;
  }
  /**
   * Generates the HTML template for a Label UI element.
   * @private
   * @param {string} text - The text content of the label.
   * @param {string} [name=Math.random()] - The name attribute for the label (defaults to a random string).
   * @returns {string} The HTML string for the label element.
   */
  _getLabel(text, name = `${Math.random()}`) {
    return `<${distExports.UIElementType.LABEL} ${distExports.UEAttr.LABEL.text}="${text}" ${distExports.UEAttr.LABEL.name}="${name}"></${distExports.UIElementType.LABEL}>`;
  }
  /**
   * Generates the HTML template for the Message UI element section.
   * @private
   * @returns {string} The HTML string for the message element.
   */
  _getMessage() {
    return `
        <b>Message element allows you to provide user with required information.</b>
        ${this._getLabel("User action:")}
        <${distExports.UIElementType.MESSAGE} ${distExports.UEAttr.MESSAGE.name}="${MESSAGE_ELEMENT}" ${distExports.UEAttr.MESSAGE.type}="${MessageStyle.INFO}"></${distExports.UIElementType.MESSAGE}>
    `;
  }
  /**
   * Generates the HTML template for a Radio Item UI element.
   * @private
   * @param {string} text - The text and hint for the radio item.
   * @param {string} value - The value associated with the radio item.
   * @returns {string} The HTML string for the radio item element.
   */
  _getRadioButton(text, value) {
    return `<${distExports.UIElementType.RADIO_ITEM} ${distExports.UEAttr.RADIO_ITEM.hint}="${text}" ${distExports.UEAttr.RADIO_ITEM.text}="${text}" ${distExports.UEAttr.RADIO_ITEM.value}="${value}"></${distExports.UIElementType.RADIO_ITEM}>`;
  }
  /**
   * Generates the HTML template for the Radio Buttons UI element section.
   * @private
   * @returns {string} The HTML string for the radio buttons element.
   */
  _getRadioButtons() {
    return `
      <b>Radio buttons allow you to choose one item from the list of options.</b>
      ${this._getLabel("Select message style:")}
      <${distExports.UIElementType.RADIO_BUTTONS} ${distExports.UEAttr.RADIO_BUTTONS.name}="${RADIO_BUTTONS_ELEMENT}">
          ${Object.keys(MessageStyle).map((key) => this._getRadioButton(key, MessageStyle[key])).join("")}
      </${distExports.UIElementType.RADIO_BUTTONS}>
    `;
  }
  /**
   * Generates the HTML template for a Select Item UI element.
   * @private
   * @param {string} text - The text displayed for the select item.
   * @param {string} value - The value associated with the select item.
   * @returns {string} The HTML string for the select item element.
   */
  _getSelectItem(text, value) {
    return `<${distExports.UIElementType.SELECT_ITEM} ${distExports.UEAttr.SELECT_ITEM.text}="${text}" ${distExports.UEAttr.SELECT_ITEM.value}="${value}"></${distExports.UIElementType.SELECT_ITEM}>`;
  }
  /**
   * Generates the HTML template for the Select UI element section.
   * Allows multi-selection.
   * @private
   * @returns {string} The HTML string for the select element.
   */
  _getSelect() {
    return `
      <b>Select element allows you to choose one or several items from the list of options.</b>
        ${this._getLabel("Select message style:")}
        <${distExports.UIElementType.SELECTPICKER} ${distExports.UEAttr.SELECTPICKER.name}="${SELECT_ELEMENT}" ${distExports.UEAttr.SELECTPICKER.multiSelect}="true">
            ${Object.keys(MessageStyle).map((key) => this._getSelectItem(key, MessageStyle[key])).join("")}
        </${distExports.UIElementType.SELECTPICKER}>
    `;
  }
  /**
   * Generates the HTML template for a Check Item UI element.
   * @param {string} name - The text and hint for the check item.
   * @param {string} value - The value associated with the check item.
   * @returns {string} The HTML string for the check item element.
   */
  getCheckItem(name, value) {
    return `<${distExports.UIElementType.CHECK_ITEM} ${distExports.UEAttr.CHECK_ITEM.hint}="${name}" ${distExports.UEAttr.CHECK_ITEM.text}="${name}" ${distExports.UEAttr.CHECK_ITEM.value}="${value}"></${distExports.UIElementType.CHECK_ITEM}>`;
  }
  /**
   * Generates the HTML template for the Check Buttons UI element section.
   * @private
   * @returns {string} The HTML string for the check buttons element.
   */
  _getCheckButtons() {
    return `
      <b>CheckButtons are similar to RadioButtons but also allow to select several items.</b>
        ${this._getLabel("Select some items:")}
        <${distExports.UIElementType.CHECK_BUTTONS} ${distExports.UEAttr.CHECK_BUTTONS.name}="${CHECK_BUTTONS_ELEMENT}">
            ${["one", "two", "three"].map((key) => this.getCheckItem(key, key)).join("")}
        </${distExports.UIElementType.CHECK_BUTTONS}>
    `;
  }
  /**
   * Generates the HTML template for the Checkbox UI element section.
   * @private
   * @returns {string} The HTML string for the checkbox element.
   */
  _getCheckbox() {
    return `
      <b>Checkbox allows you to switch boolean state.</b>
      <${distExports.UIElementType.CHECKBOX} ${distExports.UEAttr.CHECKBOX.caption}="Disable inputs above:" ${distExports.UEAttr.CHECKBOX.name}="${CHECKBOX_ELEMENT}"></${distExports.UIElementType.CHECKBOX}>
    `;
  }
  /**
   * Generates the HTML template for the Switcher UI element section.
   * @private
   * @returns {string} The HTML string for the switcher element.
   */
  _getSwitcher() {
    return `
      <b>Switcher allows you to switch boolean state too.</b>
      ${this._getLabel("Display inputs above:")}
      <${distExports.UIElementType.SWITCHER} ${distExports.UEAttr.SWITCHER.name}="${SWITCHER_ELEMENT}"></${distExports.UIElementType.SWITCHER}>
    `;
  }
  /**
   * Generates the HTML template for the Button UI element section.
   * @private
   * @returns {string} The HTML string for the button element.
   */
  _getButton() {
    return `
      <b>Button allows you to perform single action.</b>
      ${this._getLabel("Clear message area:")}
      <${distExports.UIElementType.BUTTON} ${distExports.UEAttr.BUTTON.name}="${BUTTON_ELEMENT}" ${distExports.UEAttr.BUTTON.caption}="DO IT"></${distExports.UIElementType.BUTTON}>
    `;
  }
  /**
   * Generates the HTML template for the Color Picker UI element section.
   * @private
   * @returns {string} The HTML string for the color picker element.
   */
  _getColor() {
    return `
      <b>Colorpicker allows you to select color from the default and custom palettes.</b>
      ${this._getLabel("Select color:")}
      <${distExports.UIElementType.COLOR} ${distExports.UEAttr.COLOR.name}="${COLOR_ELEMENT}"></${distExports.UIElementType.COLOR}>
    `;
  }
  /**
   * Generates the HTML template for the Date Picker UI element section.
   * @private
   * @returns {string} The HTML string for the date picker element.
   */
  _getDatepicker() {
    return `
      <b>Datepicker allows to select date.</b>
      ${this._getLabel("Select date:")}
      <${distExports.UIElementType.DATEPICKER} ${distExports.UEAttr.DATEPICKER.name}="${DATEPICKER_ELEMENT}"></${distExports.UIElementType.DATEPICKER}>
    `;
  }
  /**
   * Generates the HTML template for the Counter UI element section.
   * @private
   * @returns {string} The HTML string for the counter element.
   */
  _getCounter() {
    return `
      <b>Counter allows to input numeric value.</b>
      ${this._getLabel("Pick a number between 1 and 10:")}
      <${distExports.UIElementType.COUNTER} ${distExports.UEAttr.COUNTER.name}="${COUNTER_ELEMENT}" ${distExports.UEAttr.COUNTER.minValue}="1" ${distExports.UEAttr.COUNTER.maxValue}="10" ${distExports.UEAttr.COUNTER.step}="1"></${distExports.UIElementType.COUNTER}>
    `;
  }
  /**
   * Generates the HTML template for the Text Input UI element section.
   * @private
   * @returns {string} The HTML string for the text input element.
   */
  _getText() {
    return `
      <b>Text allows you to input string value.</b>
      ${this._getLabel("What is your name?")}
      <${distExports.UIElementType.TEXT} ${distExports.UEAttr.TEXT.name}="${TEXT_ELEMENT}" ${distExports.UEAttr.TEXT.placeholder}="Enter your name here."></${distExports.UIElementType.TEXT}>
    `;
  }
  /**
   * Generates the HTML template for the Text Area UI element section.
   * @private
   * @returns {string} The HTML string for the text area element.
   */
  _getTextArea() {
    return `
      <b>Text area allows you to input multi-line text.</b>
      ${this._getLabel("List top 1 of your favourite dinosaurs.", "dinoLabel")}
      <${distExports.UIElementType.TEXTAREA} ${distExports.UEAttr.TEXTAREA.name}="${TEXT_AREA_ELEMENT}" ${distExports.UEAttr.TEXTAREA.placeholder}="Dinosaurs go here."></${distExports.UIElementType.TEXTAREA}>
    `;
  }
  /**
   * Returns the HTML template string that defines the structure of this control.
   * It assembles the various UI element sections generated by helper methods.
   * @returns {string} The HTML template for the control.
   */
  getTemplate() {
    return `
    <div class="e2e-elements-container">
        ${this._getMessage()}    
        <hr>
        <div ${distExports.UEAttr.DEFAULT.name}="${TOGGLEABLE_CONTAINER}">
          ${this._getRadioButtons()}    
          <hr>
          ${this._getSelect()}        
          <hr>
          ${this._getCheckButtons()}
          <hr>    
          ${this._getButton()}        
          <hr>
          ${this._getCheckbox()}
          <hr>               
        </div>
        ${this._getSwitcher()}      
        <hr>    
        ${this._getColor()}      
        <hr>    
        ${this._getDatepicker()}      
        <hr>    
        ${this._getCounter()}      
        <hr>    
        ${this._getText()}      
        <hr>    
        ${this._getTextArea()}
    </div>
    `;
  }
  /**
   * Called after the control is rendered in the settings panel.
   * Initializes the form values and sets up listeners for value changes on the UI elements.
   */
  onRender() {
    this._setFormValues();
    this._listenToFormUpdates();
  }
  /**
   * Sets the initial values for the UI elements in the control.
   * @private
   */
  _setFormValues() {
    this.api.updateValues({
      [MESSAGE_ELEMENT]: "Interact with inputs to perform an action.",
      [RADIO_BUTTONS_ELEMENT]: MessageStyle.INFO,
      [SELECT_ELEMENT]: Object.values(MessageStyle),
      [CHECK_BUTTONS_ELEMENT]: { one: true },
      [CHECKBOX_ELEMENT]: false,
      [SWITCHER_ELEMENT]: true,
      [COLOR_ELEMENT]: "#008000",
      [DATEPICKER_ELEMENT]: /* @__PURE__ */ new Date(),
      [COUNTER_ELEMENT]: 1
    });
  }
  /**
   * Registers callback functions to be executed when the values of specific UI elements change.
   * @private
   */
  _listenToFormUpdates() {
    this.api.onValueChanged(RADIO_BUTTONS_ELEMENT, (value) => this._onRadioButtonsChange(value));
    this.api.onValueChanged(SELECT_ELEMENT, (value) => this._onSelectChange(value));
    this.api.onValueChanged(CHECK_BUTTONS_ELEMENT, (value) => this._onCheckButtonsChange(value));
    this.api.onValueChanged(BUTTON_ELEMENT, () => this._onButtonClick());
    this.api.onValueChanged(CHECKBOX_ELEMENT, (value) => this._onCheckboxChange(value));
    this.api.onValueChanged(SWITCHER_ELEMENT, (value) => this._onSwitcherChange(value));
    this.api.onValueChanged(COLOR_ELEMENT, (value) => this._onColorChange(value));
    this.api.onValueChanged(DATEPICKER_ELEMENT, (value) => this._onDateChange(value));
    this.api.onValueChanged(COUNTER_ELEMENT, (value) => this._onCounterChange(value));
    this.api.onValueChanged(TEXT_ELEMENT, (value) => this._onTextChange(value));
    this.api.onValueChanged(TEXT_AREA_ELEMENT, (value) => this._onTextAreaChange(value));
  }
  /**
   * Updates the content of the message UI element.
   * @private
   * @param {string} message - The new message content (HTML allowed).
   * @param {boolean} [overwrite=false] - If true, replaces the existing message; otherwise, appends.
   */
  _updateMessage(message, overwrite = false) {
    const previousMessages = overwrite ? "" : this.api.getValues()[MESSAGE_ELEMENT];
    this.api.updateValues({
      [MESSAGE_ELEMENT]: `${previousMessages ? `${previousMessages}<br>` : ""}${message}`
    });
  }
  /**
   * Handles changes to the Radio Buttons element.
   * Updates the message type and displays a confirmation message.
   * @private
   * @param {string} value - The selected radio button value.
   */
  _onRadioButtonsChange(value) {
    this.api.setUIEAttribute(MESSAGE_ELEMENT, distExports.UEAttr.MESSAGE.type, value);
    this._updateMessage(`<b>Radio item selected</b>: '${value}'`);
  }
  /**
   * Handles changes to the Select element.
   * Updates the available options in the Radio Buttons based on the selection
   * and displays a confirmation message.
   * @private
   * @param {string[]} value - An array of selected values.
   */
  _onSelectChange(value) {
    this.api.setUIEAttribute(
      RADIO_BUTTONS_ELEMENT,
      distExports.UEAttr.RADIO_BUTTONS.buttons,
      Object.keys(MessageStyle).filter((key) => value.includes(MessageStyle[key])).map((key) => ({
        [distExports.UEAttr.RADIO_ITEM.hint]: key,
        [distExports.UEAttr.RADIO_ITEM.text]: key,
        [distExports.UEAttr.RADIO_ITEM.value]: MessageStyle[key]
      }))
    );
    this._updateMessage(`<b>Select items selected</b>: '${value.join(", ")}'`);
  }
  /**
   * Handles changes to the Check Buttons element.
   * Displays a confirmation message showing the selected items.
   * @private
   * @param {Object<string, boolean>} value - An object where keys are item values and values are their checked state.
   */
  _onCheckButtonsChange(value) {
    this._updateMessage(`<b>Check buttons selected</b>: '${JSON.stringify(value).replace(/"/g, "")}'`);
  }
  /**
   * Handles changes to the Checkbox element.
   * Enables/disables other input elements based on the checkbox state and displays a confirmation message.
   * @private
   * @param {boolean} value - The checked state of the checkbox.
   */
  _onCheckboxChange(value) {
    this._updateMessage(`<b>Checkbox changed</b>: '${value}'`);
    this.api.setUIEAttribute(RADIO_BUTTONS_ELEMENT, distExports.UEAttr.RADIO_BUTTONS.disabled, value);
    this.api.setUIEAttribute(SELECT_ELEMENT, distExports.UEAttr.SELECTPICKER.disabled, value);
    this.api.setUIEAttribute(CHECK_BUTTONS_ELEMENT, distExports.UEAttr.CHECK_BUTTONS.disabled, value);
    this.api.setUIEAttribute(BUTTON_ELEMENT, distExports.UEAttr.BUTTON.disabled, value);
  }
  /**
   * Handles changes to the Switcher element.
   * Shows/hides a container based on the switcher state and displays a confirmation message.
   * @private
   * @param {boolean} value - The state of the switcher (true for on, false for off).
   */
  _onSwitcherChange(value) {
    this._updateMessage(`<b>Switcher changed</b>: '${value}'`);
    this.api.setVisibility(TOGGLEABLE_CONTAINER, value);
  }
  /**
   * Handles clicks on the Button element.
   * Clears the message area.
   * @private
   */
  _onButtonClick() {
    this._updateMessage(`All gone!`, true);
  }
  /**
   * Handles changes to the Color Picker element.
   * Displays the selected color value in a message.
   * @private
   * @param {string} value - The selected color value (e.g., '#RRGGBB').
   */
  _onColorChange(value) {
    this._updateMessage(`<b>Color selected</b>: '<span style="color: ${value}; background: #FFFFFF; font-weight: bold;">${value}</span>'`);
  }
  /**
   * Handles changes to the Date Picker element.
   * Displays the selected date in a message.
   * @private
   * @param {Date} value - The selected Date object.
   */
  _onDateChange(value) {
    this._updateMessage(`<b>Date selected</b>: '${value.toLocaleDateString()}'`);
  }
  /**
   * Handles changes to the Counter element.
   * Displays the selected number (with some easter eggs) and updates a related label.
   * @private
   * @param {number} value - The current value of the counter.
   */
  _onCounterChange(value) {
    let choice = value;
    if (value === 6) {
      choice = "😱";
    }
    if (value === 9) {
      choice = "";
    }
    this._updateMessage(`<b>You've chosen</b>: '${choice}'`);
    this.api.setUIEAttribute("dinoLabel", distExports.UEAttr.LABEL.text, `List top ${value} of your favourite dinosaurs.`);
  }
  /**
   * Handles changes to the Text Input element.
   * Displays a welcome message including the entered name.
   * @private
   * @param {string} value - The text entered in the input field.
   */
  _onTextChange(value) {
    this._updateMessage(`${value}'s come to see us!`);
  }
  /**
   * Handles changes to the Text Area element.
   * Validates the number of lines entered against the value from the counter
   * and displays appropriate messages.
   * @private
   * @param {string} [value=''] - The text entered in the text area.
   */
  _onTextAreaChange(value = "") {
    value = value.trim();
    const requiredNumber = this.api.getValues()[COUNTER_ELEMENT];
    const enteredNumber = value.split("\n").length;
    if (requiredNumber > enteredNumber) {
      this._updateMessage(`<b>Enter ${requiredNumber - enteredNumber} more dinosaurs!</b>`);
    } else if (requiredNumber < enteredNumber) {
      this._updateMessage(`<b>Hold your dinosaurs!</b>`);
    } else {
      this._updateMessage(`<b>Top ${requiredNumber} of dinosaurs:</b><hr>${value.replace(/\n/g, "<br>")}`);
    }
  }
  /**
   * Called when the associated template node is updated.
   * This method is part of the Control lifecycle but is not used in this demo control
   * as it doesn't directly manipulate a specific template node based on its state.
   * @param {ImmutableHtmlNode} node The immutable HTML node representing the element being controlled.
   */
  onTemplateNodeUpdated(node) {
  }
}
const COLOR_ELEMENT_NAME = "simpleBlockBackgroundColor";
const CONTROL_SIMPLE_BLOCK_BACKGROUND_COLOR_ID = "simple-block-background-color-control";
class SimpleBlockBackgroundColorControl extends distExports.Control {
  /**
   * Returns a unique identifier for the control.
   * This ID must be unique within the editor.
   * @returns {string} The unique ID for this control.
   */
  getId() {
    return CONTROL_SIMPLE_BLOCK_BACKGROUND_COLOR_ID;
  }
  /**
   * Returns an HTML string template that defines the structure of the control.
   * This template uses built-in UI elements like ue-label and a custom element 'brand-color-picker'.
   * @returns {string} The HTML template for the control.
   */
  getTemplate() {
    return `
            <div>
                <${distExports.UIElementType.LABEL} ${distExports.UEAttr.LABEL.text}="${this.api.translate("Background color")}:"></${distExports.UIElementType.LABEL}>
                <brand-color-picker name="${COLOR_ELEMENT_NAME}"></brand-color-picker>
            </div>`;
  }
  /**
   * Called after the control is rendered in the settings panel.
   * Sets up an event listener to react to changes in the 'brand-color-picker' value.
   * When the color changes, it modifies the 'bgcolor' attribute of the associated template node.
   */
  onRender() {
    this.api.onValueChanged(COLOR_ELEMENT_NAME, (newValue, oldValue) => {
      this.api.getDocumentModifier().modifyHtml(this.node).setAttribute("bgcolor", newValue).apply(new distExports.ModificationDescription("Set background color to {color}").withParams({ color: newValue }));
    });
  }
  /**
   * Called when the associated template node (e.g., the block being edited) is updated.
   * Extracts the current 'bgcolor' attribute from the node and updates the control's UI element value.
   * @param {ImmutableHtmlNode} node The immutable HTML node representing the element being controlled.
   */
  onTemplateNodeUpdated(node) {
    this.node = node;
    this.api.updateValues({
      [COLOR_ELEMENT_NAME]: node.getAttribute("bgcolor")
    });
  }
}
class SimpleBlockSettingsPanelRegistry extends distExports.SettingsPanelRegistry {
  /**
   * Registers controls for specific blocks within the settings panel.
   * This method modifies the provided map to define which controls appear
   * in which tabs for different blocks.
   *
   * @param {Object.<string, Array<SettingsPanelTab>>} controls - A map where keys are block IDs (e.g., BLOCK_SIMPLE_ID, BlockType.BLOCK_BUTTON)
   *                                                             and values are arrays of SettingsPanelTab instances defining the tabs and controls for that block.
   *                                                             This map is modified in place.
   */
  registerBlockControls(controls2) {
    controls2[BLOCK_SIMPLE_ID] = [
      new distExports.SettingsPanelTab(
        "custom",
        [
          CONTROL_SIMPLE_BLOCK_BACKGROUND_COLOR_ID
        ]
      ).withLabel(this.api.translate("Simple block settings advanced"))
    ];
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.SETTINGS,
        [
          CONTROL_BUILD_IN_UI_ELEMENTS_DEMO_ID
        ]
      )
    ];
  }
}
const styles$1 = "ue-ui-simple-panel {\n    background-color: darkgray;\n}\n\n.brand-color-button {\n    width: 200px;\n    height: 35px;\n    background-color: greenyellow;\n    border-radius: 10px;\n    cursor: pointer;\n}\n";
const BRAND_COLOR = "greenyellow";
class BrandColorPickerUIElement extends distExports.UIElement {
  /**
   * Returns the unique identifier for this UI element.
   * This ID is used to register and reference the element.
   * @returns {string} The unique identifier 'brand-color-picker'.
   */
  getId() {
    return "brand-color-picker";
  }
  /**
   * Returns the HTML template string for this UI element.
   * The template consists of a button displaying translated text.
   * @returns {string} The HTML template string.
   */
  getTemplate() {
    return `<button class="brand-color-button">${this.api.translate("Brand color")}</button>`;
  }
  /**
   * Called after the element's template is rendered in the DOM.
   * Initializes the button element and attaches the click event listener.
   * @param {HTMLElement} container - The container DOM element where the template was rendered.
   */
  onRender(container) {
    this.button = container.querySelector("button");
    this.button.addEventListener("click", this._onClick.bind(this));
  }
  /**
   * Called when the UI element is being destroyed.
   * Removes the click event listener to prevent memory leaks.
   */
  onDestroy() {
    this.button.removeEventListener("click", this._onClick.bind(this));
  }
  /**
   * Handles the click event on the button.
   * Notifies the editor that the value should be changed to the BRAND_COLOR.
   * @private
   */
  _onClick() {
    this.api.onValueChanged(BRAND_COLOR);
  }
}
const gitSample_01_Simple_Block = new distExports.ExtensionBuilder().withLocalization({
  "en": en$1,
  "uk": uk$1
}).withStyles(styles$1).addBlock(SimpleBlock).addContextAction(SimpleBlockContextAction).addControl(SimpleBlockBackgroundColorControl).addControl(BuildInUIElementsDemoControl).addUiElement(BrandColorPickerUIElement).withSettingsPanelRegistry(SimpleBlockSettingsPanelRegistry).build();
const BLOCK_STRUCTURE_WITH_EMPTY_CONTAINER_ID = "structure-block-with-empty-container";
class StructureBlockWithEmptyContainer extends distExports.Block {
  getId() {
    return BLOCK_STRUCTURE_WITH_EMPTY_CONTAINER_ID;
  }
  isEnabled() {
    return true;
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "magic";
  }
  getName() {
    return this.api.translate("Structure block with empty container");
  }
  getDescription() {
    return this.api.translate("Structure block with empty container description");
  }
  getTemplate() {
    return `
            <td>
              <h3>CUSTOM STRUCTURE</h3>
              <${distExports.BlockType.EMPTY_CONTAINER}></${distExports.BlockType.EMPTY_CONTAINER}>
            </td>
        `;
  }
}
const en = {
  "Structure block with empty container": "Structure block with empty container",
  "Structure block with empty container description": "An example of block extension with empty container",
  "Structure block with two containers": "Structure block with two containers",
  "Structure block with two containers description": "An example of block extension with two containers"
};
const uk = {
  "Structure block": "Блок-структура",
  "Structure block description": "Приклад власного блоку розширення"
};
const BLOCK_STRUCTURE_WITH_TWO_CONTAINERS_ID = "structure-block-with-two-containers";
class StructureBlockWithTwoContainers extends distExports.Block {
  getId() {
    return BLOCK_STRUCTURE_WITH_TWO_CONTAINERS_ID;
  }
  isEnabled() {
    return true;
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Structure block with two containers");
  }
  getDescription() {
    return this.api.translate("Structure block  with two containers description");
  }
  allowInnerBlocksSelection() {
    return true;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="30">
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p><b>Hello!</b></p>
                    </${distExports.BlockType.BLOCK_TEXT}>    
                </${distExports.BlockType.CONTAINER}>
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="65">
                    <${distExports.BlockType.BLOCK_IMAGE} 
                        ${distExports.BlockAttr.BLOCK_IMAGE.src}="https://ext.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${distExports.BlockType.BLOCK_IMAGE}> 
                </${distExports.BlockType.CONTAINER}>
            </td>`;
  }
}
const gitSample_02_Structure_Block = new distExports.ExtensionBuilder().withLocalization({
  "en": en,
  "uk": uk
}).addBlock(StructureBlockWithEmptyContainer).addBlock(StructureBlockWithTwoContainers).build();
class ExternalMergeTagsLibrary2 {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "selectedMergetag", null);
    __publicField(this, "dataSelectCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '             <div id="externalMergeTags" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Your merge tags</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" tag-value="*|FNAME|*" tag-label="John Doe" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Name                        </div>                        <div class="thumbnail" tag-value="%%Phone%%" tag-label="User phone number" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag Phone                        </div>                        <div class="thumbnail" tag-value="Merge Tag 3" style="display: inline-block; width: 154px; height: 120px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            Merge Tag 3                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    const style = document.createElement("style");
    style.innerHTML = "#externalMergeTags .thumbnail.selected {color: blue; box-shadow: 0 0 0 2px blue; }";
    document.head.appendChild(style);
    this.externalLibrary = document.getElementById("externalMergeTags");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
  }
  onElementClick(thumbnail) {
    const exampleOfMergeTagValue = thumbnail.getAttribute("tag-value");
    const exampleOfMergeTagLabel = thumbnail.getAttribute("tag-label");
    this.close();
    this.dataSelectCallback({
      value: exampleOfMergeTagValue,
      label: exampleOfMergeTagLabel
    });
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  renderMergeTags() {
    var _a;
    const selectedElement = this.externalLibrary.querySelector(".selected");
    selectedElement && selectedElement.classList.remove("selected");
    if (this.selectedMergetag) {
      (_a = this.externalLibrary.querySelector(`[tag-value="${this.selectedMergetag}"]`)) == null ? void 0 : _a.classList.add("selected");
    }
    this.externalLibrary.style.visibility = "visible";
  }
  openMergeTagsLibrary(mergeTag, onDataSelectCallback) {
    this.selectedMergetag = mergeTag;
    this.renderMergeTags();
    this.dataSelectCallback = onDataSelectCallback;
  }
}
const ID$1 = "external-merge-tags-ui-element";
class MergeTagsTagRegistry2 extends distExports.UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[distExports.UIElementType.MERGETAGS] = ID$1;
  }
}
class MergeTagsUiElementExtension extends distExports.UIElement {
  getId() {
    return ID$1;
  }
  onRender(container) {
    this.listener = this._onClick.bind(this);
    this.mergeTagsButton = container.querySelector("#mergeTagsButton");
    this.mergeTagsButton.addEventListener("click", this.listener);
  }
  onDestroy() {
    this.mergeTagsButton.removeEventListener("click", this.listener);
  }
  _onClick(event) {
    this.openMergeTagLibrary();
  }
  openMergeTagLibrary() {
    var _a;
    if (!this.mergeTagsLibrary) {
      this.mergeTagsLibrary = new ExternalMergeTagsLibrary2();
    }
    this.mergeTagsLibrary.openMergeTagsLibrary((_a = this.selectedMergeTag) == null ? void 0 : _a.value, (data) => {
      this.api.onValueChanged(data);
    });
  }
  onAttributeUpdated(name, value) {
    if (name === "mergeTag") {
      this.selectedMergeTag = value;
      this.selectedMergeTag && this.openMergeTagLibrary();
    }
  }
  getTemplate() {
    return `
            <div>
              <UE-BUTTON id="mergeTagsButton" class="btn btn-primary">${this.api.translate("Open merge tags")}</UE-BUTTON>
            </div>`;
  }
}
const gitSample_03_External_Merge_Tags = new distExports.ExtensionBuilder().addUiElement(MergeTagsUiElementExtension).withLocalization({
  "en": {
    "Open merge tags": "Open merge tags"
  },
  "uk": {
    "Open merge tags": "Відкрити мерж теги"
  }
}).withUiElementTagRegistry(MergeTagsTagRegistry2).build();
class ExternalImagesLibraryExample2 {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "imageSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalImagesLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Images Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/9091542014595406.png">                        </div>                          <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/95981542014634835.png">                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://my.stripo.email/content/guids/CABINET_0397152026e82dd10a59009fd4c00284/images/53971542021195762.png">                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalImagesLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onImageClick.bind(this));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onImageClick(e) {
    if (!e.target.matches("img")) {
      return;
    }
    const exampleOfCallbackImageObject = {
      originalName: "9091542014595406.png",
      width: 600,
      height: 410,
      size: 169e3,
      url: e.target.getAttribute("src")
    };
    this.imageSelectCallback(exampleOfCallbackImageObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openImageLibrary(currentImageUrl, onImageSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.imageSelectCallback = onImageSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const gitSample_04_External_Image_library = new distExports.ExtensionBuilder().withExternalImageLibrary(ExternalImagesLibraryExample2).build();
class ExternalSmartElementsLibraryExample {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalSmartElementsLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Smart-elements Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/9091542014595406.png">                            <h4>Product 1</h4>                            <p>Price: <span>1$</span></p>                        </div>                          <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 2" src="https://my.stripo.email/content/guids/CABINET_68e9de9122dfe101e465207065722d54/images/95981542014634835.png">                            <h4>Product 2</h4>                            <p>Price: <span>2$</span></p>                        </div>                        <div style="display:inline-block; width: 154px; height: 190px; cursor: pointer; margin-right: 10px" class="thumbnail">                            <img style="height: 100px;" alt="Product 3" src="https://my.stripo.email/content/guids/CABINET_0397152026e82dd10a59009fd4c00284/images/53971542021195762.png">                            <h4>Product 3</h4>                            <p>Price: <span>3$</span></p>                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalSmartElementsLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelectorAll(".thumbnail").forEach((thumbnail) => thumbnail.addEventListener("click", () => this.onElementClick(thumbnail)));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onElementClick(e) {
    const exampleOfSmartElementObject = {
      p_name: e.querySelector("h4").innerText,
      p_price: e.querySelector("span").innerText,
      p_image: e.querySelector("img").getAttribute("src")
    };
    this.close();
    this.dataSelectCallback(exampleOfSmartElementObject);
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  openSmartElementsLibrary(onDataSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const gitSample_05_External_Smart_library = new distExports.ExtensionBuilder().withExternalSmartElementsLibrary(ExternalSmartElementsLibraryExample).build();
class ExternalAiAssistant2 {
  constructor() {
    __publicField(this, "externalAiAssistant");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalAiAssistant" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif;">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span aria-hidden="true">×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Update Text</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div style="padding: 10px">                            <label style="display: inline-block; width: 100px" for="text">Text</label>                            <textarea style="width: 500px; height: 500px" id="text"></textarea>                        </div>                    </div>                    <div style="padding: 20px">                        <button class="okButton">OK</button>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalAiAssistant = document.getElementById("externalAiAssistant");
    this.externalAiAssistant.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    document.querySelector(".okButton").addEventListener("click", (e) => this.onOkClick(e));
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  onOkClick(e) {
    const text = this.externalAiAssistant.querySelector("#text").value;
    this.close();
    this.dataSelectCallback(text);
  }
  close() {
    this.externalAiAssistant.style.visibility = "hidden";
  }
  openAiAssistant({ value, onDataSelectCallback, onCancelCallback, type }) {
    this.externalAiAssistant.style.visibility = "visible";
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalAiAssistant.querySelector("#text").value = value;
  }
}
const gitSample_06_External_AI_Assistant = new distExports.ExtensionBuilder().withExternalAiAssistant(ExternalAiAssistant2).build();
const ID = "custom-font-family-select";
const ORIGINAL_ID = "original-font-family-select";
class TagRegistry2 extends distExports.UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[ORIGINAL_ID] = uiElementsTagsMap[distExports.UIElementType.FONT_FAMILY_SELECT];
    uiElementsTagsMap[distExports.UIElementType.FONT_FAMILY_SELECT] = ID;
  }
}
class CustomFontFamilySelect2 extends distExports.UIElement {
  getId() {
    return ID;
  }
  onRender(container) {
    this.listener = this._onChange.bind(this);
    this.originalSelect = container.querySelector("#originalSelect");
    this.originalSelect.addEventListener("change", this.listener);
  }
  onAttributeUpdated(name, value) {
    this.originalSelect.setUIEAttribute(name, value);
    super.onAttributeUpdated(name, value);
  }
  onDestroy() {
    this.originalSelect.removeEventListener("change", this.listener);
  }
  _getDialogTemplate() {
    return `<div style="display: flex;
    flex-direction: column;
    width: 320px;
    border: 1px solid gray;
    padding: 10px;
    gap: 10px;
    background: lightgray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);">
              Name:
              <input id="name">
              CSS declaration:
              <input id="fontFamily">
              URL:
              <input id="url">
              <button id="confirm">OK</button>
            </div>`;
  }
  _showDialog() {
    this.dialog = document.createElement("div");
    this.dialog.innerHTML = this._getDialogTemplate();
    this.api.ignoreClickOutside(true);
    document.body.appendChild(this.dialog);
    this.dialog.querySelector("#confirm").addEventListener("click", () => this._submitDialog());
  }
  _submitDialog() {
    const newFont = {
      name: this.dialog.querySelector("#name").value,
      fontFamily: this.dialog.querySelector("#fontFamily").value,
      url: this.dialog.querySelector("#url").value
    };
    this.api.addCustomFont(newFont);
    this.dialog.remove();
    this.dialog = void 0;
    this.api.ignoreClickOutside(false);
  }
  _onChange(event) {
    if (event.target.value !== distExports.ADD_CUSTOM_FONT_OPTION) {
      this.api.onValueChanged(event.target.value);
    } else if (!this.dialog) {
      this._showDialog();
    }
  }
  getValue() {
    return this.originalSelect.value;
  }
  setValue(value) {
    this.originalSelect.value = value;
  }
  getTemplate() {
    const attrs = distExports.UEAttr.FONT_FAMILY_SELECT;
    return `<${ORIGINAL_ID} id="originalSelect" style="width: 100%;" ${attrs.addCustomFontOption}="+ Insert custom font"></${ORIGINAL_ID}>`;
  }
}
const gitSample_07_External_Custom_Font = new distExports.ExtensionBuilder().addUiElement(CustomFontFamilySelect2).withUiElementTagRegistry(TagRegistry2).build();
const AVAILABLE_CONDITION_NAMES$1 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$1 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$1 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$1 = {
  name: AVAILABLE_CONDITION_NAMES$1[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$1[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS$1 = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS$1 = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS$1 = "dropdownConcatenation";
let ExternalDisplayConditions$1 = class ExternalDisplayConditions3 {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector("select." + identifierClass);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS$1).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS$1).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).value;
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$1;
    }
    const deleteActionClass = "condition-delete-action-" + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = '<td style="width: 150px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS$1) + '</td>                <td style="width: 110px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS$1) + '</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ' + deleteActionClass + '"></span></td>';
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS$1);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS$1, AVAILABLE_CONDITION_NAMES$1);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS$1);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS$1, AVAILABLE_CONDITION_OPERATIONS$1);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector("." + deleteActionClass).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getIsContextActionEnabled() {
    return false;
  }
  getContextActionIndex() {
    return -1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS$1)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1, AVAILABLE_CONDITION_CONCATENATIONS$1);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).values = AVAILABLE_CONDITION_CONCATENATIONS$1;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS$1).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$1);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES$1),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS$1),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
};
const gitSample_08_External_Display_Conditions = new distExports.ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$1).build();
const AVAILABLE_CONDITION_NAMES = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION = {
  name: AVAILABLE_CONDITION_NAMES[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS[0].value,
  value: ""
};
const DROPDOWN_CONDITION_NAME_CLASS = "dropdownConditionField";
const DROPDOWN_CONDITION_OPERATION_CLASS = "dropdownConditionOperation";
const DROPDOWN_CONDITION_CONCATENATION_CLASS = "dropdownConcatenation";
class ExternalDisplayConditions4 {
  constructor() {
    __publicField(this, "selectConditionsCallback", null);
    __publicField(this, "conditionsPopupElement", null);
  }
  getDropdownProps(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const el = baseElement.querySelector("select." + identifierClass);
    if (!el.props) {
      el.props = {};
    }
    return el.props;
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(".condition-value").value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownProps(row, DROPDOWN_CONDITION_NAME_CLASS).value,
            operation: this.getDropdownProps(row, DROPDOWN_CONDITION_OPERATION_CLASS).value,
            value
          });
        }
      }
      if (conditions.length) {
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).value;
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION;
    }
    const deleteActionClass = "condition-delete-action-" + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add("condition-row");
    tr.innerHTML = '<td style="width: 150px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_NAME_CLASS) + '</td>                <td style="width: 110px; padding: 0 5px 10px 0;">' + this.getDropdownMarkup(DROPDOWN_CONDITION_OPERATION_CLASS) + '</td>                <td style="padding: 0 5px 10px 0;"><input type="text" class="form-control condition-value"></td>                <td style="width: 18px; padding-bottom: 10px;"><span class="es-icon-delete ' + deleteActionClass + '"></span></td>';
    this.conditionsPopupElement.querySelector(".conditionsTable").appendChild(tr);
    const nameProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_NAME_CLASS);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_NAME_CLASS, AVAILABLE_CONDITION_NAMES);
    nameProps.value = conditionValue.name;
    const operationProps = this.getDropdownProps(tr, DROPDOWN_CONDITION_OPERATION_CLASS);
    this.setDropdownOptions(tr, DROPDOWN_CONDITION_OPERATION_CLASS, AVAILABLE_CONDITION_OPERATIONS);
    operationProps.value = conditionValue.operation;
    tr.querySelector(".condition-value").value = conditionValue.value;
    this.conditionsPopupElement.querySelector("." + deleteActionClass).addEventListener("click", this.deleteConditionRow);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(".conditionsTable .condition-row");
    rows[0].querySelector(".es-icon-delete").style.display = rows.length > 1 ? "block" : "none";
  }
  getDropdownMarkup(className) {
    return `<select style="padding: 0" class="${className}"></select>`;
  }
  deleteConditionRow(e) {
    e.target.closest(".condition-row").remove();
    this.updateDeleteActionVisibility();
  }
  openExternalDisplayConditionsDialog(currentCondition, onSelectCallback, onCancelCallback) {
    this.selectConditionsCallback = onSelectCallback;
    this.onCancelCallback = onCancelCallback;
    this.activateConditionsPopup(currentCondition);
  }
  getCategory() {
    return {
      type: "EXTERNAL",
      category: "External display conditions",
      // Category name
      openExternalDisplayConditionsDialog: () => {
      }
    };
  }
  getIsContextActionEnabled() {
    return true;
  }
  getContextActionIndex() {
    return 1;
  }
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `<div id="externalDisplayConditionsPopup" style="background-color: rgba(0,0,0,.5); overflow: hidden; 
                    position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; visibility: hidden;" 
                    class="esdev-app">
                <div style="margin: 10px;">
                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 800px; margin: 0 auto;">
                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">
                        <div>
                           <button id="closePopupButton" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">
                                <span>×</span>
                            </button>
                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">Display conditions</h4>
                        </div>
                    </div>
                    <div style="padding: 15px;">
                        <table class="conditionsTable" style="border-collapse: collapse" width="100%"></table>
                        <button id="addNewCondition" class="btn btn-primary btn-sm">Add Condition</button>
                        <div style="margin-top: 20px;">
                            Show this content if
                            <span style="width: 65px;display: inline-block;">
                                ${this.getDropdownMarkup(DROPDOWN_CONDITION_CONCATENATION_CLASS)}
                            </span>
                            conditions are met.
                        </div>
                        <div>
                            <table style="width: 100%; margin-top: 20px;">
                                <tr>
                                    <td>
                                        <a id="removeConditionsPopup" target="_blank">Remove all conditions and close modal</a>
                                    </td>
                                    <td width="80px">
                                        <button id="closeConditionsPopup" class="btn btn-secondary">Cancel</button>
                                    </td>
                                    <td width="45px">
                                        <button id="applyConditionsAction" class="btn btn-success">Ok</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(div);
    this.conditionsPopupElement = document.getElementById("externalDisplayConditionsPopup");
    this.conditionsPopupElement.querySelector("#closePopupButton").addEventListener("click", this.closePopup.bind(this));
    this.conditionsPopupElement.querySelector("#closeConditionsPopup").addEventListener("click", this.cancelConditions.bind(this));
    this.conditionsPopupElement.querySelector("#applyConditionsAction").addEventListener("click", this.applyConditions.bind(this));
    this.conditionsPopupElement.querySelector("#addNewCondition").addEventListener("click", this.addConditionRow.bind(this));
    this.conditionsPopupElement.querySelector("#removeConditionsPopup").addEventListener("click", this.removeConditions.bind(this));
    this.setDropdownOptions(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS, AVAILABLE_CONDITION_CONCATENATIONS);
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).values = AVAILABLE_CONDITION_CONCATENATIONS;
  }
  initConditions(appliedCondition) {
    this.conditionsPopupElement.querySelector(".conditionsTable").innerHTML = "";
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    for (let i = 0; i < initialConditions.conditions.length; i++) {
      this.addConditionRow(null, initialConditions.conditions[i]);
    }
    this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).value = initialConditions.concatenation;
  }
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS);
    const conditions = str.split(concatenation).map((str2) => {
      return {
        name: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_NAMES),
        operation: this.findConditionOptionValue(str2, AVAILABLE_CONDITION_OPERATIONS),
        value: str2.substring(str2.indexOf("'") + 1, str2.lastIndexOf("'"))
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  findConditionOptionValue(str, options) {
    let option = options.find(function(i) {
      return str.indexOf(i.value) > -1;
    });
    if (!option) {
      option = options[0];
    }
    return option.value;
  }
}
const gitSample_09_External_Display_Conditions_With_Context_Menu = new distExports.ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions4).build();
class ExternalVideoLibrary2 {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "videoSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    div.innerHTML = '            <div id="externalVideoLibrary" style="background-color: rgba(0,0,0,.5); overflow: hidden; position: fixed; top: 0; right: 0;  bottom: 0; left: 0; z-index: 1050; font-family: sans-serif; ">                <div style="margin: 10px;">                <div style="background-color: #f6f6f6; border-radius: 17px 17px 30px 30px; max-width: 900px; margin: 0 auto;">                    <div style="padding: 15px; border-bottom: 1px solid #e5e5e5;">                        <div>                           <button class="close" type="button" style="cursor: pointer; background: transparent; border: 0; float: right; font-size: 21px; font-weight: bold; opacity: .2;">                                <span>×</span>                            </button>                            <h4 style="margin: 0; font-size: 18px; color: rgb(85, 85, 85);">External Videos Library</h4>                        </div>                    </div>                    <div style="padding: 15px;">                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/23121555584914821.png"                                 title="Create Easy & Quick Event Reminder Using Template for Food Industry"                                 urlVideo="https://www.youtube.com/watch?v=rNmAdmOMp0Y"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1641555585106902.png"                                 title="How to Get Email Mobile & Browser Preview with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=R4NXtC3h598"                                 hasButton="true"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1881555585513981"                                 title="Stripo.email editor"                                 urlVideo="https://www.youtube.com/watch?v=ryqOEPk51Lg"                            />                        </div>                        <div class="thumbnail" style="display: inline-block; width: 154px; cursor: pointer; padding: 4px; background-color: #ffffff; border: 1px solid #b80000; border-radius: 10px; margin-right: 10px">                            <img style="height: 100px; margin-left: auto; margin-right: auto; max-width: 100%; display: block; vertical-align: middle;"                                 src="https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/24481555585355917"                                 title="How to Add Menu in Email with Stripo"                                 urlVideo="https://www.youtube.com/watch?v=XPFWthaa35Q"                            />                        </div>                    </div>                </div>            </div>';
    document.body.appendChild(div);
    this.externalLibrary = document.getElementById("externalVideoLibrary");
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onSelectImage.bind(this));
  }
  onSelectImage(e) {
    if (!e.target.matches("img")) {
      return;
    }
    let image = e.target;
    let urlImage = image.getAttribute("src");
    let urlVideo = image.getAttribute("urlVideo");
    let hasCustomButton = image.getAttribute("hasButton");
    let originalName = image.getAttribute("title");
    let exampleOfCallbackVideoObject = {
      originalVideoName: originalName,
      originalImageName: originalName,
      urlImage,
      urlVideo,
      hasCustomButton
    };
    this.videoSelectCallback(exampleOfCallbackVideoObject);
    this.close();
  }
  close() {
    this.externalLibrary.style.visibility = "hidden";
  }
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  openExternalVideosLibraryDialog(currentImageUrl, onVideoSelectCallback, onCancelCallback) {
    this.externalLibrary.style.visibility = "visible";
    this.videoSelectCallback = onVideoSelectCallback;
    this.cancelCallback = onCancelCallback;
  }
}
const gitSample_10_External_Videos_Library = new distExports.ExtensionBuilder().withExternalVideosLibrary(ExternalVideoLibrary2).build();
class BlocksPanelExtension extends distExports.BlocksPanel {
  /**
   * Generates HTML representation for a block item in the blocks panel.
   * This method allows customization of how individual blocks are displayed.
   * 
   * @param {BlockItem} block - The block item containing properties like name, title, iconSrc, description, and disabled
   * @returns {string} HTML string representing the block item
   */
  getBlockItemHtml(block) {
    return `
        <div class="block-thumb" ${block.disabled ? "disabled" : ""}>
            <ue-icon src="${block.iconSrc}" class="icon-button"></ue-icon>
            <span class="block-thumb-label word-break">${block.title}</span>
            <ue-icon src="reorder" class="rotate90 icon icon-button"></ue-icon>
        </div>`;
  }
  /**
   * Determines whether a hint should be displayed for the specified block.
   * This method controls the visibility of tooltips or help text for blocks.
   * 
   * @param {BlockItem} block - The block item to check
   * @returns {boolean} true if the hint should be visible, false otherwise
   */
  isBlockHintVisible(block) {
    if (block.name === "BLOCK_IMAGE") {
      return false;
    }
    return true;
  }
  /**
   * Generates HTML representation for the blocks panel header.
   * This method allows customization of the header section of the blocks panel.
   * 
   * @returns {string} HTML string for the blocks panel header
   */
  getBlocksPanelHeaderHtml() {
    return `<div class="blocks-panel-title">
                <h2>Blocks</h2>
            </div>`;
  }
  /**
   * Generates HTML representation for the modules panel in collapsed state.
   * This method customizes how the collapsed modules panel appears to users.
   * 
   * @returns {string} HTML string for the collapsed modules panel
   */
  getModulesPanelCollapsedHtml() {
    if (this.api.getEditorState().panelPosition === "BLOCKS_SETTINGS") {
      return `<div class="modules-panel-collapsed">
                <span>Structures and modules ${this.api.getEditorState().previewDeviceMode}</span>
                <ue-icon src="chevron-down" class="rotate90 icon icon-button"></ue-icon>
            </div>`;
    } else {
      return `<div class="modules-panel-collapsed">
                <ue-icon src="chevron-down" class="rotate270 icon icon-button"></ue-icon>
                <span>Structures and modules ${this.api.getEditorState().previewDeviceMode}</span>                
            </div>`;
    }
  }
  /**
   * Gets the custom delay for showing hints in milliseconds.
   * This method controls how long users must hover before hints appear.
   * 
   * @returns {number} Delay in milliseconds before hints are shown
   */
  getHintDelay() {
    return 1e3;
  }
  /**
   * Determines whether a hint should be displayed for the collapsed modules panel.
   * This method controls the visibility of tooltips for the collapsed modules panel.
   * 
   * @returns {boolean} true if the modules panel collapsed hint should be visible, false otherwise
   */
  isModulesPanelCollapsedHintVisible() {
    return true;
  }
  /**
   * Gets the hint information for the modules panel.
   * This method provides tooltip content for the modules panel.
   * 
   * @returns {BlockHint} Object containing title and description for the modules panel hint
   */
  getModulesPanelHint() {
    return {
      title: this.api.translate("Modules and structures"),
      description: this.api.translate("Click to open the modules and structures panel.")
    };
  }
}
const styles = ".block-thumb {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    width: 100%;\n    max-width: 100%;\n    box-sizing: border-box;\n}\n.block-thumb-label {\n    flex: 1;\n    min-width: 0;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.blocks-panel-title {\n    border-bottom: var(--ue-border-width-1, 1px) solid var(--ue-panels-border-color, rgba(0, 0, 0, 0.07));\n    display: flex;\n    justify-content: center;\n}\n.modules-panel-collapsed {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    padding: 10px;\n    gap: 15px;\n}\n.rotate270 {\n    transform: rotate(-270deg);\n}\n.movable-panel.e2e-blocks-panel {\n    width: clamp(150px, calc(12.5vw - 0.5px), 200px);\n}\n";
const gitSample_11_Blocks_Panel = new distExports.ExtensionBuilder().withBlocksPanel(BlocksPanelExtension).withStyles(styles).withLocalization({
  "en": {
    "Modules and structures": "Modules and structures",
    "Click to open the modules and structures panel.": "Click to open the modules and structures panel."
  },
  "uk": {
    "Modules and structures": "Модулі та структури",
    "Click to open the modules and structures panel.": "Натисніть, щоб відкрити панель модулів і структур."
  }
}).build();
const LOGO_BLOCK_ID = "logo-block";
class LogoBlock extends distExports.Block {
  getId() {
    return LOGO_BLOCK_ID;
  }
  getIcon() {
    return "image";
  }
  getName() {
    return this.api.translate("Logo block");
  }
  getDescription() {
    return this.api.translate("Logo block description");
  }
  getTemplate() {
    return `
            <td align="center" class="esd-block-image" style="font-size: 0">
                <a target="_blank">
                    <img src="https://hpy.stripocdn.email/content/guids/CABINET_1ce849b9d6fc2f13978e163ad3c663df/images/22451592470360730.gif" 
                        alt="Logo" width="80px">
                </a>
            </td>
        `;
  }
}
class LogoBlockSettingsPanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[LOGO_BLOCK_ID] = controls2[distExports.BlockType.BLOCK_IMAGE];
  }
}
const gitSample_12_Logo_Block = new distExports.ExtensionBuilder().addBlock(LogoBlock).withSettingsPanelRegistry(LogoBlockSettingsPanelRegistry).build();
const BUTTON_BACKGROUND_COLOR_ID = "extendedButtonColor";
class ButtonBackgroundColorControl extends distExports.ButtonColorBuiltInControl {
  getId() {
    return BUTTON_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Button built in background color"
    };
  }
}
const STRUCTURE_BORDER_ID = "extendedStructureBorder";
class StructureBorderControl extends distExports.StructureBorderBuiltInControl {
  constructor() {
    super();
    window.localStorage.setItem("structureWrapperEnabled", "true");
  }
  getId() {
    return STRUCTURE_BORDER_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Border built in"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const closestTable = root.closest("table");
    return modifier.modifyHtml(closestTable).setClass("custom-structure-border-applied");
  }
}
const BUTTON_TEXT_CONTROL_ID = "buttonTextBuiltInControl";
class ButtonTextControl extends distExports.ButtonTextBuiltInControl {
  /**
   * Gets the unique identifier for this control
   * @returns {string} The control ID
   */
  getId() {
    return BUTTON_TEXT_CONTROL_ID;
  }
  /**
   * Gets the display labels for this control
   * @returns {Object} Object containing title label
   */
  getLabels() {
    return {
      title: this.api.translate("Button text built in control")
    };
  }
}
const BUTTON_BORDER_ID = "extendedButtonBorder";
class ButtonBorderControl extends distExports.ButtonBorderBuiltInControl {
  getId() {
    return BUTTON_BORDER_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Border built in"),
      titleHint: this.api.translate("Border built in hint"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleHint: this.api.translate("Custom style hint"),
      borderStyleTitle: this.api.translate("Custom style label")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    modifier.modifyHtml(root).setClass("custom-button-border-applied");
    return modifier;
  }
}
const CLASSIC_BLOCK_ID = "classic-block";
class ClassicBlock extends distExports.Block {
  getId() {
    return CLASSIC_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Classic block");
  }
  getDescription() {
    return this.api.translate("Classic block description");
  }
  getTemplate() {
    return `
            <td align="left">
                <p>
                    Hello, User!
                </p>
            </td>
        `;
  }
}
const CLASSIC_STRUCTURE_ID = "classic-structure";
class ClassicStructureBlock extends distExports.Block {
  getId() {
    return CLASSIC_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Classic Structure");
  }
  getDescription() {
    return this.api.translate("Classic Structure description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="30">
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </${distExports.BlockType.BLOCK_TEXT}>    
                    <${distExports.BlockType.BLOCK_BUTTON} ${distExports.BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Search
                    </${distExports.BlockType.BLOCK_BUTTON}>
                </${distExports.BlockType.CONTAINER}>
                
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="65">
                    <${distExports.BlockType.BLOCK_BUTTON} ${distExports.BlockAttr.BLOCK_BUTTON.href}="https://stripo.email">
                        Visit Stripo
                    </${distExports.BlockType.BLOCK_BUTTON}>
                    <${distExports.BlockType.BLOCK_IMAGE} 
                        ${distExports.BlockAttr.BLOCK_IMAGE.src}="https://ext.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${distExports.BlockType.BLOCK_IMAGE}> 
                </${distExports.BlockType.CONTAINER}>
            </td>`;
  }
}
const PRODUCT_STRUCTURE_ID = "product-structure";
class ProductStructureBlock extends distExports.Block {
  getId() {
    return PRODUCT_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return distExports.BlockCompositionType.STRUCTURE;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Product");
  }
  getDescription() {
    return this.api.translate("Product description");
  }
  allowInnerBlocksSelection() {
    return false;
  }
  allowInnerBlocksDND() {
    return false;
  }
  getTemplate() {
    return `
            <td>
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="50">
                    <${distExports.BlockType.BLOCK_IMAGE} 
                        ${distExports.BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${distExports.BlockType.BLOCK_IMAGE}>
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${distExports.BlockType.BLOCK_TEXT}>    
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${distExports.BlockType.BLOCK_TEXT}>
                    <${distExports.BlockType.BLOCK_BUTTON} ${distExports.BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${distExports.BlockType.BLOCK_TEXT}>
                </${distExports.BlockType.CONTAINER}>
                <${distExports.BlockType.CONTAINER} ${distExports.BlockAttr.CONTAINER.widthPercent}="50">
                    <${distExports.BlockType.BLOCK_IMAGE} 
                        ${distExports.BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${distExports.BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${distExports.BlockType.BLOCK_IMAGE}>
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${distExports.BlockType.BLOCK_TEXT}>    
                    <${distExports.BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${distExports.BlockType.BLOCK_TEXT}>
                    <${distExports.BlockType.BLOCK_BUTTON} ${distExports.BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${distExports.BlockType.BLOCK_TEXT}>
                </${distExports.BlockType.CONTAINER}>
            </td>`;
  }
}
const BUTTON_ALIGN_CONTROL_ID = "buttonAlignBuiltInControl";
class ButtonAlignControl extends distExports.ButtonAlignBuiltInControl {
  getId() {
    return BUTTON_ALIGN_CONTROL_ID;
  }
  getLabels() {
    return {
      desktopTitle: this.api.translate("Extended button align desktop"),
      mobileTitle: this.api.translate("Extended button align mobile")
    };
  }
}
const BUTTON_HOVER_TEXT_COLOR_ID = "extendedButtonHoverTextColor";
class ButtonHoverTextColorControl extends distExports.ButtonHoverTextColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_TEXT_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover text color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-text-color-applied");
  }
}
const BUTTON_HOVER_BORDER_COLOR_ID = "extendedButtonHoverBorderColor";
class ButtonHoverBorderColorControl extends distExports.ButtonHoverBorderColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_BORDER_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover border color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-border-color-applied");
  }
}
const BUTTON_HOVER_COLOR_ID = "extendedButtonHoverColor";
class ButtonHoverColorControl extends distExports.ButtonHoverColorBuiltInControl {
  getId() {
    return BUTTON_HOVER_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-hover-color-applied");
  }
}
const BUTTON_TEXT_COLOR_ID = "extendedButtonTextColor";
class ButtonTextColorControl extends distExports.ButtonFontColorBuiltInControl {
  getId() {
    return BUTTON_TEXT_COLOR_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in text color")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-text-color-applied");
  }
}
const BUTTON_BORDER_RADIUS_CONTROL_ID = "extendedButtonBorderRadius";
class ButtonBorderRadiusControl extends distExports.ButtonBorderRadiusBuiltInControl {
  getId() {
    return BUTTON_BORDER_RADIUS_CONTROL_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button border radius"),
      titleHint: this.api.translate("Extended hint border radius")
    };
  }
}
const LINK_COLOR_CONTROL_ID = "linkColorBuiltInControl";
class LinkColorControl extends distExports.LinkColorBuiltInControl {
  /**
   * Gets the unique identifier for this control
   * @returns {string} The control ID
   */
  getId() {
    return LINK_COLOR_CONTROL_ID;
  }
  /**
   * Gets the display labels for this control
   * @returns {Object} Object containing title label
   */
  getLabels() {
    return {
      title: this.api.translate("Link color built in control")
    };
  }
}
const TEXT_SIZE_CONTROL_ID = "extendedTextSize";
class TextSizeControl extends distExports.TextSizeBuiltInControl {
  getId() {
    return TEXT_SIZE_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Extended text size control"
    };
  }
}
const TEXT_STYLE_CONTROL_ID = "extendedTextStyle";
class TextStyleControl extends distExports.TextStyleBuiltInControl {
  getId() {
    return TEXT_STYLE_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Text style control"
    };
  }
}
const TEXT_LINE_SPACING_ID = "extendedTextLineSpacing";
class TextLineSpacingControl extends distExports.TextLineSpacingBuiltInControl {
  getId() {
    return TEXT_LINE_SPACING_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended line spacing")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    const h2 = root.querySelector("h2");
    const allPSelectors = root.querySelectorAll("p");
    if (allPSelectors.length > 0) {
      allPSelectors.find((p) => {
        modifier.modifyHtml(p).setStyle("color", "#bf0bdd");
      });
    }
    if (h2) {
      modifier.modifyHtml(h2).setClass("custom-line-spacing-applied-h2");
    }
    return modifier.modifyHtml(root).setClass("custom-line-spacing-applied");
  }
}
const TEXT_COLOR_CONTROL_ID = "extendedTextColor";
class TextColorControl extends distExports.TextColorBuiltInControl {
  getId() {
    return TEXT_COLOR_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Extended text color control"
    };
  }
}
const TEXT_FONT_FAMILY_ID = "extendedTextFontFamily";
class TextFontFamily extends distExports.FontFamilyBuiltInControl {
  getId() {
    return TEXT_FONT_FAMILY_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
}
class SampleSettingsPanelRegistry extends distExports.SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[CLASSIC_BLOCK_ID] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          // LINK_COLOR_CONTROL_ID,
          // TEXT_SIZE_CONTROL_ID,
          // TEXT_STYLE_CONTROL_ID,
          // TEXT_LINE_SPACING_ID,
        ]
      )
    ];
    controls2[CLASSIC_STRUCTURE_ID] = [
      new distExports.SettingsPanelTab(
        "Structure",
        [
          STRUCTURE_BORDER_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID
        ]
      ).withLabel(this.api.translate("Structure")),
      new distExports.SettingsPanelTab(
        "Button",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BORDER_ID
        ]
      ).withLabel(this.api.translate("Button"))
    ];
    controls2[PRODUCT_STRUCTURE_ID] = [
      new distExports.SettingsPanelTab(
        "Product",
        [
          STRUCTURE_BORDER_ID,
          BUTTON_ALIGN_CONTROL_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID,
          TEXT_COLOR_CONTROL_ID,
          TEXT_FONT_FAMILY_ID
        ]
      ).withLabel(this.api.translate("Product")),
      new distExports.SettingsPanelTab(
        "Card",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_BORDER_ID,
          BUTTON_BORDER_RADIUS_CONTROL_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID
        ]
      ).withLabel(this.api.translate("Card"))
    ];
    controls2[distExports.BlockType.BLOCK_BUTTON] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.SETTINGS,
        [
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_ALIGN_CONTROL_ID
        ]
      ),
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          BUTTON_BORDER_ID,
          BUTTON_TEXT_COLOR_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID
        ]
      )
    ];
    controls2[distExports.BlockType.STRUCTURE] = [
      new distExports.SettingsPanelTab(
        distExports.SettingsTab.STYLES,
        [
          STRUCTURE_BORDER_ID
        ]
      )
    ];
  }
}
const controls = [
  ButtonBackgroundColorControl,
  ButtonTextControl,
  StructureBorderControl,
  LinkColorControl,
  TextSizeControl,
  TextColorControl,
  TextStyleControl,
  TextFontFamily,
  ButtonBorderControl,
  ButtonHoverTextColorControl,
  ButtonHoverBorderColorControl,
  ButtonHoverColorControl,
  ExtendedBackgroundImageControl$1,
  TextLineSpacingControl,
  ButtonAlignControl,
  ButtonTextColorControl,
  ButtonBorderRadiusControl
];
const builder = new distExports.ExtensionBuilder().addBlock(ClassicBlock).addBlock(ClassicStructureBlock).addBlock(ProductStructureBlock).withSettingsPanelRegistry(SampleSettingsPanelRegistry);
for (const control of controls) {
  builder.addControl(control);
}
const gitSample_10_built_in_controls = builder.build();
const extensionsMap = {
  textBlockWithCustomControls,
  textBlockWithExtendedControls,
  textBlockWithRemovedControl,
  customBlockBasic,
  atomicBlockAlias,
  customBlockWithCustomRenderer,
  customBlockWithCustomContextAction,
  customStructure,
  customEmptyContainer,
  textUiElementOverridden,
  demoUiElement,
  generalSettingsStyles,
  previewStyles,
  emptyContainerLayouts,
  containerLayouts,
  initActionsBlock,
  interactionConstraints,
  externalSmartElementsLibrary,
  externalMergetags,
  externalImagesLibrary,
  fontFamilyExtension,
  fontFamilyControlExtension,
  backgroundControlExtension,
  textColorControlExtension,
  textStyleControlExtension,
  textSizeControlExtension,
  nestedBackgroundControl,
  stateChangeSubscriber,
  variableModeExtendedControl,
  reinitializedExtension,
  externalAiAssistant,
  externalDisplayConditions,
  externalDisplayConditionsContextMenu,
  externalVideosLibrary,
  extendedBlockPaddingsControl,
  extendedStructurePaddingsControl,
  extendedButtonInternalIndentsControl,
  buttonColorControlExtension,
  generalBackgroundImageControlExtension,
  linkColorControlExtension,
  structureBorderControlExtension,
  buttonTextControlExtension,
  buttonBorderControlExtension,
  textLineSpacingControlExtension,
  buttonAlignControlExtension,
  buttonBorderRadiusExtension,
  extensionBuiltInButtonTextColor,
  extensionBuiltInButtonHoverColor,
  extensionBuiltInButtonBorderHover,
  extensionBuiltInButtonHoverTextColor,
  gitSample_01_Simple_Block,
  gitSample_02_Structure_Block,
  gitSample_03_External_Merge_Tags,
  gitSample_04_External_Image_library,
  gitSample_05_External_Smart_library,
  gitSample_06_External_AI_Assistant,
  gitSample_07_External_Custom_Font,
  gitSample_08_External_Display_Conditions,
  gitSample_09_External_Display_Conditions_With_Context_Menu,
  gitSample_10_External_Videos_Library,
  gitSample_11_Blocks_Panel,
  gitSample_12_Logo_Block,
  gitSample_10_built_in_controls
};
export {
  extensionsMap as default
};
