import axios from "axios";
import * as config from "../../config";
import type { Deputado } from "@/types/Deputados";

const API_BASE_URL = config.API_BASE_URL;

export const getDeputados = async () => {
  const res = await axios.get(new URL("deputados", API_BASE_URL).toString());
  return res.data;
};

export const getDeputado = async (id: Deputado["id"]) => {
  const res = await axios.get(new URL(`deputados/${id}`, API_BASE_URL).toString());
  return res.data;
};

export const getDeputadoInfo = async (
  id: Deputado["id"],
  resource?: string,
  url?: string
) => {
  const res = await axios.get(
    url ?? new URL(`deputados/${id}/${resource}`, API_BASE_URL).toString()
  );

  return res.data;
};
