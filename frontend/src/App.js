import "./index.css";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Footer from "./widgets/Footer/Footer";
import Header from "./widgets/Banner/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Piano from "./pages/Piano";
import Office from "./pages/Office";
import Phono from "./pages/Phono";
import Level from "./pages/Level";
import Teory from "./pages/Teory";
import OfficeLayout from "./pages/OfficeLayout";

export default function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <AppContent />
      </Router>
    </PrimeReactProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const shouldHideNavbar = location.pathname.startsWith("/office");

  const path = location.pathname;
  const shouldHideHeaderFooter =
    path.startsWith("/office") || path === "/login" || path === "/register";
  return (
    <>
      {!shouldHideNavbar && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/office" element={<OfficeLayout />}>
          <Route index element={<Office />} />
          <Route path="phono" element={<Phono />} />
          <Route path="phono/level" element={<Level />} />
          <Route path="phono/level/teory" element={<Teory />} />
        </Route>
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
