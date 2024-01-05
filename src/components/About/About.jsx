import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';

const About = () => {

  return <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ============ About Image ========== */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>


                {/* ============ About Content ========== */} 

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations best.</h2>
                    <p className='text__para'>
                        For 30 years in a row, U.S. News & World Report has recognised us as one of the best public hospitals in the nation & Number 1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas sapiente, nulla porro possimus ipsa exercitationem doloremque, minus maiores quisquam veniam facilis quae dolorem praesentium inventore beatae iste dignissimos corporis.
                    </p>

                    <p className='text__para mt-[30px]'>
                        Our best is something we strive for each day, cring for our patiesnts, not looking at what we accomplished but what we can do tommorow. Providing the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed labore eum rem odio fugit voluptatibus cupiditate, magni recusandae assumenda laudantium aliquid quis perferendis minus. Eius repudiandae perferendis beatae consequuntur?
                    </p>

                    <Link to='/'>
                        <button className='btn'>
                            Learn More
                        </button>
                    </Link>
                </div>        

            </div>
        </div>
    </section>
}

export default About