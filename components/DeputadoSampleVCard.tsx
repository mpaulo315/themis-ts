"use client";

import { DeputadoSample } from "@/types/Deputado";
import { Button, Card, CardFooter, CardHeader, Image } from "@heroui/react";
import { IconExternalLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type Props = {
    deputado: DeputadoSample;
};

export default function DeputadoSampleVCard({ deputado }: Props) {
    const router = useRouter()

    return (
        <Card isPressable radius="sm" shadow="lg" className="hover:scale-102 hover:shadow-2xl w-45"
        onPress={() => router.push(`/deputados/${deputado.id}`)}>
            <CardHeader className="flex flex-col items-start max-h-15">
                <h1 className="text-lg font-bold text-black">
                    {deputado.nome}
                </h1>
                <p className="text-sm text-black">
                    {deputado.siglaPartido} - {deputado.siglaUf}
                </p>
            </CardHeader>
            <Image
                removeWrapper
                draggable={false}
                radius="none"
                src={deputado.urlFoto}
                alt={deputado.nome}
            />
        </Card>
    );
}
