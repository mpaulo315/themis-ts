import type { Deputado } from "@/types/Deputados";
import {
  Button,
  Card,
  DataList,
  Dialog,
  Image,
  Link,
  Portal,
} from "@chakra-ui/react";
import DataDialog from "./DataDialog";

const DepCard = ({
  id,
  // uri,
  nome,
  siglaPartido,
  siglaUf,
  // uriPartido,
  urlFoto,
}: Deputado) => {
  return (
    <Card.Root width="180px" overflow="hidden" size="sm">
      <Image
        rounded="lg"
        src={urlFoto}
        alt={`${nome} (${siglaPartido}-${siglaUf})`}
      />
      <Card.Body>
        <Dialog.Root scrollBehavior="inside" key={`dep-${id}`} size="full">
          <Dialog.Trigger asChild>
            <Card.Title>
              <Button variant="plain">{nome}</Button>
            </Card.Title>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <DataDialog id={id} deputado={{id, nome, siglaPartido, siglaUf, urlFoto}}/>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
        <Card.Description>
          <DataList.Root>
            <DataList.Item>
              <DataList.ItemLabel>
                <Link href="#" target="_blank">
                  {siglaPartido}
                </Link>
              </DataList.ItemLabel>
              <DataList.ItemLabel>{siglaUf}</DataList.ItemLabel>
            </DataList.Item>
          </DataList.Root>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default DepCard;
