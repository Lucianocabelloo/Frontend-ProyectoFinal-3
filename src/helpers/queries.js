import Swal from "sweetalert2";

const URI_ROOM = import.meta.env.VITE_API_ROOM;

export const getRoomsAPI = async () => {
  try {
    const response = await fetch(URI_ROOM);
    return response;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const createRoomsAPI = async (newRoom) => {
  try {
    const response = await fetch(URI_ROOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioHotel")).token,
      },
      body: JSON.stringify(newRoom),
    });
    return response;
  } catch (error) {
    console.error(
      "Se ha producido el siguiente error al intentar crear una habitacion",
      error
    );
  }
};

export const editRoomAPI = async (room, id) => {
  try {
    const answer = await fetch(`${URI_ROOM}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioHotel")).token,
      },
      body: JSON.stringify(room),
    });
    return answer;
  } catch (error) {
    console.error(
      `El siguiente error ocurrio intentando editar la habitacion: ${error}`
    );
  }
};

export const deleteRoomAPI = async (id) => {
  try {
    const answer = await fetch(`${URI_ROOM}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioHotel")).token,
      },
    });
    return answer;
  } catch (error) {
    console.error(
      `El siguiente error ocurrio al intentar borrar la habitacion: ${error}`
    );
  }
};

export const getRoomById = async (id) => {
  try {
    const response = await fetch(`${URI_ROOM}/${id}`);
    return response;

  } catch (error) {
    console.error(error)
  }
}