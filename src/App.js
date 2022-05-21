import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'

import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <div className="flex relativ dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000 ' }}>
            <TooltipComponent content="Settings" position="Top">
              <button>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
