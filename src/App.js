import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FullImage from './pages/FullImage';
import Cart from './pages/Cart';
import Address from './pages/Address';
import Account from './pages/Account';
import Products from './pages/Products';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fullimage' element={<FullImage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          <Route path='/account' element={<Account />} />
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
