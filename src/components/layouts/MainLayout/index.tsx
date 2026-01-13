import { Container, Grid } from "@chakra-ui/react";
import Header from "./sections/Header";
import ErrorBoundaryDF from "@/components/boundaries/error/ErrorBoundaryDF";
import SuspenseDF from "@/components/boundaries/suspense/SuspenseDF";
import { Outlet } from "react-router";
import SidebarDF from "@/sidebar/SidebarDF";

const MainLayout = () => {    

  return (
    <>
    <SidebarDF />
    <Grid h="100vh" templateRows="50px 1fr" templateColumns="auto">
      <Header />
      <ErrorBoundaryDF>
        <SuspenseDF>
            <Container
              as="main"
              maxW="container.xl"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
              padding={2}
              overflow="hidden"
              flexGrow={1}
              minH={0}
              p={3}
            >
              <Outlet />
            </Container>
        </SuspenseDF>
      </ErrorBoundaryDF>
    </Grid>
    </>
  );
};

export default MainLayout;
