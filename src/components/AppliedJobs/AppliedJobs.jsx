import React, { useEffect, useState } from "react";
import JobDetails from "../JobDetails/JobDetails";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utility/fakeDB";

const AppliedJobs = () => {
    const { AppliedData,  } = useLoaderData();
  
    const savedJobs =[];
    const applyData = getStoredCart()
    // console.log(applyData)
    for(const id in applyData){
        const jobAdd = AppliedData.find(job => job.id ==id)
        savedJobs.push(jobAdd);
    }
    // console.log(savedJobs);
    const [remote, setRemote] = useState(savedJobs)
    const btnRemote =()=>{
        const remoteJob =savedJobs.filter(job =>job.jobBase =='Remote')
        setRemote(remoteJob)
    }
    const btnOnsite =()=>{
        const onsiteJob =savedJobs.filter(job =>job.jobBase =='Onsite')
        setRemote(onsiteJob)
    }

  return (
    <div>
      <div className=" text-end mr-52 mt-20 font-semibold">
        <button onClick={btnRemote} className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl mr-3">
          Remote
        </button>
        <button onClick={btnOnsite} className="px-3 py-2 border border-purple-700 text-purple-700 rounded-xl">
          On-site
        </button>
      </div>
      {remote.map((item) => (
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
