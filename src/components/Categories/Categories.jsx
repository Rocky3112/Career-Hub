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
      <div className="flex text-center justify-around mt-3 mb-10 ">
      {data.map((item) => (
        
        <div className="bg-slate-300 p-5">
            <img src={item.img} />
            <p key={item.id}>{item.title}</p>
            <p>{item.totalJob}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Categories;
