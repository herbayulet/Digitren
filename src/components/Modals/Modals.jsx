import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import panah from "../../assets/panahputih.svg";
import ceklis from "../../assets/check.svg";

const Modals = () => {
  const navigate = useNavigate();
  return (
    <>
      <Modal.Dialog>
        <Modal.Body>
          <img src={ceklis} alt="" />
          <p className="fs-4 text-light">Pembayaran Berhasil</p>
          <p>Nomor Transaksi 1777899086</p>
          <br />
          <br />
          <p>
            Wallet <span className="text-success">Rp 10.000</span>
          </p>
          <Button variant="success" onClick={() => navigate("/")}>
            <img src={panah} alt="" className="mr-3" />
            kembali ke Home
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default Modals;
