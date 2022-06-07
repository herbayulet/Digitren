import { Container, Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import panah from "../../assets/panah.svg";
import shop from "../../assets/Shop.svg";
import "./Bill.css";

const Bill = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm background-image dp-flex" style={{ width: "438px", height: "844px" }}>
      <span className="fs-4 text-success">
        <img src={panah} alt="" onClick={() => navigate("/")} /> Warung Makan Ijo, Bimomartani
      </span>
      <p className="mt-5 fs-4">Ringkasan Pembayaran</p>
      <p className="mt-5 fs-5 text-muted">
        Biaya <span className="ms-5">10000</span>
      </p>
      <hr className="text-muted mt-5" />
      <p className="mt-5 fs-5 ">
        Total Pembayaran <span className="ms-5 text-muted">10000</span>
      </p>
      <hr className="text-muted mt-5" />
      <img src={shop} alt="" className="float-end mb-3" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="text-center bg-dark rounded mt-5 pt-2 fs-5" style={{ color: "#fff", height: "45px" }}>
        Tunai jika saldo mu kurang
      </p>
      <Button variant="success" onClick={() => navigate("/pin")} className="mt-5 tombol">
        Konfirmasi Bayar
      </Button>
    </Container>
  );
};

export default Bill;
