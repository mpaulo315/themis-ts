import SidebarDF from "@/sidebar/SidebarDF";
import { sidebarStore } from "@/sidebar/SidebarDF/store";
import {
  Avatar,
  Box,
  Center,
  Flex,
  IconButton,
  Separator,
  Stack,
} from "@chakra-ui/react";
import { TbMoon2 } from "react-icons/tb";

const Header = () => {
  const { toggle } = sidebarStore();
  return (
    <>
    <SidebarDF />
      <Box
        as="header"
        width="100%"
        height="50px"
        boxSizing="border-box"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={3}
      >
        <Flex>
            {/* Themis Logo */}
        </Flex>
        <Flex>
          <Box height="100%" borderRadius="25px" padding={0.5}>
            <Center>
              <Stack gap={2} direction="row">
                <IconButton variant="ghost" size="sm" rounded="full">
                  <TbMoon2 />
                </IconButton>
                <IconButton variant="ghost" size="sm" rounded="full">
                  <TbMoon2 />
                </IconButton>
                    <Avatar.Root
                      size="sm"
                      css={{
                        outlineWidth: 2,
                        outlineColor: "gray.400",
                        outlineOffset: 2,
                        outlineStyle: "solid",
                      }}
                      _hover={{ backgroundColor: "gray.200", cursor: "button" }}
                      onClick={() => toggle()}
                    >
                      <Avatar.Fallback />
                    </Avatar.Root>
              </Stack>
            </Center>
          </Box>
        </Flex>
      </Box>
      <Center mt={-2}>
        <Separator size="md" width="calc(100% - 20px)" borderColor="gray.200" />
      </Center>
    </>
  );
};

export default Header;
