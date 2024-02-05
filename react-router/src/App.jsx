import {  Route, Routes } from "react-router-dom"
import React from "react";
import Home from "./components/Home"
// import AboutUs from "./components/AboutUs"
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import AuthProvider from "./components/Auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyLoading = React.lazy(()=>import('./components/AboutUs'));

function App() {
   return (
     <>
       <AuthProvider>
         <NavBar></NavBar>
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route
             path="aboutus"
             element={
               <React.Suspense fallback="Loading...">
                 <LazyLoading />
               </React.Suspense>
             }
           ></Route>
           <Route path="order-summary" element={<OrderSummary />}></Route>
           <Route path="products" element={<Products />}>
             <Route index element={<FeaturedProducts />}></Route>
             <Route path="featured" element={<FeaturedProducts />}></Route>
             <Route path="new" element={<NewProducts />}></Route>
           </Route>
           <Route path="users" element={<Users />}>
             <Route path=":userId" element={<UserDetails />}></Route>
             <Route path="admin" element={<Admin />}></Route>
           </Route>
           <Route
             path="profile"
             element={
               <RequireAuth>
                 <Profile />
               </RequireAuth>
             }
           >
             Profile
           </Route>
           <Route path="*" element={<NotFound />}></Route>
           <Route path="login" element={<Login />}></Route>
         </Routes>
       </AuthProvider>
     </>
   );
}

export default App
