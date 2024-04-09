const URI_ROOM = import.meta.env.VITE_API_ROOM;

export const getRoomsAPI = async () =>{
    try {
        const response = await fetch(URI_ROOM)
        console.log(response)
        return response
    } catch (error) {
        console.error("Se ha producido el siguiente error al intentar traer los cuartos", error)
    }
}
