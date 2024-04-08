import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Gallery from "./components/pages/gallery/Gallery";

function App() {
  return (
    <>
      <Menu />
      <Gallery/>
      <Footer />
    </>
  );
}

export default App;
