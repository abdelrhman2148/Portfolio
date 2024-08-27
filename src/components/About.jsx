import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Abdelrhman Fikri, nice meeting you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm driven by creating effective DevOps solutions that streamline operations and enhance system performance.
                            From automating deployments to managing infrastructure, I’m here to help businesses achieve their tech goals.

                            What could we achieve with a dedicated DevOps Engineer on your team?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;