import React from "react";
import dashboardData from "../constants/data/dashboard.json";

const Dashboard: React.FC = () => {
  const { title, header, view, details } = dashboardData;

  return (
    <div className="flex flex-col items-center mt-10 mx-auto w-full max-w-xx bg-none px-4 sm:px-6 lg:px-8">
      <div className="text-lg leading-relaxed w-full text-start">
        <h2 className="text-navtext text-start w-full mb-4 font-light">
          {title}
        </h2>
        <h3 className="text-2xl font-bold text-start mb-6 gradient-text3">
          {header}
        </h3>
      </div>
      <div className="relative w-full flex flex-col sm:flex-row items-center justify-center sm:justify-end">
        <img
          src="dashboardimage/dashboard.png"
          alt="Dashboard view"
          className="h-64 sm:h-full w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 p-4 sm:p-8  bg-opacity-50 rounded-lg">
          <div className=" bg-opacity-80 p-4 rounded-lg w-full sm:w-[700px] h-auto sm:h-48 flex items-center justify-start">
            <p className="text-white text-sm sm:text-base text-start ml-10">
              {details}
            </p>
          </div>
          <button className="sm:mr-10 px-6 py-3 bg-black border-2 text-white text-sm sm:text-lg  bg-opacity-10 font-semibold rounded-full shadow-lg hover:bg-gradient-text transition duration-300 w-full sm:w-auto hover:bg-opacity-30">
            {view}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
