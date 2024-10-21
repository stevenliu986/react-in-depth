import "./app.css";
import AppointmentResponse from "./AppointmentResponse.tsx";

function App() {
  const user = {
    name: "John Doe",
    date: "2021-09-01",
  };
  return (
    <>
      <h1>Incoming Appointment</h1>

      <p>From: {user.name}</p>
      <p>Date: {user.date}</p>
      <AppointmentResponse onSubmit={console.log} />
    </>
  );
}

export default App;
