import type { QueryClient } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { createRouter } from "@tanstack/react-router";

export const router = createRouter({
    routeTree,
    context: {
        queryClient: undefined as unknown as QueryClient
    }
})