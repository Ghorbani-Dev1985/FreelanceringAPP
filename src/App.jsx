
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CompleteProfile from './Pages/CompleteProfile/CompleteProfile'

const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
         <Toaster />
         <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/completeProfile' element={<CompleteProfile />} />
         </Routes>
         <main className='container xl:max-w-screen-xl'>
         </main>
      </QueryClientProvider>
    </>
  )
}

export default App
