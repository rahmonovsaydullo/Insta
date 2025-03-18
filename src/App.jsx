import { useState } from 'react'
import './App.css'
import SideBar from './sections/SiderBar/SideBar'
import Main from './sections/Main/Main';
import Aside from './sections/Aside/Aside';

function App() {


  return (
    <div className='flex'>
      <SideBar/>
      <Main/>
      <Aside/>
    </div>
  )
}

export default App
