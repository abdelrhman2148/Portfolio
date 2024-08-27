import React from 'react';


import API from '../assets/api-penetration-testing.png';
import DevNet from '../assets/devnet-associate.png';
import AWS from '../assets/aws.png';
import CICD from '../assets/cicd.png';
import GitHub from '../assets/github.png';
import Splunk from '../assets/icons8-splunk-480.png';
import COMP from '../assets/comptia.png';
import Python from '../assets/python.png';
import CCNA from '../assets/ccna-enterprise-networking-security-and-automation.png';
import CybOps from '../assets/cyberops-associate.png';
import ISC2 from '../assets/isc2-candidate.png';
import Terraform from '../assets/terraform.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500 '>Skills</p>
                    <p className='py-4'> These are the Certifications and Skills that I have</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={API} alt="HTML icon" />
                        <p className='my-4'>Api Penetration Testing</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={DevNet} alt="HTML icon" />
                        <p className='my-4'>DevNet Associate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                        <p className='my-4'>AWS Certified Solutions Architect Associate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={COMP} alt="HTML icon" />
                        <p className='my-4'>CompTIA Network+</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                        <p className='my-4'>Scripting & Automation</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CCNA} alt="HTML icon" />
                        <p className='my-4'>CCNA Enterprise Networking Security And Automation</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ISC2} alt="HTML icon" />
                        <p className='my-4'>ISC2 Candidate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CybOps} alt="HTML icon" />
                        <p className='my-4'>Cyberops Associate</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Terraform} alt="HTML icon" />
                        <p className='my-4'>Infrastructure as Code Tools</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>Virsion Control</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CICD} alt="HTML icon" />
                        <p className='my-4'>Automation & Tooling</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Splunk} alt="HTML icon" />
                        <p className='my-4'>Monitoring & Alerting</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;