import React from 'react';
import about from '../../../images/Banner/formal.jpg';
import { Icon } from '@iconify/react';
import './Banner.css';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <section className='bg-transparent md:bg-[#0b1224] lg:bg-[#0b1224] pt-[37px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='avatar'>
                    <div className='img-holder'>
                        <img src={about} alt="Atiqur Rahman" />
                    </div>
                </div>
                <h1 className='flex flex-col lg:flex-row items-center text-primary text-[28px] md:text-[46px] lg:text-[46px] leading-[1.2] font-bold mb-[20px]'>
                   <span className='text-white mr-[15px]'>Hi, I am </span>
                    <Typewriter
                        options={{
                            strings: ['Atiqur Rahman', 'MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div className='w-[70%] text-center mb-[28px]'>
                    <p className='text-[#bfbecb] text-[18px] leading-[1.5] font-normal opacity-[1]'>I am a MERN Stack Web Developer. I can provide clean, re-useable and organized code. I can also make faster web application by using ReactJS only.</p>
                </div>
                <div>
                    <ul className='icon-container flex gap-4'>
                        <Link to='//www.facebook.com/atiqur9104/' target='_blank'>
                            <li className='flex justify-center items-center border border-[#ffffff26] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae] hover:border-none'>
                                <Icon className='icon' icon="bxl:facebook" width="20" height="20" />
                            </li>
                        </Link>
                        <Link to='//www.linkedin.com/in/atiqur-rahman-akaid/' target='_blank'>
                            <li className='flex justify-center items-center border border-[#ffffff26] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae] hover:border-none'>
                                <Icon className='icon' icon="bxl:linkedin-square" width="20" height="20" />
                            </li>
                        </Link>
                        <Link to='//github.com/md-atiqurrahman' target='_blank'>
                            <li className='flex justify-center items-center border border-[#ffffff26] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae] hover:border-none'>
                                <Icon className='icon' icon="ant-design:github-filled" width="20" height="20" />
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex justify-center items-end pt-[62px] pb-[47px]'>
                    <div className='arrow-container'>
                        <Icon className='arrow-icon' icon="akar-icons:arrow-down" width='14px' height='14px' />
                    </div>
                    <p className='uppercase text-[12px] leading-[16px] cursor-pointer text-[#bfbecb] font-medium hover:text-primary ml-[3px]'>Scroll <span className='ml-[2px]'> Down</span></p>
                </div>
            </div>
        </section>
    );
};

export default Banner;