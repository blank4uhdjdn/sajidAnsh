import React from 'react'
import { Link } from 'react-router-dom'


function Page5() {
  return (
    <div className=' size-max flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div  className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center'>
      <img  src="https://media1.tenor.com/m/5IwZW7QpyoYAAAAC/love-bubu-dudu.gif" alt="" />
            <h1 className='text-white text-xl mt-2 mb-2'>
                Good Penguin😚😋ho aap.
                Ab  aapke liye ek naya saal aane wala hai.

            </h1>
        <div className='flex  justify-between'>
            
            <div className='mr-4'>
                <Link to="/page6">
            <button className='btn btn-block text-white'>Theek hai pucho❤️</button>
            </Link>
            </div>
            
            <div>
                <Link to="/page5Dar">
            <button className='btn btn-block text-white'>dar lag raha hai😢</button> 
            </Link>  
            </div>
        </div>
    </div>
 
</div>
  )
}

export default Page5
