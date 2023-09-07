import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-[#0f172a] py-5 border-t border-[#ffffff26]'>
            <div className='w-[92%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-0'>
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
                <div>
                    <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>© {year}, All right reserved <strong className='text-primary'>Atiqur Rahman</strong> </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;