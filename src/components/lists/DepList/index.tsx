import {
  ButtonGroup,
  Card,
  Center,
  IconButton,
  Pagination,
  Presence,
  ScrollArea,
  Stack,
  Wrap,
} from "@chakra-ui/react";
import { useDeputados } from "../../../hooks/Deputados";
import { create } from "zustand";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useEffect, type CSSProperties } from "react";
import type { Deputado } from "@/types/Deputados";
import DepCard from "@/components/cards/DepCard";
import ErrorBoundaryDF from "@/components/boundaries/error/ErrorBoundaryDF";
import SuspenseDF from "@/components/boundaries/suspense/SuspenseDF";

const ITENS_PER_PAGE = 10;

type DepListStoreType = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  dataLength: number;
  setDataLength?: (length: number) => void;
};

const paginationStore = create<DepListStoreType>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  dataLength: 0,
  setDataLength: (length) => set({ dataLength: length }),
}));

const DepListFooter = () => {
  return (
    <Stack direction="row" justify="space-between" align="center" mt="4">
      <DepListFooterPagination />
    </Stack>
  );
};

const DepListFooterPagination = () => {
  const { dataLength, currentPage } = paginationStore();
  return (
    <Pagination.Root
      count={dataLength}
      pageSize={ITENS_PER_PAGE}
      page={currentPage}
      onPageChange={(page) =>
        paginationStore.getState().setCurrentPage(page.page)
      }
    >
      <ButtonGroup variant="ghost" size="sm">
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

type DepListContentProps = { scrollBehavior?: CSSProperties["scrollBehavior"] };

const DepListContent = ({ scrollBehavior = "auto" }: DepListContentProps) => {
  const { data } = useDeputados();
  const { currentPage } = paginationStore();

  useEffect(() => {
    if (data && data.length) {
      paginationStore.getState().setDataLength!(data.length);
    }
  }, [data]);

  return (
    <>
      <ScrollArea.Root width="100%">
        <ScrollArea.Viewport style={{ scrollBehavior }}>
          <ScrollArea.Content>
            <Wrap columnGap={5} justifyContent="center">
              {data
                .slice(
                  (currentPage - 1) * ITENS_PER_PAGE,
                  currentPage * ITENS_PER_PAGE
                )
                .map((dep: Deputado) => (
                  <DepCard key={dep.id} {...dep} />
                ))}
            </Wrap>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </>
  );
};

type DepListProps = { scrollBehavior?: CSSProperties["scrollBehavior"] };

const DepList = ({ scrollBehavior = "auto" }: DepListProps) => {
  const { dataLength } = paginationStore();
  return (
    <>
      <Card.Root width='100%' height='100%'>
        <Card.Body>
          <ErrorBoundaryDF>
            <SuspenseDF>
              <Center>
                <DepListContent scrollBehavior={scrollBehavior} />
              </Center>
            </SuspenseDF>
          </ErrorBoundaryDF>
        </Card.Body>
      </Card.Root>
      <Presence present={!!dataLength && dataLength > 0}>
        <Center>
          <DepListFooter />
        </Center>
      </Presence>
    </>
  );
};

export default DepList;
