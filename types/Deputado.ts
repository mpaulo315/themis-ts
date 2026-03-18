export type Deputado = {
    id: number;
    nome: string;
    nomeCivil: string;
    dataNascimento: string;
    dataFalecimento: string | null;
    ufNascimento: string;
    municipioNascimento: string;
    escolaridade: string;
    siglaPartido: string;
    siglaUf: string;
    urlFoto: string;
    sexo: string;
};

export type DeputadoSample = Pick<
    Deputado,
    "id" | "nome" | "siglaPartido" | "siglaUf" | "urlFoto"
> & {
    idLegislatura: number;
};

export type DeputadoMesa = Pick<
    Deputado,
    "id" | "nome" | "siglaPartido" | "siglaUf" | "urlFoto"
> & {
    dataInicio: string;
    dataFim: string | null;
    titulo: string;
};
