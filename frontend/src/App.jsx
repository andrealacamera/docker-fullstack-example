import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <div className='m-auto w-full p-32'>

      <div className='p-8 flex flex-row gap-8'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl text-blue-500'>Vite + React</h1>
      <div className="p-8">
        <button className="bg-gray-700 text-gray-200 px-4 py-2 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
    </>
  )
}

export default App
