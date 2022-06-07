import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import spp from "../../../assets/spp.svg";
import gedung from "../../../assets/gedung.svg";
import books from "../../../assets/book.svg";

const Paymain = () => {
  return (
    <div>
      <Container className="container-sm dp-flex p-4" style={{ width: "438px", justifyContent: "center" }}>
        <img src={spp} alt="" className="rounded float-start" />
        <img src={gedung} alt="" className="rounded mx-auto" />
        <img src={books} alt="" className="rounded float-end" />
      </Container>
    </div>
  );
};

export default Paymain;
