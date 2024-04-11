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
import Register from "./components/pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/nosotros" element={<AboutUs></AboutUs>}></Route>
        <Route path="/habitaciones" element={<Rooms></Rooms>}></Route>
        <Route exact path="/registro" element={<Register />}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          path="/administrador/crear"
          element={<RoomForm editar={false} titulo="Crear"></RoomForm>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
