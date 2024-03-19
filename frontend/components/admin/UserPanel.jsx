import { Button, Spinner } from "@nextui-org/react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import React from "react";
import DataTable from "react-data-table-component";

const UserPanel = () => {
  let isLoading = false;
  let data = [
    {
      name: "User 1",
      _id: "1",
      createdAt: "20/12/2003",
    },
  ];
  const columns = [
    {
      name: "Name",
      selector: (row) => (
        <div
          onClick={() => handleShiftToGroup(row._id)}
          className="hover:text-purple-400 duration-300 transition-all cursor-pointer"
        >
          {row.name}
        </div>
      ),
      width: "130px",
    },
    {
      name: "phone",
      selector: (row) => <div>7896541230</div>,
      width: "140px",
    },
    {
      name: "email",
      selector: (row) => <div>user@gmail.com</div>,
      width: "140px",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-4 ">
          <Button className="bg-gray-300 text-gray-700 font-semibold" size="sm">
            block
          </Button>
          <Button className="bg-red-100 text-red-500 font-semibold" size="sm">
            Delete
          </Button>
          <Button className="bg-green-200 text-green-500 font-semibold" size="sm">
            Active
          </Button>
          <Button className="bg-pink-200 text-pink-700 font-semibold" size="sm">
            Approved
          </Button>
          <Button className="bg-orange-200 text-orange-600 font-semibold" size="sm">
            Disapproved
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="h-full w-full p-10">
      <div className="flex justify-between ">
        <p className="text-[30px] font-semibold">UserPanel</p>
        <Button color="secondary">Add</Button>
      </div>
      {/* table */}
      <div className="mt-10">
        <DataTable
          columns={columns}
          data={data}
          // selectableRows
          persistTableHead
          fixedHeader
          responsive
          // paginationServer
          fixedHeaderScrollHeight="450px"
          pagination
          paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
          noDataComponent={
            <div className="flex flex-col items-center justify-center p-4">
              {isLoading ? <Spinner /> : <p>No UserPanel</p>}
            </div>
          }
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(UserPanel), { ssr: false });
