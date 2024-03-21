import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useTableTwo } from "../hooks/useTableTwo";

export const TableVideos = () => {
  const { renderCell, titlesHeaders, videos } = useTableTwo();

  return (
    <Table className="ml-4" aria-label="folder-course">
      <TableHeader columns={titlesHeaders}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No folders found"} items={videos}>
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
