import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InputForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formHawkId">
        <Form.Label>Hawk ID</Form.Label>
        <Form.Control type="text" placeholder="Enter Hawk ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formReceipt">
        <Form.Label>Receipt</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ backgroundColor: "#00664F", borderColor: "black" }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default InputForm;
