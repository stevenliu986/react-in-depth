import "./app.css";

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
      <div>
        <label>
          <input type="radio" /> Accepted
        </label>
        <label>
          <input type="radio" /> Declined
        </label>
      </div>

      <label>
        Optional Messages:
        <input type="text" />
      </label>
    </>
  );
}

export default App;
