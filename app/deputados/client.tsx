"use client";

import DeputadoSampleHCard from "@/components/DeputadoSampleHCard";
import DeputadoSampleVCard from "@/components/DeputadoSampleVCard";
import { DeputadoSample } from "@/types/Deputado";

type Props = {
    deputados: DeputadoSample[];
};

export default function DeputadosClient({ deputados }: Props) {
    return (
        <div className="flex gap-5 flex-wrap justify-center">
            {deputados.map((deputado) => (
                // <DeputadoSampleVCard key={deputado.id} deputado={deputado} />
                <DeputadoSampleHCard key={deputado.id} deputado={deputado} />
            ))}
        </div>
    );
}
