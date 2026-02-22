import { useLegislatura } from "@/hooks/queries";
import { createFileRoute } from "@tanstack/react-router";
import { Card, Descriptions, Timeline } from "antd";

export const Route = createFileRoute("/legislaturas")({
    component: RouteComponent,
    loader: ({ context }) =>
        context.queryClient.ensureQueryData(useLegislatura),
    pendingComponent: () => <h1>Carregando</h1>,
    errorComponent: () => <h1>Deu ruim</h1>,
});

function RouteComponent() {
    const { data } = Route.useLoaderData();

    return (
        <>
            {data.map((l : any) => (
                <Descriptions
                    key={l.id}
                    size="small"
                    layout="vertical"
                    title={`Legislatura ${l.idLegislatura/*  */}`}
                    items={Object.keys(l).filter(e => !['uri', 'idLegislatura'].includes(e)).map((k) => ({
                        key: k,
                        label: k,
                        children: l[k],
                    }))}
                />
            ))}
        </>
    );
}
