import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddStudios = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const saveStudio = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/studio", {
        image,
        name,
        address,
        price: parseInt(price), // Pastikan harga dikirim sebagai angka
        description,
      });
      console.log("Studio saved successfully:", response.data);
      navigate("/kelola");
    } catch (error) {
      console.log("Terjadi kesalahan saat menyimpan studio:", error.response ? error.response.data : error.message);
      alert("Gagal menyimpan studio: " + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={saveStudio}>
            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Gambar</Form.Label>
              <Form.Control type="text" placeholder="Gambar" value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nama Studio</Form.Label>
              <Form.Control type="text" placeholder="Nama Studio" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" placeholder="Alamat" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" placeholder="Harga" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Deskripsi" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit">
              Simpan
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddStudios;
