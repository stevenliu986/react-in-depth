import EmployeeCard, { Employee } from "./EmployeeCard.tsx";
import "./app.css";

function App() {
  const employees: Employee[] = [
    {
      name: "Wayne Campbell",
      title: "Host Extraordinaire",
      website: "https://extremepartytime.com",
    },
    {
      name: "Garth Algar",
      title: "Tech Wizard",
    },
  ];

  return (
    <>
      {employees.map((employee) => (
        <EmployeeCard item={employee} key={employee.name} />
      ))}
    </>
  );
}

export default App;
