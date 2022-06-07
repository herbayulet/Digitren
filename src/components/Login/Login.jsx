import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "../Home/Home";
import krapyak from "../../assets/logokrapyak.svg";
import "./Login.css";

// import "./Login.css";

export default function Login() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  });

  async function postTemplate() {
    let post = {
      user_name: username,
      user_password: password,
    };
    try {
      const hasil = await axios.post(`http://192.168.1.48:8001/login/2/3`, post);
      console.log("berhasil", hasil);

      localStorage.setItem("group_unit_nama", JSON.stringify(hasil.data["data"]["group"]["group_unit_nama"]));
      localStorage.setItem("user_nama", JSON.stringify(hasil.data["data"]["user"]["user_nama"]));
      let result = hasil.data["data"]["user_nama"];
      console.log(result);
      if (result === 1) {
        // history.push(<Home />);
        console.log("LOGGED IN");
      } else {
        console.log("pilih group");
      }
    } catch (error) {
      console.log("gamasuk", error);
    }
  }

  console.log(username);
  console.log(password);

  return (
    <>
      <Container className="container-sm dp-flex" style={{ width: "438px", height: "844px" }}>
        <Container className="logo">
          <div className="bg-image">
            <img src={krapyak} alt="krapyak" className="mt-5" />
            <p className="text-left mt-3 fs-5" color="#ffffff">
              Krapyak <span className="fs-5 text-left">by Digitren</span>
            </p>
          </div>
        </Container>
        <Form className="input">
          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label className="float-start fs-4">ID Santri</Form.Label>
            <Form.Control type="text" placeholder="123456789" onChange={(e) => setUsername(e.target.value)} style={{ height: "55px" }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="float-start fs-4">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ height: "55px" }} />
          </Form.Group>
        </Form>
        <p
          className="text-end me-2 text-muted cursor-help"
          onClick={() => {
            history("/kirim");
          }}
        >
          Lupa password?
        </p>
        <Button
          variant="success"
          onClick={() => {
            history("/");
            postTemplate();
          }}
          style={{ height: "55px", width: "115px", fontSize: "23px" }}
        >
          LOGIN
        </Button>
      </Container>
    </>
  );
}
