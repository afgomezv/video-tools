import { useCallback, useMemo, useState } from "react";

import { Button, Input } from "@nextui-org/react";

import { folders } from "../data";
import { HiOutlineFolder } from "react-icons/hi";
import { LuPlayCircle } from "react-icons/lu";
import { VscLibrary } from "react-icons/vsc";
import { BsTrash3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export const useFilter = () => {
  const [filterValue, setFilterValue] = useState("");
  const [isActive] = useState(true);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = useMemo(() => {
    let filteredItems = [...folders];

    if (hasSearchFilter) {
      filteredItems = filteredItems.filter((folder) =>
        folder.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredItems;
  }, [hasSearchFilter, filterValue]);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
  }, []);

  const topContent = useMemo(() => {
    return (
      <div>
        <div className="flex flex-col items-center gap-2  sm:flex-row justify-between">
          <section>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className={`w-[150px] bg-transparent capitalize font-medium   ${
                  isActive && "border-b-2 border-secondary"
                }  `}
                radius="none"
                startContent={<VscLibrary size={20} />}
              >
                biblioteca
              </Button>
              <Button
                className="w-[150px] bg-transparent capitalize font-medium hover:border-b-2  border-secondary  "
                radius="none"
                startContent={<BsTrash3 size={20} />}
              >
                papelera
              </Button>
            </div>
          </section>
          <section>
            <div className="flex  flex-col gap-4 sm:flex-row">
              <Button
                color="default"
                radius="sm"
                startContent={<HiOutlineFolder size={20} />}
                className="capitalize font-medium"
              >
                nueva carpeta
              </Button>
              <Button
                color="secondary"
                radius="sm"
                startContent={<LuPlayCircle size={20} />}
                className="capitalize font-medium"
              >
                nuevo video
              </Button>
            </div>
          </section>
        </div>
        <div className="py-10 w-full sm:w-1/2">
          <Input
            classNames={{
              label: "text-black/50",
              input: [
                "bg-transparent",
                "text-black/90",
                "placeholder:text-default-500",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "bg-transparent",
                "border-2",
                "hover:border-secondary",
                "!cursor-text",
              ],
            }}
            size="lg"
            radius="sm"
            placeholder="Buscar Video"
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
            startContent={
              <GoSearch
                size={30}
                className="text-gray-500  border-r-2 border-gray-300 pr-2 mr-2"
              />
            }
          />
        </div>
      </div>
    );
  }, [filterValue, isActive, onClear, onSearchChange]);

  return { filteredItems, topContent };
};
