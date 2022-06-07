import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Pembayaran from "../Pembayaran/Pembayaran";
import Wallet from "../Wallet/Wallet";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="bg-success">
          <Nav className="me-auto">
            <Nav.Link href={Home}>Beranda</Nav.Link>
            <Nav.Link href={Pembayaran}>Pembayaran</Nav.Link>
            <Nav.Link href={Wallet}>Wallet</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
