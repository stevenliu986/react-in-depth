import { useEffect, useRef } from "react";

export default function Rerenderable() {
  const isFirst = useRef(true);

  useEffect(() => {
    isFirst.current = false;
  }, []);

  const style = {
    color: isFirst.current ? "red" : "blue",
  };

  const text = isFirst.current ? "First render" : "Not first render";

  return <p style={style}>{text}</p>;
}
