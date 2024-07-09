import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { useState } from "react";

function HeaderAdmin() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const ProfileMenu = () => (
    <span onClick={handleDropdownToggle} className="profile-menu">
      <img src="\src\assets\img\testimonial\people-1.jpg" alt="Profile" style={{ borderRadius: "50%", marginRight: "8px", maxWidth: "30px" }} />
      John Doe
    </span>
  );

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "white", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <Container>
        <Navbar.Brand href="#home" className="fs-4 fw-bold">
          Studiobook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="ms-auto text-center align-item-center me-2">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <div style={{ position: "relative", marginRight: "10px" }}>
              <input type="text" placeholder="Search" className="form-control mr-sm-2" />
              <i className="fa fa-search" style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} />
            </div>
            <Dropdown alignRight show={showDropdown} onToggle={handleDropdownToggle}>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <ProfileMenu />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">Another action</Dropdown.Item>
                <Dropdown.Item href="#action/3.3">Something</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderAdmin;
