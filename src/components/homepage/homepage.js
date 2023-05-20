import React from 'react'
import Approutes from '../approutes/approutes'

import './homepage.css'
import Navbar from '../navbar/navbar'
import Filemanager from '../../pages/filemanager/filemanager'

export default function Homepage() {
  return (
    <div className='container homepage'>
    <Approutes/>
    <Navbar />
    <Filemanager />
    </div>
  )
}
