import React from 'react';
import SkillCard from './SkillCard/SkillCard';
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
        <div className='circles flex justify-between gap-7 pb-[56px] w-[92%] mx-auto'>
          <SkillCard name='Front-end Development' value={90}></SkillCard>
          <SkillCard name='Back-end Development' value={80}></SkillCard>
          <SkillCard name='MERN Stack Development' value={100}></SkillCard>
        </div>
        <div className='grid grid-cols-2 gap-7  w-[92%] mx-auto'>
          <div>
            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
              Javascript -
              <span className='text-primary'> (85%)</span>
            </h5>
            <progress className="progress progress-primary w-full h-[16px]" value="75" max="100"></progress>
          </div>
          <div>
            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
              Node Js -
              <span className='text-primary'> (75%)</span>
            </h5>
            <progress className="progress progress-primary w-full h-[16px]" value="65" max="100"></progress>
          </div>
          <div>
            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
              React Js  -
              <span className='text-primary'> (95%)</span>
            </h5>
            <progress className="progress progress-primary w-full h-[16px]" value="80" max="100"></progress>
          </div>
          <div>
            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium mb-[12px]'>
              Express Js -
              <span className='text-primary'> (75%)</span>
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