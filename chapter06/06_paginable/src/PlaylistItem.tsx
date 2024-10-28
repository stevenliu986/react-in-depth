import {
  BiSolidArrowToBottom as Last,
  BiSolidArrowToTop as First,
  BiSolidDownArrowAlt as Down,
  BiSolidUpArrowAlt as Up,
} from "react-icons/bi";
import { ISong } from "./types";
import { memo, MouseEvent } from "react";

interface IPlaylistItemProps {
  song: ISong;
  index: number;
  move: (index: number) => (evt: MouseEvent<HTMLButtonElement>) => void;
}

const PlaylistItem = memo(function PlaylistItem({
  song,
  index,
  move,
}: IPlaylistItemProps) {
  const onClick = move(index);
  return (
    <li>
      <span>{index + 1}</span>
      <p>
        <strong>{song.title}</strong> by <em>{song.artist}</em>
      </p>
      <button name="up" onClick={onClick}>
        <Up />
      </button>
      <button name="down" onClick={onClick}>
        <Down />
      </button>
      <button name="first" onClick={onClick}>
        <First />
      </button>
      <button name="last" onClick={onClick}>
        <Last />
      </button>
    </li>
  );
});

export default PlaylistItem;
