import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { handleSubmit } from "../api/api";

function InputForm() {
  // Input Fields
  const [hawkID, setHawkID] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [description, setDescription] = useState("");

  // form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Modal states

  const handleModalClose = () => {
    window.location.reload();
  };

  async function onSubmit(e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    try {
      await handleSubmit(hawkID, date, amount, receipt, description);
      setIsSuccess(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      {/* Success Modal */}
      <Modal show={isSuccess} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reimbursement Submitted!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="success" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
        {/* Error Modal  */}
      </Modal>
      <Modal show={isError} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There was an error with submitting your form. <br />
          Please try again later.
          <br />
          For immediate assistance please reach out to: <br />
          <b>Herkey:</b> 319-555-HAWK
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form */}
      <Form onSubmit={onSubmit}>
        {/* Hawk ID */}
        <Form.Group className="mb-3" controlId="formHawkId">
          <Form.Label>Hawk ID</Form.Label>
          <Form.Control
            type="text"
            value={hawkID}
            placeholder="Enter Hawk ID"
            onChange={(e) => setHawkID(e.target.value)}
            required
          />
        </Form.Group>

        {/* Date */}
        <Form.Group className="mb-3" controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        {/* Reimbursement Amount */}
        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Reimbursement Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              value={amount}
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </InputGroup>
        </Form.Group>
        {/* Receipt Upload */}
        <Form.Group className="mb-3" controlId="formReceipt">
          <Form.Label>Receipt</Form.Label>
          <Form.Control
            type="file"
            accept="image/*, .pdf"
            onChange={(e) => setReceipt(e.target.files[0])}
            required
          />
          <Form.Text className="text-muted">
            Upload a receipt image or PDF (max 5MB)
          </Form.Text>
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            placeholder="Enter a description of the expense"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button
          className="border-0"
          type="submit"
          style={{ backgroundColor: "#00664F" }}
          // disabled={isSubmitting || !hawkID || !date || !amount || !receipt}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputForm;
