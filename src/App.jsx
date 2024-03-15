
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth/Auth'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
         <Toaster />
         <main className='container xl:max-w-screen-xl'>
         <Routes>
          <Route path='/auth' element={<Auth />} />
         </Routes>
         </main>
      </QueryClientProvider>
    </>
  )
}

export default App
