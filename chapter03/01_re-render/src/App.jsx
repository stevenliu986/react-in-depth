import { useState, useRef } from "react";
import Rerenderable from "./Rerenderable.jsx";

function RerenderWithoutPropsChange() {
  const [, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Click to re-render</button>
      <Rerenderable />
    </div>
  );
}

function NoRerenderWithPropsChange() {
  const count = useRef(0);
  return (
    <div>
      <button onClick={() => count.current++}>Click to re-render</button>
      <Rerenderable count={count.current} />
    </div>
  );
}

function App() {
  return (
    <main>
      <h4>Re-renders without changing properties</h4>
      <RerenderWithoutPropsChange />
      <h4>No re-renders with changing properties</h4>
      <NoRerenderWithPropsChange />
    </main>
  );
}

export default App;
