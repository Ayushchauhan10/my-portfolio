import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Experience = () => {
    const { theme } = useContext(GlobalContext);
    const gradientColors = theme === 'light' 
    ? 'bg-gradient-to-r from-gray-300 to-gray-500' 
    : 'bg-gradient-to-r from-lightBg to-darkBg';

    const gradientColors2 = theme === 'light' 
    ? 'bg-gradient-to-b from-gray-300 to-gray-500' 
    : 'bg-gradient-to-b from-lightBg to-darkBg';

    
    return (
        <div className='w-vw flex flex-col gap-3 my-3 items-center w-full px-3 '>

        <h1 className={`flex flex-row  mt-[50px]  items-center justify-center text-[40px] gap-2  lg:mt-10 font-black my-5`}> Work 
            <span className={`${theme==='light'? 'text-lightTheme' : 'text-darkTheme' }`}> Experience</span>
        </h1>

        <div className='w-[370px] lg:w-[700px] flex flex-row items-center justify-start '>
            <div className={`w-[8px] h-[350px] ${gradientColors} rounded-full `} />
            <div className={`w-[100%] group flex flex-row items-center justify-start relative `}>
                       <span className={`w-[20px] h-[20px] absolute -left-[14px] rounded-full ${theme==='light'?'group-hover:bg-lightTheme border-4 border-lightTheme bg-lightBg':'group-hover:bg-darkTheme border-4 border-darkTheme bg-darkBg'} transition-colors duration-200`}/>

                       <div className={`w-[40px] lg:w-[100px] h-[8px] ${gradientColors2}  `}/>

                       <div className={`box2 w-full px-6 py-4 rounded-3xl flex flex-col items-start justify-start gap-3 hover:-translate-y-2 transition-transform duration-300 ease-in-out`}>


                       <div className={` text-xs rounded-2xl px-2 py-0.5 ${theme==='light'?'bg-gray-400 text-white':'bg-gray-600 text-white'} `}>Jan 2025 - Jun 2025</div>

                            <div className='w-[100%] flex flex-row items-center justify-between'>

                                <div className={`w-auto text-left  lg:text-xl font-black ${theme==='light'?'text-lightTheme':'text-darkTheme'}`}>
                                    SDE Intern - 6 Month | Amazon
                                    
                                    <div className={`hidden lg:block w-full text-xs lg:text-sm italic text-left font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}> Hyderabad, India</div>
                                    <div className={` block lg:hidden w-full text-xs lg:text-sm italic text-left font-normal ${theme==='light'?'text-greyText':'text-lightBg'} `}> Hyd, India</div>
                                </div>

                            </div>

                            
                            <div className={`font-semibold text-xs lg:text-sm ${theme==='light'?'text-gray-500':'text-darkTheme'}`}>
                                Telemetry - InvoiceValidatorService
                                
                            <div className={`font-medium text-xs lg:text-normal mt-1 ${theme==='light'?'text-greyText':'text-white'}`}>

                            Built an in-service telemetry pipeline using DynamoDB, SQS, Lambda, Firehose, and S3 to store critical
                            invoice validation data (JSON) for 4M+ invoices/month (~100 GB), with zero impact on core service
                            performance and architecture.

                            
                            </div>
                            </div>


                            <div className={`font-semibold text-xs lg:text-sm ${theme==='light'?'text-gray-500':'text-darkTheme'}`}>
                                Automated Test Suites
                                
                            <div className={`font-medium text-xs lg:text-normal mt-1 ${theme==='light'?'text-greyText':'text-white'}`}>

                            Designed and developed automated load and regression test suites with complete LLD, integrated into
                            CI/CD pipeline successfully testing upto 150K+ transactions in 5 minutes across most possible scenarios.
                            </div>
                            </div>
                            <div className='text-xs lg:text-normal'>
                               <li> Delivered 3+ projects and shipped 20+ CRs to production, focusing on validation logic, system
                                performance, and reliability, and implemented the critical Line Item Sum validation rule. Led LLD and
                                CDK infrastructure for scalable, event-driven telemetry and testing workflows.
                                </li>
                                <li>Tech stack: Java, Spring, Google Guice, AWS CDK, DDB, SQS, SNS, Lambda, Firehose, S3.</li>
                            </div>

                       </div>
            </div>
        </div>



        
        

        
        </div>
    );
}

export default Experience;
