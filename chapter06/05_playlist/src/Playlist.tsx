import { ActionType, ISong } from "./types.ts";
import "./playlist.css";
import { useReorderable } from "./useReorderable.ts";
import PlaylistItem from "./PlaylistItem.tsx";
import { MouseEvent, useCallback } from "react";

interface IPlaylistProps {
  songs: ISong[];
}

function Playlist({ songs }: Readonly<IPlaylistProps>) {
  const [list, dispatch] = useReorderable(songs);
  const handleMove = useCallback(
    (index: number) => (evt: MouseEvent<HTMLButtonElement>) => {
      const type = evt.currentTarget.name as ActionType;
      dispatch({ type, index });
    },
    [dispatch],
  );
  return (
    <ol>
      {list.map((song: ISong, index: number) => (
        <PlaylistItem
          key={song.id}
          song={song}
          index={index}
          move={handleMove}
        />
      ))}
    </ol>
  );
}

export default Playlist;
