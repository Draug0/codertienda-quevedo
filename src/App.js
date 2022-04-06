import './styles/App.css';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';



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
              </Routes>
            </div>
            <footer className='footer' style={{textAlign: 'center'}}/>
          </section>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;