import chicken from "./chicken.svg";
import coffee from "./coffee.svg";
import nap from "./nap.svg";
import pill from "./pill.svg";
import wine from "./wine.svg";
import workout from "./workout.svg";

export interface RecordIcon {
  path: string;
  text: string;
}

const icons: RecordIcon[] = [
  { path: nap, text: "낮잠" },
  { path: workout, text: "운동" },
  { path: chicken, text: "야식" },
  {
    path: coffee,
    text: "커피",
  },
  { path: wine, text: "음주" },
  { path: pill, text: "보조제" },
];
export default icons;
