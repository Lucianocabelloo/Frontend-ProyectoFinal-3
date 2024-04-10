import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/pages/Rooms";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Gallery></Gallery>}></Route>
        <Route path="/nosotros" element={<AboutUs></AboutUs>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
      </Routes>
    </BrowserRouter>
      <Rooms></Rooms>
    </>
  );
}

export default App;
