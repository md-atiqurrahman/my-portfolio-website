import React from 'react';
import img from '../../../images/Projects/project-image.jpg';
import { Icon } from '@iconify/react';
import './Projects.css';

const Projects = () => {
    return (
        <div className='bg-[#0f172a] pb-[128px]'>
            <div className='pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>My Projects</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className='w-[92%] mx-auto'>
                <div className='project-card w-[397px] h-[358px] relative'>
                    <div className='img-area'>
                        <img src={img} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='icon-container flex justify-between'>
                            <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                    <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                        Live Site
                                    </span>
                                    <Icon icon="bi:eye" width="28" height="20" color='#0b1224'/>
                                </button>
                                <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                    <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                        Client Side
                                    </span>
                                    <Icon icon="logos:github" width="28" height="20" color='#0b1224'/>
                                </button>
                                <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                    <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                        Server Side
                                    </span>
                                    <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224'/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Jantrik</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>Carpentry Tools Manufacturers website</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;