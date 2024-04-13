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
  faParking
);
import "./App.css";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/pages/Rooms";
import RoomForm from "./components/pages/rooms/RoomForm";
import Register from "./components/pages/register/Register";
import UserForm from "./components/pages/users/UserForm";
import Error404 from "./components/pages/error404/Error404";
import Login from "./components/pages/Login";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/common/Footer";
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/nosotros" element={<AboutUs></AboutUs>}></Route>
        <Route exact path="/habitaciones" element={<Rooms></Rooms>}></Route>
        <Route exact path="/registro" element={<Register />}></Route>
        <Route exact path="/contacto" element={<Contact />}></Route>
        <Route exact path="/galeria" element={<Gallery></Gallery>}></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={<RoomForm editar={false} titulo="Crear"></RoomForm>}
        ></Route>
        <Route
          path="/administrador/crearusuario"
          element={<UserForm editar={false} titulo="Crear"></UserForm>}
        ></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
