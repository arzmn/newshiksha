import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Iitjee } from './pages/Iitjee'
import {Navbar} from './components/Navbar'
import {Internship} from './pages/Internship'
import {Collapsible} from './pages/Collapsible'
import { Overseas } from './pages/Overseas'
import { Carousel } from './components/Carousel'


function App(){
  return(
    
    <>
    <Navbar/>
    <Container>
      
      <Routes>
        <Route path="/" element ={<Iitjee/>} />
        <Route path="/internship" element ={<><Internship/><Collapsible/></>}/>
        <Route path="/overseas" element ={<><Carousel/><Overseas/></>} />

      </Routes>
    </Container>
    </>
  )
}
  
export default App
