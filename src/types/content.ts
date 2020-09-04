export enum ContentType {
  Lecture = "lecture",
  Audio = "audio",
}

export interface Content {
  id: number;
  FNAME: string;
  TITLE: string;
  COMMENT1: string;
  COMMENT2: string;
  TYPE: ContentType;
  CAT: string;
  FILE: string;
  playingTime: string;
  thumbnail: string;
  url: string;
}
