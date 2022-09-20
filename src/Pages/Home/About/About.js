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
        <section className='bg-[#0f172a]'>
            <div className='pt-[128px] pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>About Me</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className="hero relative">
                <div className="hero-content grid grid-cols-2 gap-7 w-[92%] mx-auto pt-0 pb-[128px] px-0 ">
                    <div className='overflow-hidden rounded-lg'>
                        <div className='relative border-[10px] rounded-lg border-primary border-opacity-20'>
                            <span className='bottom-anime absolute top-auto left-auto -bottom-2.5 h-2.5 w-10 rounded-full bg-gradient-to-r from-primary to-transparent'></span>
                            <span className='left-anime absolute top-auto -left-2.5 h-10 w-2.5 rounded-full bg-gradient-to-b from-primary to-transparent'></span>
                            <span className='top-anime absolute right-auto -top-2.5 h-2.5 w-10 rounded-full bg-gradient-to-l from-primary to-transparent'></span>
                            <span className='right-anime absolute bottom-auto -right-2.5 h-10 w-2.5 rounded-full bg-gradient-to-t from-primary to-transparent'></span>
                            <img src={img} className="w-[590px] h-[377px] rounded-lg shadow-2xl" alt='Atiqur Rahman' />
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
                        <button onClick={handleDownload} className="resume-btn">Download Resume</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;