import React from "react";
import { Carousel } from "react-bootstrap";
import t1 from "../../../assets/t1.svg";
import t2 from "../../../assets/t2.svg";
import t3 from "../../../assets/t3.svg";

const Carousels = () => {
  return (
    <div>
      <Carousel className="mb-5">
        <Carousel.Item>
          <p className="fs-5">Antusias Santri</p>
          <img className="d-inline" src={t1} alt="First slide" style={{ width: "60%" }} />
        </Carousel.Item>
        <Carousel.Item>
          <p className="fs-5">Hari Santri</p>
          <img className="d-inline" src={t2} alt="Second slide" style={{ width: "60%" }} />
        </Carousel.Item>
        <Carousel.Item>
          <p className="fs-5">Santri Milenial</p>
          <img className="d-inline" src={t3} alt="Third slide" style={{ width: "60%" }} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
