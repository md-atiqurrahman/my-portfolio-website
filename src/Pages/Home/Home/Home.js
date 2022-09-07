import React from 'react';
import owner from '../../../images/MyPortfolio/formal.png';
import './Home.css';


const Home = () => {
    return (
        <div className='bg-[#0b1224] pt-[37px] pb-[100px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='avatar'>
                    <div className='img-holder'>
                        <img src={owner} alt="" />
                    </div>
                </div>
                <h1 className='text-primary text-[46px] leading-[1.2] font-bold mb-[20px]'>
                    <span className='text-white'>Hi, I am </span>
                    Atiqur Rahman
                </h1>
                <div className='w-[70%] text-center'>
                    <p className='text-[#bfbecb] text-[18px] leading-[1.5] font-normal opacity-[1]'>I am a mern stack web developer. I can provide clean, re-useable and organized code. I can also make faster web application by using JavaScript only.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;