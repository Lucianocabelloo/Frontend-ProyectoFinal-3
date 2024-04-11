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