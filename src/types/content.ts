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

export interface Record {
  id: number,
  date: string,
  readyAt: string,
  startAt: string,
  endAt: string,
  finishAt: string,
  sleepDuration: string,
  value: number,
  opt1Cafe: boolean,
  opt2Nap: boolean,
  opt3Work: boolean,
  opt4Snack: boolean,
  opt5Ach: boolean,
  opt6Med: boolean,
}
