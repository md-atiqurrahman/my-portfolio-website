import React from 'react';

const SkillCard = ({ name, value }) => {

    window.onload = () => {
        const circularProgress = document.querySelectorAll('.circular-progress');
        const progressValue = document.querySelectorAll('.progress-value');

        circularProgress.forEach((circle, index) => {
            let startValue = 0,
                speed = 30

            let endValue;
            if (index === 0) {
                endValue = 90
            }
            if (index === 1) {
                endValue = 85
            }
            if (index === 2) {
                endValue = 100
            }
            if (index === 3) {
                endValue = 95
            }

            const progress = setInterval(() => {
                startValue++

                progressValue[index].innerHTML = `${startValue}%`;
                circle.style.background = `conic-gradient(#72e2ae ${startValue * 3.6}deg, #ededed 0deg)`;

                if (startValue === endValue) {
                    clearInterval(progress)
                }
            }, speed)
        })
    }
    return (
        <div className='card w-[340px] h-[205px] text-center'>
            <div className='mb-[15px]'>
                <div className="container">
                    <div className='circular-progress' style={{ background: `conic-gradient(#72e2ae  ${value * 3.6}deg, #ededed 0deg)` }}>
                        <span className='progress-value text-white'>
                            {value}
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