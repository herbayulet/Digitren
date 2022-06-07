import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import email from "../../../../assets/email.svg";
import "./Terkirim.css";

const Terkirim = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
      <br />
      <br />
      <br />
      <br />
      <span className="gambar">
        <img src={email} alt="" className="mt-5" />
      </span>
      <br />
      <p className="tulisan fs-5">Mohon cek email mu</p>
      <p className="tulisan fs-5">untuk konfimasi ganti password</p>
      <Button
        type="submit"
        variant="success"
        className="text-bold fs-5 rounded-pill mt-2 tombol"
        style={{ width: "150px", height: "55px" }}
        onClick={() => {
          navigate("/gantipassword");
        }}
      >
        OK
      </Button>
    </Container>
  );
};

export default Terkirim;
