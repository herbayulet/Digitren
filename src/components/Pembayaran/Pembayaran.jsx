import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pembayaran = () => {
  const [bayar, setBayar] = useState("");
  // const api = "http://192.168.0.109:8003/transfer/13";
  const navigate = useNavigate();

  return (
    <>
      <Container className="container-sm background-image dp-flex" style={{ width: "438px", height: "844px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="fs-3 text-success mb-5 ">Masukan Harga</Form.Label>
            <Form.Control className="fs-4 opacity-75" type="number" placeholder="nominal" onChange={(e) => setBayar(e.target.value)} style={{ height: "55px" }} />
          </Form.Group>
        </Form>
        <Button className="fs-5 mt-5" variant="success" style={{ width: "150px", height: "55px" }} onClick={() => navigate("/bill")}>
          Bayar
        </Button>
      </Container>
    </>
  );
};

export default Pembayaran;
