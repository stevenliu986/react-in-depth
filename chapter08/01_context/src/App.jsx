import { Things } from "./things";
import { DataProvider } from "./data/index.js";

function App() {
  return (
    <DataProvider>
      <h1>All my things</h1>
      <Things />
    </DataProvider>
  );
}

export default App;
