import { LEGISLATURAS_URL } from "@/config";
import { fetchListByURL } from "@/services";

export const useLegislatura = {
    queryKey: ['camara', 'legislaturas'],
    queryFn: () => fetchListByURL(LEGISLATURAS_URL)
}