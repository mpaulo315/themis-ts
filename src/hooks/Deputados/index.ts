import { useSuspenseQuery } from "@tanstack/react-query";
import { getDeputados } from "../../services";

export const useDeputados = () => useSuspenseQuery({
    queryKey: ['camara', 'deputados'],
    queryFn: getDeputados,
})