import Swal from "sweetalert2";

const URI_Reservation = import.meta.env.VITE_API_RESERV;

export const getReservations = async () => {
  try {
    const respuesta = await fetch(URI_Reservation);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const getReservationById = async (id) => {
  try {
    const respuesta = await fetch(`${URI_Reservation}/${id}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const getReservationByNumber = async (number) => {
  try {
    const respuesta = await fetch(`${URI_Reservation}/${number}`);
    return respuesta;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};
