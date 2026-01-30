import MainLayout from "@/layouts/MainLayout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Alert, Spin } from "antd";
import { Suspense } from "react";

export const Route = createRootRoute({
    component: () => (
        <MainLayout>
            <Suspense fallback={<Spin spinning fullscreen />}>
                <Outlet />
            </Suspense>
        </MainLayout>
    ),
    errorComponent: ({ error }: { error: Error }) => (
        <Alert
            type="error"
            title={error.message}
            closable={{ closeIcon: true, "aria-label": "close" }}
        />
    ),
});
