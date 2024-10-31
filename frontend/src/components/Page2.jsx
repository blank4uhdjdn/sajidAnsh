import React from 'react'
import { Link } from 'react-router-dom'

function Page2() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
          <img  src="https://media.tenor.com/tH0_jPwlDtYAAAAi/sseeyall-bubu-dudu.gif" alt="" />
                <h1 className='text-white text-xl mt-2 mb-2'>
                    Bol sath nahayegi ya nahi 😁
                </h1>
            <div className='flex  justify-between'>
                <div className='mr-4'>
                  <Link to="/page3">
                <button className='btn btn-block text-white'>Yes❤️</button>
                </Link>
                </div>
                <div>
                  <Link to="/page2No">
                <button className='btn btn-block text-white'>NO😢</button>  
                </Link> 
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Page2
