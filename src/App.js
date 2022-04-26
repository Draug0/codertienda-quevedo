import './styles/App.css';
import 'bulma'
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';
import Order from './components/Order';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <section className='hero is-fullheight-with-navbar'> 
            <div className="hero-body" style={{textAlign: 'center'}}>
              <Routes>
                <Route exact path={'/'} element={<ItemListContainer />} />
                
                <Route exact path={'/ofertas'} element={<ItemListContainer sale={true} />} />

                <Route exact path={'/category/:categoryId'} element={<ItemListContainer />} />

                <Route exact path={'/item/:itemId'} element={<ItemDetailContainer />} />

                <Route exact path='/cart' element={<Cart />}/>

                <Route exact path='/checkout' element={<Checkout />} />

                <Route exact path='/order/:orderId' element={<Order />} /> 

                <Route exact path='*' element={<Navigate to='/' />} />
              </Routes>
            </div>
            <footer className='footer' style={{textAlign: 'center'}}/>
          </section>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;