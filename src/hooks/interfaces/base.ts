import {IFileResponse} from "@/hooks/interfaces/file.interface";

export type BaseResponse<T> = {
  game_id: string | null;
  entity: T;
  files: IFileResponse[];
};

export type EntityResponse<T> = {
  entityId: string;
  entity: T;
  files: IFileResponse[];
};

export type PaginationResponse<T> = {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type BaseResponseBadget<T> = {
  data: T;
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};
