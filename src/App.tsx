import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import ThemeProvider from "./providers/theme";
import { createRouter } from "@tanstack/react-router";
import { routeTree }from "@/routeTree.gen"
import "./App.css";

const QUERY_CLIENT = new QueryClient();
const ROUTER = createRouter({routeTree})

function App() {
    return (
        <QueryClientProvider client={QUERY_CLIENT}>
            <ThemeProvider>
                <RouterProvider router={ROUTER} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
