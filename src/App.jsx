import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/StudiosPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";
import TestimonialPage from "./pages/TestimonialPage";
import StudiosPage from "./pages/StudiosPage";
import DetailProduct from "./pages/DetailProduct";
import PemilihanDaftar from "./pages/PemilihanDaftar";
import DasboardAdmin from "./pages/adminpage/DasboardAdmin";
import KelolaStudio from "./pages/adminpage/KelolaStudio";
import RiwayatSewaStudio from "./pages/RiwayatSewaStudio";
import AddStudios from "./components/AddStudios";
import EditStudios from "./components/EditStudios";
import PemilihanLogin from "./pages/PemilihanLogin";
import RegisterOwnerPage from "./pages/RegisterOwner";
import LoginPageOwner from "./pages/LoginOwner";
import RootLayout from "./RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/fotografer" element={<StudiosPage />} />
          <Route path="/riwayatpemesanan" element={<RiwayatSewaStudio />} />
          <Route path="/syaratketen" element={<SyaratPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/detailproduct" element={<DetailProduct />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginowner" element={<LoginPageOwner />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/loginfor" element={<PemilihanLogin />} />
        <Route path="/registerowner" element={<RegisterOwnerPage />} />
        <Route path="/regisfor" element={<PemilihanDaftar />} />
        <Route path="/dashboardadmin" element={<DasboardAdmin />} />
        <Route path="/kelola" element={<KelolaStudio />} />
        <Route path="/add" element={<AddStudios />} />
        <Route path="/editstudio/:id" element={<EditStudios />} />
      </Routes>
    </>
  );
}

export default App;
