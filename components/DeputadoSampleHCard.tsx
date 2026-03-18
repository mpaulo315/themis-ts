import { DeputadoSample } from "@/types/Deputado";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

type Props = {
    deputado: DeputadoSample;
};

export default function DeputadoSampleHCard({ deputado }: Props) {
    const router = useRouter();

    return (
        <Card
            isPressable
            radius="sm"
            shadow="lg"
            className="hover:scale-102 hover:shadow-2xl w-60 h-25"
            onPress={() => router.push(`/deputados/${deputado.id}`)}
        >
            <div className="flex flex-row">
                <div>
                    <Image
                        draggable={false}
                        radius="sm"
                        src={deputado.urlFoto}
                        alt={deputado.nome}
                        height={100}
                    />
                </div>

                <div className="col-end-auto flex flex-col items-start p-2">
                    <h1 className="text-lg font-bold text-black text-nowrap">
                        {deputado.nome}
                    </h1>
                    <p className="text-xs text-black text-nowrap">
                        {deputado.siglaPartido} - {deputado.siglaUf}
                    </p>
                </div>
            </div>
        </Card>
    );
}
