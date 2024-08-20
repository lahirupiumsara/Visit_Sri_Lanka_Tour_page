import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>SRI LANAKA</span>
                </h5>
                <p className="sub_text">
                  Sri Lanka is a beautiful island nation in the Indian Ocean,
                  known for its lush landscapes, rich history, and vibrant
                  culture. A journey to Sri Lanka offers a mix of experiences,
                  from exploring ancient temples and fortresses to relaxing on
                  pristine beaches.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Sri Lanka is home to many beautiful places that offer a mix of
                  natural beauty, cultural heritage, and serene landscapes.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
