import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getDeputado, getDeputadoInfo, getDeputados } from "../../services/Deputados";
import type { Deputado } from "@/types/Deputados";

export const useDeputados = () => useSuspenseQuery({
    queryKey: ['camara', 'deputados'],
    queryFn: async () => {
        const data = await getDeputados();
        return data.dados;
    },
})

export const useDeputado = (id: Deputado['id']) => useSuspenseQuery({
    queryKey: ['camara', 'deputado', id],
    queryFn: async () => {
        const data = await getDeputado(id);
        return data.dados;
    }
})


export const useDeputadoInfo = (id: Deputado['id'], resource: string) => useSuspenseInfiniteQuery({
    queryKey: ['camara', 'deputado', id, resource],
    initialPageParam: {resource: resource},
    queryFn: ({pageParam}) => {
        if (typeof pageParam === 'string') {
            return getDeputadoInfo(id, undefined, pageParam);
        }
        return getDeputadoInfo(id, pageParam.resource);
    },

    getNextPageParam:(lastPage) => {
        console.log(lastPage)
        const next = lastPage.links.find((e : {rel: string, href: string}) => e.rel === "next")

        if(next && next.href) {
            return next.href;
        }
        return undefined;
    },

    getPreviousPageParam:(firstPage) => {
        const last = firstPage.links.find((e : {rel: string, href: string}) => e.rel === "last")

        if(last && last.href) {
            return last.href;
        }
        return undefined;
    },
    
})