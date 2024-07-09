import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/icon2.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import LoginPage from "./LoginPage";
import StudiosPage from "./StudiosPage";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInLeft ">
                Abadikan <br /> <span>Momen Berhargamu</span> <br />
                Bersama Kami!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInLeft ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae placeat voluptate, maiores ipsum est iure.</p>
              <button className="btn btn-dark -btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInLeft animate__delay-1s" onClick={() => navigate("/fotografer")}>
                Lihat Fotografer
              </button>
              <button className="btn btn-outline-dark -btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInLeft animate__delay-1s">Lihat Jasa Foto</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt5">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInRight animate__delay-1s" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Fotografer Terbaru</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="border border-dark shadow rounded" data-aos="fade-up" data-aos-duration="1100" data-aos-delay={kelas.delay} onClick={() => navigate("/detailproduct")}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-dark rounded-1">{kelas.buy}</button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" data-aos="fade-up" data-aos-duration="1100" onClick={() => navigate("/fotografer")}>
                Lihat Semua Fotografer <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                    <p className="desc">{data.desc}</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* { Section FAQ} */}
      <FaqComponent />
      {/* { Section FAQ} */}
    </div>
  );
};

export default HomePage;
