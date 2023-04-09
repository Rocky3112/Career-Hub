import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around items-center mt-6'>
                <h1 className='text-4xl font-semibold'>Job Hunts</h1>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="statistics">Statistics</Link>
                    <Link to="/">Applied Job</Link>
                    <Link to="/">Blog</Link>
                </div>
                <button className='bg-purple-700 p-4 rounded-lg'>Start Applying</button>
            </nav>
        </div>
    );
};

export default Header;