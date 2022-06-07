import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import konci from "../../../../assets/konci.svg";
import { useNavigate } from "react-router-dom";
import "./Gantipassword.css";

const Gantipassword = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
      <br />
      <br />
      <br />
      <br />
      <span className="image1">
        <img src={konci} alt="" className="mt-5" />
      </span>
      <p className="test1 mt-4 fs-5">Set password mu yang baru</p>
      <Form.Group className="mb-5 mt-5">
        <Form.Control placeholder="Password baru" style={{ height: "50px" }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Konfirmasi Password" style={{ height: "50px" }} />
      </Form.Group>
      <Button
        type="submit"
        variant="success"
        className="text-bold fs-5 rounded-pill mt-2 tombol"
        style={{ width: "150px", height: "55px" }}
        onClick={() => {
          navigate("/berhasil");
        }}
      >
        Update
      </Button>
    </Container>
  );
};

export default Gantipassword;
