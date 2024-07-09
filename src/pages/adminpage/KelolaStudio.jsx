import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Breadcrumb, Table, Modal, Button } from "react-bootstrap";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBar from "../../components/SideBar";
import AddStudios from "../../components/AddStudios";
import EditStudios from "../../components/EditStudios";

const KelolaStudio = () => {
  const [studios, setStudio] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState(null);

  useEffect(() => {
    getStudios();
  }, []);

  const getStudios = async () => {
    try {
      const response = await axios.get("http://localhost:5000/studio");
      setStudio(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddShow = () => setShowAddModal(true);
  const handleAddClose = () => setShowAddModal(false);

  const handleEditShow = (studio) => {
    setSelectedStudio(studio);
    setShowEditModal(true);
  };
  const handleEditClose = () => setShowEditModal(false);

  const deleteStudio = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/studio/${id}`);
      getStudios();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="kelola-studio">
      <HeaderAdmin />
      <SideBar />
      <Container>
        <Row>
          <Col md={{ span: 9, offset: 3 }} className="mt-5">
            <div className="pagetitle mt-5">
              <h4>Kelola Studio</h4>
              <Breadcrumb>
                <Breadcrumb.Item href="#" style={{ textDecoration: "none" }}>
                  Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item active>kelola studio</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 9, offset: 3 }} className="mt-5 py-2" style={{ backgroundColor: "#ffffff", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
              <h5 className="fw-bold">Daftar Studio</h5>
              <Button className="btn btn-outline-light" onClick={handleAddShow}>
                <i className="fa-solid fa-plus fa-fade me-2"></i>Buat Studio Baru
              </Button>
            </div>
            <p className="mt-2">
              All Studio available will be display in the table and only Admin/Owner Studio can running command
              <a href="#" target="_blank">
                Create, Read, Update, and Delete
              </a>{" "}
              for the data of <code>Studio</code>
            </p>
            <Table hover size="min-vh-200 mt-5">
              <thead>
                <tr className="fw-bold">
                  <th>Gambar</th>
                  <th>Nama Studio</th>
                  <th>Alamat</th>
                  <th>Harga</th>
                  <th>Deskripsi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {studios.map((studio, index) => (
                  <tr key={index}>
                    <td>{studio.image}</td>
                    <td>{studio.name}</td>
                    <td>{studio.address}</td>
                    <td>{studio.price}</td>
                    <td style={{ maxWidth: "200px" }}>{studio.description}</td>
                    <td className="col-lg-1">
                      <div className="d-flex flex-column gap-2">
                        <Button type="button" className="btn btn-secondary">
                          <i className="fa-solid fa-eye"></i>
                        </Button>
                        <Button type="button" className="btn btn-info" onClick={() => handleEditShow(studio)}>
                          <i className="fa-solid fa-pen-to-square" style={{ color: "white" }}></i>
                        </Button>
                        <Button onClick={() => deleteStudio(studio.id)} type="button" className="btn btn-danger">
                          <i className="fa fa-trash"></i>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal show={showAddModal} onHide={handleAddClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Buat Studio Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddStudios />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={handleEditClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Edit Studio</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedStudio && <EditStudios studio={selectedStudio} onClose={handleEditClose} />}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default KelolaStudio;
