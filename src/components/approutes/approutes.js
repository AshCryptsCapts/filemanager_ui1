import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Filemanager from '../../pages/filemanager/filemanager'

export default function Approutes() {
  return (
    
        <Routes>
            <Route path='/FileManager' elements={<Filemanager/>}>

            </Route>
        </Routes>
  )
}
