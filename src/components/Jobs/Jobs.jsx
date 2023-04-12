import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons';




const Jobs = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const [seeAll, setSeeAll] = useState(false)

    const handleSeeAll =() =>{
      setSeeAll(true);
    }

  useEffect(() => {
    fetch("jobFeatures.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
//  const data = useLoaderData()
//  console.log(data)
 
  const handleView = (id)=>{
    navigate(`jobDetails/${id}`)
    

  }
    return (
        <div>
            <div className="pt-10">
            <h1 className="text-center text-4xl">Featured Jobs</h1>
            <p className="text-center p-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      <div className="grid lg:grid-cols-2 m-10 p-5 gap-4">
      {
      data.slice(0, seeAll ? 6 : 4).map((item) => (
        
        <div className="border border-slate-500 p-5">
            <img className="w-28 rounded" src={item.logo} />
            <h2 >{item.jobName}</h2>
            <p className='py-2'>{item.companyName}</p>
            <button className='border border-purple-600 mr-3 text-purple-800 font-medium py-2 px-3 rounded'>{item.jobBase}</button>
            <button className='border border-purple-600 mr-3 text-purple-800 font-medium py-2 px-3 rounded '>{item.jobType}</button>
            <p className='py-2 '><span className='pr-3'><FontAwesomeIcon icon={faLocationDot} /> {item.location}</span> <span><FontAwesomeIcon icon={faDollar} /> {item.salary}</span></p>

            <button className='bg-purple-500 p-2 rounded-lg text-white' onClick={()=> handleView(item.id)}>View Details</button>
            
        </div>
      ))}
      </div>
      <div className='text-center'>
      {
        !seeAll &&(<button onClick={handleSeeAll}  className='bg-purple-500 p-2 rounded-lg text-white mb-10'>See All Jobs</button>)
      }
      </div>

        </div>
    );
};

export default Jobs;