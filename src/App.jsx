
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './componants/Footer/Footer'

import NavBar from './componants/NavBar/NavBar'

import Home from './pages/Home'
import PropertiesPage from './pages/PropertiesPage'
import ContactUsPage from './pages/ContactUsPage'
import PropertyDetalisPage from './pages/PropertyDetalisPage'


function App() {
  

  return (
    <>
     <NavBar />
    <Routes >
      <Route path='/' element={<Home />} />
       <Route path='/properties' element={<PropertiesPage />} />
       <Route path='/propertydetails' element={<PropertyDetalisPage />}/>
       <Route path='/contactus' element={<ContactUsPage />} />
    </Routes>      
      <Footer />
    </>
  )
}

export default App
