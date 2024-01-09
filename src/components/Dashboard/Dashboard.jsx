import React from "react";
import NavBar from "../NavBar";
import DashboardContent from "../DashboardContent";
import Header from "../Header";

const Dashboard = () => {
  return (
    <div className="flex w-full h-full">
      <NavBar />
      <div className="flex flex-col w-[calc(100%-224px)] bg-black-98">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
