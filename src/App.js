import Nav from "./Navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Register from "./register/Register";
import {Route, Routes} from 'react-router-dom'
import Sidebar from "./sidebar/Sidebar";
import {useState} from 'react';
import products from "./db/data";
import Card from './components/Card'
import { OneProduct } from "./ProductDetail/OneProduct";
import './index.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({id, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          id = {id}
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    
    <> 
    <Routes>
      <Route path="/" element={
        <>
        <Sidebar handleChange={handleChange} />
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
        </>
      }
      />
      <Route path="/register" element={<Register/>}/>
      <Route path="/product/:id" element={
        <>
          <Nav query={query} handleInputChange={handleInputChange} />
          <OneProduct/>
        </>
        } />
    </Routes>
    </>
    );
}

export default App;
