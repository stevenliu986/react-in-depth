import EmployeeCard from "./EmployeeCard.tsx";
import "./app.css";

function App() {
  const item = { name: "John", title: "Mr" };
  return (
    <>
      <EmployeeCard item={item} />
    </>
  );
}

export default App;
