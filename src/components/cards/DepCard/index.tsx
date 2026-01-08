import type { Deputado } from "@/types/Deputados";
import { Card, DataList, Image, Link } from "@chakra-ui/react";

const DepCard = ({
  // id,
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
        <Card.Title>{nome}</Card.Title>
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
