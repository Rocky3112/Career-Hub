import React, { useEffect, useState } from 'react';


const Jobs = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("jobFeatures.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
    return (
        <div>
            <div className="pt-10">
            <h1 className="text-center text-4xl">Featured Jobs</h1>
            <p className="text-center p-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      <div className="grid lg:grid-cols-2 m-10 p-5 gap-4">
      {
      data.map((item) => (
        
        <div className="border border-slate-500 p-5">
            <img className="w-28" src={item.logo} />
            <h2 key={item.id}>{item.jobName}</h2>
            <p className='py-2'>{item.companyName}</p>
            <button className='border border-purple-600 mr-3 text-purple-800 font-medium p-1 rounded'>Remote</button>
            <button className='border border-purple-600 mr-3 text-purple-800 font-medium p-1 rounded '>Full Time</button>
            <p className='py-2'><span>{item.location}</span> <span>{item.salary}</span></p>
            <button className='bg-purple-500 p-2 rounded-lg text-white'>View Details</button>
            
        </div>
      ))}
      </div>

        </div>
    );
};

export default Jobs;