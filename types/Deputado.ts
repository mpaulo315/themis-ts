export type Deputado = {
    id: number;
    nome: string;
    siglaPartido: string;
    siglaUf: string;
    urlFoto: string;
};

export type DeputadoMesa = Pick<
    Deputado,
    "id" | "nome" | "siglaPartido" | "siglaUf" | "urlFoto"
> & {
    dataInicio: string;
    dataFim: string | null;
    titulo: string;
};
