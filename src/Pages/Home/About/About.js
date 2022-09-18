import React from 'react';
import img from '../../../images/About/About image.jpg';
import './About.css';

const About = () => {
    return (
        <div className='bg-[#0f172a]'>
            <div className='pt-[128px] pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>About Me</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className="hero relative">
                <div className="hero-content flex-col lg:flex-row pt-0 pb-[128px] items-center gap-7">
                    <img src={img} className="w-[590px] h-[377px] rounded-lg shadow-2xl" alt='Atiqur Rahman' />
                    <div>
                        <h1 className='text-primary text-[26px] leading-[1.3] font-semibold mb-[12px]'>
                            <span className='text-white'>Hi, I am </span>
                            Atiqur Rahman
                        </h1>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>First Name </strong>
                                </div>
                                : Atiqur
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Last Name </strong>
                                </div>
                                : Rahman
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Age </strong>
                                </div>
                                : 22 years
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Nationality </strong>
                                </div>
                                : Bangladeshi
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Languages </strong>
                                </div>
                                : Bangla, Hindi, English
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Address </strong>
                                </div>
                                : Osmanpur, Pirganj, Rangpur, Bangladesh
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[12px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Hire </strong>
                                </div>
                                : Available
                            </div>
                        </div>
                        <button className="resume-btn">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;