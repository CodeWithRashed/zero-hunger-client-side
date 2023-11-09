import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button, Modal, Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../ContextApi/DataContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TbMoodEmpty } from "react-icons/tb";
import {  BiSolidAddToQueue } from 'react-icons/bi';
import { Helmet } from "react-helmet";
// import axios from 'axios'

const ManageFood = () => {
  const [foodData, setFoodData] = useState([]);
  const { activeUser } = useContext(GlobalDataContext);
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState("");
  const [doRefetch, setDoRefetch] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/user/get/foods?email=${
        activeUser?.email
      }`, {
        credentials: "include"
      }
      
    )
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      });
  }, [activeUser, doRefetch]);

  //Handle Food Delete
  const handleFoodDelete = async (id) => {
    await fetch(
      `${import.meta.env.VITE_BACKEND_API}/api/v1/user/delete/food/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        setDoRefetch(Math.random());
        toast.success("Food Deleted!!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const columns = [
    {
      accessorKey: "foodImage",
      header: "Image",
      cell: (info) => (
        <div>
          {" "}
          <img
            className="w-28 h-10 object-cover rounded-xl"
            src={info.getValue()}
            alt=""
          />
        </div>
      ),
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
      cell: (info) => (

        <div className="flex gap-2">
        
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={`/food/manage/${info.getValue()}`}
          >
            Manage
          </Link>
          <Link
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            to={`/food/update/${info.getValue()}`}
          >
            Update
          </Link>
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={() => {
              setOpenModal(true);
              setTargetId(info.getValue());
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
    
  ];

  const table = useReactTable({
    data: foodData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="my-10 min-h-[50vh]">
       <Helmet>
        <title>Zero Hunger | Manage</title>
      </Helmet>
      {foodData.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Head
                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <Table.HeadCell
                    scope="col"
                    className="px-6 py-3"
                    key={header?.id}
                  >
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
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext()
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ) : (
        <div className="flex min-h-[50vh] justify-center flex-col items-center w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <TbMoodEmpty className="text-4xl font-semibold text-gray-900 dark:text-white"></TbMoodEmpty>
          <h1 className=" text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
            You Have&apos;t added any food yet
          </h1>
          <Link to="/add">
          <Button className="mt-4">
            <BiSolidAddToQueue className="mr-2 h-5 w-5" />
            Add Now
          </Button>
          </Link>
          
        </div>
      )}

      {/* Delete Working Modal */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to accept this request?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleFoodDelete(targetId);
                  setOpenModal(false);
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageFood;
