import ReactDOM from 'react-dom/client';
import "./css/style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

import Header from './Layout/header';
import Home from './Home';
import About from './About';
import Crypto from './Crypto';
import NotFound from './NotFound';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/cryptodetail/:cryptosymbol/:id' element={<Crypto />} />
        {/* <Route path='/cryptodetail/:cryptosymbol' element={<Crypto />} /> */}

        {/* nested route */}
        <Route path='product'>   
        <Route path='' element={<Product />} />
        <Route path='create' element={<CreateProduct />} />
        <Route path='list' element={<ProductList />} />
        <Route path='detail' element={<ProductDetail />} />
        </Route>
        
        {/* not found */}
        <Route path='*' element={<NotFound />} />  

      </Routes>
    </BrowserRouter>

    </Provider>
  </div>
);
