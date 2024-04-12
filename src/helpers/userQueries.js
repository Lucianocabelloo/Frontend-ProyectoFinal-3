import Swal from "sweetalert2";

const URI_USER = import.meta.env.VITE_API_USER;

export const readUsersAPI = async () => {
  try {
    const answer = await fetch(URI_USER);
    return answer;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const createUserAPI = async (user) => {
  try {
    const answer = await fetch(URI_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return answer;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
};

export const editUserAPI = async (user,id) => {
  try {
    const answer = await fetch(`${URI_USER}/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return answer;

  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
}

export const login = async (user) =>{
  try {
    const answer = await fetch(URI_USER,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    return answer;
  } catch (error) {
    Swal.fire({
      title: "Servicio no disponible momentaneamente",
      text: `Sucedio el error "${error}", intentelo nuevamente en unos minutos`,
      icon: "error",
    });
  }
}
