import React from 'react';
import { Icon } from '@iconify/react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className='bg-[#0f172a] pb-[128px]'>
            <div className='pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>Contact Me</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className=' w-[92%] mx-auto'>
                <h4 className='text-[#fafafa] text-[22px] leading-[1.2] font-semibold mb-[12px]'>Contact Information</h4>
                <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal mb-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis, iusto harum possimus non praesentium qui facere.</p>
                <span className='inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20'></span>
                <div>
                    <div className='bg-[#162033] w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5'>
                        <div className='inline-flex justify-center items-center h-16 w-16 bg-primary bg-opacity-10 rounded-full text-primary mr-4'>
                            <Icon icon="charm:phone" width="26" height="26" />
                        </div>
                        <div>
                            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]'>Contact on phone</h5>
                            <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>+8801784009104</p>
                            <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>+8801773204011</p>
                        </div>
                    </div>
                    <div className='bg-[#162033] w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5'>
                        <div className='inline-flex justify-center items-center h-16 w-16 bg-primary bg-opacity-10 rounded-full text-primary mr-4'>
                            <Icon icon="ant-design:mail-outlined" width="26" height="26" />
                        </div>
                        <div>
                            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]'>Contact on gmail</h5>
                            <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>mdatiqurrahman9104@gmail.com</p>
                            <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>mdatiqurrahman4011@gmail.com</p>
                        </div>
                    </div>
                    <div className='bg-[#162033] w-[539px] h-auto p-5 border border-[#ffffff26] rounded-[8px] backdrop-blur-[12px] flex flex-start mt-5'>
                        <div className='inline-flex justify-center items-center h-16 w-16 bg-primary bg-opacity-10 rounded-full text-primary mr-4'>
                            <Icon icon="akar-icons:location" width="26" height="26" />
                        </div>
                        <div>
                            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[8px]'>Contact address</h5>
                            <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>Osmanpur, Pirganj, Rangpur, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;