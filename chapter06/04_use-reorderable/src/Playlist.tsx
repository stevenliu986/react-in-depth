import {
  BiSolidArrowToBottom as Bottom,
  BiSolidArrowToTop as Top,
  BiSolidDownArrowAlt as Down,
  BiSolidUpArrowAlt as Up,
} from "react-icons/bi";
import { useReorderable } from "./useReorderable.ts";
import "./playlist.css";

interface ISong {
  id: number;
  title: string;
  artist: string;
}

interface IPlaylistProps {
  songs: ISong[];
}

function Playlist({ songs }: Readonly<IPlaylistProps>) {
  const { list, moveUp, moveDown, moveToBottom, moveToTop } =
    useReorderable(songs);
  return (
    <ol>
      {list.map((song, index) => (
        <li key={song.id}>
          <span>{index + 1}</span>
          <p>
            <strong>{song.title}</strong> by <em>{song.artist}</em>
          </p>
          <button onClick={() => moveUp(index)}>
            <Up />
          </button>
          <button onClick={() => moveDown(index)}>
            <Down />
          </button>
          <button onClick={() => moveToTop(index)}>
            <Top />
          </button>
          <button onClick={() => moveToBottom(index)}>
            <Bottom />
          </button>
        </li>
      ))}
    </ol>
  );
}

export default Playlist;
