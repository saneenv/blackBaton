import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FullImage from './pages/FullImage';
import Cart from './pages/Cart';
import Address from './pages/Address';
import Account from './pages/Account';
import Products from './pages/Products';
import AccountMob from './mobileViewPages/AccountMob';
import MyInfo from './components/MyInfo';
import MyOrders from './components/MyOrders';
import Wishlist from './components/Wishlist';
import OrderSummary from './pages/OrderSummary';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SearchPage from './pages/SearchPage';
import SubCatProducts from './pages/SubCatProducts';
import ImageUpload from './adminSide/ImageUpload';
import Signup from './pages/Signup';
import Verify from './pages/Verify';


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
          <Route path='/accountmob' element={<AccountMob/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/myinfo' element={<MyInfo/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/ordersummary' element={<OrderSummary/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termsconditions' element={<TermsConditions/>}/>
          <Route path='/searchpage' element={<SearchPage/>}/>
          <Route path='/subcategoryproducts' element={<SubCatProducts/>}/>
          <Route path='/imageupload' element={<ImageUpload/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verify' element={<Verify/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
