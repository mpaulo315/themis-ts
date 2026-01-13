import ErrorBoundaryDF from "@/components/boundaries/error/ErrorBoundaryDF";
import SuspenseDF from "@/components/boundaries/suspense/SuspenseDF";
import { useDeputado, useDeputadoInfo } from "@/hooks/Deputados";
import type { Deputado } from "@/types/Deputados";
import {
  Box,
  CloseButton,
  Dialog,
  Em,
  Heading,
  Tabs,
  Image,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import CustomTab from "./CustomTab";
import { DESPESAS_COLUMNS } from "./columns";

type DataDialogProps = {
  id: Deputado["id"];
  deputado: Partial<Deputado>;
};

const DataDialog = ({ id, deputado }: DataDialogProps) => {
  const { data } = useDeputado(id);
  const [tabIndex, setTabIndex] = useState("detalhes");

  const tabs = useMemo(
    () => [
      { value: "despesas", label: "Despesas", columns: DESPESAS_COLUMNS },
      // { value: "discursos", label: "Discursos" },
      // { value: "eventos", label: "Eventos" },
      // { value: "frentes", label: "Frentes" },
      // { value: "historico", label: "Histórico" },
      // { value: "mandatosExternos", label: "Mandatos" },
      // { value: "ocupacoes", label: "Ocupações" },
      // { value: "orgaos", label: "Órgãos" },
      // { value: "profissoes", label: "Profissões" },
    ],
    []
  );

  return (
    <>
      <Dialog.Header display="flex" alignItems="flex-end">
        <Image rounded="md" src={deputado.urlFoto} alt={""} width="50px" />
        <Box display="flex" flexDirection="column" gap={1}>
          <Heading textTransform="uppercase">{deputado.nome}</Heading>
          <Em>
            ({deputado.siglaPartido}-{deputado.siglaUf})
          </Em>
        </Box>
        <Dialog.CloseTrigger>
          <CloseButton />
        </Dialog.CloseTrigger>
      </Dialog.Header>
      <Dialog.Body>
        <Tabs.Root
          lazyMount
          variant="enclosed"
          value={tabIndex}
          onValueChange={(e) => setTabIndex(e.value)}
        >
          <Tabs.List>
            <Tabs.Trigger key={`trigger-detalhes`} value="detalhes">
              Detalhes
            </Tabs.Trigger>
            {tabs.map((tab) => (
              <Tabs.Trigger key={`trigger-${tab.value}`} value={tab.value}>
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <ErrorBoundaryDF>
            <SuspenseDF>
              <Tabs.Content value="detalhes">
                {JSON.stringify(deputado)}
              </Tabs.Content>
              {tabs.map((tab) => (
                <CustomTab
                  key={tab.value}
                  value={tab.value}
                  fetchQueryHook={useDeputadoInfo}
                  fetchQueryArgs={[id, tab.value]} columns={tab.columns}                />
              ))}
            </SuspenseDF>
          </ErrorBoundaryDF>
        </Tabs.Root>
      </Dialog.Body>
    </>
  );
};

export default DataDialog;
