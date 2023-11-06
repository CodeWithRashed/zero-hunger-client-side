import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../ContextApi/DataContext";
const data = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columns = [
  {
    accessorKey: "foodImage",
    header: "Image",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  {
    accessorKey: "foodName",
    header: "Food Name",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  {
    accessorKey: "foodQuantity",
    header: "Quantity",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  {
    accessorKey: "expireDate",
    header: "Expire Date",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  {
    accessorKey: "pickupLocation",
    header: "Location",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: (info) => <i>{info.getValue()}</i>,
  // },
  {
    accessorKey: "_id",
    header: "Action",
    cell: (info) => <a href={info.getValue()}>Click</a>,
  },
];

const ManageFood = () => {
const {userFoodData} = useContext(GlobalDataContext)

console.log(userFoodData)

 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


  return (
    <Table>
      {table.getHeaderGroups().map((headerGroup) => (
        <Table.Head className="tr" key={headerGroup.id}>

          {headerGroup.headers.map((header) => (
            <Table.HeadCell key={header?.id}>
              {header?.column?.columnDef?.header}
            </Table.HeadCell>
          ))}
        </Table.Head>
      ))}

      <Table.Body className="divide-y">
        {table.getRowModel().rows?.map((row) => (
          <Table.Row
            key={row?.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            {row.getVisibleCells().map((cell) => (
              <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                key={cell?.id}
              >
                {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ManageFood;
