// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Navbar.css'
import logo from  '../Assets/img/logo.png'
import Cart_icon from  '../Assets/img/Icons/cart.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [menu,setMenu]= useState("shop") ;
  return (
    <div>
      <div className="navbar">
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>Shoppy</p>
    </div>
    <ul className="nav-manu">
      <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("men")}}> <Link to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("women")}}> <Link to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
    <Link to="/login"><button>Login</button></Link>
    <Link to="/cart"><img src={Cart_icon}></img></Link>
      
      <div className="nav-cart-count">0</div>
    </div>
      </div>
    </div>
  )
}

export default Navbar