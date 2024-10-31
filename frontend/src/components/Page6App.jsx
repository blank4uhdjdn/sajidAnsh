import React from 'react'
import { Link } from 'react-router-dom'

function Page6App() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
      <img  src="https://media.tenor.com/XYNAZNFx910AAAAi/bubu-onetwo.gif" alt="" />
            <h1 className='text-white text-xl mt-2 mb-2'>
                Chal Jhoothi 😒
            </h1>
        <div className='flex  justify-between'>
            <div className='mr-4'>
                <Link to="/page7">
            <button className='btn btn-block text-white'>Acha theek hai mai hoon 😋</button>
            </Link>
            </div>
           
        </div>
    </div>
 
</div>
  )
}

export default Page6App
