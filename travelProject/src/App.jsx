import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import Login from "./pages/Login"
import City from "./components/City"
import CountriesList from "./components/CountriesList"
import Form from './components/Form'
// import Navbar from './components/Navbar'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import { useEffect } from 'react'
import { CitiesProvider } from './contexts/CitiesContext'

function App() {
   
  
   return (
     <CitiesProvider>
       <BrowserRouter>
         <Routes>
           <Route index element={<Homepage />}></Route>
           <Route path="product" element={<Product />}></Route>
           <Route path="pricing" element={<Pricing />}></Route>
           <Route path="app" element={<AppLayout />}>
             <Route index element={<Navigate replace to="cities" />}></Route>
             <Route path="cities" element={<CityList />}></Route>
             <Route path="cities/:id" element={<City />}></Route>
             <Route
               path="countries"
               element={<CountriesList/>}
             ></Route>
             <Route path="form" element={<Form />}></Route>
           </Route>
           <Route path="login" element={<Login />}></Route>
           <Route path="form" element={<Form />}></Route>
           <Route path="*" element={<PageNotFound />}></Route>
         </Routes>
       </BrowserRouter>
     </CitiesProvider>
   );
}

export default App
