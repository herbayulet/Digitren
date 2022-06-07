import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import imail from "../../../../assets/imail.svg";

const Kirim = () => {
  const navigate = useNavigate();
  return (
    <Container className="container-sm dp-flex background-image" style={{ width: "438px", height: "844px" }}>
      <br />
      <br />
      <br />
      <br />
      <h2 className="mt-5">Lupa Password</h2>
      <p className="mt-3 text-muted">Masukan email mu untuk mengganti password</p>
      <Form className="mt-3">
        <Form.Group className="mb-3">
          <span>
            <Form.Control id="disabledTextInput" itemType="file" placeholder="email" style={{ height: "50px" }} />
          </span>
        </Form.Group>
        <Button
          type="submit"
          variant="success"
          className="text-bold fs-5 rounded-pill mt-2"
          style={{ width: "150px", height: "55px" }}
          onClick={() => {
            navigate("/terkirim");
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Kirim;
