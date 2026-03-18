import { fetchDeputado } from "@/services/fetch";

export default async function Deputados({ params }: PageProps<"/deputados/[id]">) {
    const {id} = (await params)
    const {data} = await fetchDeputado(id)

    return <>Deputado {id}</>;
}