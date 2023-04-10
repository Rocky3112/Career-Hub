import React, { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
        <div className="pt-10">
            <h1 className="text-center text-4xl">Job Category List</h1>
            <p className="text-center p-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      <div className="grid lg:grid-cols-4 gap-16 mx-16 my-10 ">
      {data.map((item, index) => (
        
        <div key={index} className="bg-slate-200 p-5 rounded-lg">
            <img className="w-16" src={item.img} />
            <p >{item.title}</p>
            <p>{item.totalJob} job</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Categories;
