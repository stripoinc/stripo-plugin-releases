var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e;
var BlockCompositionType;
(function(BlockCompositionType2) {
  BlockCompositionType2["BLOCK"] = "BLOCK";
  BlockCompositionType2["STRUCTURE"] = "STRUCTURE";
  BlockCompositionType2["CONTAINER"] = "CONTAINER";
})(BlockCompositionType || (BlockCompositionType = {}));
class Block {
  constructor() {
    /** Provides access to editor functionalities specific to this block instance. */
    __publicField(this, "api");
  }
  /**
   * Determines if the block should be available for use in the editor.
   * Override to provide custom logic based on editor state or configuration.
   * @returns True if the block is enabled, false otherwise. Defaults to true.
   */
  isEnabled() {
    return true;
  }
  /**
   * Determines if the block can be saved as a reusable module by the user.
   * @returns True if the block can be saved as a module, false otherwise. Defaults to false.
   */
  canBeSavedAsModule() {
    return false;
  }
  /**
   * Specifies the context actions available for this block.
   * If not overridden, the editor might use a default set of actions.
   * Use IDs from {@link ContextActionType} or custom action IDs.
   * @returns An array of context action IDs, or undefined to use defaults (if any).
   */
  getContextActionsIds() {
    return void 0;
  }
  /**
   * Provides a custom renderer class for this block, allowing for specialized rendering logic.
   * @returns A constructor for a class extending {@link BlockRenderer}, or undefined to use the default renderer.
   */
  getCustomRenderer() {
    return void 0;
  }
  /**
   * Gets a unique CSS class name specifically for this block type.
   * Used for targeting styles.
   * @returns A unique CSS class name. Defaults to `esd-{blockId}`.
   */
  getUniqueBlockClassname() {
    return `esd-${this.getId()}`;
  }
  /**
   * Lifecycle hook called when the editor document is initialized.
   * Useful for performing initial setup or modifications on existing block instances in the template.
   */
  onDocumentInit() {
  }
  /**
   * Lifecycle hook called when an instance of this block is selected in the editor.
   * @param node - The immutable HTML node representing the selected block instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect(node) {
  }
  /**
   * Lifecycle hook called when an instance of this block is copied.
   * @param targetNode - The immutable HTML node where the copy is being inserted relative to.
   * @param sourceNode - The immutable HTML node representing the block instance being copied.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCopy(targetNode, sourceNode) {
  }
  /**
   * Lifecycle hook called when an instance of this block is deleted.
   * @param node - The immutable HTML node representing the block instance being deleted.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDelete(node) {
  }
  /**
   * Lifecycle hook called after a new instance of this block is created and added to the document (e.g., via drag-and-drop).
   * @param node - The immutable HTML node representing the newly created block instance.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onCreated(node) {
  }
  /**
   * Lifecycle hook called when any part of the document template has changed.
   * This can be frequent; use cautiously for performance-sensitive operations.
   */
  onDocumentChanged() {
  }
  /**
   * @description Determines if block is atomic or composite.
   * {@link BlockCompositionType.BLOCK} - atomic block which can be inserted inside other container and cannot hold other objects
   * {@link BlockCompositionType.STRUCTURE} - composite block which can serve as a container for another atomic block
   * @returns The type of the block. Defaults to {@link BlockCompositionType.BLOCK}.
   */
  getBlockCompositionType() {
    return BlockCompositionType.BLOCK;
  }
  /**
   * @description Determines if block should be included in empty container quick insert actions list.
   * @returns True to show a quick-add icon for this block in empty containers, false otherwise. Defaults to false.
   */
  shouldDisplayQuickAddIcon() {
    return false;
  }
  /**
   * @description Determines if nested blocks selection allowed in extension of type {@link BlockCompositionType.STRUCTURE}
   */
  allowInnerBlocksSelection() {
    return true;
  }
  /**
   * @description Determines if nested blocks drag and drop allowed in extension of type {@link BlockCompositionType.STRUCTURE}
   */
  allowInnerBlocksDND() {
    return true;
  }
}
class BlockRenderer {
  constructor() {
    __publicField(this, "api");
  }
  /**
   * @deprecated - use {@link getPreviewInnerHtml} instead
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPreviewHtml(node) {
    return void 0;
  }
}
class BlocksPanel {
  constructor() {
    __publicField(this, "api");
  }
  /**
   * Generates HTML representation for a block item
   * @param block - The block item to generate HTML for
   * @returns HTML string representation of the block or undefined if default representation should be used
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getBlockItemHtml(block) {
    return void 0;
  }
  /**
   * Determines whether a hint should be displayed for the block
   * @param block - The block item to check hint visibility for
   * @returns True if the hint should be visible, false otherwise
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isBlockHintVisible(block) {
    return true;
  }
  /**
   * Gets the hint text for a block
   * @param block - The block item to get hint for
   * @returns The hint text for the block or undefined if default hint should be used
   */
  getBlockHint(block) {
    return {
      title: block.title,
      description: block.description
    };
  }
  /**
   * Generates HTML representation for the blocks panel header
   * @returns HTML string representation of the blocks panel header or undefined if header should not be shown
   */
  getBlocksPanelHeaderHtml() {
    return void 0;
  }
  /**
   * Generates HTML representation for the modules panel in collapsed state
   * @returns HTML string representation of the collapsed modules panel or undefined if default representation should be used
   */
  getModulesPanelCollapsedHtml() {
    return void 0;
  }
  /**
   * Determines whether a hint should be displayed for the collapsed modules panel
   * @returns True if the hint should be visible, false otherwise
   */
  isModulesPanelCollapsedHintVisible() {
    return true;
  }
  /**
   * Gets the custom delay for showing hints
   * @returns The delay in milliseconds or undefined to use the default delay
   */
  getHintDelay() {
    return void 0;
  }
  /**
   * Gets the hint text for a modules panel block
   * @returns The hint text for the modules panel or undefined if default hint should be used
   */
  getModulesPanelHint() {
    return void 0;
  }
}
class ContextAction {
  constructor() {
    __publicField(this, "api");
  }
}
const ADD_CUSTOM_FONT_OPTION = "ADD_CUSTOM_FONT_OPTION";
var AiAssistantValueType;
(function(AiAssistantValueType2) {
  AiAssistantValueType2["SUBJECT"] = "subject";
  AiAssistantValueType2["HIDDEN_PREHEADER"] = "hiddenPreheader";
  AiAssistantValueType2["TEXT_BLOCK"] = "textBlock";
})(AiAssistantValueType || (AiAssistantValueType = {}));
const containerAttributes = {
  widthPercent: "width-percent"
};
const emptyContainerAttributes = {
  ...containerAttributes,
  blocks: "blocks"
};
const imageAttributes = {
  src: "src",
  alt: "alt",
  href: "href"
};
const buttonAttributes$1 = {
  href: "href"
};
const BlockAttr = {
  EMPTY_CONTAINER: emptyContainerAttributes,
  CONTAINER: containerAttributes,
  BLOCK_IMAGE: imageAttributes,
  BLOCK_BUTTON: buttonAttributes$1
};
const ESD_BLOCK_BUTTON = "esd-block-button";
const ESD_BLOCK_TEXT = "esd-block-text";
const ESD_BLOCK_IMAGE = "esd-block-image";
const ESD_BLOCK_STRUCTURE = "esd-structure";
const ESD_BLOCK_MENU = "esd-block-menu";
const ESD_BLOCK_SPACER = "esd-block-spacer";
const ESD_BLOCK_CONTAINER = "esd-container-frame";
var BlockName;
(function(BlockName2) {
  BlockName2["BUTTON"] = "esd-block-button";
  BlockName2["TEXT"] = "esd-block-text";
  BlockName2["IMAGE"] = "esd-block-image";
  BlockName2["STRUCTURE"] = "esd-structure";
  BlockName2["VIDEO"] = "esd-block-video";
  BlockName2["SOCIAL"] = "esd-block-social";
  BlockName2["BANNER"] = "esd-block-banner";
  BlockName2["TIMER"] = "esd-block-timer";
  BlockName2["MENU"] = "esd-block-menu";
  BlockName2["HTML"] = "esd-block-html";
  BlockName2["SPACER"] = "esd-block-spacer";
  BlockName2["CONTAINER"] = "esd-container-frame";
})(BlockName || (BlockName = {}));
var BlockSelector;
(function(BlockSelector2) {
  BlockSelector2["BUTTON"] = ".esd-block-button";
  BlockSelector2["TEXT"] = ".esd-block-text";
  BlockSelector2["IMAGE"] = ".esd-block-image";
  BlockSelector2["STRUCTURE"] = ".esd-structure";
  BlockSelector2["VIDEO"] = ".esd-block-video";
  BlockSelector2["SOCIAL"] = ".esd-block-social";
  BlockSelector2["BANNER"] = ".esd-block-banner";
  BlockSelector2["TIMER"] = ".esd-block-timer";
  BlockSelector2["MENU"] = ".esd-block-menu";
  BlockSelector2["HTML"] = ".esd-block-html";
  BlockSelector2["SPACER"] = ".esd-block-spacer";
  BlockSelector2["CONTAINER"] = ".esd-container-frame";
  BlockSelector2["STRIPE"] = ".esd-stripe";
  BlockSelector2["FORM"] = ".esd-amp-form";
})(BlockSelector || (BlockSelector = {}));
var BlockType;
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
})(BlockType || (BlockType = {}));
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
  GeneralControls2["TEXT_ALIGN"] = "textAlign";
  GeneralControls2["FIXED_HEIGHT_SWITCHER"] = "fixedHeightSwitcherForm";
  GeneralControls2["HIDDEN_NODE"] = "hiddenNode";
  GeneralControls2["SMART_BLOCK"] = "smartBlock";
  GeneralControls2["SYNCHRONIZED_MODULE"] = "synchronizedModuleForm";
  GeneralControls2["FONT_FAMILY"] = "generalFontFamilyForm";
  GeneralControls2["BLOCK_INTERNAL_INDENTS"] = "generalBlockInternalIndents";
  GeneralControls2["STRUCTURE_INTERNAL_INDENTS"] = "generalStructureInternalIndents";
})(GeneralControls || (GeneralControls = {}));
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
  BannerControls2["EXTERNAL_INDENTS"] = "bannerExternalIndents";
  BannerControls2["MIME_TYPE"] = "bannerMimeTypeForm";
  BannerControls2["RESPONSIVE_IMAGE"] = "bannerResponsiveImageForm";
})(BannerControls || (BannerControls = {}));
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
})(BannerChildControls || (BannerChildControls = {}));
var ButtonControls;
(function(ButtonControls2) {
  ButtonControls2["ADJUST_TO_WIDTH"] = "adjustToWidth";
  ButtonControls2["ALIGNMENT"] = "buttonAlignment";
  ButtonControls2["BORDER"] = "buttonBorder";
  ButtonControls2["BORDER_RADIUS"] = "buttonBorderRadius";
  ButtonControls2["COLOR"] = "buttonColor";
  ButtonControls2["BUTTON_BLOCK_BACKGROUND_COLOR"] = "buttonBlockBackgroundColor";
  ButtonControls2["EXTERNAL_INDENTS"] = "buttonExternalIndents";
  ButtonControls2["FIXED_HEIGHT_CONTAINER"] = "buttonFixedHeightContainerForm";
  ButtonControls2["FONT_COLOR"] = "buttonFontColor";
  ButtonControls2["FONT_FAMILY"] = "buttonFontFamily";
  ButtonControls2["FONT_SIZE"] = "buttonFontSize";
  ButtonControls2["ICON"] = "buttonIconContainer";
  ButtonControls2["ICON_ALIGN"] = "buttonIconAlign";
  ButtonControls2["ICON_INDENT"] = "buttonIconIndent";
  ButtonControls2["ICON_WIDTH"] = "buttonIconWidth";
  ButtonControls2["IMAGE"] = "buttonImageForm";
  ButtonControls2["INTERNAL_INDENTS"] = "buttonInternalIndents";
  ButtonControls2["LINK"] = "buttonLink";
  ButtonControls2["MIME_TYPE"] = "buttonMimeTypeForm";
  ButtonControls2["SWITCHER_HOVERED_STYLES"] = "buttonSwitcherHoveredStylesForm";
  ButtonControls2["TEXT"] = "buttonText";
  ButtonControls2["TEXT_STYLE_AND_COLOR"] = "buttonTextStyleAndColorForm";
  ButtonControls2["HOVERED_BORDER_COLOR"] = "hoveredStyleBorderButtonForm";
  ButtonControls2["HOVERED_COLOR"] = "hoveredButtonColorForm";
  ButtonControls2["HOVERED_TEXT_COLOR"] = "hoveredButtonTextColorForm";
})(ButtonControls || (ButtonControls = {}));
var TextControls;
(function(TextControls2) {
  TextControls2["HIDDEN_NODE"] = "hiddenNodeText";
  TextControls2["PARAGRAPH_STYLE"] = "paragraphStyleForm";
  TextControls2["ALIGN"] = "textAlignmentForm";
  TextControls2["ANCHOR_CONTAINER"] = "textAnchorForm";
  TextControls2["FONT_BACKGROUND_COLOR"] = "textBlockFontBackgroundColor";
  TextControls2["TEXT_BLOCK_BACKGROUND_COLOR"] = "textBlockBackgroundColor";
  TextControls2["FONT_COLOR"] = "textBlockFontColor";
  TextControls2["TEXT_BLOCK_FONT_FAMILY"] = "textBlockFontFamily";
  TextControls2["FONT_FAMILY"] = "textFontFamily";
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
})(TextControls || (TextControls = {}));
var AmpFormControls;
(function(AmpFormControls2) {
  AmpFormControls2["AMP_FORM_HIDDEN_NODE"] = "ampFormHiddenNodeForm";
  AmpFormControls2["AMP_FORM_MIME_TYPE"] = "ampFormMimeTypeForm";
  AmpFormControls2["BACKGROUND_COLOR"] = "ampFormBackgroundColorForm";
})(AmpFormControls || (AmpFormControls = {}));
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
})(VideoControls || (VideoControls = {}));
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
  TimerControls2["EXTERNAL_INDENTS"] = "timerExternalIndents";
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
})(TimerControls || (TimerControls = {}));
var SpacerControls;
(function(SpacerControls2) {
  SpacerControls2["ALIGNMENT"] = "spacerAlignment";
  SpacerControls2["BORDER"] = "spacerBorder";
  SpacerControls2["EXTERNAL_INDENTS"] = "spacerExternalIndents";
  SpacerControls2["MIME_TYPE"] = "spacerMimeTypeForm";
  SpacerControls2["MODE"] = "spacerMode";
  SpacerControls2["SIZE"] = "spacerSize";
  SpacerControls2["BACKGROUND_COLOR"] = "spacerBackgroundColor";
})(SpacerControls || (SpacerControls = {}));
var ImageControls;
(function(ImageControls2) {
  ImageControls2["ALT_TEXT"] = "altText";
  ImageControls2["LINK"] = "blockLink";
  ImageControls2["ALIGNMENT"] = "imageAlignment";
  ImageControls2["ANCHOR_LINK_CONTAINER"] = "imageAnchorLinkContainerForm";
  ImageControls2["BORDER_RADIUS"] = "imageBorderRadiusForm";
  ImageControls2["IMAGE"] = "imageImageForm";
  ImageControls2["EXTERNAL_INDENTS"] = "imageExternalIndents";
  ImageControls2["MIME_TYPE"] = "imageMimeTypeForm";
  ImageControls2["RESPONSIVE"] = "imageResponsive";
  ImageControls2["ROLLOVER_IMAGE"] = "imageRolloverImageForm";
  ImageControls2["ROLLOVER_SWITCHER"] = "imageRolloverSwitcherForm";
  ImageControls2["SIZE"] = "imageSizeContainer";
})(ImageControls || (ImageControls = {}));
var HTMLControls;
(function(HTMLControls2) {
  HTMLControls2["EXTERNAL_INDENTS"] = "htmlExternalIndents";
  HTMLControls2["MIME_TYPE"] = "htmlMimeTypeForm";
})(HTMLControls || (HTMLControls = {}));
var CustomLinkControls;
(function(CustomLinkControls2) {
  CustomLinkControls2["IMAGE"] = "customBlockImageForm";
  CustomLinkControls2["COLOR_FORM"] = "customLinkColorForm";
  CustomLinkControls2["HREF_FORM"] = "customLinkHrefForm";
  CustomLinkControls2["TEXT_FORM"] = "customLinkTextForm";
  CustomLinkControls2["UNDERLINE_FORM"] = "customLinkUnderlineForm";
  CustomLinkControls2["WORD_BREAK_FORM"] = "customLinkWordBreakForm";
})(CustomLinkControls || (CustomLinkControls = {}));
var CustomImageControls;
(function(CustomImageControls2) {
  CustomImageControls2["ALT_TEXT_FORM"] = "customBlockImageAltTextForm";
  CustomImageControls2["WITHOUT_LINK_FORM"] = "customBlockImageWithOutLinkForm";
})(CustomImageControls || (CustomImageControls = {}));
var CustomTextControls;
(function(CustomTextControls2) {
  CustomTextControls2["ALIGN"] = "customTextBlockTextAlign";
  CustomTextControls2["FONT_SIZE"] = "customTextFontSizeController";
})(CustomTextControls || (CustomTextControls = {}));
var SocialControls;
(function(SocialControls2) {
  SocialControls2["ICON_SIZE"] = "iconSize";
  SocialControls2["EXTERNAL_INDENTS"] = "socialExternalIndents";
  SocialControls2["ICON_SPACER"] = "socialIconsSpacer";
  SocialControls2["ICON_TYPE"] = "socialIconTypeForm";
  SocialControls2["ITEM"] = "socialItemForm";
  SocialControls2["ITEM_TEXT_CUSTOMIZATION"] = "socialItemTextCustomizationForm";
  SocialControls2["MIME_TYPE"] = "socialMimeTypeForm";
  SocialControls2["NETWORK_ALIGNMENT"] = "socialNetworkAlignment";
  SocialControls2["BACKGROUND_COLOR"] = "socialBackgroundColor";
})(SocialControls || (SocialControls = {}));
var MenuControls;
(function(MenuControls2) {
  MenuControls2["EXTERNAL_INDENTS"] = "menuExternalIndents";
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
})(MenuControls || (MenuControls = {}));
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
})(AccordionControls || (AccordionControls = {}));
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
})(CarouselControls || (CarouselControls = {}));
var StripeControls;
(function(StripeControls2) {
  StripeControls2["BORDER_FORM"] = "stripeBorderForm";
  StripeControls2["COLOR"] = "stripeColorForm";
  StripeControls2["CONTENT_COLOR"] = "stripeContentColor";
  StripeControls2["IMAGE_CONTAINER"] = "stripeImageContainerForm";
  StripeControls2["INTERNAL_INDENTS"] = "stripeInternalIndents";
  StripeControls2["MESSAGE_AREA"] = "stripeMessageAreaForm";
  StripeControls2["MIME_TYPE"] = "stripeMimeTypeForm";
})(StripeControls || (StripeControls = {}));
var StructureControls;
(function(StructureControls2) {
  StructureControls2["RESPONSIVE_STRUCTURE"] = "responsiveStructure";
  StructureControls2["BACKGROUND_COLOR"] = "structureBackgroundColor";
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
})(StructureControls || (StructureControls = {}));
var ContainerControls;
(function(ContainerControls2) {
  ContainerControls2["BACKGROUND_COLOR"] = "containerBackgroundColorForm";
  ContainerControls2["BORDER_FORM"] = "containerBorderForm";
  ContainerControls2["BORDER_RADIUS"] = "containerBorderRadiusForm";
  ContainerControls2["EXTERNAL_INDENTS"] = "containerExternalIndentsForm";
  ContainerControls2["IMAGE_CONTAINER"] = "containerImageContainerForm";
  ContainerControls2["MIME_TYPE"] = "containerMimeTypeForm";
  ContainerControls2["DISPLAY_CONDITIONS"] = "displayConditions";
})(ContainerControls || (ContainerControls = {}));
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
})(MessageSettingsControls || (MessageSettingsControls = {}));
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
})(GeneralStylesControls || (GeneralStylesControls = {}));
const BuiltInControlTypes = {
  [BlockType.BLOCK_BANNER]: BannerControls,
  [BlockType.BLOCK_BUTTON]: ButtonControls,
  [BlockType.BLOCK_TEXT]: TextControls,
  [BlockType.BLOCK_VIDEO]: VideoControls,
  [BlockType.BLOCK_TIMER]: TimerControls,
  [BlockType.BLOCK_SPACER]: SpacerControls,
  [BlockType.BLOCK_IMAGE]: ImageControls,
  [BlockType.BLOCK_HTML]: HTMLControls,
  [BlockType.BLOCK_SOCIAL]: SocialControls,
  [BlockType.BLOCK_MENU]: MenuControls,
  [BlockType.BLOCK_AMP_FORM]: AmpFormControls,
  [BlockType.BLOCK_AMP_ACCORDION]: AccordionControls,
  [BlockType.BLOCK_AMP_CAROUSEL]: CarouselControls,
  [BlockType.STRIPE]: StripeControls,
  [BlockType.STRUCTURE]: StructureControls,
  [BlockType.CONTAINER]: ContainerControls,
  [BlockType.CUSTOM_BLOCK_LINK]: CustomLinkControls,
  [BlockType.CUSTOM_BLOCK_IMAGE]: CustomImageControls,
  [BlockType.CUSTOM_BLOCK_TEXT]: CustomTextControls,
  BANNER_CHILD: BannerChildControls,
  MESSAGE_SETTINGS: MessageSettingsControls,
  GENERAL_STYLES: GeneralStylesControls,
  GENERAL: GeneralControls
};
var ContextActionType;
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
})(ContextActionType || (ContextActionType = {}));
var EditorStatePropertyType;
(function(EditorStatePropertyType2) {
  EditorStatePropertyType2["previewDeviceMode"] = "previewDeviceMode";
})(EditorStatePropertyType || (EditorStatePropertyType = {}));
var PanelPosition;
(function(PanelPosition2) {
  PanelPosition2["BLOCKS_SETTINGS"] = "BLOCKS_SETTINGS";
  PanelPosition2["SETTINGS_BLOCKS"] = "SETTINGS_BLOCKS";
})(PanelPosition || (PanelPosition = {}));
var PopoverSide;
(function(PopoverSide2) {
  PopoverSide2["TOP"] = "top";
  PopoverSide2["RIGHT"] = "right";
  PopoverSide2["BOTTOM"] = "bottom";
  PopoverSide2["LEFT"] = "left";
})(PopoverSide || (PopoverSide = {}));
var ExtensionPopoverType;
(function(ExtensionPopoverType2) {
  ExtensionPopoverType2["AI_HIDDEN_PREHEADER"] = "aiHiddenPreheader";
  ExtensionPopoverType2["AI_SUBJECT"] = "aiSubject";
  ExtensionPopoverType2["AI_TEXT"] = "aiText";
})(ExtensionPopoverType || (ExtensionPopoverType = {}));
var PreviewDeviceMode;
(function(PreviewDeviceMode2) {
  PreviewDeviceMode2["DESKTOP"] = "DESKTOP";
  PreviewDeviceMode2["MOBILE"] = "MOBILE";
})(PreviewDeviceMode || (PreviewDeviceMode = {}));
var SettingsTab;
(function(SettingsTab2) {
  SettingsTab2["SETTINGS"] = "settings";
  SettingsTab2["STYLES"] = "styles";
  SettingsTab2["DATA"] = "data";
})(SettingsTab || (SettingsTab = {}));
const UIElementAttributes = {
  name: "name",
  disabled: "disabled"
};
const buttonAttributes = {
  ...UIElementAttributes,
  caption: "caption",
  icon: "icon"
};
const checkBoxAttributes = {
  ...UIElementAttributes,
  caption: "caption"
};
const counterAttributes = {
  ...UIElementAttributes,
  minValue: "min-value",
  maxValue: "max-value",
  step: "step"
};
const datePickerAttributes = {
  ...UIElementAttributes
};
const labelAttributes = {
  ...UIElementAttributes,
  text: "text"
};
const messageAttributes = {
  ...UIElementAttributes,
  type: "type"
};
const radioButtonsAttributes = {
  ...UIElementAttributes,
  buttons: "buttons"
};
const selectAttributes = {
  ...UIElementAttributes,
  multiSelect: "multi-select"
};
const fontFamilySelectAttributes = {
  addCustomFontOption: "add-custom-font-option"
};
const selectItemAttributes = {
  text: "text",
  value: "value"
};
const checkItemAttributes = {
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
const checkButtonsAttributes = {
  ...UIElementAttributes
};
const radioItemAttributes = {
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
const textAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder"
};
const textAreaAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder"
};
const nestedControlAttributes = {
  ...UIElementAttributes,
  controlId: "control-id"
};
const UEAttr = {
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
  CHECK_ITEM: checkItemAttributes,
  SELECT_ITEM: selectItemAttributes,
  RADIO_ITEM: radioItemAttributes,
  NESTED_CONTROL: nestedControlAttributes
};
var UIElementType;
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
})(UIElementType || (UIElementType = {}));
class BuiltInControl {
  constructor() {
    __publicField(this, "api");
  }
  /**
   * @description returns map of nodes parent control operates on
   */
  getTargetNodes(root) {
    return [root];
  }
  /**
   * @description returns map of labels used by parent control UI
   */
  getLabels() {
    return void 0;
  }
  /**
   * @description returns custom description for parent modifications
   */
  getModificationDescription() {
    return void 0;
  }
  /**
   * @description returns custom modifications to be included in the parent control patch
   */
  getAdditionalModifications(_root) {
    return void 0;
  }
}
class ButtonBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const buttons = root.querySelectorAll(BlockSelector.BUTTON);
    const button = root.asElement().hasClass(ESD_BLOCK_BUTTON) ? [root] : [];
    return buttons.length ? buttons : button;
  }
}
class ButtonBorderRadiusBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].BORDER_RADIUS;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonAlignBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].ALIGNMENT;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonBackgroundColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.BACKGROUND_COLOR;
  }
}
class ButtonBlockBackgroundColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].BUTTON_BLOCK_BACKGROUND_COLOR;
  }
}
class ButtonBorderBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].BORDER;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].COLOR;
  }
}
class ButtonFitToContainerBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].ADJUST_TO_WIDTH;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonFontFamilyBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].FONT_FAMILY;
  }
}
class ButtonHoverBorderColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].HOVERED_BORDER_COLOR;
  }
}
class ButtonHoverColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].HOVERED_COLOR;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonHoverTextColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].HOVERED_TEXT_COLOR;
  }
}
class ButtonMarginsBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].EXTERNAL_INDENTS;
  }
}
class ButtonPaddingsBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].INTERNAL_INDENTS;
  }
  getLabels() {
    return void 0;
  }
}
class ButtonTextBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].TEXT;
  }
}
class ButtonTextSizeBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].FONT_SIZE;
  }
}
class ButtonTextStyleAndFontColorBuiltInControl extends ButtonBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_BUTTON].TEXT_STYLE_AND_COLOR;
  }
  getLabels() {
    return void 0;
  }
}
class ContainerBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const containers = root.querySelectorAll(BlockSelector.CONTAINER);
    const container = root.asElement().hasClass(ESD_BLOCK_CONTAINER) ? [root] : [];
    return containers.length ? containers : container;
  }
}
class ContainerBackgroundColorBuiltInControl extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.CONTAINER].BACKGROUND_COLOR;
  }
}
class ContainerBackgroundImageBuiltInControl extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.CONTAINER].IMAGE_CONTAINER;
  }
  getLabels() {
    return void 0;
  }
}
class ContainerBorderBuiltInControl extends ContainerBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.CONTAINER].BORDER_FORM;
  }
  getLabels() {
    return void 0;
  }
}
class Control {
  constructor() {
    /** Provides access to editor functionalities specific to this UI control instance. */
    __publicField(this, "api");
  }
  /**
   * @description Allows to determine if control should be visible or hidden in control panel.
   * Called on every node modification.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isVisible(node) {
    return true;
  }
  /**
   * Optional hook called when the control is initially rendered.
   * Use this for setup tasks like attaching event listeners to the control's template elements.
   */
  onRender() {
  }
  /**
   * Optional cleanup hook called when the control is being destroyed.
   * Use this to remove event listeners or perform other cleanup tasks.
   */
  onDestroy() {
  }
}
class ImageBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const images = root.querySelectorAll(BlockSelector.IMAGE);
    const image = root.asElement().hasClass(ESD_BLOCK_IMAGE) ? [root] : [];
    return images.length ? images : image;
  }
}
class ImageSizeBuiltInControl extends ImageBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_IMAGE].SIZE;
  }
}
class MenuBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const menus = root.querySelectorAll(BlockSelector.MENU);
    const menu = root.asElement().hasClass(ESD_BLOCK_MENU) ? [root] : [];
    return menus.length ? menus : menu;
  }
}
class MenuFontFamilyBuiltInControl extends MenuBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_MENU].FONT_FAMILY;
  }
}
class SettingsPanelRegistry {
  constructor() {
    __publicField(this, "api");
  }
}
class SettingsPanelTab {
  constructor(tabId, controlsIds) {
    __publicField(this, "tabId");
    __publicField(this, "label");
    __publicField(this, "controlsIds");
    this.tabId = tabId;
    this.controlsIds = controlsIds;
  }
  getTabId() {
    return this.tabId;
  }
  getLabel() {
    return this.label;
  }
  getControlsIds() {
    return this.controlsIds;
  }
  withLabel(label) {
    this.label = label;
    return this;
  }
  addControl(controlId, position) {
    if (position < 0) {
      this.controlsIds.unshift(controlId);
    } else if (position > this.controlsIds.length) {
      this.controlsIds.push(controlId);
    } else {
      this.controlsIds.splice(position, 0, controlId);
    }
    return this;
  }
  deleteControl(controlId) {
    const index = this.controlsIds.indexOf(controlId);
    if (index !== -1) {
      this.controlsIds.splice(index, 1);
    }
  }
}
class SpacerBuildInControl extends BuiltInControl {
  getTargetNodes(root) {
    const spacers = root.querySelectorAll(BlockSelector.SPACER);
    const spacer = root.asElement().hasClass(ESD_BLOCK_SPACER) ? [root] : [];
    return spacers.length ? spacers : spacer;
  }
}
class SpacerBackgroundColorBuiltInControl extends SpacerBuildInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_SPACER].BACKGROUND_COLOR;
  }
}
class StructureBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const structures = root.querySelectorAll(BlockSelector.STRUCTURE);
    const structure = root.asElement().hasClass(ESD_BLOCK_STRUCTURE) ? [root] : [];
    return structures.length ? structures : structure;
  }
}
class StructureAdaptBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.STRUCTURE].RESPONSIVE_STRUCTURE;
  }
  getLabels() {
    return void 0;
  }
}
class StructureBackgroundColorBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.STRUCTURE].BACKGROUND_COLOR;
  }
}
class StructureBackgroundImageBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.STRUCTURE].IMAGE_CONTAINER;
  }
  getLabels() {
    return void 0;
  }
}
class StructureBorderBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.STRUCTURE].BORDER_FORM;
  }
  getLabels() {
    return void 0;
  }
}
class StructureMarginsBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.STRUCTURE].EXTERNAL_INDENTS;
  }
  getLabels() {
    return void 0;
  }
}
class StructurePaddingsBuiltInControl extends StructureBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.STRUCTURE_INTERNAL_INDENTS;
  }
  getLabels() {
    return void 0;
  }
}
class TextBuiltInControl extends BuiltInControl {
  getTargetNodes(root) {
    const texts = root.querySelectorAll(BlockSelector.TEXT);
    const text = root.asElement().hasClass(ESD_BLOCK_TEXT) ? [root] : [];
    return texts.length ? texts : text;
  }
}
class FontFamilyBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_TEXT].FONT_FAMILY;
  }
}
class TextLineSpacingBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_LINE_SPACING;
  }
}
class LinkColorBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_TEXT].LINKS_COLOR;
  }
}
class TextAlignBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_ALIGN;
  }
}
class TextBlockBackgroundBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_TEXT].TEXT_BLOCK_BACKGROUND_COLOR;
  }
}
class TextColorBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_COLOR;
  }
}
class TextPaddingsBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes[BlockType.BLOCK_TEXT].INTERNAL_INDENTS;
  }
}
class TextSizeBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_SIZE;
  }
}
class TextStyleBuiltInControl extends TextBuiltInControl {
  getParentControlId() {
    return BuiltInControlTypes.GENERAL.TEXT_STYLE;
  }
}
class Extension {
  constructor(i18n, styles2, uiElements = [], uiElementTagRegistry, controls2 = [], settingsPanelRegistry, contextActions = [], blocks = [], externalSmartElementsLibrary2, externalImageLibrary, previewStyles2, externalAiAssistant2, externalDisplayConditionsLibrary, externalVideoLibrary, blocksPanel) {
    __publicField(this, "i18n");
    __publicField(this, "styles");
    __publicField(this, "previewStyles");
    __publicField(this, "uiElements", []);
    __publicField(this, "uiElementTagRegistry");
    __publicField(this, "controls", []);
    __publicField(this, "settingsPanelRegistry");
    __publicField(this, "contextActions", []);
    __publicField(this, "blocks", []);
    __publicField(this, "id");
    __publicField(this, "externalSmartElementsLibrary");
    __publicField(this, "externalImageLibrary");
    __publicField(this, "externalAiAssistant");
    __publicField(this, "externalDisplayConditionsLibrary");
    __publicField(this, "externalVideoLibrary");
    __publicField(this, "blocksPanel");
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
  getI18n() {
    return this.i18n;
  }
  getStyles() {
    return this.styles;
  }
  getPreviewStyles() {
    return this.previewStyles;
  }
  getUiElements() {
    return this.uiElements;
  }
  getUiElementTagRegistry() {
    return this.uiElementTagRegistry;
  }
  getControls() {
    return this.controls;
  }
  getSettingsPanelRegistry() {
    return this.settingsPanelRegistry;
  }
  getContextActions() {
    return this.contextActions;
  }
  getBlocks() {
    return this.blocks;
  }
  getId() {
    return this.id;
  }
  getExternalSmartElementsLibrary() {
    return this.externalSmartElementsLibrary;
  }
  getExternalImageLibrary() {
    return this.externalImageLibrary;
  }
  getExternalAiAssistant() {
    return this.externalAiAssistant;
  }
  getExternalDisplayConditionsLibrary() {
    return this.externalDisplayConditionsLibrary;
  }
  getExternalVideoLibrary() {
    return this.externalVideoLibrary;
  }
  getBlocksPanel() {
    return this.blocksPanel;
  }
}
class ExtensionBuilder {
  constructor() {
    __publicField(this, "i18n");
    __publicField(this, "styles", []);
    __publicField(this, "previewStyles");
    __publicField(this, "uiElements", []);
    __publicField(this, "uiElementTagRegistry");
    __publicField(this, "controls", []);
    __publicField(this, "settingsPanelRegistry");
    __publicField(this, "contextActions", []);
    __publicField(this, "blocks", []);
    __publicField(this, "externalSmartElementsLibrary");
    __publicField(this, "externalImageLibrary");
    __publicField(this, "externalAiAssistant");
    __publicField(this, "externalDisplayConditionsLibrary");
    __publicField(this, "externalVideoLibrary");
    __publicField(this, "blocksPanel");
  }
  withLocalization(i18n) {
    this.i18n = i18n;
    return this;
  }
  /**
   * @deprecated Use addStyles() instead. This method will be removed in a future version.
   */
  withStyles(styles2) {
    this.styles = [styles2];
    return this;
  }
  addStyles(styles2) {
    this.styles.push(styles2);
    return this;
  }
  /**
   * @description defines custom developer styles to use inside the editor document preview
   */
  withPreviewStyles(styles2) {
    this.previewStyles = styles2;
    return this;
  }
  addContextAction(contextAction) {
    this.contextActions.push(contextAction);
    return this;
  }
  addUiElement(uiElement) {
    this.uiElements.push(uiElement);
    return this;
  }
  withUiElementTagRegistry(uiElementTagRegistry) {
    this.uiElementTagRegistry = uiElementTagRegistry;
    return this;
  }
  addControl(control) {
    this.controls.push(control);
    return this;
  }
  withSettingsPanelRegistry(settingsPanelRegistry) {
    this.settingsPanelRegistry = settingsPanelRegistry;
    return this;
  }
  withExternalSmartElementsLibrary(externalSmartElementsLibrary2) {
    this.externalSmartElementsLibrary = externalSmartElementsLibrary2;
    return this;
  }
  withExternalImageLibrary(externalImageLibrary) {
    this.externalImageLibrary = externalImageLibrary;
    return this;
  }
  withExternalAiAssistant(externalAiAssistant2) {
    this.externalAiAssistant = externalAiAssistant2;
    return this;
  }
  withExternalDisplayCondition(externalDisplayCondition) {
    this.externalDisplayConditionsLibrary = externalDisplayCondition;
    return this;
  }
  withExternalVideosLibrary(externalVideoLibrary) {
    this.externalVideoLibrary = externalVideoLibrary;
    return this;
  }
  withBlocksPanel(blocksPanel) {
    this.blocksPanel = blocksPanel;
    return this;
  }
  addBlock(block) {
    this.blocks.push(block);
    return this;
  }
  build() {
    return new Extension(this.i18n, (this.styles || []).map((style) => style.trim()).join("\n"), this.uiElements, this.uiElementTagRegistry, this.controls, this.settingsPanelRegistry, this.contextActions, this.blocks, this.externalSmartElementsLibrary, this.externalImageLibrary, this.previewStyles, this.externalAiAssistant, this.externalDisplayConditionsLibrary, this.externalVideoLibrary, this.blocksPanel);
  }
}
class ModificationDescription {
  constructor(key) {
    __publicField(this, "key");
    __publicField(this, "params");
    this.key = key;
  }
  withParams(params) {
    this.params = params;
    return this;
  }
  getValue() {
    return {
      key: this.key,
      params: this.params
    };
  }
}
class UIElement {
  constructor() {
    /** Provides access to editor functionalities specific to this UI element instance. */
    __publicField(this, "api");
  }
  /**
   * Optional cleanup hook called when the UI element is being destroyed.
   * Use this to remove event listeners or perform other cleanup tasks.
   */
  onDestroy() {
  }
  /**
   * Optional method to get the current value of the UI element.
   * Implement this if the element manages a state or value (e.g., input fields).
   * @returns The current value of the element.
   */
  getValue() {
  }
  /**
   * Optional method to set the value of the UI element.
   * Implement this if the element manages a state or value and needs to be updated externally.
   * @param value - The new value to set.
   */
  setValue(_value) {
  }
  /**
   * @description Optional hook called when one of the element's supported attributes ({@link UEAttr}) gets updated externally.
   * Implement this to react to attribute changes (e.g., visibility, disabled state).
   * @param name - The name of the attribute that was updated.
   * @param value - The new value of the attribute.
   */
  onAttributeUpdated(_name, _value) {
  }
}
class UIElementTagRegistry {
}
const IMAGE_BLOCK_ID = "atomic-block-image-alias-extension";
const TEXT_BLOCK_ID = "atomic-block-text-alias-extension";
let PanelRegistry$v = class PanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[IMAGE_BLOCK_ID] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [BuiltInControlTypes.BLOCK_IMAGE.IMAGE])
    ];
  }
};
class AtomicBlockImageAlias extends Block {
  getId() {
    return IMAGE_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Atomic Block Image Alias Extension");
  }
  getDescription() {
    return this.api.translate("Atomic Block Image Alias Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    const attrs = BlockAttr.BLOCK_IMAGE;
    return `<${BlockType.BLOCK_IMAGE} ${attrs.src}="src.jpg" ${attrs.alt}="alt" style="border: 2px solid blueviolet;"></${BlockType.BLOCK_IMAGE}>`;
  }
}
class AtomicBlockTextAlias extends Block {
  getId() {
    return TEXT_BLOCK_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Atomic Block Text Alias Extension");
  }
  getDescription() {
    return this.api.translate("Atomic Block Text Alias Extension Description");
  }
  isEnabled() {
    return true;
  }
  getTemplate() {
    return `<${BlockType.BLOCK_TEXT} class="product-name" align="center"><h1>Hello world!</h1></${BlockType.BLOCK_TEXT}>`;
  }
}
const atomicBlockAlias = new ExtensionBuilder().addBlock(AtomicBlockImageAlias).withSettingsPanelRegistry(PanelRegistry$v).addBlock(AtomicBlockTextAlias).build();
const SINGLE_CONTAINER$1 = "single-container";
const CONTAINERS_ROW$1 = "containers-row";
const CONTAINERS_ROW2$1 = "containers-row2";
const CONTAINERS_ROW3 = "containers-row3";
const CONTAINERS_COLUMN$1 = "containers-column";
let BaseBlockExtension$3 = class BaseBlockExtension extends Block {
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
    return BlockCompositionType.STRUCTURE;
  }
  _getImageBlock(url) {
    const tag = BlockType.BLOCK_IMAGE;
    const attrs = BlockAttr.BLOCK_IMAGE;
    return `<${tag} ${attrs.src}="${url}" ${attrs.alt}="Image block" ${attrs.href}="https://google.com"></${tag}>`;
  }
  _getTextBlock(content) {
    const tag = BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = BlockType.BLOCK_BUTTON;
    const attrs = BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.CONTAINER;
    const attrs = BlockAttr.CONTAINER;
    return `<${tag} ${`${attrs.widthPercent}="${width}"`}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
};
let SingleContainer$1 = class SingleContainer extends BaseBlockExtension$3 {
  constructor() {
    super(SINGLE_CONTAINER$1, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"))}
            </td>`;
  }
};
let ContainersRow$1 = class ContainersRow extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_ROW$1, "Containers row with custom content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content</h3>
              ${this._getContainer("<tr><td>custom html <b>1</b></td></tr>", 30)}
              ${this._getContainer("<tr><td>custom html <b>2</b></td></tr>", 65, 4)}
            </td>`;
  }
};
let ContainersRow2$1 = class ContainersRow2 extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_ROW2$1, "Containers row with standard content", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with standard content</h3>
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 30)}
              ${this._getContainer(this._getImageBlock("https://localfiles.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png"), 65, 4)}
            </td>`;
  }
};
class ContainersRow3 extends BaseBlockExtension$3 {
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
let ContainersColumn$1 = class ContainersColumn extends BaseBlockExtension$3 {
  constructor() {
    super(CONTAINERS_COLUMN$1, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getContainer(this._getButtonBlock("Hello!"), 100)}
              ${this._getContainer(this._getTextBlock("<p><b>Hello!</b></p>"), 100, 0, 20)}
            </td>`;
  }
};
const containerLayouts = new ExtensionBuilder().addBlock(SingleContainer$1).addBlock(ContainersRow$1).addBlock(ContainersRow2$1).addBlock(ContainersRow3).addBlock(ContainersColumn$1).build();
const BLOCK_ID$5 = "test-block-extension";
class BlockExtensionCustomBlockBasic extends Block {
  getId() {
    return BLOCK_ID$5;
  }
  getIcon() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
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
const customBlockBasic = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockBasic).build();
const BLOCK_ID$4 = "test-context-action-block-extension";
const CONTEXT_ACTION_ID = "test-block-context-action";
class TestBlockContextAction extends ContextAction {
  getId() {
    return CONTEXT_ACTION_ID;
  }
  getIconClass() {
    return "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
  }
  getLabel() {
    return this.api.translate("Test context action");
  }
  onClick(node) {
    console.log(`Test context action clicked for block: ${node.getOuterHTML()}`);
  }
}
class BlockExtensionCustomBlockWithCustomContextAction extends Block {
  getId() {
    return BLOCK_ID$4;
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
    return [ContextActionType.REMOVE, CONTEXT_ACTION_ID];
  }
}
const customBlockWithCustomContextAction = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomContextAction).addContextAction(TestBlockContextAction).build();
const BLOCK_ID$3 = "test-custom-renderer-block-extension";
class CustomRenderer extends BlockRenderer {
  getPreviewInnerHtml(node) {
    return "<h1>Custom content</h1>";
  }
}
class BlockExtensionCustomBlockWithCustomRenderer extends Block {
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
const customBlockWithCustomRenderer = new ExtensionBuilder().addBlock(BlockExtensionCustomBlockWithCustomRenderer).build();
const BLOCK_ID$2 = "test-deprecated-custom-renderer-block-extension";
class DeprecatedCustomRenderer extends BlockRenderer {
  getPreviewHtml(node) {
    return "<td><h1>Deprecated custom content</h1></td>";
  }
}
class BlockExtensionWithDeprecatedCustomRenderer extends Block {
  getId() {
    return BLOCK_ID$2;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Test Deprecated Custom Renderer Block Extension");
  }
  getDescription() {
    return this.api.translate("Test Deprecated Custom Renderer Block Extension Description");
  }
  isEnabled() {
    return true;
  }
  getCustomRenderer() {
    return DeprecatedCustomRenderer;
  }
  getTemplate() {
    return `<td><h1>Test custom renderer block extension</h1></td>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
}
const customBlockWithDeprecatedCustomRenderer = new ExtensionBuilder().addBlock(BlockExtensionWithDeprecatedCustomRenderer).build();
const MEDIA_STRUCTURE_ID = "media-structure";
const MEDIA_BLOCK_ID = "media-block";
const QUICK_INSERT_BLOCK_ID = "quick-insert-block";
let BaseBlockExtension$2 = class BaseBlockExtension2 extends Block {
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
class MediaStructure extends BaseBlockExtension$2 {
  constructor() {
    super(MEDIA_STRUCTURE_ID, "Media structure", "new-window", BlockCompositionType.STRUCTURE);
  }
  _getEmptyContainer() {
    const tag = BlockType.EMPTY_CONTAINER;
    const attrs = BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.blocks}="${BlockType.BLOCK_IMAGE},${BlockType.BLOCK_BANNER},${BlockType.BLOCK_VIDEO},${MEDIA_BLOCK_ID}"></${tag}>`;
  }
  getTemplate() {
    return `<td>
              <h3>Media structure</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
}
class MediaBlock extends BaseBlockExtension$2 {
  constructor() {
    super(MEDIA_BLOCK_ID, "Media block", "magic", BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>Media block</h4></td>";
  }
}
class QuickInsertBlock extends BaseBlockExtension$2 {
  constructor() {
    super(QUICK_INSERT_BLOCK_ID, "Quick insert block", "save", BlockCompositionType.BLOCK);
  }
  getTemplate() {
    return "<td><h4>This block can be inserted in any empty container!</h4></td>";
  }
  shouldDisplayQuickAddIcon() {
    return true;
  }
}
const customEmptyContainer = new ExtensionBuilder().addBlock(MediaStructure).addBlock(MediaBlock).addBlock(QuickInsertBlock).build();
const SINGLE_CONTAINER = "single-empty-container";
const CONTAINERS_ROW = "containers-row";
const CONTAINERS_ROW2 = "containers-row2";
const CONTAINERS_COLUMN = "containers-column";
let BaseBlockExtension$1 = class BaseBlockExtension3 extends Block {
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
    return BlockCompositionType.STRUCTURE;
  }
  _getEmptyContainer(width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.EMPTY_CONTAINER;
    const attrs = BlockAttr.EMPTY_CONTAINER;
    return `<${tag} ${attrs.widthPercent ? `${attrs.widthPercent}="${width}"` : ""}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
            </${tag}>`;
  }
};
class SingleContainer2 extends BaseBlockExtension$1 {
  constructor() {
    super(SINGLE_CONTAINER, "Single container", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Single container</h3>
              ${this._getEmptyContainer()}
            </td>`;
  }
}
class ContainersRow4 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW, "Containers row", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row</h3>
              ${this._getEmptyContainer(30)}
              ${this._getEmptyContainer(65, 4)}
            </td>`;
  }
}
class ContainersRow22 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_ROW2, "Containers row 2", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers row with custom content in between</h3>
              ${this._getEmptyContainer(30)}
              <span class="es-left" style="font-weight: bold; color: red; border: 1px solid green; padding: 5px; margin-left: 4%;">Custom Content</span>
              ${this._getEmptyContainer(30, 4)}
            </td>`;
  }
}
class ContainersColumn2 extends BaseBlockExtension$1 {
  constructor() {
    super(CONTAINERS_COLUMN, "Containers column", "new-window");
  }
  getTemplate() {
    return `<td>
              <h3>Containers column</h3>
              ${this._getEmptyContainer(100)}
              ${this._getEmptyContainer(100, 0, 20)}
            </td>`;
  }
}
const emptyContainerLayouts = new ExtensionBuilder().addBlock(SingleContainer2).addBlock(ContainersRow4).addBlock(ContainersRow22).addBlock(ContainersColumn2).build();
const BLOCK_ID$1 = "init-actions-block";
class InitActionsBlock extends Block {
  getId() {
    return BLOCK_ID$1;
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
    return "<td><h1>Init Actions block extension</h1></td>";
  }
  onDocumentInit() {
    return this.api.getDocumentModifier().modifyHtml(this.api.getDocumentRoot().querySelector(".esd-stripe")).setClass("modified-on-init");
  }
  onSelect(node) {
    return this.api.getDocumentModifier().modifyHtml(node).setClass("modified-on-select");
  }
}
const initActionsBlock = new ExtensionBuilder().addBlock(InitActionsBlock).build();
const RESTRICTED_DND = "restricted_dnd";
const RESTRICTED_SELECTION = "restricted_selection";
class BaseBlockExtension4 extends Block {
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
    return BlockCompositionType.STRUCTURE;
  }
  _getTextBlock(content) {
    const tag = BlockType.BLOCK_TEXT;
    return `<${tag}>${content}</${tag}>`;
  }
  _getButtonBlock(content) {
    const tag = BlockType.BLOCK_BUTTON;
    const attrs = BlockAttr.BLOCK_BUTTON;
    return `<${tag} ${attrs.href}="https://google.com">${content}</${tag}>`;
  }
  _getContainer(content, width = void 0, marginLeft = 0, marginTop = 0) {
    const tag = BlockType.CONTAINER;
    const attrs = BlockAttr.CONTAINER;
    return `<${tag} ${`${attrs.widthPercent}="${width}"`}
                    ${marginLeft || marginTop ? `style="margin-left: ${marginLeft}%; margin-top: ${marginTop}px;"` : ""}>
                    ${content}    
            </${tag}>`;
  }
}
class RestrictedDND extends BaseBlockExtension4 {
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
class RestrictedSelection extends BaseBlockExtension4 {
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
const interactionConstraints = new ExtensionBuilder().addBlock(RestrictedDND).addBlock(RestrictedSelection).build();
const BLOCK_ID = "structure-extension";
class StructureExtension extends Block {
  getId() {
    return BLOCK_ID;
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
    return BlockCompositionType.STRUCTURE;
  }
}
const customStructure = new ExtensionBuilder().addBlock(StructureExtension).build();
const EMPTY_CONTAINER_ID = "empty-container-extension";
const CONTAINER_ID = "container-extension";
class EmptyContainerExtension extends Block {
  getId() {
    return EMPTY_CONTAINER_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Empty Container Extension");
  }
  getDescription() {
    return this.api.translate("Empty Container Extension Description");
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
    return `<td align="left" width="560" class="esd-container-frame">
              <h3>Empty Container Extension</h3>
              <table cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td align="center" class="esd-empty-container" style="display: none"></td>
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
    return BlockCompositionType.CONTAINER;
  }
  allowInnerBlocksSelection() {
    return true;
  }
}
class ContainerExtension extends Block {
  getId() {
    return CONTAINER_ID;
  }
  getIcon() {
    return "new-window";
  }
  getName() {
    return this.api.translate("Container Extension");
  }
  getDescription() {
    return this.api.translate("Container Extension Description");
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
    const { CONTAINER, BLOCK_TEXT } = BlockType;
    return `<${CONTAINER}><${BLOCK_TEXT}><p>Hello world!</p></${BLOCK_TEXT}></${CONTAINER}>`;
  }
  onDrop(node) {
  }
  onDelete(node) {
  }
  getBlockCompositionType() {
    return BlockCompositionType.CONTAINER;
  }
  allowInnerBlocksSelection() {
    return false;
  }
}
const containerExtension = new ExtensionBuilder().addBlock(EmptyContainerExtension).addBlock(ContainerExtension).build();
const ID$G = "extendedBlockPaddings_text";
let PanelRegistry$u = class PanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0] = new SettingsPanelTab(SettingsTab.SETTINGS, [
      ID$G
    ]);
  }
};
class ExtendedBlockPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return ID$G;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended block paddings") : void 0
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
const extendedBlockPaddingsControl = new ExtensionBuilder().addControl(ExtendedBlockPaddingsControl).withLocalization({
  "en": {
    "Extended block paddings": "EN Extended text block paddings"
  },
  "uk": {
    "Extended block paddings": "Зовнішні відступи блоку текст"
  }
}).withSettingsPanelRegistry(PanelRegistry$u).build();
const TEXT_ID$1 = "extendedBlockPaddingsMultipleText";
const BUTTON_ID$1 = "extendedBlockPaddingsMultipleButton";
let PanelRegistry$t = class PanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(TEXT_ID$1, 0);
    controls2[BlockType.STRIPE][0].addControl(BUTTON_ID$1, 1);
  }
};
class ExtendedBlockTextPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return TEXT_ID$1;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text block paddings desktop") : this.api.translate("Extended text block paddings mobile")
    };
  }
}
class ExtendedBlockButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return BUTTON_ID$1;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button block paddings desktop") : this.api.translate("Extended button block paddings mobile")
    };
  }
}
const extensionMultiplePaddings = new ExtensionBuilder().addControl(ExtendedBlockTextPaddingsControl).addControl(ExtendedBlockButtonMarginsControl).withSettingsPanelRegistry(PanelRegistry$t).build();
const ID$F = "extendedImageSize";
let PanelRegistry$s = class PanelRegistry4 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$F, 0);
  }
};
class ExtendedImageSizeControl extends ImageSizeBuiltInControl {
  getId() {
    return ID$F;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended image size control") : this.api.translate("Extended image size control on mobile")
    };
  }
}
const imageSizeControlExtension = new ExtensionBuilder().addControl(ExtendedImageSizeControl).withSettingsPanelRegistry(PanelRegistry$s).build();
const PRODUCT_CARD_NAME_ALIGN_CONTROL_ID = "card-name-align-control";
const PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID = "card-price-align-control";
const PRODUCT_STRUCTURE_ID$1 = "product-structure";
class CardNameAlignControl extends TextAlignBuiltInControl {
  getId() {
    return PRODUCT_CARD_NAME_ALIGN_CONTROL_ID;
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".esd-block-text.name");
  }
  getLabels() {
    return {
      title: this.api.translate("Product Name Align")
    };
  }
}
class CardPriceAlignControl extends TextAlignBuiltInControl {
  getId() {
    return PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID;
  }
  getTargetNodes(root) {
    return root.querySelectorAll(".esd-block-text.price");
  }
  getLabels() {
    return {
      title: this.api.translate("Product Price Align")
    };
  }
}
let SampleSettingsPanelRegistry$1 = class SampleSettingsPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0] = new SettingsPanelTab(
      "settings",
      [
        PRODUCT_CARD_NAME_ALIGN_CONTROL_ID,
        PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID
      ]
    );
    controls2[PRODUCT_STRUCTURE_ID$1] = [
      new SettingsPanelTab(
        "settings",
        [
          PRODUCT_CARD_NAME_ALIGN_CONTROL_ID,
          PRODUCT_CARD_PRICE_ALIGN_CONTROL_ID
        ]
      )
    ];
  }
};
let ProductStructureBlock$1 = class ProductStructureBlock extends Block {
  getId() {
    return PRODUCT_STRUCTURE_ID$1;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
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
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </td>`;
  }
};
const multipleTextAlignExtension = new ExtensionBuilder().withSettingsPanelRegistry(SampleSettingsPanelRegistry$1).addBlock(ProductStructureBlock$1).addControl(CardNameAlignControl).addControl(CardPriceAlignControl).build();
const ID$E = "custom-title";
class CustomTitleWithPopoverPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2["MESSAGE_SETTINGS"][0].addControl(ID$E, 0);
  }
}
const customTitleElementId = "custom-title-element";
class CutomTitleElement extends UIElement {
  getId() {
    return customTitleElementId;
  }
  getTemplate() {
    return `
      <div>
        <ue-button name="openEmojiPopover">
          Emoji
        </ue-button>
        <ue-button name="openAiHiddenPreheaderPopover">
          AI Hidden Preheader
        </ue-button>
        <ue-button name="openSubjectTitlePopover">
          Subject Title
        </ue-button>
        <ue-button name="openTextAiPopover">
          AI Text
        </ue-button>
      </div>
    `;
  }
  onRender(container) {
    const emojiButton = container.querySelector('ue-button[name="openEmojiPopover"]');
    emojiButton.addEventListener("change", () => {
      this.api.openEmojiPopover({
        targetElement: emojiButton,
        preferredSides: [],
        onResult: (_response) => {
        }
      });
    });
    const aiHiddenPreheaderButton = container.querySelector('ue-button[name="openAiHiddenPreheaderPopover"]');
    aiHiddenPreheaderButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: aiHiddenPreheaderButton,
        preferredSides: ["bottom", "right"],
        type: "aiHiddenPreheader",
        value: "",
        onResult: (_response) => {
        }
      });
    });
    const subjectTitleButton = container.querySelector('ue-button[name="openSubjectTitlePopover"]');
    subjectTitleButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: subjectTitleButton,
        preferredSides: ["bottom", "right"],
        type: "aiSubject",
        value: "",
        onResult: (_response) => {
        }
      });
    });
    const textAiButton = container.querySelector('ue-button[name="openTextAiPopover"]');
    textAiButton.addEventListener("change", () => {
      this.api.openAIPopover({
        targetElement: textAiButton,
        value: "Hello world",
        preferredSides: ["left"],
        type: "aiText",
        onResult: (_response) => {
        }
      });
    });
  }
}
class CustomTitle extends Control {
  getId() {
    return ID$E;
  }
  getTemplate() {
    return `
      <custom-title-element>

      </custom-title-element>
    `;
  }
}
const customTitleWithPopover = new ExtensionBuilder().addControl(CustomTitle).addUiElement(CutomTitleElement).withSettingsPanelRegistry(CustomTitleWithPopoverPanelRegistry).build();
const ID$D = "nestedControlExtension";
const BACKGROUND_CONTROL = "backgroundControl";
const BACKGROUND_SWITCHER = "backgroundSwitcher";
let PanelRegistry$r = class PanelRegistry5 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$D, 0);
  }
};
class NestedControlExtension extends Control {
  getId() {
    return ID$D;
  }
  getTemplate() {
    const { LABEL, SWITCHER, NESTED_CONTROL } = UIElementType;
    return `
            <div>
                <${LABEL} ${UEAttr.LABEL.text}="Enable background control:"></${LABEL}>
                <${SWITCHER} ${UEAttr.SWITCHER.name}="${BACKGROUND_SWITCHER}" class="e2e-background-switcher"></${SWITCHER}>
            </div>
            <${NESTED_CONTROL} ${UEAttr.NESTED_CONTROL.name}="${BACKGROUND_CONTROL}" 
                               ${UEAttr.NESTED_CONTROL.controlId}="${BuiltInControlTypes.GENERAL.BACKGROUND_COLOR}">                               
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
const nestedBackgroundControl = new ExtensionBuilder().addControl(NestedControlExtension).withSettingsPanelRegistry(PanelRegistry$r).build();
const CONTROL_ID$2 = "reinitializedControlExtension";
const ELEMENT_ID = "reinitializedElementExtension";
const SWITCHER_NAME$2 = "switcher";
let PanelRegistry$q = class PanelRegistry6 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(CONTROL_ID$2, 0);
  }
};
class ReinitializedElement extends UIElement {
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
    this.api.triggerValueChange(event.target.checked);
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
class ReinitializedControlExtension extends Control {
  getId() {
    return CONTROL_ID$2;
  }
  getTemplate() {
    return `<div class="e2e-reinitialized-control"><${ELEMENT_ID} ${UEAttr.DEFAULT.name}="${SWITCHER_NAME$2}"></${ELEMENT_ID}></div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME$2, this._toggleClass.bind(this));
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this.api.updateValues({ [SWITCHER_NAME$2]: this.link.hasClass(this._getClass()) });
  }
  _getClass() {
    return "test-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription("Class added"));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription("Class removed"));
    }
  }
}
const reinitializedExtension = new ExtensionBuilder().addControl(ReinitializedControlExtension).addUiElement(ReinitializedElement).withSettingsPanelRegistry(PanelRegistry$q).build();
const ID$C = "stateChangeSubscriberExtension";
const LABEL_NAME = "label";
const SWITCHER_NAME$1 = "switcher";
let PanelRegistry$p = class PanelRegistry7 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$C, 0);
  }
};
class StateChangeSubscriberExtension extends Control {
  getId() {
    return ID$C;
  }
  getTemplate() {
    const { LABEL, SWITCHER } = UIElementType;
    return `<div class="e2e-mode-class-control">
                <${LABEL} ${UEAttr.LABEL.name}="${LABEL_NAME}"></${LABEL}>
                <${SWITCHER} ${UEAttr.SWITCHER.name}="${SWITCHER_NAME$1}"></${SWITCHER}>
            </div>`;
  }
  onRender() {
    this.api.onValueChanged(SWITCHER_NAME$1, this._toggleClass.bind(this));
    this.api.onEditorStatePropUpdated(EditorStatePropertyType.previewDeviceMode, () => this._updateForm());
  }
  onTemplateNodeUpdated(node) {
    this.link = node.querySelector("a");
    this._updateForm();
  }
  _updateForm() {
    this.api.updateValues({
      [LABEL_NAME]: this._getViewMode() === PreviewDeviceMode.DESKTOP ? "Set desktop class" : "Set mobile class",
      [SWITCHER_NAME$1]: this.link.hasClass(this._getClass())
    });
  }
  _getViewMode() {
    return this.api.getEditorState()[EditorStatePropertyType.previewDeviceMode];
  }
  _getClass() {
    return this._getViewMode() === PreviewDeviceMode.DESKTOP ? "extension-desktop-class" : "extension-mobile-class";
  }
  _toggleClass(add) {
    if (add) {
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription(`Class for ${this._getViewMode()} added`));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription(`Class for ${this._getViewMode()} removed`));
    }
  }
}
const stateChangeSubscriber = new ExtensionBuilder().addControl(StateChangeSubscriberExtension).withSettingsPanelRegistry(PanelRegistry$p).build();
const ID$B = "variableModeExtendedControl";
let PanelRegistry$o = class PanelRegistry8 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$B, 0);
  }
};
class VariableModeExtendedControl extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return ID$B;
  }
  getLabels() {
    return {
      title: this._getViewMode() === PreviewDeviceMode.DESKTOP ? "Set desktop background" : "Set mobile background"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass(`${this._getViewMode()}-background-applied`);
  }
  _getViewMode() {
    return this.api.getEditorState()[EditorStatePropertyType.previewDeviceMode];
  }
}
const variableModeExtendedControl = new ExtensionBuilder().addControl(VariableModeExtendedControl).withSettingsPanelRegistry(PanelRegistry$o).build();
const CONTROL_ID$1 = "variableVisibilityControl";
const SWITCHER_NAME = "switcher";
let PanelRegistry$n = class PanelRegistry9 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][1] = new SettingsPanelTab(SettingsTab.STYLES, [CONTROL_ID$1]);
    controls2[BlockType.BLOCK_IMAGE][0].addControl(CONTROL_ID$1, 0);
  }
};
class VariableVisibilityControl extends Control {
  getId() {
    return CONTROL_ID$1;
  }
  getTemplate() {
    const { SWITCHER, LABEL } = UIElementType;
    return `<div class="e2e-variable-visibility-control">
                <${LABEL}  ${UEAttr.LABEL.text}="Only visible if link href is undefined"></${LABEL}>
                <${SWITCHER} ${UEAttr.DEFAULT.name}="${SWITCHER_NAME}"></${SWITCHER}>
            </div>`;
  }
  isVisible(node) {
    return !node.querySelector("a").getAttribute("href");
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
      this.api.getDocumentModifier().modifyHtml(this.link).setClass(this._getClass()).apply(new ModificationDescription("Class added"));
    } else {
      this.api.getDocumentModifier().modifyHtml(this.link).removeClass(this._getClass()).apply(new ModificationDescription("Class removed"));
    }
  }
}
const variableVisibilityControl = new ExtensionBuilder().addControl(VariableVisibilityControl).withSettingsPanelRegistry(PanelRegistry$n).build();
const ID$A = "extendedButtonAlign";
let ButonPanelRegistry$2 = class ButonPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$A
        ]
      )
    ];
  }
};
class ExtendedButtonAlignControl extends ButtonAlignBuiltInControl {
  getId() {
    return ID$A;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button align desktop") : this.api.translate("Extended button align mobile")
    };
  }
}
const buttonAlignControlExtension = new ExtensionBuilder().addControl(ExtendedButtonAlignControl).withSettingsPanelRegistry(ButonPanelRegistry$2).build();
const ID$z = "extendedButtonBackground";
let PanelRegistry$m = class PanelRegistry10 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$z, 0);
  }
};
class ExtendedButtonBackgroundControl extends ButtonBackgroundColorBuiltInControl {
  getId() {
    return ID$z;
  }
  getLabels() {
    return {
      title: "Extended button background control"
    };
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-background-applied");
  }
}
const extensionButtonBackgroundControl = new ExtensionBuilder().addControl(ExtendedButtonBackgroundControl).withSettingsPanelRegistry(PanelRegistry$m).build();
const ID$y = "extendedButtonBlockBackground";
let PanelRegistry$l = class PanelRegistry11 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$y, 0);
  }
};
class ExtendedButtonBlockBackgroundControl extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return ID$y;
  }
  getLabels() {
    return {
      title: "Extended button block background control"
    };
  }
}
const extensionButtonBlockBackgroundControl = new ExtensionBuilder().addControl(ExtendedButtonBlockBackgroundControl).withSettingsPanelRegistry(PanelRegistry$l).build();
const ID$x = "extendedButtonBorder";
let PanelRegistry$k = class PanelRegistry12 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(SettingsTab.STYLES, [ID$x])
    ];
  }
};
class ExtendedButtonBorderControl extends ButtonBorderBuiltInControl {
  getId() {
    return ID$x;
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
const buttonBorderControlExtension = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$k).addControl(ExtendedButtonBorderControl).build();
const ID$w = "builtInButtonBorderHover";
let ButtonPanelRegistry$6 = class ButtonPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$w
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonBorderHover extends ButtonHoverBorderColorBuiltInControl {
  getId() {
    return ID$w;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover border color")
    };
  }
}
const extensionBuiltInButtonBorderHover = new ExtensionBuilder().addControl(ExtensionBuiltInButtonBorderHover).withSettingsPanelRegistry(ButtonPanelRegistry$6).build();
const ID$v = "extendedButtonBorderRadius";
let ButonPanelRegistry$1 = class ButonPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$v
        ]
      )
    ];
  }
};
class ExtendedButtonBorderRadiusControl extends ButtonBorderRadiusBuiltInControl {
  getId() {
    return ID$v;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button border radius"),
      titleHint: this.api.translate("Extended hint border radius")
    };
  }
}
const buttonBorderRadiusExtension = new ExtensionBuilder().addControl(ExtendedButtonBorderRadiusControl).withSettingsPanelRegistry(ButonPanelRegistry$1).build();
const ID$u = "extendedButtonColor";
let PanelRegistry$j = class PanelRegistry13 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON][0].addControl(ID$u, 0);
  }
};
class ExtendedButtonColorControl extends ButtonColorBuiltInControl {
  getId() {
    return ID$u;
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
const buttonColorControlExtension = new ExtensionBuilder().addControl(ExtendedButtonColorControl).withSettingsPanelRegistry(PanelRegistry$j).build();
const ID$t = "builtInButtonFitToContainer";
let ButtonPanelRegistry$5 = class ButtonPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$t
        ]
      )
    ];
  }
};
class ExtendedButtonFitToContainerControl extends ButtonFitToContainerBuiltInControl {
  getId() {
    return ID$t;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button fit to container desktop") : this.api.translate("Extended button fit to container mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-fit-to-container-applied");
  }
}
const extensionBuiltInButtonFitToContainer = new ExtensionBuilder().addControl(ExtendedButtonFitToContainerControl).withSettingsPanelRegistry(ButtonPanelRegistry$5).build();
const ID$s = "builtInButtonHoverColor";
let ButtonPanelRegistry$4 = class ButtonPanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$s
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonHoverColor extends ButtonHoverColorBuiltInControl {
  getId() {
    return ID$s;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover color")
    };
  }
}
const extensionBuiltInButtonHoverColor = new ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverColor).withSettingsPanelRegistry(ButtonPanelRegistry$4).build();
const ID$r = "builtInButtonHoverTextColor";
let ButtonPanelRegistry$3 = class ButtonPanelRegistry4 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$r
        ]
      )
    ];
  }
};
class ExtensionBuiltInButtonHoverTextColor extends ButtonHoverTextColorBuiltInControl {
  getId() {
    return ID$r;
  }
  getLabels() {
    return {
      title: this.api.translate("Button built in hover text color")
    };
  }
}
const extensionBuiltInButtonHoverTextColor = new ExtensionBuilder().addControl(ExtensionBuiltInButtonHoverTextColor).withSettingsPanelRegistry(ButtonPanelRegistry$3).build();
const ID$q = "extendedButtonMargins";
class ButonPanelRegistry3 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$q, 0);
  }
}
class ExtendedButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return ID$q;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button margins desktop") : this.api.translate("Extended button margins mobile")
    };
  }
}
const extensionButtonMarginsControl = new ExtensionBuilder().addControl(ExtendedButtonMarginsControl).withSettingsPanelRegistry(ButonPanelRegistry3).build();
const ID$p = "extendedButtonPaddingsControl";
let PanelRegistry$i = class PanelRegistry14 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$p, 0);
  }
};
class ExtendedButtonInternalIndents extends ButtonPaddingsBuiltInControl {
  getId() {
    return ID$p;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended buttons paddings desktop") : this.api.translate("Extended buttons paddings mobile")
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-internal-indents-applied"));
    return modifier;
  }
}
const extendedButtonPaddingsControl = new ExtensionBuilder().addControl(ExtendedButtonInternalIndents).withLocalization({ "en": {
  "Extended buttons paddings desktop": "EN Extended buttons paddings desktop",
  "Extended buttons paddings mobile": "EN Extended buttons paddings mobile"
} }).withSettingsPanelRegistry(PanelRegistry$i).build();
const ID$o = "extendedButtonText";
let ButtonPanelRegistry$2 = class ButtonPanelRegistry5 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$o
        ]
      )
    ];
  }
};
class ExtendedButtonTextControl extends ButtonTextBuiltInControl {
  getId() {
    return ID$o;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended button text control")
    };
  }
}
const buttonTextControlExtension = new ExtensionBuilder().addControl(ExtendedButtonTextControl).withSettingsPanelRegistry(ButtonPanelRegistry$2).build();
const ID$n = "extendedButtonTextSize";
let ButtonPanelRegistry$1 = class ButtonPanelRegistry6 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$n
        ]
      )
    ];
  }
};
class ExtendedButtonTextSizeControl extends ButtonTextSizeBuiltInControl {
  getId() {
    return ID$n;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button text size desktop") : this.api.translate("Extended button text size mobile")
    };
  }
}
const extensionButtonTextSizeControl = new ExtensionBuilder().addControl(ExtendedButtonTextSizeControl).withSettingsPanelRegistry(ButtonPanelRegistry$1).build();
const ID$m = "builtInTextStyleAndColor";
class ButtonPanelRegistry7 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          ID$m
        ]
      )
    ];
  }
}
class ExtensionBuiltInButtonTextStyleAndColor extends ButtonTextStyleAndFontColorBuiltInControl {
  getId() {
    return ID$m;
  }
  getLabels() {
    return {
      colorTitle: this.api.translate("Button built in text color"),
      styleTitle: this.api.translate("Button built in text style")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-text-color-applied");
  }
}
const extensionButtonTextStyleAndColorControl = new ExtensionBuilder().addControl(ExtensionBuiltInButtonTextStyleAndColor).withSettingsPanelRegistry(ButtonPanelRegistry7).build();
const ID$l = "extendedContainerBackgroundColor";
let PanelRegistry$h = class PanelRegistry15 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER][0].addControl(ID$l, 0);
  }
};
class ExtendedContainerBackgroundColorControl extends ContainerBackgroundColorBuiltInControl {
  getId() {
    return ID$l;
  }
  getLabels() {
    return {
      title: "Extended container background control"
    };
  }
}
const extensionContainerBackgroundControl = new ExtensionBuilder().addControl(ExtendedContainerBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$h).build();
const ID$k = "extendedContainerBackgroundImage";
let PanelRegistry$g = class PanelRegistry16 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER][0].addControl(ID$k, 0);
  }
};
class ExtendedContainerBackgroundImageControl extends ContainerBackgroundImageBuiltInControl {
  getId() {
    return ID$k;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container background image control"),
      titleHint: this.api.translate("Extended container title hint"),
      repeat: this.api.translate("Extended container repeat"),
      repeatHint: this.api.translate("Extended container repeat hint"),
      horizontalPosition: this.api.translate("Extended container horizontal position"),
      verticalPosition: this.api.translate("Extended container vertical position"),
      backgroundWidth: this.api.translate("Extended container background width"),
      backgroundHeight: this.api.translate("Extended container background height")
    };
  }
}
const extensionContainerBackgroundImageControl = new ExtensionBuilder().addControl(ExtendedContainerBackgroundImageControl).withSettingsPanelRegistry(PanelRegistry$g).build();
const ID$j = "extendedContainerBorder";
let PanelRegistry$f = class PanelRegistry17 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.CONTAINER] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$j])
    ];
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$j])
    ];
  }
};
class ExtendedContainerBorderControl extends ContainerBorderBuiltInControl {
  getId() {
    return ID$j;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container border"),
      borderColorTitle: this.api.translate("Custom color label"),
      borderStyleTitle: this.api.translate("Custom style label"),
      borderStyleHint: this.api.translate("Custom style hint")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-container-border-applied");
    });
    return modifier;
  }
}
const extensionContainerBorderControl = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$f).addControl(ExtendedContainerBorderControl).build();
const ID$i = "extendedSpacerBackgroundColor";
let PanelRegistry$e = class PanelRegistry18 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_SPACER][0].addControl(ID$i, 0);
  }
};
class ExtendedSpacerBackgroundColorControl extends SpacerBackgroundColorBuiltInControl {
  getId() {
    return ID$i;
  }
  getLabels() {
    return {
      title: "Extended spacer background control"
    };
  }
}
const extensionSpacerBackgroundColorControl = new ExtensionBuilder().addControl(ExtendedSpacerBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$e).build();
const ID$h = "extendedStructureAdapt";
let PanelRegistry$d = class PanelRegistry19 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$h
        ]
      )
    ];
    controls2[BlockType.STRIPE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          ID$h
        ]
      )
    ];
  }
};
class ExtendedStructureAdaptControl extends StructureAdaptBuiltInControl {
  getId() {
    return ID$h;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom structure adapt"),
      description: this.api.translate("Custom structure description")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((n) => {
      modifier.modifyHtml(n).setClass("custom-structure-adapt-applied");
    });
    return modifier;
  }
}
const extensionStructureAdaptControl = new ExtensionBuilder().addControl(ExtendedStructureAdaptControl).withSettingsPanelRegistry(PanelRegistry$d).build();
const ID$g = "extendedStructureBackgroundColor";
let PanelRegistry$c = class PanelRegistry20 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$g, 0);
  }
};
class ExtendedStructureBackgroundColorControl extends StructureBackgroundColorBuiltInControl {
  getId() {
    return ID$g;
  }
  getLabels() {
    return {
      title: "Extended structure background control"
    };
  }
}
const extensionStructureBackgroundControl = new ExtensionBuilder().addControl(ExtendedStructureBackgroundColorControl).withSettingsPanelRegistry(PanelRegistry$c).build();
const ID$f = "extendedStructureBackgroundImage";
let PanelRegistry$b = class PanelRegistry21 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$f, 0);
  }
};
class ExtendedStructureBackgroundImageControl extends StructureBackgroundImageBuiltInControl {
  getId() {
    return ID$f;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended structure background image control"),
      titleHint: this.api.translate("Extended structure title hint"),
      repeat: this.api.translate("Extended structure repeat"),
      repeatHint: this.api.translate("Extended structure repeat hint"),
      horizontalPosition: this.api.translate("Extended structure horizontal position"),
      verticalPosition: this.api.translate("Extended structure vertical position"),
      backgroundWidth: this.api.translate("Extended structure background width"),
      backgroundHeight: this.api.translate("Extended structure background height")
    };
  }
}
const extensionStructureBackgroundImageControl = new ExtensionBuilder().addControl(ExtendedStructureBackgroundImageControl).withSettingsPanelRegistry(PanelRegistry$b).build();
const ID$e = "extendedStructureBorder";
let PanelRegistry$a = class PanelRegistry22 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRUCTURE][0].addControl(ID$e, 0);
  }
};
class ExtendedStructureBorderControl extends StructureBorderBuiltInControl {
  getId() {
    return ID$e;
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
const structureBorderControlExtension = new ExtensionBuilder().withSettingsPanelRegistry(PanelRegistry$a).addControl(ExtendedStructureBorderControl).build();
const ID$d = "extendedStructureMargins";
let PanelRegistry$9 = class PanelRegistry23 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$d, 0);
  }
};
class ExtendedStructureMarginsControl extends StructureMarginsBuiltInControl {
  getId() {
    return ID$d;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure margins desktop") : this.api.translate("Extended structure margins mobile")
    };
  }
}
const extensionStructureMarginsControl = new ExtensionBuilder().addControl(ExtendedStructureMarginsControl).withLocalization({ "en": {
  "Extended structure margins desktop": "EN Extended structure margins desktop",
  "Extended structure margins mobile": "EN Extended structure margins mobile"
} }).withSettingsPanelRegistry(PanelRegistry$9).build();
const ID$c = "extendedStructurePaddings";
let PanelRegistry$8 = class PanelRegistry24 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.STRIPE][0].addControl(ID$c, 0);
  }
};
class ExtendedStructurePaddingsControl extends StructurePaddingsBuiltInControl {
  getId() {
    return ID$c;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure paddings desktop") : this.api.translate("Extended structure paddings mobile")
    };
  }
  getAdditionalModifications(block) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(block).map((node) => modifier.modifyHtml(node).setClass("custom-structure-paddings-applied"));
    return modifier;
  }
}
const extendedStructurePaddingsControl = new ExtensionBuilder().addControl(ExtendedStructurePaddingsControl).withLocalization({ "en": {
  "Extended structure paddings desktop": "EN Extended structure paddings desktop",
  "Extended structure paddings mobile": "EN Extended structure paddings mobile"
} }).withSettingsPanelRegistry(PanelRegistry$8).build();
const TEXT_ID = "extendedTextFontFamily";
const BUTTON_ID = "extendedButtonFontFamily";
const MENU_ID = "extendedMenuFontFamily";
let PanelRegistry$7 = class PanelRegistry25 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(TEXT_ID, 0);
    controls2[BlockType.STRUCTURE] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          TEXT_ID,
          BUTTON_ID,
          MENU_ID
        ]
      )
    ];
  }
};
class ExtendedTextFontFamilyControl extends FontFamilyBuiltInControl {
  getId() {
    return TEXT_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
  getModificationDescription() {
    return new ModificationDescription("Extended font family control modification.");
  }
  getAdditionalModifications(block) {
    return this.api.getDocumentModifier().modifyHtml(block).setClass("custom-font-family-applied");
  }
}
class ExtendedButtonFontFamilyControl extends ButtonFontFamilyBuiltInControl {
  getId() {
    return BUTTON_ID;
  }
  getLabels() {
    return {
      title: "Extended button font family control"
    };
  }
}
class ExtendedMenuFontFamilyControl extends MenuFontFamilyBuiltInControl {
  getId() {
    return MENU_ID;
  }
  getLabels() {
    return {
      title: "Extended menu font family control"
    };
  }
}
const fontFamilyControlExtension = new ExtensionBuilder().addControl(ExtendedTextFontFamilyControl).addControl(ExtendedButtonFontFamilyControl).addControl(ExtendedMenuFontFamilyControl).withSettingsPanelRegistry(PanelRegistry$7).build();
const ID$b = "extendedLinkColor";
let PanelRegistry$6 = class PanelRegistry26 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$b, 0);
  }
};
class ExtendedLinkColorControl extends LinkColorBuiltInControl {
  getId() {
    return ID$b;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended link color control")
    };
  }
}
const linkColorControlExtension = new ExtensionBuilder().addControl(ExtendedLinkColorControl).withSettingsPanelRegistry(PanelRegistry$6).build();
const ID$a = "extendedTextAlign";
let PanelRegistry$5 = class PanelRegistry27 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$a])
    ];
  }
};
class ExtendedTextAlignControl extends TextAlignBuiltInControl {
  getId() {
    return ID$a;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text align desktop") : this.api.translate("Extended text align mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-text-align-applied");
    });
    return modifier;
  }
}
const extensionTextAlignControl = new ExtensionBuilder().addControl(ExtendedTextAlignControl).withSettingsPanelRegistry(PanelRegistry$5).build();
const ID$9 = "builtInTextBlockBackground";
let PanelRegistry$4 = class PanelRegistry28 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$9, 0);
  }
};
class ExtendedTextBlockBackgroundControl extends TextBlockBackgroundBuiltInControl {
  getId() {
    return ID$9;
  }
  getLabels() {
    return {
      title: "Extended text block background control"
    };
  }
}
const extensionTextBlockBackgroundControl = new ExtensionBuilder().addControl(ExtendedTextBlockBackgroundControl).withSettingsPanelRegistry(PanelRegistry$4).build();
const ID$8 = "extendedTextColor";
let PanelRegistry$3 = class PanelRegistry29 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$8, 0);
  }
};
class ExtendedTextColorControl extends TextColorBuiltInControl {
  getId() {
    return ID$8;
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
const textColorControlExtension = new ExtensionBuilder().addControl(ExtendedTextColorControl).withSettingsPanelRegistry(PanelRegistry$3).build();
const ID$7 = "extendedTextLineSpacing";
let PanelRegistry$2 = class PanelRegistry30 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT] = [
      new SettingsPanelTab(SettingsTab.SETTINGS, [ID$7])
    ];
  }
};
class ExtendedTextLineSpacingControl extends TextLineSpacingBuiltInControl {
  getId() {
    return ID$7;
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
const textLineSpacingControlExtension = new ExtensionBuilder().addControl(ExtendedTextLineSpacingControl).withSettingsPanelRegistry(PanelRegistry$2).build();
const ID$6 = "extendedTextSize";
let PanelRegistry$1 = class PanelRegistry31 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$6, 0);
  }
};
class ExtendedTextSizeControl extends TextSizeBuiltInControl {
  getId() {
    return ID$6;
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
const textSizeControlExtension = new ExtensionBuilder().addControl(ExtendedTextSizeControl).withSettingsPanelRegistry(PanelRegistry$1).build();
const ID$5 = "extendedTextStyle";
class PanelRegistry32 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_TEXT][0].addControl(ID$5, 0);
  }
}
class ExtendedTextStyleControl extends TextStyleBuiltInControl {
  getId() {
    return ID$5;
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
const textStyleControlExtension = new ExtensionBuilder().addControl(ExtendedTextStyleControl).withSettingsPanelRegistry(PanelRegistry32).build();
const generalSettingsStyles = new ExtensionBuilder().withStyles(".e2e-general-settings button {color: red;}").build();
const previewStyles = new ExtensionBuilder().withPreviewStyles(`
    .ue-action-buttons-wrapper {
      background-color: red;
    }
    .ue-dots-icon {
      background-color: orange;
    }
  `).build();
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
const externalImagesLibrary = new ExtensionBuilder().withExternalImageLibrary(ExternalImagesLibraryExample$1).build();
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
const externalSmartElementsLibrary = new ExtensionBuilder().withExternalSmartElementsLibrary(ExternalSmartElementsLibrary).build();
const CLASSIC_BLOCK_ID = "classic-block";
class ClassicBlock extends Block {
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
class ClassicStructureBlock extends Block {
  getId() {
    return CLASSIC_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
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
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="30">
                    <${BlockType.BLOCK_TEXT}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Search
                    </${BlockType.BLOCK_BUTTON}>
                </${BlockType.CONTAINER}>
                
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="65">
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://stripo.email">
                        Visit Stripo
                    </${BlockType.BLOCK_BUTTON}>
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://ext.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}> 
                </${BlockType.CONTAINER}>
            </td>`;
  }
}
const PRODUCT_STRUCTURE_ID = "product-structure";
class ProductStructureBlock2 extends Block {
  getId() {
    return PRODUCT_STRUCTURE_ID;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
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
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="50">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://zwkxy.stripocdn.email/content/guids/CABINET_afa9e4cdc44a36489ab8a25bf18acd36/images/madibadeafricaninspirationaxe4ufe3iv4unsplash_1_sJE.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}>
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 16px; font-weight: bold;">
                            IPhone X
                        </p>
                    </${BlockType.BLOCK_TEXT}>    
                    <${BlockType.BLOCK_TEXT}>
                        <p style="color: #555555; line-height: 200%; font-size: 14px;">
                            999.95
                        </p>
                    </${BlockType.BLOCK_TEXT}>
                    <${BlockType.BLOCK_BUTTON} ${BlockAttr.BLOCK_BUTTON.href}="https://google.com">
                        Buy
                    </${BlockType.BLOCK_TEXT}>
                </${BlockType.CONTAINER}>
            </td>`;
  }
}
const BUTTON_ALIGN_CONTROL_ID = "buttonAlignBuiltInControl";
class ButtonAlignControl extends ButtonAlignBuiltInControl {
  getId() {
    return BUTTON_ALIGN_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button align desktop") : this.api.translate("Extended button align mobile")
    };
  }
}
const BUTTON_BACKGROUND_COLOR_ID = "extendedButtonColor";
class ButtonBackgroundColorControl extends ButtonColorBuiltInControl {
  getId() {
    return BUTTON_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Button built in background color"
    };
  }
}
const BUTTON_BLOCK_BACKGROUND_ID = "extendedButtonBlockBackground";
class ButtonBlockBackground extends ButtonBlockBackgroundColorBuiltInControl {
  getId() {
    return BUTTON_BLOCK_BACKGROUND_ID;
  }
  getLabels() {
    return {
      title: "Extended button block background control"
    };
  }
}
const BUTTON_BORDER_ID = "extendedButtonBorder";
class ButtonBorderControl extends ButtonBorderBuiltInControl {
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
const BUTTON_BORDER_RADIUS_CONTROL_ID = "extendedButtonBorderRadius";
class ButtonBorderRadiusControl extends ButtonBorderRadiusBuiltInControl {
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
const BUTTON_FIT_TO_CONTAINER_ID = "extendedFitToContainer";
class ButtonFitToContainerControl extends ButtonFitToContainerBuiltInControl {
  getId() {
    return BUTTON_FIT_TO_CONTAINER_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button fit to container desktop") : this.api.translate("Extended button fit to container mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-fit-to-container-applied");
  }
}
const BUTTON_HOVER_BORDER_COLOR_ID = "extendedButtonHoverBorderColor";
class ButtonHoverBorderColorControl extends ButtonHoverBorderColorBuiltInControl {
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
class ButtonHoverColorControl extends ButtonHoverColorBuiltInControl {
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
const BUTTON_HOVER_TEXT_COLOR_ID = "extendedButtonHoverTextColor";
class ButtonHoverTextColorControl extends ButtonHoverTextColorBuiltInControl {
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
const BUTTON_MARGINS_ID = "extendedButtonMargins";
class ButtonMarginsControl extends ButtonMarginsBuiltInControl {
  getId() {
    return BUTTON_MARGINS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button margins desktop") : this.api.translate("Extended button margins mobile")
    };
  }
}
const BUTTON_PADDINGS_ID = "extendedButtonPaddings";
class ButtonPaddingsControl extends ButtonPaddingsBuiltInControl {
  getId() {
    return BUTTON_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button paddings desktop") : this.api.translate("Extended button paddings mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-paddings-applied");
  }
}
const BUTTON_TEXT_CONTROL_ID = "buttonTextBuiltInControl";
class ButtonTextControl extends ButtonTextBuiltInControl {
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
const BUTTON_TEST_STYLE_AND_COLOR_ID = "extendedButtonTextStyleAndColor";
class ButtonTextStyleAndColor extends ButtonTextStyleAndFontColorBuiltInControl {
  getId() {
    return BUTTON_TEST_STYLE_AND_COLOR_ID;
  }
  getLabels() {
    return {
      colorTitle: this.api.translate("Button built in text color"),
      styleTitle: this.api.translate("Button built in text style")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    return modifier.modifyHtml(root).setClass("custom-button-text-color-applied");
  }
}
const BUTTON_TEXT_SIZE_CONTROL_ID = "extendedButtonTextSize";
class ButtonTextSizeControl extends ButtonTextSizeBuiltInControl {
  getId() {
    return BUTTON_TEXT_SIZE_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended button text size desktop") : this.api.translate("Extended button text size mobile")
    };
  }
}
const CONTAINER_BACKGROUND_COLOR_ID = "extendedContainerBackgroundColor";
class ContainerBackgroundColor extends ContainerBackgroundColorBuiltInControl {
  getId() {
    return CONTAINER_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended container background color control"
    };
  }
}
const CONTAINER_BACKGROUND_IMAGE_ID = "extendedContainerBackgroundImage";
class ContainerBackgroundImage extends ContainerBackgroundImageBuiltInControl {
  getId() {
    return CONTAINER_BACKGROUND_IMAGE_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended container background image control"),
      titleHint: this.api.translate("Extended title hint"),
      repeat: this.api.translate("Extended repeat"),
      repeatHint: this.api.translate("Extended repeat hint"),
      horizontalPosition: this.api.translate("Extended horizontal position"),
      verticalPosition: this.api.translate("Extended vertical position"),
      backgroundWidth: this.api.translate("Extended background width"),
      backgroundHeight: this.api.translate("Extended background height")
    };
  }
}
const IMAGE_SIZE_CONTROL_ID = "imageSizeBuiltInControl";
class ImageSizeControl extends ImageSizeBuiltInControl {
  getId() {
    return IMAGE_SIZE_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Built-in Image Size on desktop") : this.api.translate("Built-in Image Size on mobile")
    };
  }
  getTargetNodes(root) {
    const images = root.querySelectorAll(".esd-block-image");
    return images.length ? images : [];
  }
}
const SPACER_BACKGROUND_COLOR_ID = "extendedSpacerBlockBackground";
class SpacerBackgroundColor extends SpacerBackgroundColorBuiltInControl {
  getId() {
    return SPACER_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended spacer background color control"
    };
  }
}
const STRUCTURE_ADAPT_ID = "extendedStructureAdapt";
class StructureAdaptControl extends StructureAdaptBuiltInControl {
  getId() {
    return STRUCTURE_ADAPT_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Custom structure adapt"),
      description: this.api.translate("Custom structure description")
    };
  }
}
const STRUCTURE_BACKGROUND_COLOR_ID = "extendedStructureBackgroundColor";
class StructureBackgroundColor extends StructureBackgroundColorBuiltInControl {
  getId() {
    return STRUCTURE_BACKGROUND_COLOR_ID;
  }
  getLabels() {
    return {
      title: "Extended structure background color control"
    };
  }
}
const STRUCTURE_BACKGROUND_IMAGE_ID = "extendedStructureBackgroundImage";
class StructureBackgroundImage extends StructureBackgroundImageBuiltInControl {
  getId() {
    return STRUCTURE_BACKGROUND_IMAGE_ID;
  }
  getLabels() {
    return {
      title: this.api.translate("Extended structure background image control"),
      titleHint: this.api.translate("Extended structure title hint"),
      repeat: this.api.translate("Extended structure repeat"),
      repeatHint: this.api.translate("Extended structure repeat hint"),
      horizontalPosition: this.api.translate("Extended structure horizontal position"),
      verticalPosition: this.api.translate("Extended structure vertical position"),
      backgroundWidth: this.api.translate("Extended structure background width"),
      backgroundHeight: this.api.translate("Extended structure background height")
    };
  }
}
const STRUCTURE_BORDER_ID = "extendedStructureBorder";
class StructureBorderControl extends StructureBorderBuiltInControl {
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
const STRUCTURE_MARGINS_ID = "extendedStructureMargins";
class StructureMarginsControl extends StructureMarginsBuiltInControl {
  getId() {
    return STRUCTURE_MARGINS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure margins desktop") : this.api.translate("Extended structure margins mobile")
    };
  }
}
const STRUCTURE_PADDINGS_ID = "extendedStructurePaddings";
class StructurePaddingsControl extends StructurePaddingsBuiltInControl {
  getId() {
    return STRUCTURE_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended structure paddings desktop") : this.api.translate("Extended structure paddings mobile")
    };
  }
}
const LINK_COLOR_CONTROL_ID = "linkColorBuiltInControl";
class LinkColorControl extends LinkColorBuiltInControl {
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
const TEXT_ALIGN_CONTROL_ID = "extendedTextAlign";
class TextAlignControl extends TextAlignBuiltInControl {
  getId() {
    return TEXT_ALIGN_CONTROL_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text align desktop") : this.api.translate("Extended text align mobile")
    };
  }
  getAdditionalModifications(root) {
    const modifier = this.api.getDocumentModifier();
    this.getTargetNodes(root).forEach((node) => {
      modifier.modifyHtml(node).setClass("custom-text-align-applied");
    });
    return modifier;
  }
}
const TEXT_BLOCK_BACKGROUND_ID = "extendedTextBlockBackground";
class TextBlockBackground extends TextBlockBackgroundBuiltInControl {
  getId() {
    return TEXT_BLOCK_BACKGROUND_ID;
  }
  getLabels() {
    return {
      title: "Extended text block background control"
    };
  }
}
const TEXT_COLOR_CONTROL_ID = "extendedTextColor";
class TextColorControl extends TextColorBuiltInControl {
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
class TextFontFamily extends FontFamilyBuiltInControl {
  getId() {
    return TEXT_FONT_FAMILY_ID;
  }
  getLabels() {
    return {
      title: "Extended font family control"
    };
  }
}
const TEXT_LINE_SPACING_ID = "extendedTextLineSpacing";
class TextLineSpacingControl extends TextLineSpacingBuiltInControl {
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
const TEXT_PADDINGS_ID = "extendedTextPaddings";
class TextPaddingsControl extends TextPaddingsBuiltInControl {
  getId() {
    return TEXT_PADDINGS_ID;
  }
  getLabels() {
    const viewMode = this.api.getEditorState().previewDeviceMode;
    return {
      title: viewMode === "DESKTOP" ? this.api.translate("Extended text paddings desktop") : this.api.translate("Extended text paddings mobile")
    };
  }
}
const TEXT_SIZE_CONTROL_ID = "extendedTextSize";
class TextSizeControl extends TextSizeBuiltInControl {
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
class TextStyleControl extends TextStyleBuiltInControl {
  getId() {
    return TEXT_STYLE_CONTROL_ID;
  }
  getLabels() {
    return {
      title: "Text style control"
    };
  }
}
class SampleSettingsPanelRegistry2 extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[CLASSIC_BLOCK_ID] = [
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          // LINK_COLOR_CONTROL_ID,
          // TEXT_SIZE_CONTROL_ID,
          // TEXT_STYLE_CONTROL_ID,
          // TEXT_LINE_SPACING_ID,
        ]
      )
    ];
    controls2[CLASSIC_STRUCTURE_ID] = [
      new SettingsPanelTab(
        "Structure",
        [
          STRUCTURE_BORDER_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID
        ]
      ).withLabel(this.api.translate("Structure")),
      new SettingsPanelTab(
        "Button",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BORDER_ID
        ]
      ).withLabel(this.api.translate("Button"))
    ];
    controls2[PRODUCT_STRUCTURE_ID] = [
      new SettingsPanelTab(
        "Product",
        [
          IMAGE_SIZE_CONTROL_ID,
          STRUCTURE_MARGINS_ID,
          STRUCTURE_PADDINGS_ID,
          STRUCTURE_BORDER_ID,
          BUTTON_ALIGN_CONTROL_ID,
          BUTTON_PADDINGS_ID,
          BUTTON_MARGINS_ID,
          LINK_COLOR_CONTROL_ID,
          TEXT_SIZE_CONTROL_ID,
          TEXT_STYLE_CONTROL_ID,
          TEXT_LINE_SPACING_ID,
          TEXT_COLOR_CONTROL_ID,
          TEXT_FONT_FAMILY_ID,
          TEXT_ALIGN_CONTROL_ID
        ]
      ).withLabel(this.api.translate("Product")),
      new SettingsPanelTab(
        "Card",
        [
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_BORDER_ID,
          BUTTON_BORDER_RADIUS_CONTROL_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID,
          BUTTON_FIT_TO_CONTAINER_ID,
          BUTTON_BLOCK_BACKGROUND_ID,
          BUTTON_TEXT_SIZE_CONTROL_ID,
          TEXT_BLOCK_BACKGROUND_ID,
          STRUCTURE_BACKGROUND_COLOR_ID,
          BUTTON_TEST_STYLE_AND_COLOR_ID
        ]
      ).withLabel(this.api.translate("Card"))
    ];
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          BUTTON_BACKGROUND_COLOR_ID,
          BUTTON_TEXT_CONTROL_ID,
          BUTTON_ALIGN_CONTROL_ID
        ]
      ),
      new SettingsPanelTab(
        SettingsTab.STYLES,
        [
          BUTTON_BORDER_ID,
          BUTTON_HOVER_TEXT_COLOR_ID,
          BUTTON_HOVER_BORDER_COLOR_ID,
          BUTTON_HOVER_COLOR_ID
        ]
      )
    ];
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_PADDINGS_ID, 0);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_MARGINS_ID, 1);
    controls2[BlockType.STRIPE][0].addControl(BUTTON_MARGINS_ID, 2);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_ADAPT_ID, 3);
    controls2[BlockType.STRIPE][0].addControl(STRUCTURE_BACKGROUND_IMAGE_ID, 4);
    controls2[BlockType.STRUCTURE][0].addControl(CONTAINER_BACKGROUND_IMAGE_ID, 0);
    controls2[BlockType.STRUCTURE][0].addControl(STRUCTURE_BORDER_ID, 0);
    controls2[BlockType.STRUCTURE][0].addControl(STRUCTURE_BACKGROUND_COLOR_ID, 1);
    controls2[BlockType.STRUCTURE][0].addControl(CONTAINER_BACKGROUND_COLOR_ID, 2);
    controls2[BlockType.STRUCTURE][0].addControl(SPACER_BACKGROUND_COLOR_ID, 3);
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
  TextLineSpacingControl,
  ButtonAlignControl,
  ButtonTextSizeControl,
  ButtonBorderRadiusControl,
  ButtonPaddingsControl,
  TextPaddingsControl,
  ButtonMarginsControl,
  StructurePaddingsControl,
  StructureMarginsControl,
  StructureAdaptControl,
  ButtonFitToContainerControl,
  ButtonBlockBackground,
  TextBlockBackground,
  StructureBackgroundColor,
  ContainerBackgroundColor,
  SpacerBackgroundColor,
  ContainerBackgroundImage,
  StructureBackgroundImage,
  TextAlignControl,
  ImageSizeControl,
  ButtonTextStyleAndColor
];
const builder = new ExtensionBuilder().addBlock(ClassicBlock).addBlock(ClassicStructureBlock).addBlock(ProductStructureBlock2).withSettingsPanelRegistry(SampleSettingsPanelRegistry2);
for (const control of controls) {
  builder.addControl(control);
}
const gitSample_10_built_in_controls = builder.build();
class SimpleBlockRenderer extends BlockRenderer {
  /**
   * Generates a preview HTML string for the block.
   * It replaces the dynamic merge tag `#{NAME}` with the static default value from editor configuration or 'World'
   * to provide a representative preview in the editor UI.
   * @param {ImmutableHtmlNode} node The immutable HTML node representing the block.
   * @returns {string} The modified HTML string for preview.
   */
  getPreviewHtml(node) {
    var _a2, _b2;
    return node.getOuterHTML().replace(`#{NAME}`, ((_b2 = (_a2 = this.api.getEditorConfig()) == null ? void 0 : _a2.extensionBlockParams) == null ? void 0 : _b2.defVal) || "World");
  }
}
const CONTEXT_ACTION_MAGIC_BUTTON_ID = "simple-block-magic-button";
class SimpleBlockContextAction extends ContextAction {
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
class SimpleBlock extends Block {
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
      ContextActionType.MOVE,
      ContextActionType.REMOVE,
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
      modifier.apply(new ModificationDescription("Removed extra simple blocks on init"));
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
const MessageStyle$1 = {
  DANGER: "error",
  SUCCESS: "success",
  WARNING: "warn",
  INFO: "info"
};
const CONTROL_BUILD_IN_UI_ELEMENTS_DEMO_ID = "ui-elements-demo";
const MESSAGE_ELEMENT$1 = "message";
const TOGGLEABLE_CONTAINER = "toggleable";
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
class BuildInUIElementsDemoControl extends Control {
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
    return `<${UIElementType.LABEL} ${UEAttr.LABEL.text}="${text}" ${UEAttr.LABEL.name}="${name}"></${UIElementType.LABEL}>`;
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
        <${UIElementType.MESSAGE} ${UEAttr.MESSAGE.name}="${MESSAGE_ELEMENT$1}" ${UEAttr.MESSAGE.type}="${MessageStyle$1.INFO}"></${UIElementType.MESSAGE}>
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
    return `<${UIElementType.RADIO_ITEM} ${UEAttr.RADIO_ITEM.hint}="${text}" ${UEAttr.RADIO_ITEM.text}="${text}" ${UEAttr.RADIO_ITEM.value}="${value}"></${UIElementType.RADIO_ITEM}>`;
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
      <${UIElementType.RADIO_BUTTONS} ${UEAttr.RADIO_BUTTONS.name}="${RADIO_BUTTONS_ELEMENT$1}">
          ${Object.keys(MessageStyle$1).map((key) => this._getRadioButton(key, MessageStyle$1[key])).join("")}
      </${UIElementType.RADIO_BUTTONS}>
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
    return `<${UIElementType.SELECT_ITEM} ${UEAttr.SELECT_ITEM.text}="${text}" ${UEAttr.SELECT_ITEM.value}="${value}"></${UIElementType.SELECT_ITEM}>`;
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
        <${UIElementType.SELECTPICKER} ${UEAttr.SELECTPICKER.name}="${SELECT_ELEMENT$1}" ${UEAttr.SELECTPICKER.multiSelect}="true">
            ${Object.keys(MessageStyle$1).map((key) => this._getSelectItem(key, MessageStyle$1[key])).join("")}
        </${UIElementType.SELECTPICKER}>
    `;
  }
  /**
   * Generates the HTML template for a Check Item UI element.
   * @param {string} name - The text and hint for the check item.
   * @param {string} value - The value associated with the check item.
   * @returns {string} The HTML string for the check item element.
   */
  getCheckItem(name, value) {
    return `<${UIElementType.CHECK_ITEM} ${UEAttr.CHECK_ITEM.hint}="${name}" ${UEAttr.CHECK_ITEM.text}="${name}" ${UEAttr.CHECK_ITEM.value}="${value}"></${UIElementType.CHECK_ITEM}>`;
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
        <${UIElementType.CHECK_BUTTONS} ${UEAttr.CHECK_BUTTONS.name}="${CHECK_BUTTONS_ELEMENT$1}">
            ${["one", "two", "three"].map((key) => this.getCheckItem(key, key)).join("")}
        </${UIElementType.CHECK_BUTTONS}>
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
      <${UIElementType.CHECKBOX} ${UEAttr.CHECKBOX.caption}="Disable inputs above:" ${UEAttr.CHECKBOX.name}="${CHECKBOX_ELEMENT$1}"></${UIElementType.CHECKBOX}>
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
      <${UIElementType.SWITCHER} ${UEAttr.SWITCHER.name}="${SWITCHER_ELEMENT$1}"></${UIElementType.SWITCHER}>
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
      <${UIElementType.BUTTON} ${UEAttr.BUTTON.name}="${BUTTON_ELEMENT$1}" ${UEAttr.BUTTON.caption}="DO IT"></${UIElementType.BUTTON}>
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
      <${UIElementType.COLOR} ${UEAttr.COLOR.name}="${COLOR_ELEMENT$1}"></${UIElementType.COLOR}>
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
      <${UIElementType.DATEPICKER} ${UEAttr.DATEPICKER.name}="${DATEPICKER_ELEMENT$1}"></${UIElementType.DATEPICKER}>
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
      <${UIElementType.COUNTER} ${UEAttr.COUNTER.name}="${COUNTER_ELEMENT$1}" ${UEAttr.COUNTER.minValue}="1" ${UEAttr.COUNTER.maxValue}="10" ${UEAttr.COUNTER.step}="1"></${UIElementType.COUNTER}>
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
      <${UIElementType.TEXT} ${UEAttr.TEXT.name}="${TEXT_ELEMENT$1}" ${UEAttr.TEXT.placeholder}="Enter your name here."></${UIElementType.TEXT}>
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
      <${UIElementType.TEXTAREA} ${UEAttr.TEXTAREA.name}="${TEXT_AREA_ELEMENT$1}" ${UEAttr.TEXTAREA.placeholder}="Dinosaurs go here."></${UIElementType.TEXTAREA}>
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
        <div ${UEAttr.DEFAULT.name}="${TOGGLEABLE_CONTAINER}">
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
  /**
   * Registers callback functions to be executed when the values of specific UI elements change.
   * @private
   */
  _listenToFormUpdates() {
    this.api.onValueChanged(RADIO_BUTTONS_ELEMENT$1, (value) => this._onRadioButtonsChange(value));
    this.api.onValueChanged(SELECT_ELEMENT$1, (value) => this._onSelectChange(value));
    this.api.onValueChanged(CHECK_BUTTONS_ELEMENT$1, (value) => this._onCheckButtonsChange(value));
    this.api.onValueChanged(BUTTON_ELEMENT$1, () => this._onButtonClick());
    this.api.onValueChanged(CHECKBOX_ELEMENT$1, (value) => this._onCheckboxChange(value));
    this.api.onValueChanged(SWITCHER_ELEMENT$1, (value) => this._onSwitcherChange(value));
    this.api.onValueChanged(COLOR_ELEMENT$1, (value) => this._onColorChange(value));
    this.api.onValueChanged(DATEPICKER_ELEMENT$1, (value) => this._onDateChange(value));
    this.api.onValueChanged(COUNTER_ELEMENT$1, (value) => this._onCounterChange(value));
    this.api.onValueChanged(TEXT_ELEMENT$1, (value) => this._onTextChange(value));
    this.api.onValueChanged(TEXT_AREA_ELEMENT$1, (value) => this._onTextAreaChange(value));
  }
  /**
   * Updates the content of the message UI element.
   * @private
   * @param {string} message - The new message content (HTML allowed).
   * @param {boolean} [overwrite=false] - If true, replaces the existing message; otherwise, appends.
   */
  _updateMessage(message, overwrite = false) {
    const previousMessages = overwrite ? "" : this.api.getValues()[MESSAGE_ELEMENT$1];
    this.api.updateValues({
      [MESSAGE_ELEMENT$1]: `${previousMessages ? `${previousMessages}<br>` : ""}${message}`
    });
  }
  /**
   * Handles changes to the Radio Buttons element.
   * Updates the message type and displays a confirmation message.
   * @private
   * @param {string} value - The selected radio button value.
   */
  _onRadioButtonsChange(value) {
    this.api.setUIEAttribute(MESSAGE_ELEMENT$1, UEAttr.MESSAGE.type, value);
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
      RADIO_BUTTONS_ELEMENT$1,
      UEAttr.RADIO_BUTTONS.buttons,
      Object.keys(MessageStyle$1).filter((key) => value.includes(MessageStyle$1[key])).map((key) => ({
        [UEAttr.RADIO_ITEM.hint]: key,
        [UEAttr.RADIO_ITEM.text]: key,
        [UEAttr.RADIO_ITEM.value]: MessageStyle$1[key]
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
    this.api.setUIEAttribute(RADIO_BUTTONS_ELEMENT$1, UEAttr.RADIO_BUTTONS.disabled, value);
    this.api.setUIEAttribute(SELECT_ELEMENT$1, UEAttr.SELECTPICKER.disabled, value);
    this.api.setUIEAttribute(CHECK_BUTTONS_ELEMENT$1, UEAttr.CHECK_BUTTONS.disabled, value);
    this.api.setUIEAttribute(BUTTON_ELEMENT$1, UEAttr.BUTTON.disabled, value);
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
    this.api.setUIEAttribute("dinoLabel", UEAttr.LABEL.text, `List top ${value} of your favourite dinosaurs.`);
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
class SimpleBlockBackgroundColorControl extends Control {
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
                <${UIElementType.LABEL} ${UEAttr.LABEL.text}="${this.api.translate("Background color")}:"></${UIElementType.LABEL}>
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
      this.api.getDocumentModifier().modifyHtml(this.node).setAttribute("bgcolor", newValue).apply(new ModificationDescription("Set background color to {color}").withParams({ color: newValue }));
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
class SimpleBlockSettingsPanelRegistry extends SettingsPanelRegistry {
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
      new SettingsPanelTab(
        "custom",
        [
          CONTROL_SIMPLE_BLOCK_BACKGROUND_COLOR_ID
        ]
      ).withLabel(this.api.translate("Simple block settings advanced"))
    ];
    controls2[BlockType.BLOCK_BUTTON] = [
      new SettingsPanelTab(
        SettingsTab.SETTINGS,
        [
          CONTROL_BUILD_IN_UI_ELEMENTS_DEMO_ID
        ]
      )
    ];
  }
}
const styles$1 = "ue-ui-simple-panel {\n    background-color: darkgray;\n}\n\n.brand-color-button {\n    width: 200px;\n    height: 35px;\n    background-color: greenyellow;\n    border-radius: 10px;\n    cursor: pointer;\n}\n";
const BRAND_COLOR = "greenyellow";
class BrandColorPickerUIElement extends UIElement {
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
const gitSample_01_Simple_Block = new ExtensionBuilder().withLocalization({
  "en": en$1,
  "uk": uk$1
}).withStyles(styles$1).addBlock(SimpleBlock).addContextAction(SimpleBlockContextAction).addControl(SimpleBlockBackgroundColorControl).addControl(BuildInUIElementsDemoControl).addUiElement(BrandColorPickerUIElement).withSettingsPanelRegistry(SimpleBlockSettingsPanelRegistry).build();
const BLOCK_STRUCTURE_WITH_EMPTY_CONTAINER_ID = "structure-block-with-empty-container";
class StructureBlockWithEmptyContainer extends Block {
  getId() {
    return BLOCK_STRUCTURE_WITH_EMPTY_CONTAINER_ID;
  }
  isEnabled() {
    return true;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
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
              <${BlockType.EMPTY_CONTAINER}></${BlockType.EMPTY_CONTAINER}>
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
class StructureBlockWithTwoContainers extends Block {
  getId() {
    return BLOCK_STRUCTURE_WITH_TWO_CONTAINERS_ID;
  }
  isEnabled() {
    return true;
  }
  getBlockCompositionType() {
    return BlockCompositionType.STRUCTURE;
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
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="30">
                    <${BlockType.BLOCK_TEXT}>
                        <p><b>Hello!</b></p>
                    </${BlockType.BLOCK_TEXT}>    
                </${BlockType.CONTAINER}>
                <${BlockType.CONTAINER} ${BlockAttr.CONTAINER.widthPercent}="65">
                    <${BlockType.BLOCK_IMAGE} 
                        ${BlockAttr.BLOCK_IMAGE.src}="https://ext.stripocdn.email/content/guids/CABINET_aaba655ea1750215d7f8634c98324dd3/images/89211627300127242.png" 
                        ${BlockAttr.BLOCK_IMAGE.alt}="Stripo" 
                        ${BlockAttr.BLOCK_IMAGE.href}="https://stripo.email">
                    </${BlockType.BLOCK_IMAGE}> 
                </${BlockType.CONTAINER}>
            </td>`;
  }
}
const gitSample_02_Structure_Block = new ExtensionBuilder().withLocalization({
  "en": en,
  "uk": uk
}).addBlock(StructureBlockWithEmptyContainer).addBlock(StructureBlockWithTwoContainers).build();
let ExternalMergeTagsLibrary$1 = (_a = class {
  constructor() {
    // Instance properties
    __publicField(this, "externalLibrary");
    __publicField(this, "selectedMergetag", null);
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "activeCategory", "all");
    this.createModal();
    this.attachEventListeners();
    this.initializeFilters();
    this.addStyles();
  }
  /**
   * Creates the modal HTML structure and appends it to the document
   */
  createModal() {
    const modalHtml = this.generateModalHTML();
    const container = document.createElement("div");
    container.innerHTML = modalHtml;
    document.body.appendChild(container);
    this.externalLibrary = document.getElementById("externalMergeTags");
    this.externalLibrary.style.display = "none";
  }
  /**
   * Adds custom styles for selected state
   */
  addStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
      #externalMergeTags .tag-card.selected {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
    `;
    document.head.appendChild(style);
  }
  /**
   * Generates the complete modal HTML structure
   * @returns {string} HTML string for the modal
   */
  generateModalHTML() {
    return `
      <div id="externalMergeTags" style="${this.styleObjToString(_a.STYLES.overlay)}">
        <div style="${this.styleObjToString(_a.STYLES.modal)}">
          ${this.generateHeaderHTML()}
          ${this.generateContentHTML()}
          ${this.generateFooterHTML()}
        </div>
      </div>
    `;
  }
  /**
   * Generates the header section HTML
   * @returns {string} HTML string for the header
   */
  generateHeaderHTML() {
    return `
      <div style="${this.styleObjToString(_a.STYLES.header)}">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
            Merge Tags
          </h2>
          <div class="filter-buttons" style="display: flex; gap: 8px; margin-left: 24px;">
            ${this.generateFilterButtons()}
          </div>
        </div>
        ${this.generateCloseButton()}
      </div>
    `;
  }
  /**
   * Generates filter button HTML
   * @returns {string} HTML string for filter buttons
   */
  generateFilterButtons() {
    const categories = [
      { id: "all", label: "All", active: true },
      { id: "personal", label: "Personal", active: false },
      { id: "contact", label: "Contact", active: false },
      { id: "company", label: "Company", active: false },
      { id: "date", label: "Date/Time", active: false },
      { id: "custom", label: "Custom", active: false }
    ];
    return categories.map((cat) => `
      <button 
        data-category="${cat.id}" 
        style="${this.styleObjToString(cat.active ? _a.STYLES.buttonActive : _a.STYLES.buttonInactive)}">
        ${cat.label}
      </button>
    `).join("");
  }
  /**
   * Generates close button HTML
   * @returns {string} HTML string for close button
   */
  generateCloseButton() {
    return `
      <button class="close" type="button" 
        style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
               color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
               justify-content: center; border-radius: 8px; transition: all 0.2s;"
        onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
        <span style="line-height: 1;">×</span>
      </button>
    `;
  }
  /**
   * Generates the content section HTML with merge tags grid
   * @returns {string} HTML string for content section
   */
  generateContentHTML() {
    return `
      <div style="${this.styleObjToString(_a.STYLES.content)}">
        <div class="tags-grid" style="${this.styleObjToString(_a.STYLES.grid)}">
          ${this.generateMergeTagCards()}
        </div>
      </div>
    `;
  }
  /**
   * Generates the footer section HTML with disclaimer
   * @returns {string} HTML string for the footer
   */
  generateFooterHTML() {
    return `
      <div style="${this.styleObjToString(_a.STYLES.footer)}">
        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
          <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
        </p>
      </div>
    `;
  }
  /**
   * Generates merge tag card HTML
   * @returns {string} HTML string for all merge tag cards
   */
  generateMergeTagCards() {
    return _a.MERGE_TAGS.map((tag) => `
      <div class="tag-card" 
           data-category="${tag.category}"
           data-value="${tag.value}"
           data-label="${tag.label}"
           style="cursor: pointer; border: 2px solid #e5e7eb; border-radius: 8px; 
                  padding: 16px; background-color: #ffffff; transition: all 0.2s;
                  display: flex; flex-direction: column; gap: 8px;"
           onmouseover="if(!this.classList.contains('selected')) { 
                         this.style.borderColor='#d1d5db'; 
                         this.style.transform='translateY(-2px)'; 
                         this.style.boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'; 
                       }"
           onmouseout="if(!this.classList.contains('selected')) { 
                        this.style.borderColor='#e5e7eb'; 
                        this.style.transform='translateY(0)'; 
                        this.style.boxShadow='none'; 
                      }">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #111827;">
            ${tag.label}
          </h3>
          <span style="font-family: 'Monaco', 'Consolas', monospace; font-size: 12px; 
                       background-color: #f3f4f6; padding: 2px 6px; border-radius: 4px; 
                       color: #6b7280;">
            ${tag.value}
          </span>
        </div>
        <p style="margin: 0; font-size: 14px; color: #6b7280;">
          ${tag.description}
        </p>
        <div style="background-color: #f9fafb; padding: 8px; border-radius: 4px; 
                    margin-top: 4px;">
          <span style="font-size: 12px; color: #9ca3af;">Preview: </span>
          <span style="font-size: 12px; color: #4b5563; font-weight: 500;">
            ${tag.preview}
          </span>
        </div>
      </div>
    `).join("");
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to modal elements
   */
  attachEventListeners() {
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onTagClick.bind(this));
  }
  /**
   * Initializes filter button functionality
   */
  initializeFilters() {
    const filterButtons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        this.filterTags(category);
        this.updateActiveButton(e.target);
      });
    });
  }
  /**
   * Filters tags based on selected category
   * @param {string} category - Category to filter by
   */
  filterTags(category) {
    this.activeCategory = category;
    const tagCards = this.externalLibrary.querySelectorAll(".tag-card");
    tagCards.forEach((card) => {
      const shouldShow = category === "all" || card.getAttribute("data-category") === category;
      card.style.display = shouldShow ? "flex" : "none";
    });
  }
  /**
   * Updates the visual state of filter buttons
   * @param {HTMLElement} activeButton - The button that was clicked
   */
  updateActiveButton(activeButton) {
    const buttons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      const styles2 = isActive ? _a.STYLES.buttonActive : _a.STYLES.buttonInactive;
      Object.assign(button.style, styles2);
    });
  }
  /**
   * Handles click events on tag cards
   * @param {Event} e - Click event
   */
  onTagClick(e) {
    const tagCard = e.target.closest(".tag-card");
    if (!tagCard) return;
    const tagData = {
      value: tagCard.getAttribute("data-value"),
      label: tagCard.getAttribute("data-label")
    };
    this.close();
    this.dataSelectCallback(tagData);
  }
  /**
   * Updates selected state of tag cards
   */
  updateSelectedTag() {
    const selectedElement = this.externalLibrary.querySelector(".tag-card.selected");
    if (selectedElement) {
      selectedElement.classList.remove("selected");
      selectedElement.style.borderColor = "#e5e7eb";
      selectedElement.style.transform = "translateY(0)";
      selectedElement.style.boxShadow = "none";
    }
    if (this.selectedMergetag) {
      const currentTag = this.externalLibrary.querySelector(`[data-value="${this.selectedMergetag}"]`);
      if (currentTag) {
        currentTag.classList.add("selected");
      }
    }
  }
  /**
   * Closes the modal and executes cancel callback
   */
  cancelAndClose() {
    this.close();
  }
  /**
   * Closes the modal by hiding it
   */
  close() {
    this.externalLibrary.style.display = "none";
  }
  /**
   * Opens the merge tags library modal
   * @param {string} mergeTag - Currently selected merge tag value (if any)
   * @param {Function} onDataSelectCallback - Callback when tag is selected
   */
  openMergeTagsLibrary(mergeTag, onDataSelectCallback) {
    this.selectedMergetag = mergeTag;
    this.dataSelectCallback = onDataSelectCallback;
    this.updateSelectedTag();
    this.externalLibrary.style.display = "flex";
    this.filterTags("all");
    const allButton = this.externalLibrary.querySelector('[data-category="all"]');
    if (allButton) {
      this.updateActiveButton(allButton);
    }
  }
}, // UI Style configurations
__publicField(_a, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "900px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content container styles
  content: {
    padding: "32px",
    height: "315px",
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box"
  },
  // Grid styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px"
  },
  // Button styles
  buttonActive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonInactive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  // Footer styles
  footer: {
    padding: "16px 32px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fef3c7",
    borderRadius: "0 0 12px 12px",
    textAlign: "center"
  }
}), // Sample merge tags data
__publicField(_a, "MERGE_TAGS", [
  {
    category: "personal",
    value: "*|FNAME|*",
    label: "First Name",
    preview: "John",
    description: "Recipient's first name"
  },
  {
    category: "personal",
    value: "*|LNAME|*",
    label: "Last Name",
    preview: "Doe",
    description: "Recipient's last name"
  },
  {
    category: "personal",
    value: "*|EMAIL|*",
    label: "Email Address",
    preview: "john.doe@example.com",
    description: "Recipient's email address"
  },
  {
    category: "contact",
    value: "%%Phone%%",
    label: "Phone Number",
    preview: "+1 (555) 123-4567",
    description: "Recipient's phone number"
  },
  {
    category: "company",
    value: "{{company}}",
    label: "Company Name",
    preview: "Acme Corp",
    description: "Recipient's company"
  },
  {
    category: "date",
    value: "*|DATE|*",
    label: "Current Date",
    preview: (/* @__PURE__ */ new Date()).toLocaleDateString(),
    description: "Today's date"
  },
  {
    category: "custom",
    value: "*|CUSTOM_FIELD|*",
    label: "Custom Field",
    preview: "Custom Value",
    description: "Custom merge field"
  }
]), _a);
const ID$4 = "external-merge-tags-ui-element";
let MergeTagsTagRegistry$1 = class MergeTagsTagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[UIElementType.MERGETAGS] = ID$4;
  }
};
class MergeTagsUiElementExtension extends UIElement {
  getId() {
    return ID$4;
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
    var _a2;
    if (!this.mergeTagsLibrary) {
      this.mergeTagsLibrary = new ExternalMergeTagsLibrary$1();
    }
    this.mergeTagsLibrary.openMergeTagsLibrary((_a2 = this.selectedMergeTag) == null ? void 0 : _a2.value, (data) => {
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
const gitSample_03_External_Merge_Tags = new ExtensionBuilder().addUiElement(MergeTagsUiElementExtension).withLocalization({
  "en": {
    "Open merge tags": "Open merge tags"
  },
  "uk": {
    "Open merge tags": "Відкрити мерж теги"
  }
}).withUiElementTagRegistry(MergeTagsTagRegistry$1).build();
const _ExternalImagesLibraryExample = class _ExternalImagesLibraryExample {
  constructor() {
    // Instance properties
    __publicField(this, "externalLibrary");
    __publicField(this, "imageSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    __publicField(this, "activeCategory", "all");
    this.createModal();
    this.attachEventListeners();
    this.initializeFilters();
  }
  /**
   * Creates the modal HTML structure and appends it to the document
   */
  createModal() {
    const modalHtml = this.generateModalHTML();
    const container = document.createElement("div");
    container.innerHTML = modalHtml;
    document.body.appendChild(container);
    this.externalLibrary = document.getElementById("externalImagesLibrary");
    this.externalLibrary.style.display = "none";
  }
  /**
   * Generates the complete modal HTML structure
   * @returns {string} HTML string for the modal
   */
  generateModalHTML() {
    return `
            <div id="externalImagesLibrary" style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.overlay)}">
                <div style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.modal)}">
                    ${this.generateHeaderHTML()}
                    ${this.generateContentHTML()}
                    ${this.generateFooterHTML()}
                </div>
            </div>
        `;
  }
  /**
   * Generates the header section HTML
   * @returns {string} HTML string for the header
   */
  generateHeaderHTML() {
    return `
            <div style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.header)}">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
                        Image Library
                    </h2>
                    <div class="filter-buttons" style="display: flex; gap: 8px; margin-left: 24px;">
                        ${this.generateFilterButtons()}
                    </div>
                </div>
                ${this.generateCloseButton()}
            </div>
        `;
  }
  /**
   * Generates filter button HTML
   * @returns {string} HTML string for filter buttons
   */
  generateFilterButtons() {
    const categories = [
      { id: "all", label: "All", active: true },
      { id: "nature", label: "Nature", active: false },
      { id: "abstract", label: "Abstract", active: false },
      { id: "digital", label: "Digital", active: false },
      { id: "photography", label: "Photography", active: false }
    ];
    return categories.map((cat) => `
            <button 
                data-category="${cat.id}" 
                style="${this.styleObjToString(cat.active ? _ExternalImagesLibraryExample.STYLES.buttonActive : _ExternalImagesLibraryExample.STYLES.buttonInactive)}">
                ${cat.label}
            </button>
        `).join("");
  }
  /**
   * Generates close button HTML
   * @returns {string} HTML string for close button
   */
  generateCloseButton() {
    return `
            <button class="close" type="button" 
                style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
                       color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
                       justify-content: center; border-radius: 8px; transition: all 0.2s;"
                onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
                <span style="line-height: 1;">×</span>
            </button>
        `;
  }
  /**
   * Generates the content section HTML with image grid
   * @returns {string} HTML string for content section
   */
  generateContentHTML() {
    return `
            <div style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.content)}">
                <div class="image-grid" style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.grid)}">
                    ${this.generateImageThumbnails()}
                </div>
            </div>
        `;
  }
  /**
   * Generates the footer section HTML with disclaimer
   * @returns {string} HTML string for the footer
   */
  generateFooterHTML() {
    return `
            <div style="${this.styleObjToString(_ExternalImagesLibraryExample.STYLES.footer)}">
                <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
                    <span style="font-weight: 700; color: #d97706;">⚠️ Please be advised:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
                </p>
            </div>
        `;
  }
  /**
   * Generates image thumbnail HTML
   * @returns {string} HTML string for all image thumbnails
   */
  generateImageThumbnails() {
    return _ExternalImagesLibraryExample.IMAGES.map((image) => `
            <div class="thumbnail" 
                 data-category="${image.category}"
                 style="cursor: pointer; border-radius: 8px; overflow: hidden; 
                        background-color: #f9fafb; transition: all 0.3s; 
                        position: relative; height: 100%;"
                 onmouseover="this.style.transform='translateY(-4px)'; 
                             this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';"
                 onmouseout="this.style.transform='translateY(0)'; 
                            this.style.boxShadow='none';">
                <img style="width: 100%; height: 100%; object-fit: cover; display: block;"
                     src="${image.src}"
                     alt="${image.title}">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; 
                           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); 
                           padding: 12px; opacity: 0; transition: opacity 0.3s;"
                     onmouseover="this.style.opacity='1';"
                     onmouseout="this.style.opacity='0';">
                    <p style="color: white; margin: 0; font-size: 14px; font-weight: 500;">
                        ${image.title}
                    </p>
                </div>
            </div>
        `).join("");
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to modal elements
   */
  attachEventListeners() {
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onImageClick.bind(this));
  }
  /**
   * Initializes filter button functionality
   */
  initializeFilters() {
    const filterButtons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        this.filterImages(category);
        this.updateActiveButton(e.target);
      });
    });
  }
  /**
   * Filters images based on selected category
   * @param {string} category - Category to filter by
   */
  filterImages(category) {
    this.activeCategory = category;
    const thumbnails = this.externalLibrary.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
      const shouldShow = category === "all" || thumbnail.getAttribute("data-category") === category;
      thumbnail.style.display = shouldShow ? "block" : "none";
    });
  }
  /**
   * Updates the visual state of filter buttons
   * @param {HTMLElement} activeButton - The button that was clicked
   */
  updateActiveButton(activeButton) {
    const buttons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      const styles2 = isActive ? _ExternalImagesLibraryExample.STYLES.buttonActive : _ExternalImagesLibraryExample.STYLES.buttonInactive;
      Object.assign(button.style, styles2);
    });
  }
  /**
   * Handles click events on image thumbnails
   * @param {Event} e - Click event
   */
  onImageClick(e) {
    const thumbnail = e.target.closest(".thumbnail");
    if (!thumbnail) return;
    const img = thumbnail.querySelector("img");
    if (!img) return;
    const imageData = {
      originalName: img.src.split("/").pop(),
      width: 600,
      height: 410,
      size: 169e3,
      url: img.getAttribute("src"),
      altText: img.getAttribute("alt")
    };
    this.close();
    this.imageSelectCallback(imageData);
  }
  /**
   * Closes the modal and executes cancel callback
   */
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  /**
   * Closes the modal by hiding it
   */
  close() {
    this.externalLibrary.style.display = "none";
  }
  /**
   * Opens the image library modal
   * @param {string} currentImageUrl - Currently selected image URL (if any)
   * @param {Function} onImageSelectCallback - Callback when image is selected
   * @param {Function} onCancelCallback - Callback when modal is cancelled
   */
  openImageLibrary(currentImageUrl, onImageSelectCallback, onCancelCallback) {
    this.imageSelectCallback = onImageSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalLibrary.style.display = "flex";
    this.filterImages("all");
    const allButton = this.externalLibrary.querySelector('[data-category="all"]');
    if (allButton) {
      this.updateActiveButton(allButton);
    }
  }
};
// UI Style configurations
__publicField(_ExternalImagesLibraryExample, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "1000px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content container styles
  content: {
    padding: "32px",
    height: "340px",
    // Reduced height to accommodate footer
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box"
  },
  // Grid styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    gridAutoRows: "125px"
    // Fixed row height
  },
  // Button styles
  buttonActive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonInactive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  // Footer styles
  footer: {
    padding: "16px 32px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fef3c7",
    borderRadius: "0 0 12px 12px",
    textAlign: "center"
  }
});
// Sample images data
__publicField(_ExternalImagesLibraryExample, "IMAGES", [
  {
    category: "nature",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g05fb9c707080df68b2b7a48884ecfb678ea72bfba6c4b30a3622d77b4e1fc4d686c2fa0ca69ecb08cb93ebe999a2cffd_640.jpeg",
    title: "Nature Scene"
  },
  {
    category: "abstract",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g039e37b4b08aab63892fa5bcb069ef5a4c3903ffdfe6a266b65d59c96669e69786dd8db7d6d686af5a93c55b5f59cc21_640.jpeg",
    title: "Abstract Art"
  },
  {
    category: "digital",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g865b29f858626ae67bf436c38ea27d23ce34ce2c083b7829929c1ce0f1c7a6f72f2f7654bfe16d837d53df0713b157da_640.jpeg",
    title: "Digital Design"
  },
  {
    category: "photography",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/gf0fe89ba1310967859765c4634e5fdb5abc15576715a0e8793c2bccdd12fabb435f1f62ebf39c017d6c520c6a0cd0e83_640.jpeg",
    title: "Mountain Vista"
  },
  {
    category: "nature",
    src: "https://rf.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/ge472fe8d47d49d6b4f022364cf352302eff394855af35507d5b92fe30d08e0c8a992246d3d813ff21769fd771fab7c90_640.jpeg",
    title: "Ocean"
  },
  {
    category: "nature",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g82fa2ffeb30d400bfa57c908a9716e883b41baf34f6ca09cb0650124ef4f0d10322137d9cfab9ae35aedb1a3d8adfb4e_640.jpeg",
    title: "Waterfall"
  },
  {
    category: "digital",
    src: "https://rf.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/g37c2a939530fa27db0025bc0031514973909782c635b82080f91f5c7c15d473e0b3b7c6d41ef5a20d6370c6f58ae8ff0_640.jpeg",
    title: "Lunar Rover"
  },
  {
    category: "photography",
    src: "https://demo.stripocdn.email/content/guids/CABINET_ec6ac1de70c49219cc55754951562cc72c549fc9e7a7ec9636d3be7a33c392e2/images/gfd3e800e20a1305512a60feb3cdf5fbc07ac64b8397398a9c12e3eb73ae28805d1ed5cbc941f302ab7186feedd38e4ff_640.jpeg",
    title: "Ocean Sunset"
  }
]);
let ExternalImagesLibraryExample2 = _ExternalImagesLibraryExample;
const gitSample_04_External_Image_library = new ExtensionBuilder().withExternalImageLibrary(ExternalImagesLibraryExample2).build();
const _ExternalSmartElementsLibraryExample = class _ExternalSmartElementsLibraryExample {
  constructor() {
    // Instance properties
    __publicField(this, "externalLibrary");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    __publicField(this, "activeCategory", "all");
    this.createModal();
    this.attachEventListeners();
    this.initializeFilters();
  }
  /**
   * Creates the modal HTML structure and appends it to the document
   */
  createModal() {
    const modalHtml = this.generateModalHTML();
    const container = document.createElement("div");
    container.innerHTML = modalHtml;
    document.body.appendChild(container);
    this.externalLibrary = document.getElementById("externalSmartElementsLibrary");
    this.externalLibrary.style.display = "none";
  }
  /**
   * Generates the complete modal HTML structure
   * @returns {string} HTML string for the modal
   */
  generateModalHTML() {
    return `
      <div id="externalSmartElementsLibrary" style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.overlay)}">
        <div style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.modal)}">
          ${this.generateHeaderHTML()}
          ${this.generateContentHTML()}
          ${this.generateFooterHTML()}
        </div>
      </div>
    `;
  }
  /**
   * Generates the header section HTML
   * @returns {string} HTML string for the header
   */
  generateHeaderHTML() {
    return `
      <div style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.header)}">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
            Smart Elements Library
          </h2>
          <div class="filter-buttons" style="display: flex; gap: 8px; margin-left: 24px;">
            ${this.generateFilterButtons()}
          </div>
        </div>
        ${this.generateCloseButton()}
      </div>
    `;
  }
  /**
   * Generates filter button HTML
   * @returns {string} HTML string for filter buttons
   */
  generateFilterButtons() {
    const categories = [
      { id: "all", label: "All", active: true },
      { id: "electronics", label: "Electronics", active: false },
      { id: "accessories", label: "Accessories", active: false },
      { id: "fitness", label: "Fitness", active: false },
      { id: "home", label: "Home", active: false }
    ];
    return categories.map((cat) => `
      <button 
        data-category="${cat.id}" 
        style="${this.styleObjToString(cat.active ? _ExternalSmartElementsLibraryExample.STYLES.buttonActive : _ExternalSmartElementsLibraryExample.STYLES.buttonInactive)}">
        ${cat.label}
      </button>
    `).join("");
  }
  /**
   * Generates close button HTML
   * @returns {string} HTML string for close button
   */
  generateCloseButton() {
    return `
      <button class="close" type="button" 
        style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
               color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
               justify-content: center; border-radius: 8px; transition: all 0.2s;"
        onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
        <span style="line-height: 1;">×</span>
      </button>
    `;
  }
  /**
   * Generates the content section HTML with product grid
   * @returns {string} HTML string for content section
   */
  generateContentHTML() {
    return `
      <div style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.content)}">
        <div class="elements-grid" style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.grid)}">
          ${this.generateProductCards()}
        </div>
      </div>
    `;
  }
  /**
   * Generates the footer section HTML with disclaimer
   * @returns {string} HTML string for the footer
   */
  generateFooterHTML() {
    return `
      <div style="${this.styleObjToString(_ExternalSmartElementsLibraryExample.STYLES.footer)}">
        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
          <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
        </p>
      </div>
    `;
  }
  /**
   * Generates product card HTML
   * @returns {string} HTML string for all product cards
   */
  generateProductCards() {
    return _ExternalSmartElementsLibraryExample.SMART_ELEMENTS.map((element) => `
      <div class="product-card" 
           data-category="${element.category}"
           data-name="${element.p_name}"
           data-price="${element.p_price}"
           data-image="${element.p_image}"
           data-original-price="${element.p_original_price}"
           data-rating="${element.p_rating}"
           data-discount="${element.p_discount || ""}"
           style="cursor: pointer; border-radius: 12px; overflow: hidden; 
                  background-color: #ffffff; transition: all 0.3s; 
                  border: 1px solid #e5e7eb; display: flex; flex-direction: column;"
           onmouseover="this.style.transform='translateY(-4px)'; 
                       this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';"
           onmouseout="this.style.transform='translateY(0)'; 
                      this.style.boxShadow='none';">
        <div style="position: relative; width: 100%; height: 200px; background-color: #f9fafb;">
          <img style="width: 100%; height: 100%; object-fit: contain; padding: 20px;"
               src="${element.p_image}"
               alt="${element.p_name}">
          ${element.p_discount ? `
            <span style="position: absolute; top: 12px; right: 12px; 
                         background-color: #ef4444; color: white; 
                         padding: 4px 8px; border-radius: 6px; 
                         font-size: 12px; font-weight: 600;">
              ${element.p_discount}
            </span>
          ` : ""}
        </div>
        <div style="padding: 16px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; 
                     color: #111827; line-height: 1.4;">
            ${element.p_name}
          </h3>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            ${this.generateStarRating(element.p_rating)}
            <span style="font-size: 14px; color: #6b7280;">(${element.p_rating})</span>
          </div>
          <div style="margin-top: auto;">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              <span style="font-size: 24px; font-weight: 700; color: #111827;">
                ${element.p_price}
              </span>
              <span style="font-size: 16px; color: #9ca3af; text-decoration: line-through;">
                ${element.p_original_price}
              </span>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }
  /**
   * Generates star rating HTML
   * @param {number} rating - Rating value
   * @returns {string} HTML string for star rating
   */
  generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    let stars = "";
    for (let i = 0; i < fullStars; i++) {
      stars += '<span style="color: #fbbf24;">★</span>';
    }
    if (hasHalfStar) {
      stars += '<span style="color: #fbbf24;">☆</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '<span style="color: #e5e7eb;">★</span>';
    }
    return `<div style="display: flex; gap: 2px; font-size: 14px;">${stars}</div>`;
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to modal elements
   */
  attachEventListeners() {
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onProductClick.bind(this));
  }
  /**
   * Initializes filter button functionality
   */
  initializeFilters() {
    const filterButtons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        this.filterProducts(category);
        this.updateActiveButton(e.target);
      });
    });
  }
  /**
   * Filters products based on selected category
   * @param {string} category - Category to filter by
   */
  filterProducts(category) {
    this.activeCategory = category;
    const productCards = this.externalLibrary.querySelectorAll(".product-card");
    productCards.forEach((card) => {
      const shouldShow = category === "all" || card.getAttribute("data-category") === category;
      card.style.display = shouldShow ? "flex" : "none";
    });
  }
  /**
   * Updates the visual state of filter buttons
   * @param {HTMLElement} activeButton - The button that was clicked
   */
  updateActiveButton(activeButton) {
    const buttons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      const styles2 = isActive ? _ExternalSmartElementsLibraryExample.STYLES.buttonActive : _ExternalSmartElementsLibraryExample.STYLES.buttonInactive;
      Object.assign(button.style, styles2);
    });
  }
  /**
   * Handles click events on product cards
   * @param {Event} e - Click event
   */
  onProductClick(e) {
    const productCard = e.target.closest(".product-card");
    if (!productCard) return;
    const smartElementData = {
      category: productCard.getAttribute("data-category"),
      p_name: productCard.getAttribute("data-name"),
      p_price: productCard.getAttribute("data-price"),
      p_image: productCard.getAttribute("data-image"),
      p_original_price: productCard.getAttribute("data-original-price"),
      p_rating: parseFloat(productCard.getAttribute("data-rating")),
      p_discount: productCard.getAttribute("data-discount") || null
    };
    this.close();
    this.dataSelectCallback(smartElementData);
  }
  /**
   * Closes the modal and executes cancel callback
   */
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  /**
   * Closes the modal by hiding it
   */
  close() {
    this.externalLibrary.style.display = "none";
  }
  /**
   * Opens the smart elements library modal
   * @param {Function} onDataSelectCallback - Callback when element is selected
   * @param {Function} onCancelCallback - Callback when modal is cancelled
   */
  openSmartElementsLibrary(onDataSelectCallback, onCancelCallback) {
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalLibrary.style.display = "flex";
    this.filterProducts("all");
    const allButton = this.externalLibrary.querySelector('[data-category="all"]');
    if (allButton) {
      this.updateActiveButton(allButton);
    }
  }
};
// UI Style configurations
__publicField(_ExternalSmartElementsLibraryExample, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "1000px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content container styles
  content: {
    padding: "32px",
    height: "731px",
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box"
  },
  // Grid styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px"
  },
  // Button styles
  buttonActive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonInactive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  // Footer styles
  footer: {
    padding: "16px 32px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fef3c7",
    borderRadius: "0 0 12px 12px",
    textAlign: "center"
  }
});
// Sample smart elements data
__publicField(_ExternalSmartElementsLibraryExample, "SMART_ELEMENTS", [
  {
    category: "electronics",
    p_name: "Wireless Headphones",
    p_price: "$89.99",
    p_original_price: "$129.99",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/gc0859fd762dc386caf67532ca5d9b968b19ba37572e19b72126eb421bee4adfc410dc64eea3dee23cf33c3da5ae06b88_640.jpeg",
    p_rating: 4.5,
    p_discount: "31% OFF"
  },
  {
    category: "electronics",
    p_name: "Smart Watch Pro",
    p_price: "$249.00",
    p_original_price: "$299.00",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/g5b54a78c579f1641216bab7b119c28b0b3dfa50ab44655c45039c8ac164e6d1835ad29ae242af635a8efe74a03f636a0_640.jpeg",
    p_rating: 4.8,
    p_discount: "17% OFF"
  },
  {
    category: "accessories",
    p_name: "Premium Leather Case",
    p_price: "$39.99",
    p_original_price: "$59.99",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/gc7a4da5fc1d4a3c14ca8964200ede6290826a825cea3dc704d47db7c9938b64c099879d2feeebfb24f3ae749d85736f1_640.png",
    p_rating: 4.2,
    p_discount: "33% OFF"
  },
  {
    category: "fitness",
    p_name: "Yoga Mat Pro",
    p_price: "$45.00",
    p_original_price: "$65.00",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/g3d9ab12046aedd0dd772da9bea9768d5fba2840db28046cf73de1f1bded09ad666ef5788d4812a07ad8cfa531487251f_640.jpeg",
    p_rating: 4.7,
    p_discount: "31% OFF"
  },
  {
    category: "fitness",
    p_name: "Resistance Bands Set",
    p_price: "$29.99",
    p_original_price: "$39.99",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/g939d0a14c9627c0476e3b6cdbee39819532d8823d6e23a3c2e6c651e4466402be0ea7a0384f1cd8e15d04fa52b27fa46_640.jpeg",
    p_rating: 4.6,
    p_discount: "25% OFF"
  },
  {
    category: "home",
    p_name: "Smart LED Bulb",
    p_price: "$19.99",
    p_original_price: "$29.99",
    p_image: "https://rf.stripocdn.email/content/guids/CABINET_6832604a6dbd8f35c4c45dc999af6fe2144259d656ce5a5ea76e6969ed796bbd/images/g2b88c1f3019297a862fe221399e7cc8a69a6e0549a7d280cdbbef815ed22d0c5b9beed9e477ca16497218e9670c152e1_640.jpeg",
    p_rating: 4.4,
    p_discount: "33% OFF"
  }
]);
let ExternalSmartElementsLibraryExample = _ExternalSmartElementsLibraryExample;
const gitSample_05_External_Smart_library = new ExtensionBuilder().withExternalSmartElementsLibrary(ExternalSmartElementsLibraryExample).build();
let ExternalAiAssistant$1 = (_b = class {
  constructor() {
    // Instance properties
    __publicField(this, "externalAiAssistant");
    __publicField(this, "dataSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    __publicField(this, "originalText", "");
    this.createModal();
    this.attachEventListeners();
  }
  /**
   * Creates the modal HTML structure and appends it to the document
   */
  createModal() {
    const modalHtml = this.generateModalHTML();
    const container = document.createElement("div");
    container.innerHTML = modalHtml;
    document.body.appendChild(container);
    this.externalAiAssistant = document.getElementById("externalAiAssistant");
    this.externalAiAssistant.style.display = "none";
  }
  /**
   * Generates the complete modal HTML structure
   * @returns {string} HTML string for the modal
   */
  generateModalHTML() {
    return `
      <div id="externalAiAssistant" style="${this.styleObjToString(_b.STYLES.overlay)}">
        <div style="${this.styleObjToString(_b.STYLES.modal)}">
          ${this.generateHeaderHTML()}
          ${this.generateBodyHTML()}
          ${this.generateFooterHTML()}
          ${this.generateDisclaimerFooterHTML()}
        </div>
      </div>
    `;
  }
  /**
   * Generates the header section HTML
   * @returns {string} HTML string for the header
   */
  generateHeaderHTML() {
    return `
      <div style="${this.styleObjToString(_b.STYLES.header)}">
        <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937; display: flex; align-items: center; gap: 10px;">
          <div style="width: 24px; height: 24px; background-color: #34c759; 
                      border-radius: 6px; display: flex; align-items: center; justify-content: center; 
                      color: white; font-weight: bold; font-size: 14px;">
            AI
          </div>
          AI Text Assistant
        </h2>
        ${this.generateCloseButton()}
      </div>
    `;
  }
  /**
   * Generates close button HTML
   * @returns {string} HTML string for close button
   */
  generateCloseButton() {
    return `
      <button class="close" type="button" 
        style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
               color: #6b7280; padding: 4px; border-radius: 6px; transition: all 0.2s; line-height: 1;"
        onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#1f2937';"
        onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
  }
  /**
   * Generates the body section HTML
   * @returns {string} HTML string for the body
   */
  generateBodyHTML() {
    return `
      <div style="${this.styleObjToString(_b.STYLES.body)}">
        ${this.generateOriginalTextSection()}
        ${this.generateActionsSection()}
        ${this.generateTextEditorSection()}
      </div>
    `;
  }
  /**
   * Generates the original text section HTML
   * @returns {string} HTML string for original text section
   */
  generateOriginalTextSection() {
    return `
      <div style="margin-bottom: 24px;">
        <div style="font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; 
                    letter-spacing: 0.5px; margin-bottom: 12px;">
          Original Text
        </div>
        <div id="originalText" style="background-color: #f9fafb; border: 1px solid #e5e7eb; 
                                      border-radius: 8px; padding: 16px; font-size: 14px; 
                                      line-height: 1.6; color: #374151; max-height: 200px; 
                                      overflow-y: auto;">
        </div>
      </div>
    `;
  }
  /**
   * Generates the actions section HTML
   * @returns {string} HTML string for actions section
   */
  generateActionsSection() {
    return `
      <div style="margin-bottom: 24px;">
        <div style="font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; 
                    letter-spacing: 0.5px; margin-bottom: 12px;">
          Quick Actions
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px;">
          ${this.generateActionButtons()}
        </div>
      </div>
    `;
  }
  /**
   * Generates action button HTML
   * @returns {string} HTML string for action buttons
   */
  generateActionButtons() {
    return Object.entries(_b.TEXT_TRANSFORMATIONS).map(([action, config]) => `
      <button class="suggestion-btn" data-action="${action}"
        style="${this.styleObjToString(_b.STYLES.suggestionButton)}"
        onmouseover="this.style.background='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; 
                     this.style.color='white'; this.style.borderColor='transparent'; 
                     this.style.transform='translateY(-2px)'; 
                     this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.4)';"
        onmouseout="this.style.background='linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)'; 
                    this.style.color='#495057'; this.style.borderColor='#dee2e6'; 
                    this.style.transform='translateY(0)'; this.style.boxShadow='none';">
        <span style="font-size: 16px;">${config.icon}</span>
        ${config.label}
      </button>
    `).join("");
  }
  /**
   * Generates the text editor section HTML
   * @returns {string} HTML string for text editor section
   */
  generateTextEditorSection() {
    return `
      <div>
        <div style="font-size: 14px; font-weight: 600; color: #6b7280; text-transform: uppercase; 
                    letter-spacing: 0.5px; margin-bottom: 12px;">
          Modified Text
        </div>
        <textarea id="text" placeholder="Your enhanced text will appear here..."
          style="width: 100%; min-height: 200px; padding: 16px; border: 2px solid #e5e7eb; 
                 border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1f2937; 
                 resize: vertical; transition: border-color 0.3s; font-family: inherit;"
          onfocus="this.style.borderColor='#667eea';"
          onblur="this.style.borderColor='#e5e7eb';">
        </textarea>
      </div>
    `;
  }
  /**
   * Generates the footer section HTML
   * @returns {string} HTML string for the footer
   */
  generateFooterHTML() {
    return `
      <div style="${this.styleObjToString(_b.STYLES.footer)}">
        <button class="cancelButton" style="${this.styleObjToString(_b.STYLES.cancelButton)}"
          onmouseover="this.style.backgroundColor='#e5e7eb'; this.style.color='#4b5563';"
          onmouseout="this.style.backgroundColor='#f3f4f6'; this.style.color='#6b7280';">
          Cancel
        </button>
        <button class="okButton" style="${this.styleObjToString(_b.STYLES.primaryButton)}"
          onmouseover="this.style.transform='translateY(-2px)'; 
                       this.style.boxShadow='0 4px 12px rgba(102, 126, 234, 0.4)';"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
          Apply Changes
        </button>
      </div>
    `;
  }
  /**
   * Generates the disclaimer footer section HTML
   * @returns {string} HTML string for the disclaimer footer
   */
  generateDisclaimerFooterHTML() {
    return `
      <div style="${this.styleObjToString(_b.STYLES.disclaimerFooter)}">
        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
          <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
        </p>
      </div>
    `;
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to modal elements
   */
  attachEventListeners() {
    this.externalAiAssistant.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalAiAssistant.querySelector(".cancelButton").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalAiAssistant.querySelector(".okButton").addEventListener("click", this.onOkClick.bind(this));
    const suggestionButtons = this.externalAiAssistant.querySelectorAll(".suggestion-btn");
    suggestionButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => this.handleSuggestion(e.currentTarget.dataset.action));
    });
  }
  /**
   * Handles suggestion button clicks
   * @param {string} action - The action to perform
   */
  handleSuggestion(action) {
    const transformation = _b.TEXT_TRANSFORMATIONS[action];
    if (!transformation) return;
    const textarea = this.externalAiAssistant.querySelector("#text");
    textarea.value = transformation.transform(this.originalText);
  }
  /**
   * Handles OK button click
   */
  onOkClick() {
    const text = this.externalAiAssistant.querySelector("#text").value.replaceAll("\n", "<br/>");
    this.close();
    this.dataSelectCallback(text);
  }
  /**
   * Closes the modal and executes cancel callback
   */
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  /**
   * Closes the modal by hiding it
   */
  close() {
    this.externalAiAssistant.style.display = "none";
  }
  /**
   * Opens the AI assistant modal
   * @param {Object} params - Parameters object
   * @param {string} params.value - The text to work with
   * @param {Function} params.onDataSelectCallback - Callback when text is selected
   * @param {Function} params.onCancelCallback - Callback when modal is cancelled
   */
  openAiAssistant({ value, onDataSelectCallback, onCancelCallback }) {
    this.dataSelectCallback = onDataSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.originalText = value || "";
    const originalTextDiv = this.externalAiAssistant.querySelector("#originalText");
    originalTextDiv.textContent = this.originalText || "No text provided";
    this.externalAiAssistant.querySelector("#text").value = this.originalText;
    this.externalAiAssistant.style.display = "flex";
  }
}, // UI Style configurations
__publicField(_b, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(4px)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  // Modal container styles
  modal: {
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    maxWidth: "900px",
    width: "100%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column"
  },
  // Header styles
  header: {
    padding: "24px 30px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  // Body styles
  body: {
    padding: "30px",
    overflowY: "auto",
    flex: "1"
  },
  // Footer styles
  footer: {
    padding: "20px 30px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px"
  },
  // Button styles
  suggestionButton: {
    background: "linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)",
    border: "1px solid #dee2e6",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#495057",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  },
  primaryButton: {
    backgroundColor: "#34c759",
    color: "white",
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  cancelButton: {
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  // Disclaimer footer styles
  disclaimerFooter: {
    padding: "16px 30px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fef3c7",
    borderRadius: "0 0 12px 12px",
    textAlign: "center"
  }
}), // Text transformation templates
__publicField(_b, "TEXT_TRANSFORMATIONS", {
  paragraph: {
    icon: "📝",
    label: "Generate Paragraph",
    transform: () => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  professional: {
    icon: "💼",
    label: "Make Professional",
    transform: (text) => text ? `Dear valued recipient,

I hope this message finds you well. ${text}

Please do not hesitate to contact me if you require any further information or clarification.

Best regards` : "Dear valued recipient,\n\nI hope this message finds you well. I am writing to bring to your attention a matter of significant importance that requires your immediate consideration.\n\nPlease do not hesitate to contact me if you require any further information or clarification.\n\nBest regards"
  },
  casual: {
    icon: "😊",
    label: "Make Casual",
    transform: (text) => text ? `Hey there! 👋

${text}

Let me know if you need anything else!

Cheers!` : "Hey there! 👋\n\nJust wanted to drop you a quick message. Hope everything's going great on your end!\n\nLet me know if you need anything else!\n\nCheers!"
  },
  shorten: {
    icon: "✂️",
    label: "Shorten Text",
    transform: (text) => text && text.length > 50 ? text.substring(0, Math.min(text.length / 2, 100)) + "..." : "Brief and concise message."
  },
  expand: {
    icon: "📏",
    label: "Expand Text",
    transform: (text) => text ? `${text}

Furthermore, it is important to consider the broader implications of this matter. Additional context and supporting information can provide valuable insights that enhance our understanding of the subject at hand. By examining various perspectives and taking into account all relevant factors, we can arrive at a more comprehensive and well-informed conclusion.` : "This is an expanded version of the text with additional details, context, and supporting information. It provides a more comprehensive view of the subject matter, exploring various aspects and implications that might not have been immediately apparent in the original version."
  }
}), _b);
const gitSample_06_External_AI_Assistant = new ExtensionBuilder().withExternalAiAssistant(ExternalAiAssistant$1).build();
const ID$3 = "custom-font-family-select";
const ORIGINAL_ID$1 = "original-font-family-select";
let TagRegistry$1 = class TagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[ORIGINAL_ID$1] = uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT];
    uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT] = ID$3;
  }
};
let CustomFontFamilySelect$1 = class CustomFontFamilySelect extends UIElement {
  getId() {
    return ID$3;
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
    return `<div style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;">
            <div style="
                background: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
                width: 420px;
                max-width: 90vw;
                animation: fadeIn 0.2s ease-out;">
                <div style="
                    padding: 24px;
                    border-bottom: 1px solid #e5e7eb;">
                    <h2 style="
                        margin: 0;
                        font-size: 20px;
                        font-weight: 600;
                        color: #1f2937;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                        Add Custom Font
                    </h2>
                    <p style="
                        margin: 8px 0 0 0;
                        font-size: 14px;
                        color: #6b7280;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                        Configure your custom font settings
                    </p>
                </div>
                <div style="padding: 24px;">
                    <div style="margin-bottom: 20px;">
                        <label style="
                            display: block;
                            margin-bottom: 8px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #374151;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            Font Name
                        </label>
                        <input id="name" 
                            placeholder="e.g., My Custom Font"
                            style="
                                width: 100%;
                                padding: 10px 12px;
                                border: 1px solid #d1d5db;
                                border-radius: 6px;
                                font-size: 14px;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                transition: all 0.2s;
                                box-sizing: border-box;
                                outline: none;"
                            onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59, 130, 246, 0.1)'"
                            onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="
                            display: block;
                            margin-bottom: 8px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #374151;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            CSS Font Family
                        </label>
                        <input id="fontFamily" 
                            placeholder="e.g., 'My Font', sans-serif"
                            style="
                                width: 100%;
                                padding: 10px 12px;
                                border: 1px solid #d1d5db;
                                border-radius: 6px;
                                font-size: 14px;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                transition: all 0.2s;
                                box-sizing: border-box;
                                outline: none;"
                            onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59, 130, 246, 0.1)'"
                            onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
                    </div>
                    <div style="margin-bottom: 24px;">
                        <label style="
                            display: block;
                            margin-bottom: 8px;
                            font-size: 14px;
                            font-weight: 500;
                            color: #374151;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                            Font URL
                        </label>
                        <input id="url" 
                            placeholder="e.g., https://fonts.googleapis.com/..."
                            style="
                                width: 100%;
                                padding: 10px 12px;
                                border: 1px solid #d1d5db;
                                border-radius: 6px;
                                font-size: 14px;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                transition: all 0.2s;
                                box-sizing: border-box;
                                outline: none;"
                            onfocus="this.style.borderColor='#3b82f6'; this.style.boxShadow='0 0 0 3px rgba(59, 130, 246, 0.1)'"
                            onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
                    </div>
                    <div id="error-message" style="
                        display: none;
                        padding: 12px;
                        background: #fee2e2;
                        border: 1px solid #fecaca;
                        border-radius: 6px;
                        color: #991b1b;
                        font-size: 14px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        margin-bottom: 20px;">
                        All fields are required. Please fill in all the information.
                    </div>
                    <div style="
                        display: flex;
                        gap: 12px;
                        justify-content: flex-end;">
                        <button 
                            id="cancel"
                            style="
                                padding: 10px 20px;
                                border: 1px solid #d1d5db;
                                border-radius: 6px;
                                background: #ffffff;
                                color: #374151;
                                font-size: 14px;
                                font-weight: 500;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                cursor: pointer;
                                transition: all 0.2s;">
                            Cancel
                        </button>
                        <button id="confirm" 
                            style="
                                padding: 10px 20px;
                                border: none;
                                border-radius: 6px;
                                background: #34c759;
                                color: #ffffff;
                                font-size: 14px;
                                font-weight: 500;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                                cursor: pointer;
                                transition: all 0.2s;">
                            Add Font
                        </button>
                    </div>
                </div>
                <div style="
                    padding: 16px 24px;
                    border-top: 1px solid #e5e7eb;
                    background-color: #fef3c7;
                    border-radius: 0 0 8px 8px;
                    text-align: center;">
                    <p style="
                        margin: 0;
                        font-size: 13px;
                        color: #92400e;
                        font-weight: 500;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
                        <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
                    </p>
                </div>
            </div>
        </div>
        <style>
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        </style>`;
  }
  _showDialog() {
    this.dialog = document.createElement("div");
    this.dialog.innerHTML = this._getDialogTemplate();
    this.api.ignoreClickOutside(true);
    document.body.appendChild(this.dialog);
    this.dialog.querySelector("#confirm").addEventListener("click", () => this._submitDialog());
    this.dialog.querySelector("#cancel").addEventListener("click", () => this._closeDialog());
    const inputs = this.dialog.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorMsg = this.dialog.querySelector("#error-message");
        if (errorMsg) {
          errorMsg.style.display = "none";
        }
      });
    });
  }
  _submitDialog() {
    const nameInput = this.dialog.querySelector("#name");
    const fontFamilyInput = this.dialog.querySelector("#fontFamily");
    const urlInput = this.dialog.querySelector("#url");
    [nameInput, fontFamilyInput, urlInput].forEach((input) => {
      input.style.borderColor = "#d1d5db";
    });
    let hasError = false;
    if (!nameInput.value.trim()) {
      nameInput.style.borderColor = "#ef4444";
      hasError = true;
    }
    if (!fontFamilyInput.value.trim()) {
      fontFamilyInput.style.borderColor = "#ef4444";
      hasError = true;
    }
    if (!urlInput.value.trim()) {
      urlInput.style.borderColor = "#ef4444";
      hasError = true;
    }
    if (hasError) {
      const errorMsg = this.dialog.querySelector("#error-message");
      if (errorMsg) {
        errorMsg.style.display = "block";
      }
      return;
    }
    const newFont = {
      name: nameInput.value.trim(),
      fontFamily: fontFamilyInput.value.trim(),
      url: urlInput.value.trim()
    };
    this.api.addCustomFont(newFont);
    this._closeDialog();
  }
  _closeDialog() {
    if (this.dialog) {
      this.dialog.remove();
      this.dialog = void 0;
      this.api.ignoreClickOutside(false);
      this.originalSelect.value = "";
    }
  }
  _onChange(event) {
    if (event.target.value !== ADD_CUSTOM_FONT_OPTION) {
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
    const attrs = UEAttr.FONT_FAMILY_SELECT;
    return `<${ORIGINAL_ID$1} id="originalSelect" style="width: 100%;" ${attrs.addCustomFontOption}="+ Insert custom font"></${ORIGINAL_ID$1}>`;
  }
};
const gitSample_07_External_Custom_Font = new ExtensionBuilder().addUiElement(CustomFontFamilySelect$1).withUiElementTagRegistry(TagRegistry$1).build();
const AVAILABLE_CONDITION_NAMES$4 = [
  { label: "Email Address", value: "$EMAIL" },
  { label: "Phone number", value: "$PHONE" }
];
const AVAILABLE_CONDITION_OPERATIONS$4 = [
  { label: "Equals (Is)", value: "equals" },
  { label: "Contains", value: "in_array" }
];
const AVAILABLE_CONDITION_CONCATENATIONS$4 = [
  { label: "all", value: "&&" },
  { label: "any", value: "||" }
];
const DEFAULT_CONDITION$4 = {
  name: AVAILABLE_CONDITION_NAMES$4[0].value,
  operation: AVAILABLE_CONDITION_OPERATIONS$4[0].value,
  value: ""
};
const CSS_CLASSES$1 = {
  DROPDOWN_NAME: "dropdownConditionField",
  DROPDOWN_OPERATION: "dropdownConditionOperation",
  DROPDOWN_CONCATENATION: "dropdownConcatenation",
  CONDITION_ROW: "condition-row",
  CONDITION_VALUE: "condition-value",
  CONDITIONS_TABLE: "conditionsTable",
  DELETE_ACTION_PREFIX: "condition-delete-action-"
};
const SELECTORS$1 = {
  DELETE_BUTTON: 'button[class*="condition-delete-action"]'
};
const MESSAGES$1 = {
  VALIDATION_ERROR: "Please enter a value for at least one condition.",
  CONDITION_NAME: "Conditions applied",
  CONDITION_DESCRIPTION: "Only users that fit conditions will see this part of the email."
};
let ExternalDisplayConditions$4 = (_c = class {
  constructor() {
    /**
     * @private
     * @type {Function|null} Callback function to execute when conditions are selected
     */
    __publicField(this, "selectConditionsCallback", null);
    /**
     * @private
     * @type {HTMLElement|null} Reference to the popup DOM element
     */
    __publicField(this, "conditionsPopupElement", null);
    /**
     * @private
     * @type {Function|null} Callback function to execute when dialog is cancelled
     */
    __publicField(this, "onCancelCallback", null);
    /**
     * Deletes a condition row
     * @private
     * @param {Event} e - The click event
     */
    __publicField(this, "deleteConditionRow", (e) => {
      const row = e.target.closest(`.${CSS_CLASSES$1.CONDITION_ROW}`);
      if (row) {
        row.remove();
        this.updateDeleteActionVisibility();
      }
    });
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Gets the value of a dropdown element
   * @private
   * @param {HTMLElement} baseElement - The base element to search within
   * @param {string} identifierClass - The CSS class of the dropdown
   * @returns {string|null} The selected value or null if not found
   */
  getDropdownValue(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    return selectElement ? selectElement.value : null;
  }
  /**
   * Sets the value of a dropdown element
   * @private
   * @param {HTMLElement} baseElement - The base element to search within
   * @param {string} identifierClass - The CSS class of the dropdown
   * @param {string} value - The value to set
   */
  setDropdownValue(baseElement, identifierClass, value) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    if (selectElement) {
      selectElement.value = value;
    }
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    if (!selectElement) return;
    selectElement.innerHTML = "";
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
    const newSelectElement = selectElement.cloneNode(true);
    selectElement.parentNode.replaceChild(newSelectElement, selectElement);
    newSelectElement.addEventListener("focus", function() {
      this.style.borderColor = "#3b82f6";
      this.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
    });
    newSelectElement.addEventListener("blur", function() {
      this.style.borderColor = "#e5e7eb";
      this.style.boxShadow = "none";
    });
    newSelectElement.addEventListener("change", () => {
      this.hideValidationError();
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
    this.hideValidationError();
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  showValidationError(message) {
    this.hideValidationError();
    const errorDiv = document.createElement("div");
    errorDiv.className = "validation-error";
    errorDiv.style.cssText = `
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 16px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
    errorDiv.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="flex-shrink: 0;">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            <span>${message}</span>
        `;
    const contentDiv = this.conditionsPopupElement.querySelector('[style*="padding: 32px"]');
    if (contentDiv) {
      contentDiv.insertBefore(errorDiv, contentDiv.firstChild);
    }
  }
  hideValidationError() {
    const existingError = this.conditionsPopupElement.querySelector(".validation-error");
    if (existingError) {
      existingError.remove();
    }
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(`.${CSS_CLASSES$1.CONDITIONS_TABLE} .${CSS_CLASSES$1.CONDITION_ROW}`);
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(`.${CSS_CLASSES$1.CONDITION_VALUE}`).value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownValue(row, CSS_CLASSES$1.DROPDOWN_NAME),
            operation: this.getDropdownValue(row, CSS_CLASSES$1.DROPDOWN_OPERATION),
            value
          });
        }
      }
      if (conditions.length === 0) {
        this.showValidationError(MESSAGES$1.VALIDATION_ERROR);
        return;
      }
      if (conditions.length) {
        const concatenation = this.getDropdownValue(this.conditionsPopupElement, CSS_CLASSES$1.DROPDOWN_CONCATENATION);
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: MESSAGES$1.CONDITION_NAME,
          description: MESSAGES$1.CONDITION_DESCRIPTION,
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  /**
   * Creates HTML for a condition row
   * @private
   * @param {string} deleteActionClass - Unique class for the delete button
   * @returns {string} HTML string for the condition row
   */
  createConditionRowHTML(deleteActionClass) {
    return `
            <td style="padding: 0 8px 16px 0;">
                ${this.getDropdownMarkup(CSS_CLASSES$1.DROPDOWN_NAME)}
            </td>
            <td style="padding: 0 8px 16px 0;">
                ${this.getDropdownMarkup(CSS_CLASSES$1.DROPDOWN_OPERATION)}
            </td>
            <td style="padding: 0 8px 16px 0;">
                <input type="text" 
                       class="${CSS_CLASSES$1.CONDITION_VALUE}" 
                       style="${this.styleObjToString(_c.STYLES.input)}"
                       placeholder="Enter value">
            </td>
            <td style="width: 40px; padding-bottom: 16px;">
                <button class="${deleteActionClass}" 
                        type="button"
                        data-action="delete"
                        style="background: transparent; border: none; color: #ef4444; 
                               cursor: pointer; padding: 8px; border-radius: 6px; 
                               transition: all 0.2s; width: 32px; height: 32px;
                               display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </td>`;
  }
  /**
   * Sets up event listeners for a condition row
   * @private
   * @param {HTMLElement} row - The row element
   * @param {string} deleteActionClass - Class for the delete button
   */
  setupConditionRowListeners(row, deleteActionClass) {
    const inputElement = row.querySelector(`.${CSS_CLASSES$1.CONDITION_VALUE}`);
    inputElement.addEventListener("focus", function() {
      this.style.borderColor = "#3b82f6";
      this.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
    });
    inputElement.addEventListener("blur", function() {
      this.style.borderColor = "#e5e7eb";
      this.style.boxShadow = "none";
    });
    inputElement.addEventListener("input", () => {
      this.hideValidationError();
    });
    const deleteButton = row.querySelector("." + deleteActionClass);
    if (deleteButton) {
      deleteButton.addEventListener("click", this.deleteConditionRow);
      deleteButton.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#fee2e2";
      });
      deleteButton.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "transparent";
      });
    }
  }
  /**
   * Adds a new condition row to the table
   * @param {Event} e - The event object (can be null)
   * @param {Object} conditionValue - The condition values to populate
   */
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$4;
    }
    const deleteActionClass = CSS_CLASSES$1.DELETE_ACTION_PREFIX + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add(CSS_CLASSES$1.CONDITION_ROW);
    tr.innerHTML = this.createConditionRowHTML(deleteActionClass);
    this.conditionsPopupElement.querySelector(`.${CSS_CLASSES$1.CONDITIONS_TABLE}`).appendChild(tr);
    this.setDropdownOptions(tr, CSS_CLASSES$1.DROPDOWN_NAME, AVAILABLE_CONDITION_NAMES$4);
    this.setDropdownValue(tr, CSS_CLASSES$1.DROPDOWN_NAME, conditionValue.name);
    this.setDropdownOptions(tr, CSS_CLASSES$1.DROPDOWN_OPERATION, AVAILABLE_CONDITION_OPERATIONS$4);
    this.setDropdownValue(tr, CSS_CLASSES$1.DROPDOWN_OPERATION, conditionValue.operation);
    const inputElement = tr.querySelector(`.${CSS_CLASSES$1.CONDITION_VALUE}`);
    inputElement.value = conditionValue.value;
    this.setupConditionRowListeners(tr, deleteActionClass);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  /**
   * Updates visibility of delete buttons based on row count
   * @private
   */
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(`.${CSS_CLASSES$1.CONDITIONS_TABLE} .${CSS_CLASSES$1.CONDITION_ROW}`);
    if (rows.length > 0) {
      const firstDeleteButton = rows[0].querySelector(SELECTORS$1.DELETE_BUTTON);
      if (firstDeleteButton) {
        firstDeleteButton.style.display = rows.length > 1 ? "flex" : "none";
      }
    }
  }
  /**
   * Creates dropdown markup
   * @private
   * @param {string} className - CSS class for the dropdown
   * @returns {string} HTML for the dropdown
   */
  getDropdownMarkup(className) {
    return `<select style="${this.styleObjToString(_c.STYLES.select)}" class="${className}"></select>`;
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
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `
            <div id="externalDisplayConditionsPopup" 
                 style="${this.styleObjToString(_c.STYLES.overlay)}; visibility: hidden;" 
                 class="esdev-app">
                <div style="${this.styleObjToString(_c.STYLES.modal)}">
                    <!-- Header -->
                    <div style="${this.styleObjToString(_c.STYLES.header)}">
                        <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
                            Display Conditions
                        </h2>
                        <button id="closePopupButton" type="button" 
                                style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
                                       color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
                                       justify-content: center; border-radius: 8px; transition: all 0.2s;"
                                onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
                                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
                            <span style="line-height: 1;">×</span>
                        </button>
                    </div>
                    
                    <!-- Content -->
                    <div style="${this.styleObjToString(_c.STYLES.content)}">
                        <!-- Conditions table -->
                        <div style="margin-bottom: 24px;">
                            <h3 style="font-size: 16px; font-weight: 600; color: #374151; margin: 0 0 16px 0;">
                                Condition Rules
                            </h3>
                            <table class="conditionsTable" style="width: 100%; border-collapse: collapse;"></table>
                            <button id="addNewCondition" 
                                    style="${this.styleObjToString(_c.STYLES.buttonAdd)}"
                                    onmouseover="this.style.backgroundColor='#3b82f6'; this.style.color='white';"
                                    onmouseout="this.style.backgroundColor='white'; this.style.color='#3b82f6';">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                Add Condition
                            </button>
                        </div>
                        
                        <!-- Concatenation setting -->
                        <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                            <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #374151;">
                                Show this content if
                                <span style="display: inline-block; min-width: 80px;">
                                    ${this.getDropdownMarkup(CSS_CLASSES$1.DROPDOWN_CONCATENATION)}
                                </span>
                                conditions are met
                            </label>
                        </div>
                        
                        <!-- Footer actions -->
                        <div style="display: flex; align-items: center; justify-content: space-between; 
                                    padding-top: 24px; border-top: 1px solid #e5e7eb;">
                            <a id="removeConditionsPopup" 
                               style="color: #ef4444; text-decoration: none; font-size: 14px; cursor: pointer; 
                                      transition: color 0.2s;"
                               onmouseover="this.style.color='#dc2626';"
                               onmouseout="this.style.color='#ef4444';">
                                Remove all conditions
                            </a>
                            <div style="display: flex; gap: 12px;">
                                <button id="closeConditionsPopup" 
                                        style="${this.styleObjToString(_c.STYLES.buttonSecondary)}"
                                        onmouseover="this.style.backgroundColor='#f9fafb';"
                                        onmouseout="this.style.backgroundColor='white';">
                                    Cancel
                                </button>
                                <button id="applyConditionsAction" 
                                        style="${this.styleObjToString(_c.STYLES.buttonPrimary)}"
                                        onmouseover="this.style.backgroundColor='#22c55e';"
                                        onmouseout="this.style.backgroundColor='#34c759';">
                                    Apply Conditions
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Disclaimer Footer -->
                    <div style="padding: 16px 32px; border-top: 1px solid #e5e7eb; background-color: #fef3c7; 
                                border-radius: 0 0 12px 12px; text-align: center;">
                        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
                            <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
                        </p>
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
    this.setDropdownOptions(this.conditionsPopupElement, CSS_CLASSES$1.DROPDOWN_CONCATENATION, AVAILABLE_CONDITION_CONCATENATIONS$4);
    this.setDropdownValue(this.conditionsPopupElement, CSS_CLASSES$1.DROPDOWN_CONCATENATION, AVAILABLE_CONDITION_CONCATENATIONS$4[0].value);
  }
  /**
   * Initializes conditions from applied condition data
   * @private
   * @param {Object} appliedCondition - The applied condition object
   */
  initConditions(appliedCondition) {
    const table = this.conditionsPopupElement.querySelector(`.${CSS_CLASSES$1.CONDITIONS_TABLE}`);
    if (table) {
      table.innerHTML = "";
    }
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    initialConditions.conditions.forEach((condition) => {
      this.addConditionRow(null, condition);
    });
    this.setDropdownValue(this.conditionsPopupElement, CSS_CLASSES$1.DROPDOWN_CONCATENATION, initialConditions.concatenation);
  }
  /**
   * Parses an applied condition string into its components
   * @private
   * @param {string} appliedCondition - The condition string (e.g., "%IF equals('test', $EMAIL)%")
   * @returns {Object} Parsed condition object with conditions array and concatenation
   */
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$4);
    const conditions = str.split(concatenation).map((conditionStr) => {
      const valueMatch = conditionStr.match(/'([^']+)'/);
      const value = valueMatch ? valueMatch[1] : "";
      return {
        name: this.findConditionOptionValue(conditionStr, AVAILABLE_CONDITION_NAMES$4),
        operation: this.findConditionOptionValue(conditionStr, AVAILABLE_CONDITION_OPERATIONS$4),
        value
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  /**
   * Finds the value of an option that exists in the given string
   * @private
   * @param {string} str - The string to search in
   * @param {Array} options - Array of option objects with value property
   * @returns {string} The found option value or first option's value as default
   */
  findConditionOptionValue(str, options) {
    const foundOption = options.find((option) => str.includes(option.value));
    return foundOption ? foundOption.value : options[0].value;
  }
}, /**
 * UI Style configurations for consistent styling across the component
 * @static
 * @readonly
 */
__publicField(_c, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "700px",
    width: "90%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content styles
  content: {
    padding: "32px",
    overflowY: "auto",
    flex: "1"
  },
  // Form control styles
  select: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "white",
    cursor: "pointer",
    transition: "border-color 0.2s",
    outline: "none"
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    transition: "border-color 0.2s",
    outline: "none"
  },
  // Button styles
  buttonPrimary: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonSecondary: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  buttonAdd: {
    padding: "6px 16px",
    borderRadius: "6px",
    border: "1px solid #3b82f6",
    backgroundColor: "white",
    color: "#3b82f6",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }
}), _c);
const gitSample_08_External_Display_Conditions = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$4).build();
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
const CSS_CLASSES = {
  DROPDOWN_NAME: "dropdownConditionField",
  DROPDOWN_OPERATION: "dropdownConditionOperation",
  DROPDOWN_CONCATENATION: "dropdownConcatenation",
  CONDITION_ROW: "condition-row",
  CONDITION_VALUE: "condition-value",
  CONDITIONS_TABLE: "conditionsTable",
  DELETE_ACTION_PREFIX: "condition-delete-action-"
};
const SELECTORS = {
  DELETE_BUTTON: 'button[class*="condition-delete-action"]'
};
const MESSAGES = {
  VALIDATION_ERROR: "Please enter a value for at least one condition.",
  CONDITION_NAME: "Conditions applied",
  CONDITION_DESCRIPTION: "Only users that fit conditions will see this part of the email."
};
let ExternalDisplayConditions$3 = (_d = class {
  constructor() {
    /**
     * @private
     * @type {Function|null} Callback function to execute when conditions are selected
     */
    __publicField(this, "selectConditionsCallback", null);
    /**
     * @private
     * @type {HTMLElement|null} Reference to the popup DOM element
     */
    __publicField(this, "conditionsPopupElement", null);
    /**
     * @private
     * @type {Function|null} Callback function to execute when dialog is cancelled
     */
    __publicField(this, "onCancelCallback", null);
    /**
     * Deletes a condition row
     * @private
     * @param {Event} e - The click event
     */
    __publicField(this, "deleteConditionRow", (e) => {
      const row = e.target.closest(`.${CSS_CLASSES.CONDITION_ROW}`);
      if (row) {
        row.remove();
        this.updateDeleteActionVisibility();
      }
    });
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Gets the value of a dropdown element
   * @private
   * @param {HTMLElement} baseElement - The base element to search within
   * @param {string} identifierClass - The CSS class of the dropdown
   * @returns {string|null} The selected value or null if not found
   */
  getDropdownValue(baseElement, identifierClass) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    return selectElement ? selectElement.value : null;
  }
  /**
   * Sets the value of a dropdown element
   * @private
   * @param {HTMLElement} baseElement - The base element to search within
   * @param {string} identifierClass - The CSS class of the dropdown
   * @param {string} value - The value to set
   */
  setDropdownValue(baseElement, identifierClass, value) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    if (selectElement) {
      selectElement.value = value;
    }
  }
  setDropdownOptions(baseElement, identifierClass, newValue) {
    if (!baseElement) {
      baseElement = this.conditionsPopupElement;
    }
    const selectElement = baseElement.querySelector("select." + identifierClass);
    if (!selectElement) return;
    selectElement.innerHTML = "";
    newValue.forEach(function(option) {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerHTML = option.label;
      selectElement.appendChild(optionElement);
    });
    const newSelectElement = selectElement.cloneNode(true);
    selectElement.parentNode.replaceChild(newSelectElement, selectElement);
    newSelectElement.addEventListener("focus", function() {
      this.style.borderColor = "#3b82f6";
      this.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
    });
    newSelectElement.addEventListener("blur", function() {
      this.style.borderColor = "#e5e7eb";
      this.style.boxShadow = "none";
    });
    newSelectElement.addEventListener("change", () => {
      this.hideValidationError();
    });
  }
  closePopup() {
    this.conditionsPopupElement.style.visibility = "hidden";
    this.hideValidationError();
  }
  cancelConditions() {
    this.onCancelCallback();
    this.closePopup();
  }
  showValidationError(message) {
    this.hideValidationError();
    const errorDiv = document.createElement("div");
    errorDiv.className = "validation-error";
    errorDiv.style.cssText = `
            background-color: #fef2f2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 12px 16px;
            border-radius: 6px;
            margin-bottom: 16px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
    errorDiv.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="flex-shrink: 0;">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg>
            <span>${message}</span>
        `;
    const contentDiv = this.conditionsPopupElement.querySelector('[style*="padding: 32px"]');
    if (contentDiv) {
      contentDiv.insertBefore(errorDiv, contentDiv.firstChild);
    }
  }
  hideValidationError() {
    const existingError = this.conditionsPopupElement.querySelector(".validation-error");
    if (existingError) {
      existingError.remove();
    }
  }
  applyConditions() {
    {
      const conditions = [];
      const rows = this.conditionsPopupElement.querySelectorAll(`.${CSS_CLASSES.CONDITIONS_TABLE} .${CSS_CLASSES.CONDITION_ROW}`);
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const value = row.querySelector(`.${CSS_CLASSES.CONDITION_VALUE}`).value;
        if (value.length) {
          conditions.push({
            name: this.getDropdownValue(row, CSS_CLASSES.DROPDOWN_NAME),
            operation: this.getDropdownValue(row, CSS_CLASSES.DROPDOWN_OPERATION),
            value
          });
        }
      }
      if (conditions.length === 0) {
        this.showValidationError(MESSAGES.VALIDATION_ERROR);
        return;
      }
      if (conditions.length) {
        const concatenation = this.getDropdownValue(this.conditionsPopupElement, CSS_CLASSES.DROPDOWN_CONCATENATION);
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: MESSAGES.CONDITION_NAME,
          description: MESSAGES.CONDITION_DESCRIPTION,
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%"
        });
      }
      this.closePopup();
    }
  }
  /**
   * Creates HTML for a condition row
   * @private
   * @param {string} deleteActionClass - Unique class for the delete button
   * @returns {string} HTML string for the condition row
   */
  createConditionRowHTML(deleteActionClass) {
    return `
            <td style="padding: 0 8px 16px 0;">
                ${this.getDropdownMarkup(CSS_CLASSES.DROPDOWN_NAME)}
            </td>
            <td style="padding: 0 8px 16px 0;">
                ${this.getDropdownMarkup(CSS_CLASSES.DROPDOWN_OPERATION)}
            </td>
            <td style="padding: 0 8px 16px 0;">
                <input type="text" 
                       class="${CSS_CLASSES.CONDITION_VALUE}" 
                       style="${this.styleObjToString(_d.STYLES.input)}"
                       placeholder="Enter value">
            </td>
            <td style="width: 40px; padding-bottom: 16px;">
                <button class="${deleteActionClass}" 
                        type="button"
                        data-action="delete"
                        style="background: transparent; border: none; color: #ef4444; 
                               cursor: pointer; padding: 8px; border-radius: 6px; 
                               transition: all 0.2s; width: 32px; height: 32px;
                               display: flex; align-items: center; justify-content: center;">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </td>`;
  }
  /**
   * Sets up event listeners for a condition row
   * @private
   * @param {HTMLElement} row - The row element
   * @param {string} deleteActionClass - Class for the delete button
   */
  setupConditionRowListeners(row, deleteActionClass) {
    const inputElement = row.querySelector(`.${CSS_CLASSES.CONDITION_VALUE}`);
    inputElement.addEventListener("focus", function() {
      this.style.borderColor = "#3b82f6";
      this.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
    });
    inputElement.addEventListener("blur", function() {
      this.style.borderColor = "#e5e7eb";
      this.style.boxShadow = "none";
    });
    inputElement.addEventListener("input", () => {
      this.hideValidationError();
    });
    const deleteButton = row.querySelector("." + deleteActionClass);
    if (deleteButton) {
      deleteButton.addEventListener("click", this.deleteConditionRow);
      deleteButton.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#fee2e2";
      });
      deleteButton.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "transparent";
      });
    }
  }
  /**
   * Adds a new condition row to the table
   * @param {Event} e - The event object (can be null)
   * @param {Object} conditionValue - The condition values to populate
   */
  addConditionRow(e, conditionValue) {
    if (!conditionValue) {
      conditionValue = DEFAULT_CONDITION$3;
    }
    const deleteActionClass = CSS_CLASSES.DELETE_ACTION_PREFIX + Math.random().toString().replace(".", "d");
    const tr = document.createElement("tr");
    tr.classList.add(CSS_CLASSES.CONDITION_ROW);
    tr.innerHTML = this.createConditionRowHTML(deleteActionClass);
    this.conditionsPopupElement.querySelector(`.${CSS_CLASSES.CONDITIONS_TABLE}`).appendChild(tr);
    this.setDropdownOptions(tr, CSS_CLASSES.DROPDOWN_NAME, AVAILABLE_CONDITION_NAMES$3);
    this.setDropdownValue(tr, CSS_CLASSES.DROPDOWN_NAME, conditionValue.name);
    this.setDropdownOptions(tr, CSS_CLASSES.DROPDOWN_OPERATION, AVAILABLE_CONDITION_OPERATIONS$3);
    this.setDropdownValue(tr, CSS_CLASSES.DROPDOWN_OPERATION, conditionValue.operation);
    const inputElement = tr.querySelector(`.${CSS_CLASSES.CONDITION_VALUE}`);
    inputElement.value = conditionValue.value;
    this.setupConditionRowListeners(tr, deleteActionClass);
    this.updateDeleteActionVisibility();
  }
  removeConditions() {
    this.selectConditionsCallback(null);
    this.closePopup();
  }
  /**
   * Updates visibility of delete buttons based on row count
   * @private
   */
  updateDeleteActionVisibility() {
    const rows = this.conditionsPopupElement.querySelectorAll(`.${CSS_CLASSES.CONDITIONS_TABLE} .${CSS_CLASSES.CONDITION_ROW}`);
    if (rows.length > 0) {
      const firstDeleteButton = rows[0].querySelector(SELECTORS.DELETE_BUTTON);
      if (firstDeleteButton) {
        firstDeleteButton.style.display = rows.length > 1 ? "flex" : "none";
      }
    }
  }
  /**
   * Creates dropdown markup
   * @private
   * @param {string} className - CSS class for the dropdown
   * @returns {string} HTML for the dropdown
   */
  getDropdownMarkup(className) {
    return `<select style="${this.styleObjToString(_d.STYLES.select)}" class="${className}"></select>`;
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
  activateConditionsPopup(appliedCondition) {
    if (!this.conditionsPopupElement) {
      this.createConditionsPopup();
    }
    this.initConditions(appliedCondition);
    this.conditionsPopupElement.style.visibility = "visible";
  }
  createConditionsPopup() {
    const div = document.createElement("div");
    div.innerHTML = `
            <div id="externalDisplayConditionsPopup" 
                 style="${this.styleObjToString(_d.STYLES.overlay)}; visibility: hidden;" 
                 class="esdev-app">
                <div style="${this.styleObjToString(_d.STYLES.modal)}">
                    <!-- Header -->
                    <div style="${this.styleObjToString(_d.STYLES.header)}">
                        <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
                            Display Conditions
                        </h2>
                        <button id="closePopupButton" type="button" 
                                style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
                                       color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
                                       justify-content: center; border-radius: 8px; transition: all 0.2s;"
                                onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
                                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
                            <span style="line-height: 1;">×</span>
                        </button>
                    </div>
                    
                    <!-- Content -->
                    <div style="${this.styleObjToString(_d.STYLES.content)}">
                        <!-- Conditions table -->
                        <div style="margin-bottom: 24px;">
                            <h3 style="font-size: 16px; font-weight: 600; color: #374151; margin: 0 0 16px 0;">
                                Condition Rules
                            </h3>
                            <table class="conditionsTable" style="width: 100%; border-collapse: collapse;"></table>
                            <button id="addNewCondition" 
                                    style="${this.styleObjToString(_d.STYLES.buttonAdd)}"
                                    onmouseover="this.style.backgroundColor='#3b82f6'; this.style.color='white';"
                                    onmouseout="this.style.backgroundColor='white'; this.style.color='#3b82f6';">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                Add Condition
                            </button>
                        </div>
                        
                        <!-- Concatenation setting -->
                        <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                            <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; color: #374151;">
                                Show this content if
                                <span style="display: inline-block; min-width: 80px;">
                                    ${this.getDropdownMarkup(CSS_CLASSES.DROPDOWN_CONCATENATION)}
                                </span>
                                conditions are met
                            </label>
                        </div>
                        
                        <!-- Footer actions -->
                        <div style="display: flex; align-items: center; justify-content: space-between; 
                                    padding-top: 24px; border-top: 1px solid #e5e7eb;">
                            <a id="removeConditionsPopup" 
                               style="color: #ef4444; text-decoration: none; font-size: 14px; cursor: pointer; 
                                      transition: color 0.2s;"
                               onmouseover="this.style.color='#dc2626';"
                               onmouseout="this.style.color='#ef4444';">
                                Remove all conditions
                            </a>
                            <div style="display: flex; gap: 12px;">
                                <button id="closeConditionsPopup" 
                                        style="${this.styleObjToString(_d.STYLES.buttonSecondary)}"
                                        onmouseover="this.style.backgroundColor='#f9fafb';"
                                        onmouseout="this.style.backgroundColor='white';">
                                    Cancel
                                </button>
                                <button id="applyConditionsAction" 
                                        style="${this.styleObjToString(_d.STYLES.buttonPrimary)}"
                                        onmouseover="this.style.backgroundColor='#22c55e';"
                                        onmouseout="this.style.backgroundColor='#34c759';">
                                    Apply Conditions
                                </button>
                            </div>
                        </div>
                    </div>
                                        
                    <!-- Disclaimer Footer -->
                    <div style="padding: 16px 32px; border-top: 1px solid #e5e7eb; background-color: #fef3c7; 
                                border-radius: 0 0 12px 12px; text-align: center;">
                        <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
                            <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
                        </p>
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
    this.setDropdownOptions(this.conditionsPopupElement, CSS_CLASSES.DROPDOWN_CONCATENATION, AVAILABLE_CONDITION_CONCATENATIONS$3);
    this.setDropdownValue(this.conditionsPopupElement, CSS_CLASSES.DROPDOWN_CONCATENATION, AVAILABLE_CONDITION_CONCATENATIONS$3[0].value);
  }
  /**
   * Initializes conditions from applied condition data
   * @private
   * @param {Object} appliedCondition - The applied condition object
   */
  initConditions(appliedCondition) {
    const table = this.conditionsPopupElement.querySelector(`.${CSS_CLASSES.CONDITIONS_TABLE}`);
    if (table) {
      table.innerHTML = "";
    }
    const initialConditions = this.parseAppliedCondition(appliedCondition.beforeScript);
    initialConditions.conditions.forEach((condition) => {
      this.addConditionRow(null, condition);
    });
    this.setDropdownValue(this.conditionsPopupElement, CSS_CLASSES.DROPDOWN_CONCATENATION, initialConditions.concatenation);
  }
  /**
   * Parses an applied condition string into its components
   * @private
   * @param {string} appliedCondition - The condition string (e.g., "%IF equals('test', $EMAIL)%")
   * @returns {Object} Parsed condition object with conditions array and concatenation
   */
  parseAppliedCondition(appliedCondition) {
    const str = appliedCondition.trim().replace("%IF ", "").replace("%/IF%", "");
    const concatenation = this.findConditionOptionValue(str, AVAILABLE_CONDITION_CONCATENATIONS$3);
    const conditions = str.split(concatenation).map((conditionStr) => {
      const valueMatch = conditionStr.match(/'([^']+)'/);
      const value = valueMatch ? valueMatch[1] : "";
      return {
        name: this.findConditionOptionValue(conditionStr, AVAILABLE_CONDITION_NAMES$3),
        operation: this.findConditionOptionValue(conditionStr, AVAILABLE_CONDITION_OPERATIONS$3),
        value
      };
    });
    return {
      conditions,
      concatenation
    };
  }
  /**
   * Finds the value of an option that exists in the given string
   * @private
   * @param {string} str - The string to search in
   * @param {Array} options - Array of option objects with value property
   * @returns {string} The found option value or first option's value as default
   */
  findConditionOptionValue(str, options) {
    const foundOption = options.find((option) => str.includes(option.value));
    return foundOption ? foundOption.value : options[0].value;
  }
  /**
   * Determines if the context action should be enabled in the editor
   * @returns {boolean} true if the context action should be enabled, false otherwise
   */
  getIsContextActionEnabled() {
    return true;
  }
  /**
   * Gets the index position for the context action in the context menu
   * @returns {number} The index position where the context action should appear (1-based)
   */
  getContextActionIndex() {
    return 1;
  }
}, /**
 * UI Style configurations for consistent styling across the component
 * @static
 * @readonly
 */
__publicField(_d, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "700px",
    width: "90%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content styles
  content: {
    padding: "32px",
    overflowY: "auto",
    flex: "1"
  },
  // Form control styles
  select: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "white",
    cursor: "pointer",
    transition: "border-color 0.2s",
    outline: "none"
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    fontSize: "14px",
    transition: "border-color 0.2s",
    outline: "none"
  },
  // Button styles
  buttonPrimary: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonSecondary: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  buttonAdd: {
    padding: "6px 16px",
    borderRadius: "6px",
    border: "1px solid #3b82f6",
    backgroundColor: "white",
    color: "#3b82f6",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }
}), _d);
const gitSample_09_External_Display_Conditions_With_Context_Menu = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$3).build();
let ExternalVideoLibrary$1 = (_e = class {
  constructor() {
    // Instance properties
    __publicField(this, "externalLibrary");
    __publicField(this, "videoSelectCallback", () => {
    });
    __publicField(this, "cancelCallback", () => {
    });
    __publicField(this, "activeCategory", "all");
    this.createModal();
    this.attachEventListeners();
    this.initializeFilters();
  }
  /**
   * Creates the modal HTML structure and appends it to the document
   */
  createModal() {
    const modalHtml = this.generateModalHTML();
    const container = document.createElement("div");
    container.innerHTML = modalHtml;
    document.body.appendChild(container);
    this.externalLibrary = document.getElementById("externalVideoLibrary");
    this.externalLibrary.style.display = "none";
  }
  /**
   * Generates the complete modal HTML structure
   * @returns {string} HTML string for the modal
   */
  generateModalHTML() {
    return `
            <div id="externalVideoLibrary" style="${this.styleObjToString(_e.STYLES.overlay)}">
                <div style="${this.styleObjToString(_e.STYLES.modal)}">
                    ${this.generateHeaderHTML()}
                    ${this.generateContentHTML()}
                    ${this.generateFooterHTML()}
                </div>
            </div>
        `;
  }
  /**
   * Generates the header section HTML
   * @returns {string} HTML string for the header
   */
  generateHeaderHTML() {
    return `
            <div style="${this.styleObjToString(_e.STYLES.header)}">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <h2 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; letter-spacing: -0.025em;">
                        Video Library
                    </h2>
                    <div class="filter-buttons" style="display: flex; gap: 8px; margin-left: 24px;">
                        ${this.generateFilterButtons()}
                    </div>
                </div>
                ${this.generateCloseButton()}
            </div>
        `;
  }
  /**
   * Generates filter button HTML
   * @returns {string} HTML string for filter buttons
   */
  generateFilterButtons() {
    const categories = [
      { id: "all", label: "All", active: true },
      { id: "tutorial", label: "Tutorials", active: false },
      { id: "features", label: "Features", active: false },
      { id: "overview", label: "Overview", active: false }
    ];
    return categories.map((cat) => `
            <button 
                data-category="${cat.id}" 
                style="${this.styleObjToString(cat.active ? _e.STYLES.buttonActive : _e.STYLES.buttonInactive)}">
                ${cat.label}
            </button>
        `).join("");
  }
  /**
   * Generates close button HTML
   * @returns {string} HTML string for close button
   */
  generateCloseButton() {
    return `
            <button class="close" type="button" 
                style="cursor: pointer; background: transparent; border: none; font-size: 24px; 
                       color: #6b7280; width: 40px; height: 40px; display: flex; align-items: center; 
                       justify-content: center; border-radius: 8px; transition: all 0.2s;"
                onmouseover="this.style.backgroundColor='#f3f4f6'; this.style.color='#111827';"
                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#6b7280';">
                <span style="line-height: 1;">×</span>
            </button>
        `;
  }
  /**
   * Generates the content section HTML with video grid
   * @returns {string} HTML string for content section
   */
  generateContentHTML() {
    return `
            <div style="${this.styleObjToString(_e.STYLES.content)}">
                <div class="video-grid" style="${this.styleObjToString(_e.STYLES.grid)}">
                    ${this.generateVideoThumbnails()}
                </div>
            </div>
        `;
  }
  /**
   * Generates the footer section HTML with disclaimer
   * @returns {string} HTML string for the footer
   */
  generateFooterHTML() {
    return `
            <div style="${this.styleObjToString(_e.STYLES.footer)}">
                <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 500;">
                    <span style="font-weight: 700; color: #d97706;">⚠️ Notice:</span> This popup window is not part of the plugin. It is intended solely for demonstration purposes and can be implemented independently in any desired way.
                </p>
            </div>
        `;
  }
  /**
   * Generates video thumbnail HTML
   * @returns {string} HTML string for all video thumbnails
   */
  generateVideoThumbnails() {
    return _e.VIDEOS.map((video) => `
            <div class="thumbnail" 
                 data-category="${video.category}"
                 style="cursor: pointer; border-radius: 8px; overflow: hidden; 
                        background-color: #f9fafb; transition: all 0.3s; 
                        position: relative; height: 100%;"
                 onmouseover="this.style.transform='translateY(-4px)'; 
                             this.style.boxShadow='0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';"
                 onmouseout="this.style.transform='translateY(0)'; 
                            this.style.boxShadow='none';">
                <img style="width: 100%; height: 100%; object-fit: cover; display: block;"
                     src="${video.src}"
                     alt="${video.title}"
                     data-url-video="${video.urlVideo}"
                     data-has-button="${video.hasButton}">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; 
                           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); 
                           padding: 12px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg style="width: 20px; height: 20px; fill: white;" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <p style="color: white; margin: 0; font-size: 14px; font-weight: 500; 
                                  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${video.title}
                        </p>
                    </div>
                </div>
            </div>
        `).join("");
  }
  /**
   * Converts style object to inline style string
   * @param {Object} styleObj - Style object
   * @returns {string} Inline style string
   */
  styleObjToString(styleObj) {
    return Object.entries(styleObj).map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value}`;
    }).join("; ");
  }
  /**
   * Attaches event listeners to modal elements
   */
  attachEventListeners() {
    this.externalLibrary.querySelector(".close").addEventListener("click", this.cancelAndClose.bind(this));
    this.externalLibrary.addEventListener("click", this.onVideoClick.bind(this));
  }
  /**
   * Initializes filter button functionality
   */
  initializeFilters() {
    const filterButtons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        this.filterVideos(category);
        this.updateActiveButton(e.target);
      });
    });
  }
  /**
   * Filters videos based on selected category
   * @param {string} category - Category to filter by
   */
  filterVideos(category) {
    this.activeCategory = category;
    const thumbnails = this.externalLibrary.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => {
      const shouldShow = category === "all" || thumbnail.getAttribute("data-category") === category;
      thumbnail.style.display = shouldShow ? "block" : "none";
    });
  }
  /**
   * Updates the visual state of filter buttons
   * @param {HTMLElement} activeButton - The button that was clicked
   */
  updateActiveButton(activeButton) {
    const buttons = this.externalLibrary.querySelectorAll(".filter-buttons button");
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      const styles2 = isActive ? _e.STYLES.buttonActive : _e.STYLES.buttonInactive;
      Object.assign(button.style, styles2);
    });
  }
  /**
   * Handles click events on video thumbnails
   * @param {Event} e - Click event
   */
  onVideoClick(e) {
    const thumbnail = e.target.closest(".thumbnail");
    if (!thumbnail) return;
    const img = thumbnail.querySelector("img");
    if (!img) return;
    const videoData = {
      originalVideoName: img.getAttribute("alt"),
      originalImageName: img.getAttribute("alt"),
      urlImage: img.getAttribute("src"),
      urlVideo: img.getAttribute("data-url-video"),
      hasCustomButton: img.getAttribute("data-has-button") === "true"
    };
    this.close();
    this.videoSelectCallback(videoData);
  }
  /**
   * Closes the modal and executes cancel callback
   */
  cancelAndClose() {
    this.close();
    this.cancelCallback();
  }
  /**
   * Closes the modal by hiding it
   */
  close() {
    this.externalLibrary.style.display = "none";
  }
  /**
   * Opens the video library modal
   * @param {string} currentImageUrl - Currently selected video thumbnail URL (if any)
   * @param {Function} onVideoSelectCallback - Callback when video is selected
   * @param {Function} onCancelCallback - Callback when modal is cancelled
   */
  openExternalVideosLibraryDialog(currentImageUrl, onVideoSelectCallback, onCancelCallback) {
    this.videoSelectCallback = onVideoSelectCallback;
    this.cancelCallback = onCancelCallback;
    this.externalLibrary.style.display = "flex";
    this.filterVideos("all");
    const allButton = this.externalLibrary.querySelector('[data-category="all"]');
    if (allButton) {
      this.updateActiveButton(allButton);
    }
  }
}, // UI Style configurations
__publicField(_e, "STYLES", {
  // Modal overlay styles
  overlay: {
    backgroundColor: "rgba(0,0,0,.7)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    zIndex: "1050",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  // Modal container styles
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    maxWidth: "1000px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  // Header styles
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9fafb",
    borderRadius: "12px 12px 0 0"
  },
  // Content container styles
  content: {
    padding: "32px",
    height: "289px",
    // Reduced height to accommodate footer
    overflowY: "auto",
    overflowX: "hidden",
    boxSizing: "border-box"
  },
  // Grid styles
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    gridAutoRows: "125px"
    // Fixed row height
  },
  // Button styles
  buttonActive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#34c759",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s"
  },
  buttonInactive: {
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    backgroundColor: "white",
    color: "#6b7280",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s"
  },
  // Footer styles
  footer: {
    padding: "16px 32px",
    borderTop: "1px solid #e5e7eb",
    backgroundColor: "#fef3c7",
    borderRadius: "0 0 12px 12px",
    textAlign: "center"
  }
}), // Sample videos data
__publicField(_e, "VIDEOS", [
  {
    category: "tutorial",
    src: "https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/23121555584914821.png",
    title: "Create Easy & Quick Event Reminder Using Template for Food Industry",
    urlVideo: "https://www.youtube.com/watch?v=rNmAdmOMp0Y",
    hasButton: true
  },
  {
    category: "features",
    src: "https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1641555585106902.png",
    title: "How to Get Email Mobile & Browser Preview with Stripo",
    urlVideo: "https://www.youtube.com/watch?v=R4NXtC3h598",
    hasButton: true
  },
  {
    category: "overview",
    src: "https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/1881555585513981",
    title: "Stripo.email editor",
    urlVideo: "https://www.youtube.com/watch?v=ryqOEPk51Lg",
    hasButton: false
  },
  {
    category: "tutorial",
    src: "https://psyrh.stripocdn.email/content/guids/videoImgGuid/images/24481555585355917",
    title: "How to Add Menu in Email with Stripo",
    urlVideo: "https://www.youtube.com/watch?v=XPFWthaa35Q",
    hasButton: false
  }
]), _e);
const gitSample_10_External_Videos_Library = new ExtensionBuilder().withExternalVideosLibrary(ExternalVideoLibrary$1).build();
class BlocksPanelExtension extends BlocksPanel {
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
const gitSample_11_Blocks_Panel = new ExtensionBuilder().withBlocksPanel(BlocksPanelExtension).withStyles(styles).withLocalization({
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
class LogoBlock extends Block {
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
class LogoBlockSettingsPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[LOGO_BLOCK_ID] = controls2[BlockType.BLOCK_IMAGE];
  }
}
const gitSample_12_Logo_Block = new ExtensionBuilder().addBlock(LogoBlock).withSettingsPanelRegistry(LogoBlockSettingsPanelRegistry).build();
class TextCustomControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"] = [
      new SettingsPanelTab("customStyles", ["backgroundColor"]).withLabel(this.api.translate("Custom styles")),
      new SettingsPanelTab("settings", ["paragraphStyleForm"]),
      new SettingsPanelTab("customSettings", ["backgroundColor"]).withLabel(this.api.translate("Custom settings"))
    ];
  }
}
const textBlockWithCustomControls = new ExtensionBuilder().withLocalization({
  "en": {
    "Custom styles": "EN Custom styles"
  },
  "uk": {
    "Custom styles": "UK Custom styles",
    "Custom settings": "UK Custom settings"
  }
}).withSettingsPanelRegistry(TextCustomControls).build();
class TextExtendedControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][1].addControl("fixedHeightSwitcherForm", 0);
  }
}
const textBlockWithExtendedControls = new ExtensionBuilder().withSettingsPanelRegistry(TextExtendedControls).build();
class TextRemovedControls extends SettingsPanelRegistry {
  registerBlockControls(blockControlsMap) {
    blockControlsMap["BLOCK_TEXT"][0].deleteControl("paragraphStyleForm");
  }
}
const textBlockWithRemovedControl = new ExtensionBuilder().withSettingsPanelRegistry(TextRemovedControls).build();
const ID$2 = "custom-font-family-select";
const ORIGINAL_ID = "original-font-family-select";
class TagRegistry2 extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[ORIGINAL_ID] = uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT];
    uiElementsTagsMap[UIElementType.FONT_FAMILY_SELECT] = ID$2;
  }
}
class CustomFontFamilySelect2 extends UIElement {
  getId() {
    return ID$2;
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
    if (event.target.value !== ADD_CUSTOM_FONT_OPTION) {
      this.api.triggerValueChange(event.target.value);
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
    const attrs = UEAttr.FONT_FAMILY_SELECT;
    return `<${ORIGINAL_ID} id="originalSelect" style="width: 100%;" ${attrs.addCustomFontOption}="+ Insert custom font"></${ORIGINAL_ID}>`;
  }
}
const fontFamilyExtension = new ExtensionBuilder().addUiElement(CustomFontFamilySelect2).withUiElementTagRegistry(TagRegistry2).build();
const MessageStyle = {
  DANGER: "error",
  SUCCESS: "success",
  WARNING: "warn",
  INFO: "info"
};
const IMG_URL = "https://localfiles.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png";
const MessageIcon = {
  DANGER: "cross-circle",
  SUCCESS: "check-circle",
  WARNING: "warning",
  INFO: IMG_URL
};
const CONTROL_ID = "ui-elements-demo";
const MESSAGE_ELEMENT = "message";
const TOGGLABLE_CONTAINER = "togglable";
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
class TestUIElementsDemoPanelRegistry extends SettingsPanelRegistry {
  registerBlockControls(controls2) {
    controls2[BlockType.BLOCK_BUTTON] = [new SettingsPanelTab(SettingsTab.SETTINGS, [CONTROL_ID])];
  }
}
class TestUIElementsDemoControl extends Control {
  getId() {
    return CONTROL_ID;
  }
  _getLabel(text, name = `${Math.random()}`) {
    const tag = UIElementType.LABEL;
    const attr = UEAttr.LABEL;
    return `<${tag} ${attr.text}="${text}" ${attr.name}="${name}"></${tag}>`;
  }
  _getMessage() {
    const tag = UIElementType.MESSAGE;
    const attr = UEAttr.MESSAGE;
    return `       
        <b>Message element allows you to provide user with required information.</b>
        ${this._getLabel("User action:")}           
        <${tag} ${attr.name}="${MESSAGE_ELEMENT}" ${attr.type}="${MessageStyle.INFO}"></${tag}>
    `;
  }
  _getRadioButton(text, value, icon) {
    const tag = UIElementType.RADIO_ITEM;
    const attr = UEAttr.RADIO_ITEM;
    return `<${tag} ${attr.hint}="${text}" ${attr.icon}="${icon}" ${attr.value}="${value}"></${tag}>`;
  }
  _getRadioButtons() {
    const tag = UIElementType.RADIO_BUTTONS;
    const attr = UEAttr.RADIO_BUTTONS;
    return `
      <b>Radio buttons allow you to choose one item from the list of options.</b>
      ${this._getLabel("Select message style:")}
      <${tag} ${attr.name}="${RADIO_BUTTONS_ELEMENT}">
          ${Object.keys(MessageStyle).map((key) => this._getRadioButton(key, MessageStyle[key], MessageIcon[key])).join("")}
      </${tag}>
    `;
  }
  _getSelectItem(text, value) {
    const tag = UIElementType.SELECT_ITEM;
    const attr = UEAttr.SELECT_ITEM;
    return `<${tag} ${attr.text}="${text}" ${attr.value}="${value}"></${tag}>`;
  }
  _getSelect() {
    const tag = UIElementType.SELECTPICKER;
    const attr = UEAttr.SELECTPICKER;
    return `
      <b>Select element allows you to choose one or several items from the list of options.</b>
        ${this._getLabel("Select message style:")}
        <${tag} ${attr.name}="${SELECT_ELEMENT}" ${attr.multiSelect}="true">
            ${Object.keys(MessageStyle).map((key) => this._getSelectItem(key, MessageStyle[key])).join("")}
        </${tag}>
    `;
  }
  getCheckItem(name, value, icon = "") {
    const tag = UIElementType.CHECK_ITEM;
    const attr = UEAttr.CHECK_ITEM;
    return `<${tag} ${attr.hint}="${name}" ${attr.text}="${name}" ${attr.value}="${value}" ${icon ? `${attr.icon}="${icon}"` : ""}></${tag}>`;
  }
  _getCheckButtons() {
    const tag = UIElementType.CHECK_BUTTONS;
    const attr = UEAttr.CHECK_BUTTONS;
    const img = { "three": IMG_URL };
    return `
      <b>CheckButtons are similar to RadioButtons but also allow to select several items.</b>
        ${this._getLabel("Select some items:")}
        <${tag} ${attr.name}="${CHECK_BUTTONS_ELEMENT}">
            ${["one", "two", "three"].map((key) => this.getCheckItem(key, key, img[key])).join("")}
        </${tag}>
    `;
  }
  _getCheckbox() {
    const tag = UIElementType.CHECKBOX;
    const attr = UEAttr.CHECKBOX;
    return `
      <b>Checkbox allows you to switch boolean state.</b>
      <${tag} ${attr.caption}="Disable inputs above:" ${attr.name}="${CHECKBOX_ELEMENT}"></${tag}>
    `;
  }
  _getSwitcher() {
    const tag = UIElementType.SWITCHER;
    const attr = UEAttr.SWITCHER;
    return `
      <b>Switcher allows you to switch boolean state too.</b>
      ${this._getLabel("Display inputs above:")}
      <${tag} ${attr.name}="${SWITCHER_ELEMENT}"></${tag}>
    `;
  }
  _getButton() {
    const tag = UIElementType.BUTTON;
    const attr = UEAttr.BUTTON;
    return `
      <b>Button allows you to perform single action.</b>
      ${this._getLabel("Clear message area:")}
      <${tag} ${attr.name}="${BUTTON_ELEMENT}" ${attr.icon}="${IMG_URL}" ${attr.caption}="DO IT"></${tag}>
    `;
  }
  _getColor() {
    const tag = UIElementType.COLOR;
    const attr = UEAttr.COLOR;
    return `
      <b>Colorpicker allows you to select color from the default and custom palettes.</b>
      ${this._getLabel("Select color:")}
      <${tag} ${attr.name}="${COLOR_ELEMENT}"></${tag}>
    `;
  }
  _getDatepicker() {
    const tag = UIElementType.DATEPICKER;
    const attr = UEAttr.DATEPICKER;
    return `
      <b>Datepicker allows to select date.</b>
      ${this._getLabel("Select date:")}
      <${tag} ${attr.name}="${DATEPICKER_ELEMENT}"></${tag}>
    `;
  }
  _getCounter() {
    const tag = UIElementType.COUNTER;
    const attr = UEAttr.COUNTER;
    return `
      <b>Counter allows to input numeric value.</b>
      ${this._getLabel("Pick a number between 1 and 10:")}
      <${tag} ${attr.name}="${COUNTER_ELEMENT}" ${attr.minValue}="1" ${attr.maxValue}="10" ${attr.step}="1"></${tag}>
    `;
  }
  _getText() {
    const tag = UIElementType.TEXT;
    const attr = UEAttr.TEXT;
    return `
      <b>Text allows you to input string value.</b>
      ${this._getLabel("What is your name?")}
      <${tag} ${attr.name}="${TEXT_ELEMENT}" ${attr.placeholder}="Enter your name here."></${tag}>
    `;
  }
  _getTextArea() {
    const tag = UIElementType.TEXTAREA;
    const attr = UEAttr.TEXTAREA;
    return `
      <b>Text area allows you to input multi-line text.</b>
      ${this._getLabel("List top 1 of your favourite dinosaurs.", "dinoLabel")}
      <${tag} ${attr.name}="${TEXT_AREA_ELEMENT}" ${attr.placeholder}="Dinosaurs go here."></${tag}>
    `;
  }
  getTemplate() {
    return `
    <div class="e2e-elements-container">
        ${this._getMessage()}    
        <hr>
        <div ${UEAttr.DEFAULT.name}="${TOGGLABLE_CONTAINER}">
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
  _listenToFormUpdates() {
    this.api.onValueChanged(RADIO_BUTTONS_ELEMENT, (value) => this._onRadioButtonsChange(value));
    this.api.onValueChanged(SELECT_ELEMENT, (value) => this._onSelectChange(value));
    this.api.onValueChanged(CHECK_BUTTONS_ELEMENT, (value) => this._onCheckButtonsChange(value));
    this.api.onValueChanged(CHECKBOX_ELEMENT, (value) => this._onCheckboxChange(value));
    this.api.onValueChanged(SWITCHER_ELEMENT, (value) => this._onSwitcherChange(value));
    this.api.onValueChanged(COLOR_ELEMENT, (value) => this._onColorChange(value));
    this.api.onValueChanged(DATEPICKER_ELEMENT, (value) => this._onDateChange(value));
    this.api.onValueChanged(COUNTER_ELEMENT, (value) => this._onCounterChange(value));
    this.api.onValueChanged(TEXT_ELEMENT, (value) => this._onTextChange(value));
    this.api.onValueChanged(TEXT_AREA_ELEMENT, (value) => this._onTextAreaChange(value));
    this.api.onValueChanged(BUTTON_ELEMENT, (value) => this._onButtonClick(value));
  }
  _updateMessage(message, overwrite) {
    const previousMessages = overwrite ? "" : this.api.getValues()[MESSAGE_ELEMENT];
    this.api.updateValues({
      [MESSAGE_ELEMENT]: `${previousMessages ? `${previousMessages}<br>` : ""}${message}`
    });
  }
  _onRadioButtonsChange(value) {
    this.api.setUIEAttribute(MESSAGE_ELEMENT, UEAttr.MESSAGE.type, value);
    this._updateMessage(`<b>Radio item selected</b>: '${value}'`);
  }
  _onSelectChange(value) {
    this.api.setUIEAttribute(
      RADIO_BUTTONS_ELEMENT,
      UEAttr.RADIO_BUTTONS.buttons,
      Object.keys(MessageStyle).filter((key) => value.includes(MessageStyle[key])).map((key) => ({
        [UEAttr.RADIO_ITEM.hint]: key,
        [UEAttr.RADIO_ITEM.text]: key,
        [UEAttr.RADIO_ITEM.value]: MessageStyle[key]
      }))
    );
    this._updateMessage(`<b>Select items selected</b>: '${value.join(", ")}'`);
  }
  _onCheckButtonsChange(value) {
    this._updateMessage(`<b>Check buttons selected</b>: '${JSON.stringify(value).replace(/"/g, "")}'`);
  }
  _onCheckboxChange(value) {
    this._updateMessage(`<b>Checkbox changed</b>: '${value}'`);
    this.api.setUIEAttribute(RADIO_BUTTONS_ELEMENT, UEAttr.RADIO_BUTTONS.disabled, value);
    this.api.setUIEAttribute(SELECT_ELEMENT, UEAttr.SELECTPICKER.disabled, value);
    this.api.setUIEAttribute(CHECK_BUTTONS_ELEMENT, UEAttr.CHECK_BUTTONS.disabled, value);
    this.api.setUIEAttribute(BUTTON_ELEMENT, UEAttr.BUTTON.disabled, value);
  }
  _onSwitcherChange(value) {
    this._updateMessage(`<b>Switcher changed</b>: '${value}'`);
    this.api.setVisibility(TOGGLABLE_CONTAINER, value);
  }
  _onButtonClick() {
    this._updateMessage("All gone!", true);
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
    this.api.setUIEAttribute("dinoLabel", UEAttr.LABEL.text, `List top ${value} of your favourite dinosaurs.`);
  }
  _onTextChange(value) {
    this._updateMessage(`${value}'s come to see us!`);
  }
  _onTextAreaChange(value = "") {
    value = value.trim();
    const requiredNumber = this.api.getValues()[COUNTER_ELEMENT];
    const enteredNumber = value.split("\n").length;
    if (requiredNumber > enteredNumber) {
      this._updateMessage(`<b>Enter ${requiredNumber - enteredNumber} more dinosaurs!</b>`);
    } else if (requiredNumber < enteredNumber) {
      this._updateMessage("<b>Hold your dinosaurs!</b>");
    } else {
      this._updateMessage(`<b>Top ${requiredNumber} of dinosaurs:</b><hr>${value.replace(/\n/g, "<br>")}`);
    }
  }
  onTemplateNodeUpdated(node) {
  }
}
const demoUiElement = new ExtensionBuilder().addControl(TestUIElementsDemoControl).withSettingsPanelRegistry(TestUIElementsDemoPanelRegistry).build();
class ExternalAiAssistant {
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
const externalAiAssistant = new ExtensionBuilder().withExternalAiAssistant(ExternalAiAssistant).build();
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
let ExternalDisplayConditions$2 = class ExternalDisplayConditions {
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
const externalDisplayConditions = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$2).build();
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
let ExternalDisplayConditions$1 = class ExternalDisplayConditions2 {
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
const externalDisplayConditionsContextMenu = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions$1).build();
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
class ExternalDisplayConditions3 {
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
        const extraData = this.getExtraOptionsValues();
        let extraDataString = "";
        try {
          extraDataString = JSON.stringify(extraData);
        } catch (e) {
          console.error("Error stringify extraData", e);
        }
        const concatenation = this.getDropdownProps(this.conditionsPopupElement, DROPDOWN_CONDITION_CONCATENATION_CLASS).value;
        const finalCondition = conditions.map(function(condition) {
          return condition.operation + "('" + condition.value + "', " + condition.name + ")";
        }).join(" " + concatenation + " ");
        this.selectConditionsCallback({
          name: "Conditions applied",
          description: "Only users that fit conditions will see this part of the email.",
          conditionsCount: conditions.length,
          beforeScript: "%IF " + finalCondition + "%",
          afterScript: "%/IF%",
          extraData: extraDataString
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
  setExtraOptionsValues(appliedCondition) {
    let extraDataObject;
    try {
      extraDataObject = JSON.parse((appliedCondition == null ? void 0 : appliedCondition.extraData) || "{}");
    } catch (e) {
      console.error(e);
      return;
    }
    const inputs = this.conditionsPopupElement.querySelectorAll(".extraOptionsTable input");
    inputs.forEach(function(input) {
      const name = input.name;
      if (extraDataObject[name]) {
        input.value = extraDataObject[name];
      }
    });
  }
  getExtraOptionsValues() {
    const inputs = this.conditionsPopupElement.querySelectorAll(".extraOptionsTable input");
    const extraDataObject = {};
    inputs.forEach(function(input) {
      const name = input.name;
      extraDataObject[name] = input.value;
    });
    return extraDataObject;
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
    this.setExtraOptionsValues(appliedCondition);
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
                        <table class="extraOptionsTable" style="border-collapse: collapse" width="100%">
                            <tr>
                                <th> Extra option 1 </th>
                                <td> <input type="text" name="extraOption1" value=""> </td> 
                            </tr>
                            <tr>
                                <th> Extra option 2 </th>
                                <td><input type="text" name="extraOption2" value=""></td>
                             </tr>
                        </table>
</table>
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
const externalDisplayConditionsExtraData = new ExtensionBuilder().withExternalDisplayCondition(ExternalDisplayConditions3).build();
const ID$1 = "external-merge-tags-ui-element";
class MergeTagsTagRegistry2 extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap[UIElementType.MERGETAGS] = ID$1;
  }
}
class DemoMergeTagsUiElementExtension extends UIElement {
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
    var _a2;
    if (!this.mergeTagsLibrary) {
      this.mergeTagsLibrary = new ExternalMergeTagsLibrary();
    }
    this.mergeTagsLibrary.openMergeTagsLibrary((_a2 = this.selectedMergeTag) == null ? void 0 : _a2.value, (data) => {
      this.api.triggerValueChange(data);
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
class ExternalMergeTagsLibrary {
  constructor() {
    __publicField(this, "externalLibrary");
    __publicField(this, "selectedMergetag", null);
    __publicField(this, "dataSelectCallback", () => {
    });
    const div = document.createElement("div");
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
    var _a2;
    const selectedElement = this.externalLibrary.querySelector(".selected");
    selectedElement && selectedElement.classList.remove("selected");
    if (this.selectedMergetag) {
      (_a2 = this.externalLibrary.querySelector(`[tag-value="${this.selectedMergetag}"]`)) == null ? void 0 : _a2.classList.add("selected");
    }
    this.externalLibrary.style.visibility = "visible";
  }
  openMergeTagsLibrary(mergeTag, onDataSelectCallback) {
    this.selectedMergetag = mergeTag;
    this.renderMergeTags();
    this.dataSelectCallback = onDataSelectCallback;
  }
}
const externalMergetags = new ExtensionBuilder().addUiElement(DemoMergeTagsUiElementExtension).withLocalization({
  "en": {
    "Open merge tags": "Open merge tags"
  },
  "uk": {
    "Open merge tags": "Відкрити мерж теги"
  }
}).withUiElementTagRegistry(MergeTagsTagRegistry2).build();
class ExternalVideoLibrary {
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
const externalVideosLibrary = new ExtensionBuilder().withExternalVideosLibrary(ExternalVideoLibrary).build();
const ID = "text-override-ui-element";
class TestTagRegistry extends UIElementTagRegistry {
  registerUiElements(uiElementsTagsMap) {
    uiElementsTagsMap["original-text"] = uiElementsTagsMap[UIElementType.TEXT];
    uiElementsTagsMap[UIElementType.TEXT] = ID;
  }
}
class UiElementExtensionTextUiElementOverridden extends UIElement {
  getId() {
    return ID;
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
    this.api.triggerValueChange(`${event.target.id}_${event.target.value}`);
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
const textUiElementOverridden = new ExtensionBuilder().addUiElement(UiElementExtensionTextUiElementOverridden).withUiElementTagRegistry(TestTagRegistry).build();
const extensionsMap = {
  variableVisibilityControl,
  textBlockWithCustomControls,
  textBlockWithExtendedControls,
  textBlockWithRemovedControl,
  containerExtension,
  customBlockBasic,
  atomicBlockAlias,
  customBlockWithCustomRenderer,
  customBlockWithDeprecatedCustomRenderer,
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
  extensionButtonBackgroundControl,
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
  externalDisplayConditionsExtraData,
  externalVideosLibrary,
  extendedBlockPaddingsControl,
  extendedStructurePaddingsControl,
  extendedButtonPaddingsControl,
  buttonColorControlExtension,
  linkColorControlExtension,
  structureBorderControlExtension,
  buttonTextControlExtension,
  buttonBorderControlExtension,
  textLineSpacingControlExtension,
  buttonAlignControlExtension,
  extensionButtonTextSizeControl,
  buttonBorderRadiusExtension,
  extensionBuiltInButtonHoverColor,
  extensionBuiltInButtonBorderHover,
  extensionBuiltInButtonHoverTextColor,
  extensionBuiltInButtonFitToContainer,
  extensionStructureMarginsControl,
  extensionButtonMarginsControl,
  extensionButtonBlockBackgroundControl,
  extensionTextBlockBackgroundControl,
  extensionStructureBackgroundControl,
  extensionContainerBackgroundControl,
  extensionSpacerBackgroundColorControl,
  extensionTextAlignControl,
  extensionStructureAdaptControl,
  imageSizeControlExtension,
  customTitleWithPopover,
  extensionMultiplePaddings,
  multipleTextAlignExtension,
  extensionStructureBackgroundImageControl,
  extensionContainerBackgroundImageControl,
  extensionButtonTextStyleAndColorControl,
  extensionContainerBorderControl,
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
