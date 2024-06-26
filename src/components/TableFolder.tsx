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
        radius: "none",
        size: "sm",
        classNames: {
          base: "pl-2 -mr-8",
          icon: "",
          wrapper: "border-1 border-slate-300",
        },
      }}
      classNames={{
        wrapper: "px-12  overflow-y-hidden",
        table: "mb-28",
        tr: "hover:bg-[#d8d8d8] focus:bg-blue-300",
        th: ["bg-transparent", " border-b-2", "text-start"],
        td: ["border-b-2", "py-2.5"],
      }}
    >
      <TableHeader columns={titles}>
        {(column) => (
          <TableColumn
            className="bg-white text-sm text-black  font-bold "
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
