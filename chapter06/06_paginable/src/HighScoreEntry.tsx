import { IEntry } from "./types.ts";
import "./highscore.css";

interface IEntryProps {
  item: IEntry;
  index: number;
}

function HighScoreEntry({ item, index }: Readonly<IEntryProps>) {
  return (
    <div className="highscore-entry">
      <p className="highscore-entry__pos">{index + 1}</p>
      <p className="highscore-entry__name">{item.name}</p>
      <p className="highscore-entry__points">
        {item.points.toLocaleString("en-US")} points
      </p>
    </div>
  );
}

export default HighScoreEntry;
