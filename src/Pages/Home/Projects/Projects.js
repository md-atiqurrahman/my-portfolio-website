import React from 'react';
import img1 from '../../../images/Projects/Jantrik Demo image.png';
import img2 from '../../../images/Projects/Fitness store demo image.png';
import img3 from '../../../images/Projects/Catering demo image.png';
import img4 from '../../../images/Projects/Doctors portal.png';
import img5 from '../../../images/Projects/Convention center demo.png';
import img6 from '../../../images/Projects/iPhone demo.png';
import { Icon } from '@iconify/react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section id='projects' className='bg-[#0f172a] pt-[128px]'>
            <div className='pb-[56px] text-center '>
                <h1 className='text-[36px] leading-[1.2] uppercase font-bold text-white mb-[20px]'>My Projects</h1>
                <div className='title-divider bg-primary bg-opacity-20 w-32 h-1.5 mx-auto rounded'>
                    <div className='circle bg-[#00ff89] border rounded-full w-1.5 h-full bg-opacity-100'></div>
                </div>
            </div>
            <div className='w-[95.7%] mx-auto grid grid-cols-3 justify-items-center gap-7'>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img1} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-between'>
                                <Link to='//jantrik-45dcd.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/jantrik-client-side' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/jantrik-server-side' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Server Side
                                        </span>
                                        <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Jantrik</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) Carpentry Tools Manufacturers website for wholesale and manage different items of carpentry tools.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img2} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-between'>
                                <Link to='//gym-equipment-store.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/gym-equipment-client-side' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/gym-equipment-server-side' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Server Side
                                        </span>
                                        <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Fitness Store</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) gym equipment stocks management website for store and manage different items of gym equipment.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img3} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-evenly'>
                                <Link to='//independent-service-prov-47fa3.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/independent-service-provider' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Catering By Ozdemir</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (front-end & responsive) independent catering services providing website for serve different catering services.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img4} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-between'>
                                <Link to='//doctors-portal-ab5c7.web.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/Doctors-portal-client' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/Doctors-portal-server-side' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Server Side
                                        </span>
                                        <Icon icon="akar-icons:github-fill" width="20" height="18" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Doctors Portal</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (full-stack & responsive) Doctors appointment taking and patient management website.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img5} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-evenly'>
                                <Link to='//convention-center-miami.netlify.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/convention-center' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>Miami Convention Center</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (front-end & responsive) Convention center website for convention center details and subscription plans.</p>
                    </div>
                </div>
                <div className='project-card w-[362px] h-[326px] relative'>
                    <div className='img-area'>
                        <img src={img6} alt="" />
                        <div className='overlay overlayLeft'>
                            <div className='project-icon flex justify-evenly'>
                                <Link to='//celebrated-cranachan-1673b7.netlify.app/' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Live Site
                                        </span>
                                        <Icon icon="bi:eye" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                                <Link to='//github.com/md-atiqurrahman/lucky-one' target='_blank'>
                                    <button className='bg-primary rounded-full w-[65px] h-[65px] flex flex-col justify-center items-center'>
                                        <span className='text-[8px] text-[#0b1224] font-[900] uppercase'>
                                            Client Side
                                        </span>
                                        <Icon icon="logos:github" width="28" height="20" color='#0b1224' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 text-justify'>
                        <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium '>iPhone-Apple Store</h5>
                        <p className='text-[#fafafa] text-[16px] leading-[1.6] font-normal'>A (front-end & responsive) iPhone-Apple store website for randomly select a phone model.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;