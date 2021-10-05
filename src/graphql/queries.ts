/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIdentity = /* GraphQL */ `
  query GetIdentity {
    getIdentity
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!, $uid: ID!) {
    getProject(id: $id, uid: $uid) {
      colorEndScreenMain
      colorEndScreenSub
      colorExperienceScreenHint
      colorExperienceScreenMain
      colorExperienceScreenSub
      colorFontMain
      colorFontSub
      colorFotoScreenMain
      colorFotoScreenSub
      colorLoadingScreenMain
      colorLoadingScreenSub
      colorStartScreenMain
      colorStartScreenSub
      createdAt
      fontLoadingHeading
      fontLoadingMain
      id
      imageEndScreenBackground
      imageEndScreenLogo
      imageExperienceScreenAvatar
      imageExperienceScreenLogo
      imageFotoScreenScreenBackground
      imageFotoScreenScreenLogo
      imageLoadingScreenBackground
      imageLoadingScreenLogo
      imageStartScreenBackground
      imageStartScreenLogo
      layoutActiveEndScreenStatus
      layoutActiveExperienceScreenFotoFrameStatus
      layoutActiveExperienceScreenLogoStatus
      layoutActiveFotoScreenStatus
      layoutActiveLoadingScreenStatus
      layoutActiveStartScreenStatus
      linkEndScreenButtonOne
      linkEndScreenButtonThree
      linkEndScreenButtonTwo
      paymentIntentId
      projectExperienceLayout
      projectLink
      projectName
      projectStatus
      projectType
      projectUrl
      templateId
      textEndScreenButtonOne
      textEndScreenButtonThree
      textEndScreenButtonTwo
      textEndScreenStatus
      textExperienceScreenFotoFrameStatus
      textExperienceScreenHint
      textExperienceScreenImprintContent
      textExperienceScreenImprintHeading
      textExperienceScreenInstructionsContentOne
      textExperienceScreenInstructionsContentThree
      textExperienceScreenInstructionsContentTwo
      textExperienceScreenInstructionsHeading
      textExperienceScreenLogoStatus
      textFotoScreenHint
      textFotoScreenStatus
      textLoadingScreenHint
      textLoadingScreenStatus
      textStartScreenButton
      textStartScreenHeading
      textStartScreenStatus
      textStartScreenSubheading
      updatedAt
    }
  }
`;
export const getProjectTemplate = /* GraphQL */ `
  query GetProjectTemplate($id: ID!) {
    getProjectTemplate(id: $id) {
      colorEndScreenMain
      colorEndScreenSub
      colorExperienceScreenHint
      colorExperienceScreenMain
      colorExperienceScreenSub
      colorFontMain
      colorFontSub
      colorFotoScreenMain
      colorFotoScreenSub
      colorLoadingScreenMain
      colorLoadingScreenSub
      colorStartScreenMain
      colorStartScreenSub
      fontLoadingHeading
      fontLoadingMain
      id
      imageEndScreenBackground
      imageEndScreenLogo
      imageExperienceScreenAvatar
      imageExperienceScreenLogo
      imageFotoScreenScreenBackground
      imageFotoScreenScreenLogo
      imageLoadingScreenBackground
      imageLoadingScreenLogo
      imageStartScreenBackground
      imageStartScreenLogo
      linkEndScreenButtonOne
      linkEndScreenButtonThree
      linkEndScreenButtonTwo
      picture
      projectExperienceLayout
      projectLink
      projectName
      projectStatus
      projectType
      projectUrl
      textEndScreenButtonOne
      textEndScreenButtonThree
      textEndScreenButtonTwo
      textEndScreenStatus
      textExperienceScreenFotoFrameStatus
      textExperienceScreenHint
      textExperienceScreenImprintContent
      textExperienceScreenImprintHeading
      textExperienceScreenInstructionsContentOne
      textExperienceScreenInstructionsContentThree
      textExperienceScreenInstructionsContentTwo
      textExperienceScreenInstructionsHeading
      textExperienceScreenLogoStatus
      textFotoScreenHint
      textFotoScreenStatus
      textLoadingScreenHint
      textLoadingScreenStatus
      textStartScreenButton
      textStartScreenHeading
      textStartScreenStatus
      textStartScreenSubheading
      title
    }
  }
`;
export const getProjects = /* GraphQL */ `
  query GetProjects($id: ID!) {
    getProjects(id: $id) {
      colorEndScreenMain
      colorEndScreenSub
      colorExperienceScreenHint
      colorExperienceScreenMain
      colorExperienceScreenSub
      colorFontMain
      colorFontSub
      colorFotoScreenMain
      colorFotoScreenSub
      colorLoadingScreenMain
      colorLoadingScreenSub
      colorStartScreenMain
      colorStartScreenSub
      createdAt
      fontLoadingHeading
      fontLoadingMain
      id
      imageEndScreenBackground
      imageEndScreenLogo
      imageExperienceScreenAvatar
      imageExperienceScreenLogo
      imageFotoScreenScreenBackground
      imageFotoScreenScreenLogo
      imageLoadingScreenBackground
      imageLoadingScreenLogo
      imageStartScreenBackground
      imageStartScreenLogo
      layoutActiveEndScreenStatus
      layoutActiveExperienceScreenFotoFrameStatus
      layoutActiveExperienceScreenLogoStatus
      layoutActiveFotoScreenStatus
      layoutActiveLoadingScreenStatus
      layoutActiveStartScreenStatus
      linkEndScreenButtonOne
      linkEndScreenButtonThree
      linkEndScreenButtonTwo
      paymentIntentId
      projectExperienceLayout
      projectLink
      projectName
      projectStatus
      projectType
      projectUrl
      templateId
      textEndScreenButtonOne
      textEndScreenButtonThree
      textEndScreenButtonTwo
      textEndScreenStatus
      textExperienceScreenFotoFrameStatus
      textExperienceScreenHint
      textExperienceScreenImprintContent
      textExperienceScreenImprintHeading
      textExperienceScreenInstructionsContentOne
      textExperienceScreenInstructionsContentThree
      textExperienceScreenInstructionsContentTwo
      textExperienceScreenInstructionsHeading
      textExperienceScreenLogoStatus
      textFotoScreenHint
      textFotoScreenStatus
      textLoadingScreenHint
      textLoadingScreenStatus
      textStartScreenButton
      textStartScreenHeading
      textStartScreenStatus
      textStartScreenSubheading
      updatedAt
    }
  }
`;
export const getUploadURL = /* GraphQL */ `
  query GetUploadURL(
    $assetType: assetType!
    $fileType: fileType!
    $projectId: ID!
  ) {
    getUploadURL(
      assetType: $assetType
      fileType: $fileType
      projectId: $projectId
    )
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser {
    getUser {
      available_templates
      email
      id
      name
    }
  }
`;
export const listProjectTemplates = /* GraphQL */ `
  query ListProjectTemplates(
    $filter: TableProjectTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTemplates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        colorEndScreenMain
        colorEndScreenSub
        colorExperienceScreenHint
        colorExperienceScreenMain
        colorExperienceScreenSub
        colorFontMain
        colorFontSub
        colorFotoScreenMain
        colorFotoScreenSub
        colorLoadingScreenMain
        colorLoadingScreenSub
        colorStartScreenMain
        colorStartScreenSub
        fontLoadingHeading
        fontLoadingMain
        id
        imageEndScreenBackground
        imageEndScreenLogo
        imageExperienceScreenAvatar
        imageExperienceScreenLogo
        imageFotoScreenScreenBackground
        imageFotoScreenScreenLogo
        imageLoadingScreenBackground
        imageLoadingScreenLogo
        imageStartScreenBackground
        imageStartScreenLogo
        linkEndScreenButtonOne
        linkEndScreenButtonThree
        linkEndScreenButtonTwo
        picture
        projectExperienceLayout
        projectLink
        projectName
        projectStatus
        projectType
        projectUrl
        textEndScreenButtonOne
        textEndScreenButtonThree
        textEndScreenButtonTwo
        textEndScreenStatus
        textExperienceScreenFotoFrameStatus
        textExperienceScreenHint
        textExperienceScreenImprintContent
        textExperienceScreenImprintHeading
        textExperienceScreenInstructionsContentOne
        textExperienceScreenInstructionsContentThree
        textExperienceScreenInstructionsContentTwo
        textExperienceScreenInstructionsHeading
        textExperienceScreenLogoStatus
        textFotoScreenHint
        textFotoScreenStatus
        textLoadingScreenHint
        textLoadingScreenStatus
        textStartScreenButton
        textStartScreenHeading
        textStartScreenStatus
        textStartScreenSubheading
        title
      }
      nextToken
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: TableProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        colorEndScreenMain
        colorEndScreenSub
        colorExperienceScreenHint
        colorExperienceScreenMain
        colorExperienceScreenSub
        colorFontMain
        colorFontSub
        colorFotoScreenMain
        colorFotoScreenSub
        colorLoadingScreenMain
        colorLoadingScreenSub
        colorStartScreenMain
        colorStartScreenSub
        createdAt
        fontLoadingHeading
        fontLoadingMain
        id
        imageEndScreenBackground
        imageEndScreenLogo
        imageExperienceScreenAvatar
        imageExperienceScreenLogo
        imageFotoScreenScreenBackground
        imageFotoScreenScreenLogo
        imageLoadingScreenBackground
        imageLoadingScreenLogo
        imageStartScreenBackground
        imageStartScreenLogo
        layoutActiveEndScreenStatus
        layoutActiveExperienceScreenFotoFrameStatus
        layoutActiveExperienceScreenLogoStatus
        layoutActiveFotoScreenStatus
        layoutActiveLoadingScreenStatus
        layoutActiveStartScreenStatus
        linkEndScreenButtonOne
        linkEndScreenButtonThree
        linkEndScreenButtonTwo
        paymentIntentId
        projectExperienceLayout
        projectLink
        projectName
        projectStatus
        projectType
        projectUrl
        templateId
        textEndScreenButtonOne
        textEndScreenButtonThree
        textEndScreenButtonTwo
        textEndScreenStatus
        textExperienceScreenFotoFrameStatus
        textExperienceScreenHint
        textExperienceScreenImprintContent
        textExperienceScreenImprintHeading
        textExperienceScreenInstructionsContentOne
        textExperienceScreenInstructionsContentThree
        textExperienceScreenInstructionsContentTwo
        textExperienceScreenInstructionsHeading
        textExperienceScreenLogoStatus
        textFotoScreenHint
        textFotoScreenStatus
        textLoadingScreenHint
        textLoadingScreenStatus
        textStartScreenButton
        textStartScreenHeading
        textStartScreenStatus
        textStartScreenSubheading
        updatedAt
      }
      nextToken
    }
  }
`;
