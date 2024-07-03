import React from "react"

import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import WorkingPage from "./pages/WorkingPage/WorkingPage.jsx"
// import Footer2 from "./components/Footer2/Footer2.jsx"
import Header from "./components/Header/Header.jsx"
import Hsection from "./components/Hsection/Hsection.jsx"
function App() {
  return (
    <>
      <div className="w-full">
         <Navbar/> 
         <Outlet/>
         <Hsection/>
         <Header/>
         <Footer/>
        
         
      </div>
    </>
  )
}
 
export default App
