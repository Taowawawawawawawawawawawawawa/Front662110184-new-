import Home from "./features/Home";
import Container from "./features/Container";
import NavBar from "./features/NavBar";
import { Fragment } from "react";
import GlobalStyle from "./features/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Addform from "./features/Product/AddForm";
import Updateform from "./features/Product/UpdateForm";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function App() {

  const [products, setProducts] = useState([]);
  // getProducts();
  // let currentProductId = 9;

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        'https://apimocha.com/front184/products'
      );
      setProducts(products.data);
    }

    getProducts();
  }, []);

  return (
    // <GlobalStyle>
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<Addform />} />
            <Route path="/update-product/:id" element={<Updateform />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>
    </Fragment>
    //</GlobalStyle>

  );
}

export default App;
