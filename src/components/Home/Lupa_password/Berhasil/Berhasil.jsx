import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import betul from "../../../../assets/betul.svg";

const Berhasil = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="tulisan" style={{ color: "#519251" }}>
        <h2 className="mt-5">Password</h2>
        <h2 className="mt-2">Update</h2>
      </div>
      <img src={betul} alt="" className="" />
      <p className="text-bold" style={{ color: "#519251" }}>
        Password Sudah Berhasil Di Update
      </p>
      <Button
        className="mt-5"
        variant="success"
        size="lg"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default Berhasil;
