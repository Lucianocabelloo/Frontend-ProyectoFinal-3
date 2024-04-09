import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Rooms from "./components/pages/Rooms";

function App() {
  return (
    <>
      <Menu />
      <Rooms></Rooms>
    </>
  );
}

export default App;
