import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {} from "react-router-dom";
import BookingForm from "../components/Booking";

const DetailProduct = ({ studio, user }) => {
  const [duration, setDuration] = useState(0);
  const [room, setRoom] = useState("");
  const [rentDate, setRentDate] = useState("");

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleRentDateChange = (e) => {
    setRentDate(e.target.value);
  };

  const handleClick = () => {
    // Lakukan sesuatu saat tombol diklik
  };
  return (
    <div className="detailproduct">
      <div className="detailproduct-page">
        <Container className="mt-5 w-100">
          <Row>
            <Col className="text-center">
              <h1 className="text-center fw-bold">Detail </h1>
              <p className="text-center">Lorem ipsum dolor sit amet.</p>
              <img src="./src/assets/img/kelas/photo1.jpg" alt="" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={7}>
              <h4 className="fw-bold">Deskripsi Product</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita minima iure assumenda nulla, laboriosam neque et sed nisi sint dignissimos rem amet error voluptatem perspiciatis quasi ipsa id ullam. Enim eveniet,
                exercitationem cupiditate accusantium fuga obcaecati laboriosam pariatur. Totam, nisi? Voluptate veritatis veniam voluptatem omnis quae voluptates, quas nihil quo nostrum inventore nam ex! Necessitatibus, et magnam facilis,
                a nam animi blanditiis placeat ducimus voluptas tempore beatae eveniet alias? Ducimus, veniam soluta debitis ullam, temporibus reiciendis quasi doloremque quo aliquid, omnis excepturi. Rem, iste delectus, explicabo ea minima
                assumenda earum debitis maxime incidunt, dignissimos numquam sapiente nobis molestias neque.
              </p>
              <div className="row pe-4 mt-5">
                <div className="col-lg-12">
                  <ul className="d-flex flex-wrap gap-4 text-center">
                    <li>
                      <i className="fa-solid fa-car"></i>
                      <p className="fw-medium text-dark mt-2">
                        Free <span className="fw-light opacity-75">Parking</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-wifi"></i>
                      <p className="fw-medium text-dark mt-2">
                        10+ <span className="fw-light opacity-75">Mbps/s</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-air-conditioner text-center"></i>
                      <p className="fw-medium text-dark mt-2">
                        <span className="fw-light opacity-75">AC</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-mug-saucer"></i>
                      <p className="fw-medium text-dark mt-2">
                        Free <span className="fw-light opacity-75">Drinks</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-toilet"></i>
                      <p className="fw-medium text-dark mt-2">
                        Free <span className="fw-light opacity-75">Toilet</span>
                      </p>
                    </li>
                    <li>
                      <i className="fa-solid fa-user-tie"></i>
                      <p className="fw-medium text-dark mt-2">
                        100% <span className="fw-light opacity-75">Professional</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="box-payment">
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DetailProduct;
