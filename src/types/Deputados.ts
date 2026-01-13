export type Deputado = {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string;
};

type Status = {
    id: number
    nome: string
    siglaPartido: string
    uriPartido: string
    siglaUf: string
    idLegislatura: number
    urlFoto: string
    email: string
    data: string
    nomeEleitoral: string
    situacao: string
    condicaoEleitoral: string,
    descricaoStatus: string
}

export type DeputadoComp = {
    id: number
    nomeCivil: string
    ultimoStatus: Status,
    sexo: "M" | "F"
    redeSocial?: string[]
    dataNascimento: string
    dataFalecimento?: string
    ufNascimento: string
    municipioNascimento: string
    escolaridade: string
}