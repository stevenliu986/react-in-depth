import { useState, useMemo } from "react";

function Employee({ employeeList }) {
  const [showTemp, setShowTemp] = useState(false);

  const filteredEmployeeList = useMemo(
    () =>
      employeeList.filter((employee) =>
        showTemp ? employee.isTemporary : true,
      ),
    [showTemp, employeeList],
  );
  return (
    <>
      <h1>Employee List</h1>
      <br />
      <label>
        <input type="checkbox" onChange={() => setShowTemp((v) => !v)} />
        Show temporary employees only?
      </label>

      <ul>
        {filteredEmployeeList.map((employee) => (
          <li key={employee.name}>
            {employee.name}: {employee.salary}
            {employee.isTemporary ? "(temp)" : null}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const employeeList = [
    { name: "Bugs Bunny", salary: "$20,000", isTemporary: false },
    { name: "Daffy Duck", salary: "$15,000", isTemporary: false },
    { name: "Porky Pig", salary: "$17,000", isTemporary: true },
    { name: "Elmer Fudd", salary: "$18,500", isTemporary: false },
    { name: "Wile E. Coyote", salary: "$21,000", isTemporary: false },
    { name: "Road Runner", salary: "$22,000", isTemporary: false },
    { name: "Tweety", salary: "$7,000", isTemporary: false },
    { name: "Sylvester", salary: "$59,000", isTemporary: false },
    { name: "Granny", salary: "$6,900", isTemporary: true },
    { name: "Yosemite Sam", salary: "$11,000", isTemporary: true },
    { name: "Tasmanian Devil", salary: "$12,000", isTemporary: true },
  ];

  return <Employee employeeList={employeeList} />;
}

export default App;
