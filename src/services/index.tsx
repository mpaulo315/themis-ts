import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const X_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchListByURL = async (url: string) => {
    // const response = await axios.get(`${BASE_URL}/${endpoint}`, {
    const response = await axios.get(url, {
        headers: {
            "x-api-key": X_API_KEY,
        },
    });

    if (response.status != 200) {   
        console.log("Status: ", response.status)
        console.log(response.data)
        throw new Error(`Erro at fetching! URL ${url}`);
    }

    return response.data;
};
