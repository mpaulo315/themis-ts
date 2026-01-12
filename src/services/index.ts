import axios from "axios"
import { API_BASE_URL as API_BASE_URL_CF } from "../config"

const API_BASE_URL = API_BASE_URL_CF

export const getDeputados = async () => {
    const res = await axios.get(new URL('deputados', API_BASE_URL).toString())
    return res.data?.dados
}