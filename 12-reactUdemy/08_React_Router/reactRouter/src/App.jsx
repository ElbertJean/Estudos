import './App.css'

//components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

// 1 - config react router
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          {/* 9- search */}
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* 4- Rota dinâmica*/}
            <Route path='/products/:id' element={<Product />}/>
            {/* 5- nested route */}
            <Route path='/products/:id/info' element={<Info />}/>
            {/* 8- página de busca */}
            <Route path='/search' element={<Search />}/>
            {/* 7 - 404 not found */}
            <Route path='*' element={<NotFound />}/>
            {/* 
              Para redirecionar uma página caso ele mude de nome
              <Route path='/company' element={Navigate to="/store"}/>
            */}
          </Routes>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App
