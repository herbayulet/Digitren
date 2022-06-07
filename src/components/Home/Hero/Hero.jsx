import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "react-bootstrap";
import bayar from "../../../assets/bayar.svg";
import saldo from "../../../assets/isisaldo.svg";
import transfer from "../../../assets/transfer.svg";
import wallet from "../../../assets/newwallet.svg";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <Container>
        <Row xs={3} md={2} className="g-4 dp-flex">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <span className="rounded-5" width={5} height={67}></span>
              <Card className="dp-flex mx-auto container-fluid mt-3" style={{ width: "24rem", height: "9rem", backgroundColor: "#4BDCCA" }}>
                <Card style={{ width: "8rem", height: "7rem", marginTop: "1rem" }} className="rounded">
                  <Card.Body>
                    <Card.Img variant="top" src={wallet} style={{ width: "2rem" }} className="me-2" />
                    <span className="me-auto">Wallet</span>
                    <p style={{ fontSize: "15px" }} className="me-3">
                      Rp 10.000
                    </p>
                    <p style={{ fontSize: "11px", color: "#5CA55C" }}>Riwayat transaksi</p>
                  </Card.Body>
                </Card>
                {/* <Row className="justify-content-md-center">
                  <Col xs={10} sm={4} md={4} className="dp-flex mx-auto"> */}
                <div className="rabmag">
                  <img src={bayar} alt="" className="rounded" style={{ width: "30px", height: "35px" }} onClick={() => navigate("/opsi")} />
                  {/* <p>bayar</p> */}
                  <img src={saldo} alt="" className="rounded" style={{ width: "30px", height: "35px" }} />
                  {/* <p>isi saldo</p> */}
                  <img src={transfer} alt="" className="rounded" style={{ width: "30px", height: "35px" }} />
                  {/* <p>transfer</p> */}
                </div>
                {/* </Col>
                </Row> */}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Hero;
