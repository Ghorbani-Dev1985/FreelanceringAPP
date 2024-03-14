
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'



function App() {

  return (
    <>
     <Toaster />
         <main className='container xl:max-w-screen-xl'>
         <Routes>
          <Route path='/auth' element={<Auth />} />
         </Routes>
         </main>
    </>
  )
}

export default App
