import { useState } from "react";

interface IAppointmentResponseProps {
  onSubmit: (data: { isAccepted: boolean; message: string }) => void;
}

export default function AppointmentResponse({
  onSubmit,
}: IAppointmentResponseProps) {
  const [isAccepted, setIsAccepted] = useState<null | boolean>(null);
  const [message, setMessage] = useState<string>("");
  const canSubmit = typeof isAccepted === "boolean";
  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        width: "300px",
      }}
    >
      <legend>Appointment Response</legend>
      <div>
        <label>
          <input
            type="radio"
            checked={isAccepted === true}
            onChange={() => setIsAccepted(true)}
          />{" "}
          Accepted
        </label>
        <label>
          <input
            type="radio"
            checked={isAccepted === false}
            onChange={() => setIsAccepted(false)}
          />{" "}
          Declined
        </label>
      </div>

      <label>
        Optional Messages:{" "}
        <input
          type="text"
          value={message}
          placeholder="Message"
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button
        disabled={!canSubmit}
        onClick={() => canSubmit && onSubmit({ isAccepted, message })}
      >
        Submit
      </button>
    </fieldset>
  );
}
