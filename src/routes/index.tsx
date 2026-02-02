import IndexPage from "@/pages";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: () => <IndexPage />,
    pendingComponent: () => <h1>Carregando no index</h1>
});
