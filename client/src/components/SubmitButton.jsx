import React from "react";

const SubmitButton = ({ onSubmit }) => {
  return (
    <button
      type="button"
      class="btn btn-primary px-4 py-2"
      style={{
        backgroundColor: "#00664F",
        borderRadius: "50px",
      }}
      onClick={onSubmit}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
