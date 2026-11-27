import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/images/slider1.png";
import slider4 from "../../assets/images/slider4.png";
import prod3 from "../../assets/images/prod3.png";
import prod4 from "../../assets/images/prod4.png";

export const CarsoulComponent = () => {
  const [index, setIndex] = useState(0);
  const interval = 1000;
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="text-center" interval={interval}>
        <img
          src={slider1}
          className="d-block m-auto carousel-img"
          text="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center" interval={interval}>
        <img
          src={slider4}
          className="d-block m-auto carousel-img"
          text="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="text-center" interval={interval}>
        <img
          src={prod3}
          className="d-block m-auto carousel-img"
          text="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="text-center" interval={interval}>
        <img
          src={prod4}
          className="d-block m-auto carousel-img"
          text="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
