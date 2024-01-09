import React from "react";
import Button from "../Button";
import tableSearch from "../../assets/table-search.svg";
import sort from "../../assets/sort.svg";
import download from "../../assets/download.svg";
import triangleDown from "../../assets/triangle-down.svg";
import info from "../../assets/info.svg";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";
import tableRows from "../../data.json";
import "./style.css";

const tableColumns = [
  {
    id: "orderId",
    name: "Order ID",
    style: "justify-start",
  },
  {
    id: "orderDate",
    name: "Order date",
    style: "justify-start",
    icon: triangleDown,
    iconStyle: "w-2 h-2",
  },
  {
    id: "orderAmount",
    name: "Order amount",
    style: "justify-end",
  },
  {
    id: "transactionFees",
    name: "Transaction fees",
    style: "justify-end",
    icon: info,
    iconStyle: "w-3.5 h-3.5",
  },
];

const Table = () => {
  return (
    <div className="h-full w-full bg-black-100 px-3 pt-3 pb-6 rounded-lg shadow-card">
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="w-[248px] body-2-regular bg-black-100 border border-black-85 rounded py-2.5 px-4 flex gap-2 items-center focus-within:outline focus-within:outline-primary-blue outline-2">
          <img src={tableSearch} alt="search" />
          <input
            className="outline-none w-full body-2-regular placeholder:text-black-60 text-black-12"
            placeholder="Search by order ID..."
          />
        </div>
        {/* Table Actions */}
        <div className="flex gap-3">
          <Button className="text-black-30 flex items-center gap-[7px]">
            Sort
            <img src={sort} alt="sort" />
          </Button>
          <Button className="!p-2">
            <img src={download} alt="download" />
          </Button>
        </div>
      </div>
      {/* Table */}
      <table className="mt-3 w-full">
        <thead>
          {tableColumns.map((column) => (
            <th
              key={column.id}
              className="bg-black-95 first:rounded-l last:rounded-r py-2.5 px-3"
            >
              <div
                className={`body-2-medium text-black-30 flex gap-1 items-center whitespace-nowrap ${column.style}`}
              >
                {column.name}
                {column.icon && (
                  <div className={column.iconStyle}>
                    <img src={column.icon} alt="icon" />
                  </div>
                )}
              </div>
            </th>
          ))}
        </thead>
        <tbody>
          {tableRows.map((rowData, index) => (
            <tr key={index}>
              {tableColumns.map((column) => (
                <td
                  key={rowData.id}
                  className="body-2-regular text-black-12 first:body-2-medium first:text-primary-blue"
                >
                  <div
                    className={`row border-b border-black-90 flex ${column.style}`}
                  >
                    {rowData[column.id]}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Table Pagination */}
      <div className="flex items-center gap-6 mt-6 justify-center">
        <Button className="flex items-center gap-1.5 !pl-1.5">
          <img src={chevronLeft} alt="previous" />
          <div className="body-2-medium">Previous</div>
        </Button>
        <div className="flex gap-2 items-center">
          <div className="pagination-number">1</div>
          <div className="pagination-number">...</div>
          <div className="pagination-number bg-primary-blue text-black-100">
            10
          </div>
          <div className="pagination-number">11</div>
          <div className="pagination-number">12</div>
          <div className="pagination-number">13</div>
          <div className="pagination-number">14</div>
          <div className="pagination-number">15</div>
          <div className="pagination-number">16</div>
          <div className="pagination-number">17</div>
          <div className="pagination-number">18</div>
        </div>
        <Button className="flex items-center gap-1.5 !pr-1.5">
          <div className="body-2-medium">Next</div>
          <img src={chevronRight} alt="next" />
        </Button>
      </div>
    </div>
  );
};

export default Table;
