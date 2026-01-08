import { CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { sidebarStore } from "./store";

const SidebarDF = () => {
  const {open, setOpen} = sidebarStore();
  return (
    <Drawer.Root placement="start" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Drawer.Backdrop>
          <Drawer.Positioner >
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Sidebar</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Drawer.Body>
              <Drawer.Footer>

              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" onClick={() => setOpen(false)}/>
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Backdrop>
      </Portal>
    </Drawer.Root>
  );
};

export default SidebarDF;