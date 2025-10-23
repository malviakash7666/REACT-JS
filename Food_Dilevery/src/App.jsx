import React from 'react'
import Home from './pages/Home'
 import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='h-screen'>
      <Home />
      <ToastContainer   position="top-center"  toastClassName="custom-toast" />
    </div>
  )
}

export default App