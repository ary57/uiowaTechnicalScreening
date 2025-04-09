import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ onSubmit }) => {
  return (
    <Button
      className="btn btn-primary px-4 py-2 rounded-pill"
      style={{
        backgroundColor: "#00664F",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#004F3A")} // darker shade of official uiowa color
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#00664F")} // official uiowa color
      onClick={onSubmit}
    >
      <h1>Submit</h1>
    </Button>
  );
};

export default SubmitButton;
