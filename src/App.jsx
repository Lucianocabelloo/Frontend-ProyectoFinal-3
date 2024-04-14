import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Home from "./components/pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faWaterLadder,
  faWifi,
  faUtensils,
  faDumbbell,
  faConciergeBell,
  faSnowflake,
  faTv,
  faParking,
  faBed,
  faUser,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(
  faWaterLadder,
  faWifi,
  faUtensils,
  faDumbbell,
  faConciergeBell,
  faSnowflake,
  faTv,
  faParking,
  faBed,
  faUser,
  faClock
);
import "./App.css";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/pages/Rooms";
import Register from "./components/pages/register/Register";
import Error404 from "./components/pages/error404/Error404";
import Login from "./components/pages/Login";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/common/Footer";
import DetailsRoom from "./components/pages/DetailsRoom";
import CalendarApp from "./components/pages/calendar/CalendarApp";
import Administrator from "./components/pages/Administrator";
import { useState } from "react";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import AdminRoutes from "./components/routes/AdminRoutes";

function App() {
  const user = JSON.parse(sessionStorage.getItem("usuarioHotel")) || {};
  const [userLoggedIn, setUserLoggedIn] = useState(user);

  return (
    <>
      <BrowserRouter>
        <Menu userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/nosotros" element={<AboutUs></AboutUs>}></Route>
          <Route
            exact
            path="/iniciar-sesion"
            element={<Login setUserLoggedIn={setUserLoggedIn}></Login>}
          ></Route>
          <Route
            exact
            path="/detalle-habitacion/:id"
            element={<DetailsRoom></DetailsRoom>}
          ></Route>
          <Route exact path="/habitaciones" element={<Rooms></Rooms>}></Route>
          <Route exact path="/registro" element={<Register />}></Route>
          <Route exact path="/contacto" element={<Contact />}></Route>
          <Route exact path="/galeria" element={<Gallery></Gallery>}></Route>
          {/* <Route
            exact
            path="/calendario/:numero/:id"
            element={<CalendarApp admin={false}></CalendarApp>}
          ></Route> */}
          <Route
            exact
            path="/administrador/*"
            element={
              <ProtectedRoutes>
                <AdminRoutes></AdminRoutes>
              </ProtectedRoutes>
            }
          ></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
