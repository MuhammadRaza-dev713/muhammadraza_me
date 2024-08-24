import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col'>
    <div className=" bg-gray-100 h-screen flex flex-col items-center">
        {/* top Heading Div */}
      <div className='mt-10 text-center'>
      <h1 className='font-bold text-3xl text-gray-500'>Skills</h1>
      <p className='text-gray-400 text-md'>My Technical Level</p>
      </div>
      {/*frontend main content div */}
      <div className='w-full  flex justify-center mt-10 gap-10 '>
      <div className='bg-white flex flex-col py-8 px-10 rounded-lg shadow-2xl'>
            <div className='text-center'><h1 className='text-xl font-semibold text-gray-600 pb-5'>Frontend</h1></div>
            {/* skills type div */}
            <div className='flex gap-10'>
                {/* left div */}
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>HTML/CSS</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Javascript</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>React/Nextjs</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                </div>
                {/* right div */}
                <div className=' flex flex-col gap-8'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Tailwind CSS</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Angular</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>API's Integration</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                </div>
            </div>
      </div>
      {/*backend main content div */}
      <div className='bg-white flex flex-col py-8 px-10 rounded-lg shadow-2xl'>
            <div className='text-center'><h1 className='text-xl font-semibold text-gray-600 pb-5'>Backend</h1></div>
            {/* skills type div */}
            <div className='flex gap-10'>
                {/* left div */}
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Nodejs</h1>
                        <p className='text-gray-300 text-sm'>Basic</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Mongo Db</h1>
                        <p className='text-gray-300 text-sm'>Basic</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Git</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                </div>
                {/* right div */}
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Expressjs</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>solidity</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <h1 className='font-semibold text-gray-600'>Smart Contract</h1>
                        <p className='text-gray-300 text-sm'>Intermediate</p>
                    </div>
                </div>
            </div>
      </div>
      </div>
      </div>
      {/* ----------------------------- */}
      <div className='flex items-center bg-gray-100 justify-center'>
      <div className='flex flex-col items-center '>
      {/* top Heading Div */}
      <div className='mt-20 text-center'>
      <h1 className='font-bold text-3xl text-gray-500'>Qualification</h1>
      <p className='text-gray-400 text-md'>My personal journey</p>
      </div>
      {/* main heading div */}
      <div className='flex mt-20 mb-5'>
            <div className='flex gap-20'>
                <h1 className='text-gray-900 font-semibold text-2xl'>Experience</h1>
                <h1 className='text-gray-900 font-semibold text-2xl'>Education</h1>

            </div>
      </div>
      {/* qualification section */}
      <div className=' w-full flex flex-col '>
      <span className='absolute ml-[148px]  rounded-full bg-gray-500 h-3 w-3'></span>

            <div className=' flex  '>  
                <span className='absolute ml-[148px] mt-[105px] rounded-full bg-gray-500 h-3 w-3'></span>
                {/* left div */}
                <div className=' border-r-[1px] border-r-black  flex flex-col  pr-6 px-4 pb-10'>
                    <h1 className='text-gray-500 font-semibold' >MEAN Stack</h1>
                    <h1>Developer</h1>
                    <p className='text-gray-300 text-sm'>Cloud City - Dubai</p>
                </div>
                {/* right div */}
                <div className=''></div>
            </div>


            <div className=' flex '>
            <span className='absolute ml-[148px] mt-[105px] rounded-full bg-gray-500 h-3 w-3'></span>

                {/* left div */}
                <div className='flex flex-col gap-1 bg-yellow-400 ml-[153px] '>
                   
                </div>
                {/* right div */}
                <div className='border-l-[1px] border-l-black    flex flex-col pr-6 px-4 pb-10'>
                <h1 className='text-gray-500 font-semibold' >MEAN Stack</h1>
                    <h1>Developer</h1>
                    <p className='text-gray-300 text-sm'>Cloud City - Dubai</p>
                </div>
            </div>

            <div className=' flex '>
            <span className='absolute ml-[148px] mt-[105px] rounded-full bg-gray-500 h-3 w-3'></span>

                {/* left div */}
                <div className='border-r-[1px] border-r-black  flex flex-col  pr-6 px-4 pb-10'>
                    <h1 className='text-gray-500 font-semibold' >MEAN Stack</h1>
                    <h1>Developer</h1>
                    <p className='text-gray-300 text-sm'>Cloud City - Dubai</p>
                </div>
                {/* right div */}
                <div className=''></div>
            </div>

            <div className=' flex '>
            <span className='absolute ml-[148px] mt-[100px] rounded-full bg-gray-500 h-3 w-3'></span>

                {/* left div */}
                <div className='flex flex-col gap-1 pl-[153px]'>
                   
                </div>
                {/* right div */}
                <div className='border-l-[1px] border-l-black  flex flex-col pr-6 px-3 pb-10'>
                <h1 className='text-gray-500 font-semibold' >Sheloo Stack</h1>
                    <h1>Developer</h1>
                    <p className='text-gray-300 text-sm'>Cloud City - Dubai</p>
                </div>
            </div>

            <div className=' flex '>
                
                {/* left div */}
                <div className='border-r-[1px] border-r-black  flex flex-col pr-6 px-4 pb-10'>
                    <h1 className='text-gray-500 font-semibold' >MEAN Stack</h1>
                    <h1>Developer</h1>
                    <p className='text-gray-300 text-sm'>Cloud City - Dubai</p>
                </div>
                {/* right div */}
                <div className=''></div>
            </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Skills