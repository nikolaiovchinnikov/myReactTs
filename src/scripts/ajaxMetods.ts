export const getRespons = async (url:string) => {
    
    const response = await fetch(
        url, 
        {
        method: 'GET',
        headers: {
            'X-API-KEY': process.env.REACT_APP_NOT_SECRET_CODE?? " ",
            'Content-Type': 'application/json',
        },})
        const objectFilms = await response.json()
        return objectFilms
    }