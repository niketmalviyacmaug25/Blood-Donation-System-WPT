import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavigationBar} from './components/NavigationBar.jsx'
import { Home } from './components/Home.jsx'
import { Contact } from './components/contact.jsx'
import { About } from './components/About.jsx'
import {Login} from './components/login.jsx'

function App() {

  return (
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Contact' element={< Contact/>  } />
      <Route path='/About' element={ <About/>  } />
      <Route path='/Login' element={ <Login/>  } />
    </Routes>
    
    </BrowserRouter>
   
  )
}

export default App
