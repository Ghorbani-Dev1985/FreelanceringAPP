
import { Toaster } from 'react-hot-toast'
import Index from './Components/index'
import { Route, Routes } from 'react-router-dom'
import Auth from './Features/Authentication/Authentication'


function App() {

  return (
    <>
     <Toaster />
         <Index />
         <Routes>
          <Route path='/auth' element={<Auth />} />
         </Routes>
    </>
  )
}

export default App
