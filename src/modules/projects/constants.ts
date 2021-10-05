// Text Screen
export const textStartFields = [
  "textStartScreenHeading",
  "textStartScreenSubheading",
  "textStartScreenButton",
];

export const textLoadingFields = [
  "textLoadingScreenHint",
  "textStartScreenStatus",
];

export const textExperienceFields = [
  "textExperienceScreenHint",
  "textExperienceScreenInstructionsHeading",
  "textExperienceScreenInstructionsContentOne",
  "textExperienceScreenInstructionsContentTwo",
  "textExperienceScreenInstructionsContentThree",
  "textExperienceScreenImprintHeading",
  "textExperienceScreenImprintContent",
  "textExperienceScreenFotoFrameStatus",
];

export const textFotoFields = ["textFotoScreenHint", "textFotoScreenStatus"];

export const textEndFields = [
  "textEndScreenButtonOne",
  "textEndScreenButtonTwo",
  "textEndScreenButtonThree",
  "linkEndScreenButtonOne",
  "linkEndScreenButtonTwo",
  "linkEndScreenButtonThree",
];

export const textFields = [...textStartFields].concat(
  textLoadingFields,
  textExperienceFields,
  textFotoFields,
  textEndFields
);

// Logo and Background Screen
export const logoAndBgStartFields = [
  "imageStartScreenLogo",
  "imageStartScreenBackground",
];
export const logoAndBgLoadingFields = [
  "imageLoadingScreenLogo",
  "imageLoadingScreenBackground",
];
export const logoAndBgExperienceFields = ["imageExperienceScreenLogo"];
export const logoAndBgFotoFields = [
  "imageFotoScreenScreenLogo",
  "imageFotoScreenScreenBackground",
];
export const logoAndBgEndFields = [
  "imageEndScreenLogo",
  "imageEndScreenBackground",
];

export const logoAndBgFields = [...logoAndBgStartFields].concat(
  logoAndBgLoadingFields,
  logoAndBgExperienceFields,
  logoAndBgFotoFields,
  logoAndBgEndFields
);

export const fontAssetsFields = ["fontLoadingMain", "fontLoadingHeading"];

export const fontColorFields = ["colorFontMain", "colorFontSub"];

export const fontFields = [...fontAssetsFields, ...fontColorFields];

export const colorStartFields = ["colorStartScreenMain", "colorStartScreenSub"];

export const colorLoadingFields = [
  "colorLoadingScreenMain",
  "colorLoadingScreenSub",
];

export const colorExperienceFields = [
  "colorExperienceScreenMain",
  "colorExperienceScreenSub",
  "colorExperienceScreenHint",
];

export const colorFotoFields = ["colorFotoScreenMain", "colorFotoScreenSub"];

export const colorEndFields = ["colorEndScreenMain", "colorEndScreenSub"];

export const colorFields = [
  ...colorStartFields,
  ...colorLoadingFields,
  ...colorExperienceFields,
  ...colorFotoFields,
  ...colorEndFields,
];

export const avatarFields = ["imageExperienceScreenAvatar"];

export const layoutFields = ["projectExperienceLayout"];

export const informationFields = [
  "projectName",
  "projectUrl",
  "projectStatus",
  "projectType",
];
