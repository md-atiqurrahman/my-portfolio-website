import React from 'react';
import img from '../../../images/About/About image.jpg';
import './About.css';

const About = () => {
     
    const handleDownload = () =>{
       fetch('resume.pdf')
       .then(res =>{
        res.blob().then(blob =>{
            const fileUrl = window.URL.createObjectURL(blob);
            let aLink = document.createElement('a');
            aLink.href = fileUrl;
            aLink.download = 'resume.pdf';
            aLink.click();
        })
       })
    }

    return (
        <section id='about' className='bg-[#0f172a] h-auto'>
            <div className='pt-[75px] md:pt-[100px] lg:pt-[128px] pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>About Me</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className="hero relative">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-7 content-center w-[96%] md:w-[92%] lg:w-[92%] mx-auto pt-0 pb-0 px-0">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='relative border-[10px] rounded-lg border-primary border-opacity-20'>
                            {/* <span className='bottom-anime absolute top-auto left-auto -bottom-2.5 h-2.5 w-10 rounded-full bg-gradient-to-r from-primary to-transparent'></span>
                            <span className='left-anime absolute top-auto -left-2.5 h-10 w-2.5 rounded-full bg-gradient-to-b from-primary to-transparent'></span>
                            <span className='top-anime absolute right-auto -top-2.5 h-2.5 w-10 rounded-full bg-gradient-to-l from-primary to-transparent'></span>
                            <span className='right-anime absolute bottom-auto -right-2.5 h-10 w-2.5 rounded-full bg-gradient-to-t from-primary to-transparent'></span> */}
                            <img src={img} className=" w-auto h-auto rounded-lg shadow-2xl" alt='Atiqur Rahman' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-primary text-[26px] leading-[1.3] font-semibold mb-[12px]'>
                            <span className='text-white'>Hi, I am </span>
                            Atiqur Rahman
                        </h1>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex  ml-[24px]'>
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
                                : 23 years
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
                                <div>
                                : Bangla, <span className='hidden md:inline-block lg:inline-block'>Hindi,</span> English
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[4px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Address </strong>
                                </div>
                                :<span className='inline-block md:hidden lg:hidden'>5470,</span> <span className='hidden md:inline-block lg:inline-block ml-[5px]'>Osmanpur, Pirganj, Rangpur,</span> Bangladesh
                            </div>
                        </div>
                        <div className='flex items-center text-[18px] leading-[1.5]
                             text-[#bfbecb] mb-[12px]'>
                            <div className='list-circle'></div>
                            <div className='flex ml-[24px]'>
                                <div className='w-[120px]'>
                                    <strong>Contact </strong>
                                </div>
                                : <span  className='hidden md:flex lg:flex ml-[5px]'>+88</span>01784009104
                            </div>
                        </div>
                        <button onClick={handleDownload} className="resume-btn">Download Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;