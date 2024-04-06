import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";

function App() {
  return (
    <>
      <Menu />
      <Administrador></Administrador>
      <Footer />
    </>
  );
}

export default App;
