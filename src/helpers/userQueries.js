const URI_USER = import.meta.env.VITE_API_USER;

export const readUsersAPI = async () => {
  try {
    const answer = await fetch(URI_USER);
    return answer;
  } catch (error) {
    console.error(
      `El siguiente error ocurrio al intentar obtener los usuarios: ${error}`
    );
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
    console.error(
      `El siguiente error ocurrio al intentar crear el usuario: ${error}`
    );
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
    console.log(error);
  }
}
