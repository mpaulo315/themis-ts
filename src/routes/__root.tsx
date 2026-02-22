import MainLayout from "@/layouts/MainLayout";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRoute, createRootRouteWithContext } from "@tanstack/react-router";
import { Alert  } from "antd";
import { Suspense } from "react";

type RouteContext = {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
    shellComponent: ({children}) => (
        <MainLayout>
            <Alert.ErrorBoundary title="Teste">
                <Suspense fallback={<h1>Carregando no suspense</h1>}>
                    {children}
                </Suspense>
            </Alert.ErrorBoundary>
        </MainLayout>
    ),

    errorComponent: ({ error }: { error: Error }) => (
        <Alert
            showIcon
            type="error"
            title="Error"
            description={error.message}
        />
    ),

    pendingComponent: () => <h1>Carregando no pending</h1>,

    wrapInSuspense: true,

});
