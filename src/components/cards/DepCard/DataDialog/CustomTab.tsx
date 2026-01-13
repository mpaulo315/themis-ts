import DataTable from "@/components/tables/DataTable";
import type { Column } from "@/types/Utils";
import { Box, Button, ButtonGroup, Tabs } from "@chakra-ui/react";
import type { UseSuspenseInfiniteQueryResult } from "@tanstack/react-query";
import { useCallback, useMemo, useState } from "react";

type CustomTabProps = {
  value: string;
  fetchQueryHook: (...args: any[]) => UseSuspenseInfiniteQueryResult;
  fetchQueryArgs?: any[];
  columns: Column[];
};

const CustomTab = ({ value, fetchQueryHook, columns, fetchQueryArgs = [] }: CustomTabProps) => {
  const { data, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage } = fetchQueryHook.apply(null, fetchQueryArgs);
  const [page, setPage] = useState(0);

  const handleNextButton = useCallback(() => {
    if (hasNextPage) {
      setPage((prev) => Math.min(prev + 1, data.pages.length - 1));
      fetchNextPage();
    }
  }, [hasNextPage, data.pages.length, setPage, fetchNextPage]);

  const handlePreviousButton = useCallback(() => {
    if (hasPreviousPage) {
      setPage((prev) => Math.max(prev - 1, 0));
      fetchPreviousPage();
    }
  }, [hasPreviousPage, setPage, fetchPreviousPage]);

  const dataPage = useMemo(() => data.pages[page].dados, [data.pages, page]);

  return (
    <Tabs.Content value={value} asChild>
      <Box p={2}>
        {JSON.stringify({page, hasNextPage, hasPreviousPage})}
        <DataTable data={dataPage as any[]} columns={columns} height={320} />
        <ButtonGroup attached>
          <Button onClick={handlePreviousButton} disabled={!hasPreviousPage}>Previous</Button>
          <Button onClick={handleNextButton} disabled={!hasNextPage}>Next</Button>
        </ButtonGroup>
      </Box>
    </Tabs.Content>
  );
};

export default CustomTab