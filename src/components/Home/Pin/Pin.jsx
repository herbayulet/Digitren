import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Pin.css";

const SomeComponent = ({ n, setPin }) => {
  return (
    <>
      <Button variant="outline-success" onClick={setPin}>
        {n}
      </Button>
      {/* <h1>{n}</h1> */}
    </>
  );
};

const Pin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState([]);

  const length = new Array(10).fill(undefined).map((_, index) => index);

  const getPin = (pinNumber) => {
    setPin([...pin, pinNumber]);
  };
  console.log(pin.toString().replace(/,/g, ""));

  return (
    <>
      <Container className="container-sm background-image dp-flex" style={{ width: "438px", height: "844px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-5">Masukan PIN:</Form.Label>
            <Form.Control type="password" placeholder="123456789" value={pin.toString().replace(/,/g, "")} onChange={(e) => setPin(e.target.value)} className="mb-5 opacity-50" />
          </Form.Group>
          <Card style={{ width: "12rem", marginBottom: "10px" }} className="position-absolute start-50 translate-middle mt-5 opacity-50">
            <Card.Body>
              {length.map((_, index) => (
                <>
                  <SomeComponent n={index} setPin={() => getPin(index)} />
                </>
              ))}
            </Card.Body>
          </Card>
        </Form>
        <br />
        <br />
        <br />
        <br />
        <Button variant="success" type="submit" onClick={() => navigate("/modal")} className="mt-5 fs-5">
          submit
        </Button>{" "}
      </Container>
    </>
  );
};

export default Pin;
