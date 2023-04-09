import React from 'react';
import image from '../../../images/herosmall-employees.png'
import './Home.css'
import Statistics from '../../Statistics/Statistics';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <div className='flex'>
            <div className='p-20'>
                <h1 className='text-6xl '>One Step <br /> Closer To Your <br /> <span className='text-purple-700'>Dream Job</span></h1>
                <p className='pt-3 pb-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-purple-700 text-2xl text-white font-semibold rounded p-3'>Get Started</button>
            </div>
            <div>
                <img className='bannerImg p-10 rounded-lg pr-20' src={image} />
            </div>
        </div>
        <Categories></Categories>
        </div>
    );
};

export default Home;