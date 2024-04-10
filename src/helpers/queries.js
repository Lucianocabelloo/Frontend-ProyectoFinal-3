const URI_ROOM = import.meta.env.VITE_API_ROOM;

export const getRoomsAPI = async () => {
  try {
    const response = await fetch(URI_ROOM);
    console.log(response);
    return response;
  } catch (error) {
    console.error(
      "Se ha producido el siguiente error al intentar traer los cuartos",
      error
    );
  }
};

export const createRoomsAPI = async (newRoom) => {
  try {
    const response = await fetch(URI_ROOM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

export const deleteRoomAPI = async (id) => {
  try {
    const answer = await fetch(`${URI_ROOM}/${id}`, {
      method: "DELETE",
    });
    return answer;
  } catch (error) {
    console.error(
      `El siguiente error ocurrio al intentar borrar la habitacion: ${error}`
    );
  }
};
