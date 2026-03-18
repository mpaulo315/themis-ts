import { Deputado } from "@/types/Deputado";
import { parseAPIURL } from "@/utils/url";

const API_BASE_URL = process.env.API_BASE_URL;

export const fetchDeputados = async (
    itens: number = 20,
    idLegislatura: Deputado['id'] = 57,
    pagina: number = 1
) => {
    const response = await fetch(parseAPIURL(
        API_BASE_URL!,
        ['deputados'],
        {
            itens,
            idLegislatura,
            pagina,
        }
    ));

    if (response.ok) {
        return {
            data: (await response.json()).dados,
        }
    } else {
        return {
            status: response.status,
            error: response.statusText
        }
    }
};

export const fetchDeputado = async (id: number | string) => {
    const response = await fetch(`${API_BASE_URL}/deputados/${id}`);
    const json = await response.json();

    return {
        data: json.dados,
    };
};
