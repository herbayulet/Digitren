import React from "react";
import kanan from "../../../assets/kanan.svg";
// import { Link } from "react-router-dom";

const Topup = () => {
  return (
    <div>
      <span className="border rounded bg-secondary fs-3">
        Bank BSI
        <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        Bank BRI <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        Bank BCA <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        Indomaret
        <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        Alfamart
        <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        Gopay
        <img src={kanan} alt="" />
      </span>
      <br />
      <span className="border rounded bg-secondary fs-3">
        OVO
        <img src={kanan} alt="" />
      </span>
    </div>
  );
};

export default Topup;
