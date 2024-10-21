export default function AppointmentResponse() {
  return (
    <>
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
