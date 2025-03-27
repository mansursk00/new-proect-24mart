import { Route , Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Cart from '../pages/cart/Cart'
import ContactUs from '../pages/contactUs/ContactUs'
import Blog from '../pages/blog/Blog'
import CatalogPage from '../pages/catalogPage/CatalogPage'
import NotFoundPage from '../pages/notFoundPage/NotFoundPage'


export default function App() {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contacts' element={<ContactUs/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/catalog' element={<CatalogPage/>}/>
      <Route path= '*' element={<NotFoundPage/>}/>
    </Routes>
  )
}


