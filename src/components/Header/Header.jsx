import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='lg:flex justify-around items-center px-4 mt-6 '>
                <h1 className='text-4xl font-semibold'>Job Hunts</h1>
                <div className='sm:py-2'>
                    <Link to="/">Home</Link>
                    <Link to="statistics">Statistics</Link>
                    <Link to="appliedJob">Applied Job</Link>
                    <Link to="blog">Blog</Link>
                </div>
                <button className='bg-purple-700 py-3 px-4 text-lg text-white rounded-lg'>Start Applying</button>
            </nav>
        </div>
    );
};

export default Header;