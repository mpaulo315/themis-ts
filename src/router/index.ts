import MainLayout from "@/components/layouts/MainLayout";
import deputadosRoute from "@/components/pages/Deputados/route";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            deputadosRoute
        ]
    }
])

export default router;