import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex relativ dark:bg-main-dark-bg">
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: '1000 ' }}
          ></div>
        </div>
      </Router>
    </div>
  )
}

export default App
