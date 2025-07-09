export interface IFile {
  url: string;
  id: string;
  business_type: FileBussinessType;
  entity_id: string;
  entity_type: FileEntityType;
}

export interface IFileRequest {
  base64: string;
  extension: FileExtension;
  entityType: FileEntityType;
  entityId: string;
  businessType: FileBussinessType;
  fileType: string;
}

export type IFileResponse = IFile & {};

export enum FileType {
  IMAGE = "image",
  PDF = "pdf",
}

export enum FileExtension {
  JPG = "JPG",
  JPEG = "JPEG",
  PNG = "PNG",
  PDF = "PDF",
  SVG = "SVG",
}

export enum FileEntityType {
  USER = "USER",
  GAME = "GAME",
  TEAM = "TEAM",
  BADGET = "BADGET",
  CHAMPIONSHIP = "CHAMPIONSHIP",
  AWARD = "AWARD",
  SETUP = "SETUP",
  TEAM_SPONSOR = 'TEAM_SPONSOR',

}

export enum FileBussinessType {
  USER_PROFILE_PHOTO = "USER_PROFILE_PHOTO",
  USER_PROFILE_BANNER = "USER_PROFILE_BANNER",
  TEAM_BANNER_PHOTO = "TEAM_BANNER_PHOTO",
  TEAM_PROFILE_PHOTO = "TEAM_PROFILE_PHOTO",
  GAMES_ICON = "GAMES_ICON",
  GAMES_IMAGE = "GAMES_IMAGE",
  BADGET_ICON = "BADGET_ICON",

  EVENT_BANNER = "EVENT_BANNER",
  CHAMPIONSHIP_BANNER = "CHAMPIONSHIP_BANNER",
  CHAMPIONSHIP_LOGO = "CHAMPIONSHIP_LOGO",
  CHAMPIONSHIP_CARD = "CHAMPIONSHIP_CARD",
  AWARD_ICON = "AWARD_ICON",
  SETUP_PHOTO = "SETUP_PHOTO",
  SPONSOR_LOGO = "SPONSOR_LOGO",
}

export type FileImageCropper = Omit<IFile, "id"> & {
  id?: string;
};
