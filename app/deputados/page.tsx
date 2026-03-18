import { fetchDeputados } from "@/services/fetch";
import DeputadosClient from "./client";

export default async function Deputados() {
    const {data} = await fetchDeputados() 

    return <DeputadosClient deputados={data} />;
}