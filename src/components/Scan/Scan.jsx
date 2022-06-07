import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import barcode from "../../assets/barcode.svg";
import garis from "../../assets/garis.svg";
import panah from "../../assets/panahitem.svg";
import petir from "../../assets/petir.svg";

const Scan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("No result");
  return (
    <>
      <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
        <span>
          <img
            src={panah}
            alt=""
            className="float-start mt-2"
            onClick={() => {
              navigate("/opsi");
            }}
          />
          <img src={petir} alt="" className="float-end mt-2" />
        </span>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />{" "}
        {/* <h3>Scan By Webcam Code: {scanHasilWebCam}</h3> */}
        <br />
        <span className="position-absolute top-50 start-50 translate-middle mt-4">
          <img src={garis} alt="" className="mt-5" />
          <br />
          <img src={barcode} alt="" className="mt-3" />
        </span>
        <br />
        <br />
        <br />
        <div className="id text-muted fs-5">
          <p className="mt-3">pakai</p>
          <p className="mt-2"> kode</p>
        </div>
        <>
          <Form.Label className="fs-4 text-bold mt-5">Masukan Nominal</Form.Label>
          <Form.Control type="number" id="inputPassword5" aria-describedby="passwordHelpBlock" className="mt-3 shadow p-3 mb-5 bg-body rounded" />
        </>
      </Container>
    </>
  );
};

export default Scan;
