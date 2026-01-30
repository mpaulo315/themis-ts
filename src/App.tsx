import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router";

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})



function App() {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
