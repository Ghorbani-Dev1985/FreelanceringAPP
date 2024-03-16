
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CompleteProfile from './Pages/CompleteProfile/CompleteProfile'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import AppLayout from './UI/AppLayout'
import Owner from './Pages/Owner/Owner'

const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
         <Toaster />
         <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/completeProfile' element={<CompleteProfile />} />
          <Route element={<AppLayout />}>
            <Route path='/owner' element={<Owner />} />
          </Route>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
         </Routes>
         <main className='container xl:max-w-screen-xl'>
         </main>
      </QueryClientProvider>
    </>
  )
}

export default App
