import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id='skills' className='bg-[#0f172a] pt-[128px]'>
            <div className='pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>My Skills</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-7 pb-[56px] w-[92%] mx-auto'>
                    <div className='card w-[291px] h-[205px] text-center'>
                        <div className='mb-[15px]'>
                            <div className="radial-progress text-primary" style={{ "--value": 95, "--size": '120px' }}><span className='text-[#fafafa]'>95%</span> </div>
                        </div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium'>Front-end Development</h5>
                    </div>
                    <div className='card w-[291px] h-[205px] text-center'>
                        <div className='mb-[15px]'>
                            <div className="radial-progress text-primary" style={{ "--value": 75, "--size": '120px' }}><span className='text-[#fafafa]'>75%</span> </div>
                        </div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium'>Back-end Development</h5>
                    </div>
                    <div className='card w-[291px] h-[205px] text-center'>
                        <div className='mb-[15px]'>
                            <div className="radial-progress text-primary" style={{ "--value": 85, "--size": '120px' }}><span className='text-[#fafafa]'>85%</span> </div>
                        </div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium'>MERN-stack Development</h5>
                    </div>
                    <div className='card w-[291px] h-[205px] text-center'>
                        <div className='mb-[15px]'>
                            <div className="radial-progress text-primary" style={{ "--value": 75, "--size": '120px' }}><span className='text-[#fafafa]'>75%</span> </div>
                        </div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium'>Full-stack Development</h5>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-7  w-[92%] mx-auto'>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Javascript -
                            <span className='text-primary'> (75%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="75" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Node Js -
                            <span className='text-primary'> (65%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="65" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            React Js  -
                            <span className='text-primary'> (80%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="80" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Express Js -
                            <span className='text-primary'> (70%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="70" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Html -
                            <span className='text-primary'> (95%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="95" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            MongoDB -
                            <span className='text-primary'> (75%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="75" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Css -
                            <span className='text-primary'> (95%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="95" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Tailwind Css -
                            <span className='text-primary'> (95%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="95" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            Bootstrap -
                            <span className='text-primary'> (95%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="95" max="100"></progress>
                    </div>
                    <div>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
                            daisyUi -
                            <span className='text-primary'> (95%)</span>
                        </h5>
                        <progress className="progress progress-primary w-full h-[16px]" value="95" max="100"></progress>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;