import {
  Box,
  ButtonGroup,
  Card,
  Center,
  Flex,
  IconButton,
  Pagination,
  ScrollArea,
  SimpleGrid,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

type DepListPaginationProps = {
  page: number;
  setPage: (value: number) => void;
  dataLength: number;
  itemsPerPage: number;
};

type DepListContentType = {
  data: any[];
  dataRenderer: (
    element: any,
    index: number,
    elements: any[]
  ) => React.ReactNode;
};

type DepListProps = DepListPaginationProps & DepListContentType;

const DepListPagination = ({
  page,
  setPage,
  dataLength,
  itemsPerPage,
}: DepListPaginationProps) => {
  return (
    <Pagination.Root
      count={dataLength}
      pageSize={itemsPerPage}
      page={page}
      onPageChange={(page) => setPage(page.page)}
    >
      <ButtonGroup attached variant="ghost" size="sm">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ base: "ghost", _selected: "outline" }}>
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
};

const DepListContent = ({ data, dataRenderer }: DepListContentType) => {
  return (
    <Card.Root height="100%" minH={0}>
      <Card.Body height="100%" minH={0} p={4}>
        <ScrollArea.Root height="100%" width="100%" minH={0}>
          <ScrollArea.Viewport height="100%" minH={0}>
            <ScrollArea.Content>
              <Center>
              <SimpleGrid columns={{ sm: 2, md: 4, lg: 5, xl: 6 }} gap={4} >
                {data.map(dataRenderer)}
              </SimpleGrid>
              </Center>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner />
        </ScrollArea.Root>
      </Card.Body>
    </Card.Root>
  );
};

const DepList = ({
  data,
  dataRenderer,
  page,
  setPage,
  dataLength,
  itemsPerPage,
}: DepListProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" height="100%" minH={0}>
      <Box minH={0} width="100%">
        <DepListContent data={data} dataRenderer={dataRenderer} />
      </Box>

      <DepListPagination
        page={page}
        setPage={setPage}
        dataLength={dataLength}
        itemsPerPage={itemsPerPage}
      />
    </Flex>
  );
};

export default DepList;
