import React from 'react'
import { Link } from 'react-router-dom'

function Page3() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
          <img  src="https://media.tenor.com/BwMLjkJcwmYAAAAi/bubu-dudu-sseeyall.gif" alt="" />
                <h1 className='text-white text-xl mt-2 mb-2'>
                    Kiska bacha hai tu 🥹
                </h1>
            <div className='flex  justify-between'>
                <div className='mr-4'>
                  <Link to="/page4">
                <button className='btn btn-block text-white'>Aapka❤️</button>
                </Link>
                </div>
                <div>
                  <Link to="/page3No">
                <button className='btn btn-block text-white'>Pata Nahi😢</button>   
                </Link>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Page3
