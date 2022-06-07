import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navigation from "../Navbar/Navigation";
import Hero from "./Hero/Hero";
import Paymain from "./Main_fitur/Paymain";
import wallet from "../../assets/walletbawah.svg";
import Navigation from "./Navigation/Navigation";
import Carousels from "./Carousels/Carousels";

const Home = () => {
  return (
    <>
      <Container className="container-sm dp-flex" style={{ width: "438px", height: "844px" }}>
        <Navigation />
        <br />
        <Hero />
        <br />
        <Paymain />
        <Carousels />
        <img src={wallet} alt="" />
        {/* <h1>HOME PAGE</h1> */}
      </Container>
    </>
  );
};

export default Home;
