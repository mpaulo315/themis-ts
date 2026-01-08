import { Box, Center, Container, Stack } from "@chakra-ui/react";
import Header from "./sections/Header";
import ErrorBoundaryDF from "@/components/boundaries/error/ErrorBoundaryDF";
import SuspenseDF from "@/components/boundaries/suspense/SuspenseDF";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column">
      <Stack width="100%" height="100%">
        <Header />
        <Container
          as="main"
          flex="1"
          padding={2}
          maxWidth="100%"
          overflowY="auto"
          flexGrow={1}
        >
          <ErrorBoundaryDF>
            <SuspenseDF>
                <Center height="100%" flexGrow={1} >{children}</Center>
            </SuspenseDF>
          </ErrorBoundaryDF>
        </Container>
      </Stack>
    </Box>
  );
};

export default MainLayout;
