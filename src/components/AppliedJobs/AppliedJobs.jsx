import React, { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  //   const [data, setData] = useState([]);

  const { AppliedData } = useLoaderData();
  //   console.log(AppliedData);

  //   useEffect(() => {}, []);
  return (
    <div>
      <div className=" text-end mr-52 mt-20 font-semibold">
        <button className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl mr-3">
          Remote
        </button>
        <button className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl">
          On-site
        </button>
      </div>
      {AppliedData.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between items-center mx-48 rounded-lg my-10 border border-slate-300 p-2">
            <div className="flex ">
              <img className=" w-36 rounded-lg pr-5" src={item.logo} />
              <div>
                <h1 className="text-xl font-semibold">{item.jobName}</h1>
                <p className="py-2">{item.companyName}</p>
                <button className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl mr-3">
                  {item.jobBase}
                </button>
                <button className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl">
                  {item.jobType}
                </button>
                <div className="flex py-2">
                  <p className="mr-3">{item.location}</p>
                  <p>{item.salary}</p>
                </div>
              </div>
            </div>
            <div>
              <button className="px-3 py-2 bg-purple-700 text-white rounded-xl">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
