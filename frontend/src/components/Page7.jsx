import React from 'react'
import { Link } from 'react-router-dom'

function Page7() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
          <img  src="https://media1.tenor.com/m/UCbhfUXlmrgAAAAC/dudu-love-bubu-love.gif" alt="" />
                <h1 className='text-white text-xl mt-2 mb-2'>
                    I LOVE YOU ❤️❤️
                </h1>
                <h1 className='text-white text-xl mt-2 mb-2'>
                    YOU ARE THE BEST ❤️❤️
                </h1>
                <h1 className='text-white text-xl mt-2 mb-2'>
                    I LOVE YOU MORE THAN WORDS CAN SAY ❤️❤️
                </h1>
                <h1 className='text-white text-xl mt-2 mb-2'>
                    Kab tak jawani chhupaogi rani kawaro ko kitna sataogi raani,kabhi to kisi ki nahi sirf meri dulahniya banogi ,mujse shadi karogi❤️
                </h1>
            <div className='flex  justify-between'>
                <div className='mr-4'>
                    <Link to="/page8">
                <button className='btn btn-block text-white'>Yes❤️</button>
                </Link>
                </div>
                <div>
                    <Link to="/page8">
                <button className='btn btn-block text-white'> Definintely Yes❤️</button>   
                </Link>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Page7
