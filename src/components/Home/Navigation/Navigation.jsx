import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import cewe from "../../../assets/img2.png";
import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="success" variant="dark" style={{ width: "438px", height: "45px", right: "12px" }} className="d-flex justify-content-around">
        <Container>
          <Nav className="mx-auto fs-5 mx-auto">
            <Nav.Link onClick={() => navigate("/")} color="fff" className="link">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/pembayaran")} color="fff" className="link">
              Pembayaran
            </Nav.Link>
            <Nav.Link href="#pricing" color="fff" className="link">
              Wallet
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <span className="fs-5 float-end">
        Hi! Hyung <img src={cewe} alt="" className="rounded-circle" style={{ width: "25px" }} />
      </span>
    </>
  );
};

export default Navigation;
