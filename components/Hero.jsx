import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import Button from './ui/Button';


const Hero = () => {
  return (
    <div id='hero' className=" min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 lg:pb-8 ">
      <div className=''>
      <Spotlight className='top-16  left-10 md:left-32 md:top-20 h-screen' fill="white"/>
      </div>
      
      <div className="flex flex-col items-center justify-start">
      <div className='-pt-10 md:-pt-32 md:pb-10  flex items-center text-center'><Button/></div>
        <MeteorDemo />
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
        <div className="text-center md:text-center md:px-4 md:w-1/2">
          <div className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white"
          >I'm a Data scientist with expertise in machine learning, statistical analysis, and data visualization. Passionate about transforming complex datasets into actionable insights, I thrive in collaborative environments where data-driven approaches solve meaningful problems.
          </div>
        </div>
      </div>

      <div>
          <TypewriterEffectSmoothDemo/>
      </div>
     
      {/* <div className='py-32 flex items-center justify-center'>
        <Link href="https://bento.me/karan-dev"><SafariDemo/></Link>
      </div> */}
      
    </div>

  )
}

export default Hero
