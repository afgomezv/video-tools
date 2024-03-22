import { useMemo, useState } from "react";

import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useTableTwo } from "../hooks/useTableTwo";
import { BsArrowLeftSquareFill } from "react-icons/bs";

export const TableVideos = () => {
  const { renderCell, titlesHeaders, videos } = useTableTwo();
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  const topContent = useMemo(() => {
    return (
      <section className="flex pt-4 pb-10">
        <div>
          <Link href="/home">
            <BsArrowLeftSquareFill size={32} className="text-secondary" />
          </Link>
        </div>
        <div className="flex justify-start text-xl ml-3">
          <p className="capitalize">home/</p>
          <p className="font-semibold">BeMaster</p>
        </div>
      </section>
    );
  }, []);

  return (
    <Table
      aria-label="videos-course"
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
        wrapper: "h-[870px] px-12 py-10 overflow-y-hidden ",
        table: "mb-44",
        tr: "hover:bg-[#d8d8d8] focus:bg-blue-300",
        th: ["bg-transparent", " border-b-2", "text-start"],
        td: ["border-b-2", "py-2.5"],
      }}
    >
      <TableHeader columns={titlesHeaders}>
        {(column) => (
          <TableColumn
            className="bg-white text-sm text-black  font-bold"
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
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
