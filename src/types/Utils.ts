export type Column<T = any> = {
  headerName?: string;
  accessor: string;
  renderCell?: (value?: any, row?: T, items?: T[]) => React.ReactNode;
};
