import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { handleSubmit } from "../api/api";
import { useState } from "react";

function InputForm() {
  const [hawkID, setHawkID] = useState("");
  const [date, setDate] = useState(null);
  const [receipt, setReceipt] = useState(null);

  function onSubmit() {
    handleSubmit(hawkID, date, receipt);
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formHawkId">
        <Form.Label>Hawk ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Hawk ID"
          onChange={(e) => setHawkID(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={(e) => setDate(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formReceipt">
        <Form.Label>Receipt</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setReceipt(e.target.value)}
        />
      </Form.Group>

      <Button
        className="border-0"
        variant="primary"
        type="submit"
        style={{ backgroundColor: "#00664F" }}
        disabled={hawkID === "" || date === null || receipt === null}
      >
        Submit
      </Button>
    </Form>
  );
}

export default InputForm;
