import { IconButton } from "@chakra-ui/react";
import { TbExternalLink } from "react-icons/tb";

export const DESPESAS_COLUMNS = [
  {
    headerName: "Ano",
    accessor: "ano",
  },
  {
    headerName: "Mes",
    accessor: "mes",
  },
  {
    headerName: "Tipo",
    accessor: "tipoDespesa",
  },
  {
    headerName: "Tipo Documento",
    accessor: "tipoDocumento",
  },
  {
    headerName: "Data",
    accessor: "dataDocumento",
  },
  {
    headerName: "Valor",
    accessor: "valorDocumento",
  },
  {
    headerName: "Documento",
    accessor: "urlDocumento",
    renderCell: (value: string) => (
      <IconButton as={"a"} size="xs" onClick={() => window.open(value, "_blank")}>
        <TbExternalLink />
      </IconButton>
    ),
  },
  {
    headerName: "Fornecedor",
    accessor: "nomeFornecedor",
  },
  {
    headerName: "Valor Líquido",
    accessor: "valorLiquido",
  },
];
