import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const RiwayatSewaStudio = () => {
  return (
    <div className="riwayat-page">
      <Container className="ticket-container">
        <Row className="ticket-row d-flex justify-content-between align-items-center">
          <Col className="ticket-details">
            <p>Id Pemesanan :</p>
            <h3 className="fw-bold">Ulisse Studio</h3>
            <p className="fw-semibold mb-2">Sewa Studio untuk waktu pada </p>
            <div className="d-flex gap-5">
              <span className="d-flex gap-3 text-dark">
                <i className="fa fa-building"></i>
                <p className="fw-semibold m-0">Ruang Studio </p>
              </span>
              <span className="d-flex gap-3 text-dark">
                <i className="fa fa-clock"></i>
                <p className="fw-semibold m-0">Durasi Sewa ? Jam</p>
              </span>
            </div>
            <span className="d-flex gap-3 mt-3">
              <i className="fa fa-check-circle"></i>
              <p className="fw-semibold text-uppercase">TIKET PEMESANAN </p>
            </span>
            <a href="/detail-ticket/<%= reservation.id %>" className="d-flex gap-3 text-dark">
              <i className="fa fa-info-circle"></i>
              <p className="fw-semibold m-0">Detail Tiket</p>
            </a>
          </Col>
          <Col>
            <img src="\src\assets\img\kelas\photo1.jpg" alt="" className="rounded-3 ticket-image text-right" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RiwayatSewaStudio;
