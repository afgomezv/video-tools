import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useTable } from "../hooks/useTable";
import { useFilter } from "../hooks/useFilter";
import { useState } from "react";

export const TableFolder = () => {
  const { renderCell, titles } = useTable();
  const { filteredItems, topContent } = useFilter();
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  return (
    <Table
      aria-label="folder-course"
      topContent={topContent}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      onSelectionChange={setSelectedKeys}
      checkboxesProps={{
        color: "secondary",
        radius: "sm",
        size: "md",
        classNames: {
          base: "text-blue",
        },
      }}
      classNames={{
        th: ["bg-transparent", " border-b-2 px-4"],
        td: ["border-b-2", "py-3.5"],
      }}
    >
      <TableHeader columns={titles}>
        {(column) => (
          <TableColumn
            className="bg-white text-sm text-black capitalize font-bold "
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No folders found"} items={filteredItems}>
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
