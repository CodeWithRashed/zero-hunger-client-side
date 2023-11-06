import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { Link } from "react-router-dom";



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
  {
    accessorKey: "deliveryStatus",
    header: "Status",
    cell: (info) => <i>{info.getValue()}</i>,
  },
  {
    accessorKey: "_id",
    header: "Action",
    cell: (info) => <div className="flex gap-2"><Link to={`/food/manage/request/${info.getValue()}`}>Manage</Link> <Link to={`/food/update/${info.getValue()}`}>Update</Link><button onClick={ () => {
      console.log(info.getValue())
    }}>Delete</button></div>,
  },
];

const ManageFood = () => {
const [foodData, setFoodData] = useState([])
const {activeUser} = useContext(GlobalDataContext)
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/foods/${activeUser?.email}`
    )
      .then((res) => res.json())
      .then((data) => {

        setFoodData(data);
      });
  }, [activeUser]);


 
  const table = useReactTable({
    data: foodData,
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
