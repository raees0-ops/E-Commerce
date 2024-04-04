
import './App.css'
import Navbar from './Componants/Navbar/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Shop from  './Pages/Shop'
import ShopCategory from  './Pages/ShopCategory'
import Product from  './Pages/Product'
import Cart from  './Pages/Cart'
import LoginSignUp from  './Pages/LoginSignUp'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory category="men" />}></Route>
      <Route path='/women' element={<ShopCategory category="women" />}></Route>
      <Route path='/kids' element={<ShopCategory category="kids" />}></Route>
      <Route path='/product' element={<Product/>} >
        <Route path=':productId' element={<Product/>}></Route>
      </Route>

      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignUp/>}></Route>
      
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
