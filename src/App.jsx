import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Agent from './Pages/Agentform/Agent'
import Treasure from './Pages/Treasureslistpage/Treasure'
import Services from './Pages/Services/Services'
import Flippage from './Pages/Flippage/Flippage'
import Footer from './Components/Footer/Footer'
import Accordion from './Components/Accordion/Accordion'




function App() {


  return (
        <BrowserRouter>
        {/* <main> */}
           {/* <Footer />    */}
            {/* <Accordion/>  */}
           {/* <Navbar2/> */}
          
            <Routes>
            <Route index element={<Home/>}/>
            <Route path= "about" element={<About/>}/>
            <Route path= "agentform" element={<Agent/>}/> 
            <Route path= "tresureslistpage" element={<Treasure/>}/> 
            <Route path= "services" element={<Services/>}/> 
            <Route path= "flippage" element={<Flippage/>}/> 
            
          </Routes>  
        {/* </main> */}
        </BrowserRouter>
  )
}

export default App
