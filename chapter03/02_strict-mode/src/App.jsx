import { useState, useRef, useEffect } from "react";

function App() {
  return (
    <main>
      <h4>Re-renders without changing properties</h4>
      <h4>No re-renders with changing properties</h4>
    </main>
  );
}

export default App;
