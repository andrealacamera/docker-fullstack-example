import React from 'react'

const Root = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-gray-200 text-gray-900'>
      <header className='flex flex-row justify-between items-center w-full bg-gray-900 text-gray-100'>
        <img className='w-32 p-4' src='/vite.svg'></img>
        <section className='flex flex-row gap-4 pr-4'>
            <p>Home</p> | 
            <p>Page 1</p>
        </section>
      </header>
      <h1 className='text-4xl'>ROOT!</h1>      
    </div>
  )
}

export default Root