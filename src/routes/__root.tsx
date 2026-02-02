import MainLayout from "@/layouts/MainLayout";
import { createRootRoute } from "@tanstack/react-router";
import { Alert  } from "antd";
import { Suspense } from "react";

export const Route = createRootRoute({
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

    pendingComponent: () => <h1>Carregando no pending</h1>
});
