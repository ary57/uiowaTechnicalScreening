import React from "react";
import IowaNavbar from "../components/IowaNavbar";
import SubmitButton from "../components/SubmitButton";

function onSubmit() {
  // Handle the submit action here
  alert("Form submitted!");
}

const SubmissionPage = () => {
  return (
    <div>
      <IowaNavbar />
      <SubmitButton onSubmit={onSubmit} />
    </div>
  );
};

export default SubmissionPage;
