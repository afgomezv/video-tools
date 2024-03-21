import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useTable } from "../hooks/useTable";

export const TableFolder = () => {
  const { renderCell, titles, folders } = useTable();

  return (
    <Table className="ml-4" aria-label="folder-course">
      <TableHeader columns={titles}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No folders found"} items={folders}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnkey) => (
              <TableCell>{renderCell(item, columnkey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
