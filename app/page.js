"use client"

import Photo from '@/components/photo'
import Socials from '@/components/socials'
import Stats from '@/components/stats'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='mx-auto container h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>
            Frontend Developer | Designing User-Friendly Web Applications
            </span>
            <h1 className='h1 mb-6'>
              Hello I'm <br /> <span className='text-accent'>Qoribul Mujib</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
            I am a Frontend Developer at PT. SMOOETS, a technology outsourcing company that provides web and mobile development services to clients across various industries. I use React JS, Redux.js, and Redux Thunk to build engaging and responsive web applications that meet the client's needs and expectations. 
            </p>


            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download cv</span>
                <FiDownload className='text-xl' />
              </Button>

              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles="flex flex-row gap-6"
                  iconStyles="w-9 h-9 border-accent border-[0.1px] rounded-full p-2 hover:bg-accent text-base flex justify-center items-center text-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none py-4 xl:py-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
