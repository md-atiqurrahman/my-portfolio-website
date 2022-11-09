import React from 'react';

const SkillCard = ({name, value}) => {

    return (
        <div className='card w-[291px] h-[205px] text-center'>
            <div className='mb-[15px]'>
                <div className="container">
                    <div className='circular-progress' style={{ background: `conic-gradient(#72e2ae  ${value * 3.6}deg, #ededed 0deg)`}}>
                        <span className='progress-value text-white'>
                            {value}%
                        </span>
                    </div>
                </div>
            </div>
            <h5 className='text-[#fafafa] text-[18px] leading-[1.5] font-medium'>
               {name}
            </h5>
        </div>
    );
};

export default SkillCard;