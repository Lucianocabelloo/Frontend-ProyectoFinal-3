import Swal from "sweetalert2";

const URI_Reservation = import.meta.env.VITE_API_RESERV;

export const getReservationsAPI = async () => {
  try {
    const response = await fetch(URI_Reservation);
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const getReservationByIdAPI = async (id) => {
  try {
    const response = await fetch(`${URI_Reservation}/${id}`);
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const getReservationByNumberAPI = async (number) => {
  try {
    const response = await fetch(`${URI_Reservation}/forroom/${number}`);
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const createReserveAPI = async (newReserve) => {
  try {
    const response = await fetch(URI_Reservation, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioHotel")).token,
      },
      body: JSON.stringify(newReserve),
    });
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const deleteReservationAPI = async (id) => {
  try {
    const response = await fetch(`${URI_Reservation}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioHotel")).token,
      },
    });
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};
