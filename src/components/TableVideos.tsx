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
      <section className="flex pt-4 px-6 pb-10">
        <div>
          <Link href="/home">
            <BsArrowLeftSquareFill size={32} className="text-secondary" />
          </Link>
        </div>
        <div className="ml-3 text-xl font-semibold">Home/BeMaster</div>
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
        radius: "sm",
        size: "md",
        classNames: {
          base: "text-blue",
        },
      }}
      classNames={{
        th: ["bg-transparent", " border-b-2 px-4"],
        td: ["border-b-2", "py-4"],
      }}
    >
      <TableHeader columns={titlesHeaders}>
        {(column) => (
          <TableColumn
            className="bg-white text-sm text-black capitalize font-bold"
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
