import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
        <div className=" bg-red-400 py-2 mb-2  px-4 flex justify-between rounded ">
            <h2 className="w-1/5 bg-red-600">Employee Name</h2>
            <h3 className="w-1/5 bg-red-600">New Task</h3>
            <h5 className="w-1/5 bg-red-600">Active Task</h5>
            <h5 className="w-1/5 bg-red-600">Completed</h5>
            <h5 className="w-1/5 bg-red-600">Failed</h5>
          </div>
        <div className="overflow-auto h-48 py-2">
        {userData.map((elem) => {
        return (
          <div
            key={elem.id}
            className=" bg-red-400 py-2 mb-2  px-4 flex justify-between rounded "
          >
            <h2 className="w-1/5 bg-red-600">{elem.firstName}</h2>
            <h3 className="w-1/5 bg-red-600">{elem.taskCounts.active}</h3>
            <h5 className="w-1/5 bg-red-600">{elem.taskCounts.newTask}</h5>
            <h5 className="w-1/5 bg-red-600">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 bg-red-600">{elem.taskCounts.failed}</h5>
          </div>
        );
      })}
        </div>
    </div>
  );
};

export default AllTask;
