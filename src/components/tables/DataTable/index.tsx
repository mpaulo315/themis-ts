import {
  Table,
  type TableRootProps,
  type TableScrollAreaProps,
} from "@chakra-ui/react";

import type { Column } from "@/types/Utils";

type DataTableProps = {
  data: any[];
  columns: Column[];
  height?: TableScrollAreaProps["height"];
  stickyHeader?: TableRootProps["stickyHeader"];
  variant?: TableRootProps["variant"];
  size?: TableRootProps["size"];
  getRowId?: (key: any) => string | number;
};

const DataTable = ({
  data,
  columns,
  height,
  size="sm",
  stickyHeader=false,
  variant="outline",
  getRowId = (e) => e.id,
}: DataTableProps) => {
  return (
    <Table.ScrollArea height={height}>
      <Table.Root size={size} stickyHeader={stickyHeader} variant={variant}>
        <Table.Header>
          <Table.Row bg={"bg.emphasized"}>
            {columns.map((e) => (
              <Table.ColumnHeader key={`header-${e.accessor}`}>
                {e.headerName ?? e.accessor}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((e) => (
            <Table.Row key={getRowId(e)}>
              {columns.map((c) => (
                <Table.Cell key={`${getRowId(e)}-${c.accessor}`}>
                  {c.renderCell ? c.renderCell(e[c.accessor], e, data) : e[c.accessor]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default DataTable;
