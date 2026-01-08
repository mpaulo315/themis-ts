import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import { EmptyState } from "@chakra-ui/react";
import { TbMoodEmpty } from "react-icons/tb";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <TbMoodEmpty />
            </EmptyState.Indicator>
          </EmptyState.Content>
        </EmptyState.Root>
        {/* Your app components go here */}
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
