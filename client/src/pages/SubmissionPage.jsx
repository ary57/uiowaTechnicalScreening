import React from "react";
import IowaNavbar from "../components/IowaNavbar";
import SubmitButton from "../components/SubmitButton";
import TextInputLabel from "../components/TextInputLabel";
import TextInputField from "../components/TextInputField";
import CalendarComponent from "../components/CalendarComponent";
import AttachFileField from "../components/AttachFileField";
import { Stack, Container, Row, Col } from "react-bootstrap";

function onSubmit() {
  // Handle the submit action here
  alert("Form submitted!");
}

const SubmissionPage = () => {
  return (
    <div>
      {/* Navbar */}
      <IowaNavbar />
      {/* Body */}
      <div style={{ backgroundColor: "#BBBCBC" }}>
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
          <div>
            {/* Hawk ID */}
            <Stack direction="horizontal" gap={3} className="my-3">
              <TextInputLabel text={"Hawk ID: "} />
              <TextInputField />
            </Stack>

            {/* Date */}
            <Stack direction="horizontal" gap={3} className="my-3">
              <TextInputLabel text={"Date: "} />
              <TextInputField />
            </Stack>

            {/* Receipt */}
            <Stack direction="horizontal" gap={3} className="my-3">
              <TextInputLabel text={"Receipt: "} />
              <AttachFileField />
            </Stack>

            {/* Submit Button */}
            <SubmitButton onSubmit={onSubmit} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SubmissionPage;
