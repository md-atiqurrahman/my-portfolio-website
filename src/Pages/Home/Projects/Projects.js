import React from 'react';
import img from '../../../images/Projects/project-image.jpg';
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
                            <div className='text'>
                                <a href="https://jantrik-45dcd.web.app/">Live site</a>
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