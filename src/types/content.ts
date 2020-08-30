export enum ContentType {
  Lecture = "Lecture",
  Audio = "Audio",
}

export interface Content {
  id: number;
  FNAME: string;
  TYPE: ContentType;
  CAT: string;
  FILE: string;
  playingTime: string;
  thumbnail: string;
  url: string;
}
