import React from "react";
import Card from "../Card";
import Button from "../Button";
import Table from "../Table";
import arrowDown from "../../assets/arrow-down.svg";

const DashboardContent = () => {
  return (
    <div className="w-full h-full flex flex-col p-8 overflow-auto max-h-[calc(100vh-64px)]">
      <div className="flex justify-between items-center">
        <div className="heading-medium text-black-12">Overview</div>
        <Button className="text-black-30 flex items-center gap-[7px]">
          Last Month
          <img src={arrowDown} alt="arrow-down" />
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-5">
        <Card className="grow" heading="Online orders">
          231
        </Card>
        <Card className="grow" heading="Amount received">
          ₹23,92,312.19
        </Card>
      </div>
      <div className="mt-8">
        <div className="heading-medium text-black-12">
          Transactions | This Month
        </div>
      </div>
      <div className="mt-5">
        <Table />
      </div>
    </div>
  );
};

export default DashboardContent;
