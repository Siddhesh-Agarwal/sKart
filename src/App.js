import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme';
import SidebarWithHeader from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
// import Settings from './Components/Settings/Settings';
import WishList from './Components/WishList/WishList';
import SignInForm from './Components/Sign-in/Sign-in';
import SignUp from './Components/Sign-up/Sign-up';
import ProductCard from './Components/ProductCard/ProductCard';
import TeammateCard from './Components/TeammateCard/TeammateCard';
import Cart from './Components/cart/Cart';
import ViewProduct from './Components/ViewProduct/ViewProduct';


function App() {
  // fetch products from localhost:8000/products
  return (
    <ChakraProvider theme={Theme}>
      {/* <SidebarWithHeader /> */}
      <Routes>
        <Route path='/' element={<SidebarWithHeader children={<Home />} />}></Route>
        <Route path='/products' element={<SidebarWithHeader children={<ProductCard />} />}></Route>
        <Route path='/wishlist' element={<SidebarWithHeader children={<WishList />} />} ></Route>
        {/* <Route path='/settings' element={<SidebarWithHeader children={<Settings />} />} ></Route> */}
        <Route path='/login' element={<SidebarWithHeader children={<SignInForm />} />} ></Route>
        <Route path='/cart' element={<SidebarWithHeader children={<Cart />} />} ></Route>
        <Route path='/signup' element={<SidebarWithHeader children={<SignUp />} />} ></Route>
        <Route path='/aboutus' element={<SidebarWithHeader children={<TeammateCard />} />} ></Route>
        <Route path='/viewproduct' element={<SidebarWithHeader children={<ViewProduct />} />} ></Route>
      </Routes>
      {/* <div className="products">
        {
          products.map((product) => (
            <productCard props={product} />
          ))
        }
      </div> */}
    </ChakraProvider>
  );
}

export default App;
