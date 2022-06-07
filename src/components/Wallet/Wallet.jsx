import React from "react";
import { Container } from "react-bootstrap";
// import Riwayat from "./Riwayat/Riwayat";
import Topup from "./Top_up/Topup";
import panah from "../../assets/panah.svg";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div>
      <Container className="container-sm dp-flex" style={{ width: "438px", height: "844px" }}>
        <img src={panah} alt="" />
        <span className="fs-3">wallet</span>
        <Container className="bg-success mx-auto dp-flex">
          <span className="rounded-0 bg-success">
            <p className="fs-4">Saldo</p>
            <p className="mb-3 fs-4">Rp 110.000</p>
            <img src="" alt="" className="rounded-3" width={30} height={45} />
          </span>
        </Container>
        <br />
        <p className="dp-flex text-start fs-5">Top up saldo</p>
        <p className="dp-flex text-end fs-5">
          <Link to={"/riwayat"}>Riwayat</Link>
        </p>
        <Topup />
      </Container>
    </div>
  );
};
export default Wallet;
