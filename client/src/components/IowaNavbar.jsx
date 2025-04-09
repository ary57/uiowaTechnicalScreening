import React from "react";
import IowaLogo from "../assets/Block-IOWA-BLACK.png";

const IowaNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-4  "
      style={{ backgroundColor: "#FFCD00" }}
    >
      <a className="navbar-brand" href="#">
        <img
          src={IowaLogo}
          width={120}
          height="auto"
          alt="University of Iowa Logo"
          style={{ maxHeight: "67.5px" }}
        />
        <span className="fw-bold ms-3" style={{ fontSize: "1.25rem" }}>
          University of Iowa Reimbursement Portal
        </span>
      </a>
    </nav>
  );
};

export default IowaNavbar;
