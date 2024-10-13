import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>Re-renders without changing properties</h4>
      <h4>No re-renders with changing properties</h4>
    </>
  );
}

export default App;
