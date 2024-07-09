import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  let navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    alert("You have been logged out."); // Menampilkan alert saat logout
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs-4 fw-bold">
            Studiobook.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              {isLoggedIn ? (
                <>
                  <button className="btn btn-outline-dark rounded-1" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-dark rounded-1 me-2 mb-xs-0" onClick={() => navigate("/regisfor")}>
                    Daftar
                  </button>
                  <button className="btn btn-outline-dark rounded-1" onClick={() => navigate("/loginfor")}>
                    Login
                  </button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
