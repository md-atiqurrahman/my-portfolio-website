import React from 'react';
import owner from '../../../images/Banner/formal.png';
import { Icon } from '@iconify/react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-[#0b1224] pt-[37px]'>
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
                <div className='w-[70%] text-center mb-[28px]'>
                    <p className='text-[#bfbecb] text-[18px] leading-[1.5] font-normal opacity-[1]'>I am a mern stack web developer. I can provide clean, re-useable and organized code. I can also make faster web application by using JavaScript only.</p>
                </div>
                <div>
                    <ul className='icon-container flex gap-4'>
                        <li className='flex justify-center items-center border border-[#bfbecb] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae]
                    hover:border-none'>
                            <a href="https://www.facebook.com/mdatiqur.rahaman.581/">
                                <Icon className='icon' icon="bxl:facebook" width="20" height="20" />
                            </a>
                        </li>
                        <li className='flex justify-center items-center border border-[#bfbecb] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae]
                    hover:border-none'>
                            <a href="https://www.linkedin.com/in/atiqur-rahman-akaid/">
                                <Icon className='icon' icon="bxl:linkedin-square" width="20" height="20" />
                            </a>
                        </li>
                        <li className='flex justify-center items-center border border-[#bfbecb] rounded-[4px] w-[38px] h-[38px] hover:bg-[#72e2ae]
                    hover:border-none'>
                            <a href="https://github.com/md-atiqurrahman">
                                <Icon className='icon' icon="ant-design:github-filled" width="20" height="20" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-end pt-[62px] pb-[80px]'>
                    <div className='arrow-container'>
                        <Icon className='arrow-icon' icon="akar-icons:arrow-down" width='14px' height='14px'/>
                    </div>
                    <p className='uppercase text-[12px] leading-[16px] cursor-pointer text-[#bfbecb] font-medium hover:text-primary ml-[3px]'>Scroll <span className='ml-[2px]'> Down</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;