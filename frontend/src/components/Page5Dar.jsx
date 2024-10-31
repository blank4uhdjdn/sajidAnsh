import React from 'react'
import { Link } from 'react-router-dom'


function Page5Dar() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
          <img  src="https://media.tenor.com/fBjCdFDOYQwAAAAi/bubu-dudu-sseeyall.gif" alt="" />
                <h1 className='text-white text-xl mt-2 mb-2'>
                    Darte bahut ho aap 🥹😒 
                </h1>
            <div className='flex  justify-between'>
                
                <div>
                    <Link to="/page6">
                <button className='btn btn-block text-white'>Nahi ji 😑</button> 
                </Link>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Page5Dar
