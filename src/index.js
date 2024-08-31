import ReactDOM from 'react-dom/client';
import "./css/style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Header from './Layout/header';
import Home from './Layout/Home';
import About from './Layout/About';
import Crypto from './Layout/Crypto';
import NotFound from './Layout/NotFound';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Counter from './components/Counter';
import DestinationList from './components/destinationList';
import DestinationFact from './components/DestinationFact';
import ResetApp from './components/ResetApp';

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
      <ResetApp />
      <Counter />
      <div className='p-4 border text-center'>
        <h4 className='text-success'> Destination List</h4>
        <DestinationList />
      </div>
      <DestinationFact />
      
    </BrowserRouter>

    </Provider>

    

  </div>
);
