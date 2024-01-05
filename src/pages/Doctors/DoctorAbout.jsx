// import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About 
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Shah Rukh Khan</span>
            </h3>

            <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit ea eum sint quidem hic aspernatur. Mollitia aliquam quasi earum labore amet reiciendis veritatis vitae beatae, ipsam tempora minus facere.</p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md-gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate('04-10-2002')} - {formatDate('06-18-2006')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            M.Tech in Quantum Rizzics 
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, Wakanda. 
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md-gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate('04-17-2000')} - {formatDate('02-10-2002')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Diploma in Vampire Hunting 
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Vampire School, Banglore. 
                    </p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md-gap-5 mb-[30px]">
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formatDate('06-22-1996')} - {formatDate('01-17-2000')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            B.Tech in Procrastinantion 
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                       Government Medical College, Sokovia. 
                    </p>
                </li>
            </ul>
        </div>

        <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formatDate('04-10-2002')} - {formatDate('06-18-2006')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon 
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                       Government Medical College, Sokovia. 
                    </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formatDate('04-10-987')} - {formatDate('06-18-1123')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Explosives Engineer 
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                       Department of Defence, Morag. 
                    </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formatDate('09-10-2221')} - {formatDate('06-18-2231')}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Chief Magician 
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                       School of Magic, Hogwarts. 
                    </p>
            </li>

        </ul>
        </div>
    </div>
  )
}

export default DoctorAbout