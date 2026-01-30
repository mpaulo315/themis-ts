import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const X_API_KEY = import.meta.env.VITE_API_KEY;

export const fetchListByURL = async (endpoint: String) => {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
            "x-api-key": X_API_KEY,
        },
    });

    return response.data;
};
