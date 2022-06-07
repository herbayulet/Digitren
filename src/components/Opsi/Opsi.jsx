import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import panah from "../../assets/panah.svg";

const Opsi = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
      <span className="fs-4 text-success float-start">
        <img src={panah} alt="" onClick={() => navigate("/")} />
      </span>
      <h2 className="mt-2 ">Opsi Pembayaran</h2>
      <Button variant="success" onClick={() => navigate("/scan")} className="mt-5 p-4 fs-5" style={{ width: "168px", height: "80px" }}>
        Scan QR
      </Button>
      <br />
      <Button variant="success" onClick={() => navigate("/pembayaran")} className="mt-5 p-4 fs-5">
        Bayar Manual
      </Button>
    </Container>
  );
};

export default Opsi;
