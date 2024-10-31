import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './components/page1'
import Page1No from './components/Page1No'
import Page2 from './components/page2'
import Page2No from './components/Page2No'
import Page3 from './components/Page3'
import Page3No from './components/Page3No'
import Page4 from './components/Page4'
import Page4Bhais from './components/Page4Bhais'
import Page5 from './components/Page5'
import Page5Dar from './components/Page5Dar'
import Page6 from './components/Page6'
import Page6App from './components/Page6App'
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
      <Router>
      <Routes className='p-4 h-screen flex items-center justify-center'>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1No" element={<Page1No />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page2No" element={<Page2No />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page3No" element={<Page3No />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page4Bhais" element={<Page4Bhais />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page5Dar" element={<Page5Dar />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page6App" element={<Page6App />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        
      </Routes>
    </Router>
        
      </div>
    </>
  )
}

export default App
