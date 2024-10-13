import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleMode = () => setIsLoading((v) => !v);

  const style = {
    isLoading: {
      color: "red",
    },
    loaded: {
      color: "green",
    },
  };

  useEffect(() => {
    console.log("useEffect called.");
  }, []);
  return (
    <main>
      {isLoading ? (
        <h1 style={style.isLoading}>The page is loading, please wait.</h1>
      ) : (
        <h1 style={style.loaded}>Page is loaded.</h1>
      )}
      <button onClick={toggleMode}>模式切换</button>
    </main>
  );
}
