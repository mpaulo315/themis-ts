import type { Deputado } from "@/types/Deputados";
import { Card, DataList, Image, Link } from "@chakra-ui/react";

const HDepCard = ({ nome, siglaPartido, siglaUf, urlFoto }: Deputado) => {
  return (
    <Card.Root flexDirection="row" height="100px">
      <Image
        rounded="md"
        src={urlFoto}
        alt={`${nome} (${siglaPartido}-${siglaUf})`}
      />
      <Card.Body display="flex" alignItems="flex-start">
        <Card.Title>{nome}</Card.Title>

        {/* <Card.Description> */}
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
        {/* </Card.Description> */}
      </Card.Body>
    </Card.Root>
  );
};

export default HDepCard;
