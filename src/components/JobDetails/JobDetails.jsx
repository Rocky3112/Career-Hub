import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addToDb } from "../../utility/fakeDB";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDollar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



const JobDetails = ({handleAppliedJob}) => {
  const [details, setDetails] = useState([]);
  const jobs = useLoaderData();
 
//   console.log(jobs);
  const jobData = useParams();
  let jobId = jobData.jobId;
  useEffect(() => {
    if (jobs) {
      const singleJob = jobs.find((job) => job.id == jobId);
      // console.log(singleJob)
      setDetails(singleJob);
        
    }
  }, []);


  const handleAppliedJobs=(id)=>{
    // console.log(id)
    addToDb(id)
    
    
  }
  return (
    <div className=" grid lg:grid-cols-2 px-10 my-20">
      <div className="px-10">
        <h2 className="py-2">
          <span className="text-xl font-semibold">Job Description: </span>
          {details.jobDescription}
        </h2>
        <p className="py-2">
          <span className="text-xl font-semibold">Responsibilities: </span>
          {details.responsibilities}
        </p>
        <p className="py-2">
          <span className="text-xl font-semibold">
            Educational Requirements:{" "}
          </span>
          {details.educationalRequirements}
        </p>
        <p className="py-2">
          <span className="text-xl font-semibold">
            Experiences: <br />
          </span>
          {details.experience}
        </p>
      </div>
      <div className=" bg-slate-200 mr-48 p-10 rounded-lg">
        <h1 className="text-2xl font-semibold pb-2">Job Details</h1>
        <p>
          <span className="text-md font-semibold "><FontAwesomeIcon icon={faDollar} /> Salary: </span>
          {details.salary} (per month)
        </p>
        <p>
          <span className="text-md font-semibold">Job-title: </span>
          {details.jobName}
        </p>
        <h1 className="text-2xl font-semibold py-4">Contact Information</h1>
        <p>
          <span className="text-md font-semibold"><FontAwesomeIcon icon={faPhone} /> Phone: </span>
          {details.Phone}
        </p>
        <p>
          <span className="text-md font-semibold"><FontAwesomeIcon icon={faEnvelope} /> Email: </span>
          {details.Email}
        </p>
        <p><FontAwesomeIcon icon={faLocationDot} /> {details.location}</p>

        <button className=" bg-purple-700 py-3 px-28 rounded-lg text-white mt-16 text-xl"
        onClick={()=> handleAppliedJobs(details.id)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
