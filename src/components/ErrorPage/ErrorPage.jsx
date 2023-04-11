import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <div className='mt-20 flex items-center justify-center'>
            <h1 className=' text-4xl text-purple-800 font-semibold'>404 Not Found</h1><br />
            
        </div>
        <div className='flex items-center justify-center'>

        <button className='px-3 py-2 bg-purple-600 text-white rounded-lg mt-20' onClick={handleBack} >Go back</button>
        </div>
        </div>
        
    );
};

export default ErrorPage;