import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import jobData from '../jobData'

const JobDetails = () => {
    
    const [details, setDetails] = useState([])
    const {id} = useParams();
    useEffect( ()=>{
       const data = jobData.filter(jd => jd.id === parseInt(id))
       setDetails(data[0])
    }, [id])
console.log(details)
    return (
        <div className=' grid grid-cols-2 px-10 mt-20'>
            <div className='px-10'>
                <h2 className='py-2'><span className='text-xl font-semibold'>Job Description: </span>{details.jobDescription}</h2>
                <p>{details.responsibilities}</p>
                <p>{details.educationalRequirements}</p>
                <p>{details.experience}</p>
            </div>
            <div className=' bg-slate-200 mr-48 p-10 rounded-lg'>
                <h1 className='text-2xl font-semibold'>Job Details</h1>
                <p>{details.jobName}</p>
                <p>{details.salary}</p>
                <h1 className='text-2xl font-semibold py-4'>Contact Information</h1>
                <p>{details.location}</p>
                <button className=' bg-purple-700 p-3 rounded-lg text-white mt-16'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;