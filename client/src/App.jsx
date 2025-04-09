import React from "react";
import { Container } from "react-bootstrap";
import IowaNavbar from "./components/IowaNavbar";
import InputForm from "./components/InputForm";

const App = () => {
  return (
    <div>
      <IowaNavbar />
      <Container className="mt-4">
        <InputForm />
      </Container>
    </div>
  );
};

export default App;
