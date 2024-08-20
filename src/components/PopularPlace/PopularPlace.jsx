import React from "react";
import "../PopularPlace/popular-place.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

import p8 from "../../assets/images/popular/p8.jpg";
import p1 from "../../assets/images/popular/p1.jpg";
import p2 from "../../assets/images/popular/p2.jpg";
import p3 from "../../assets/images/popular/p3.jpg";
import p4 from "../../assets/images/popular/p4.jpg";
import p5 from "../../assets/images/popular/p5.jpg";
import p6 from "../../assets/images/popular/p6.jpg";
import p7 from "../../assets/images/popular/p7.jpg";

const PopularPlace = () => {
  const populars = [
    {
      id: 0,
      tilte: "Discover Kithulgala",
      image: p1,
      location: "Kithulgala Sri Lanaka",
      category: ["River Cruise", "Wildlife"],
      days: "5 days - 4 nights",
      price: 100,
      afterDiscount: 92,
      rating: 3,
      reviews: 5,
    },
    {
      id: 1,
      tilte: "Diving Hikkaduwa",
      image: p2,
      location: "Hikkaduwa Sri Lanaka",
      category: ["Escorted Tour", "Tour & Cruise"],
      days: "2 days - 1 nights",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 2,
      tilte: "Adventure jungle camping",
      image: p3,
      location: "Wilpaththuwa Sri Lanka",
      category: ["Escorted Tour", "River Cruise"],
      days: "2 days - 1 nights",
      price: 87,
      afterDiscount: 82,
      rating: 4,
      reviews: 9,
    },
    {
      id: 3,
      tilte: "walking Ella",
      image: p4,
      location: "Ella Sri Lanka",
      category: ["River Cruise", "Rail Tour"],
      days: "unlimited",
      price: 434,
      afterDiscount: 0,
      rating: 5,
      reviews: 20,
    },
    {
      id: 4,
      tilte: "safari yala forest",
      image: p5,
      location: "Yala Sri Lanka",
      category: ["Wildlife", "Tour & Cruise"],
      days: "1 days - 9 hours",
      price: 395,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 5,
      tilte: "Fishing ",
      image: p6,
      location: "Jaffna Sri Lanka",
      category: ["Escorted Tour", "Rail Tour"],
      days: "5 days - 4 nights",
      price: 93,
      afterDiscount: 0,
      rating: 3,
      reviews: 12,
    },
    {
      id: 6,
      tilte: "journey with photagraphy",
      image: p7,
      location: "Nuwara Eliya Sri Lanaka",
      category: ["Escorted Tour", "Wildlife"],
      days: "1 day - 1 night",
      price: 42,
      afterDiscount: 0,
      rating: 5,
      reviews: 18,
    },
    {
      id: 7,
      tilte: "Serfing Arugambhe",
      image: p8,
      location: "Arugambhe Sri Lanka",
      category: ["Rail Tour", "Tour & Cruise"],
      days: "1 night",
      price: 99,
      afterDiscount: 0,
      rating: 4,
      reviews: 22,
    },
  ];

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
          {populars.map((val, inx) => {
            return (
              <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                <Card className="rounded-2 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={val.image}
                    className="img-fluid"
                    alt={"image"}
                  />
                  <Card.Body>
                    <Card.Text>
                      <i className="bi bi-geo-alt"></i>
                      <span className="text">{val.location}</span>
                    </Card.Text>
                    <Card.Title> {val.tilte} </Card.Title>
                    <p className="reviwe">
                      <span>
                        <i className="bi bi-star-fill me-1"></i>
                      </span>
                      <span>{val.rating} </span>
                      <span>( {val.reviews} reviews )</span>
                    </p>
                    {val.category.map((cat, index) => {
                      return (
                        <span
                          key={index}
                          className={cat.replace(/ .*/, "") + " badge"}
                        >
                          {cat}
                        </span>
                      );
                    })}
                  </Card.Body>

                  <Card.Footer className="py-4">
                    {val.afterDiscount ? (
                      <p className="text-decoration-line-through">
                        {" "}
                        ${val.price.toFixed(2)}
                      </p>
                    ) : (
                      ""
                    )}

                    <Stack
                      direction="horizontal"
                      className="justify-content-between  mt-3"
                    >
                      <p>
                        From{" "}
                        <b>
                          {val.afterDiscount
                            ? val.afterDiscount.toFixed(2)
                            : val.price.toFixed(2)}
                        </b>
                      </p>
                      <p>
                        <i className="bi bi-clock"></i> {val.days}
                      </p>
                    </Stack>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;
