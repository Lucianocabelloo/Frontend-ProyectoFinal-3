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
