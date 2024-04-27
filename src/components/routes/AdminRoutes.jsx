import { Routes, Route } from "react-router-dom";
import Administrator from "../pages/Administrator";
import RoomForm from "../pages/rooms/RoomForm";
import UserForm from "../pages/users/UserForm";
import CalendarApp from "../pages/calendar/CalendarApp";
import ReservationAdminForm from "../pages/reserve/ReservationAdminForm";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/calendario/:numero"
          element={<CalendarApp admin={true}></CalendarApp>}
        ></Route>
        <Route
          exact
          path="/calendario"
          element={<CalendarApp allReserve={true}></CalendarApp>}
        ></Route>
        <Route exact path="/" element={<Administrator></Administrator>}></Route>
        <Route
          exact
          path="/crear"
          element={<RoomForm editar={false} titulo="Crear"></RoomForm>}
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={<RoomForm editar={true} titulo="Editar"></RoomForm>}
        ></Route>
        <Route
          exact
          path="/crear-usuario"
          element={<UserForm editar={false} titulo="Crear"></UserForm>}
        ></Route>
        <Route
          exact
          path="/editar-usuario/:id"
          element={<UserForm editar={true} titulo="Editar"></UserForm>}
        ></Route>
        <Route
          exact
          path="/crear-reserva"
          element={<ReservationAdminForm titulo="Crear" editar={false}></ReservationAdminForm>}
        ></Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
