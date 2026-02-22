import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import ThemeProvider from "./providers/theme";
import "./App.css";
import { QUERY_CLIENT } from "./lib/queryClient";
import { router as ROUTER } from "./router";
function App() {
    return (
        <QueryClientProvider client={QUERY_CLIENT}>
            <ThemeProvider>
                <RouterProvider
                    router={ROUTER}
                    context={{ queryClient: QUERY_CLIENT }}
                />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
