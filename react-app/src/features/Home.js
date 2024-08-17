// import data from "./apps/Data"
import React, { Fragment, useState } from "react"
import Product from "./Product";
import AddProduct from "./Product/AddForm";
import axios from "axios";
import { useEffect } from "react";




function Home() {
    const [products, setProducts] = useState([]);
    // getProducts();
    let currentProductId = 9;

    // async function getProducts() {
    //     const products = await axios.get(
    //       'https://apimocha.com/front67/products'
    //     );
    //     setProducts(products);
    //   }

    // getProducts()

    useEffect(() => {
        async function getProducts() {
          const products = await axios.get(
            'https://apimocha.com/front184/products'
          );
          setProducts(products.data);
        }
      
        getProducts();
      }, []); // Put the empty array to make sure that the hook is executed only once

    function addProduct(product) {
        const newProduct = { id: ++currentProductId, ...product };
        setProducts([...products, newProduct]);
    }

    return (
        <Fragment>
            {
                products.length > 0 ? (
                    <ul className="Home__products">
                        {products.map((product) => (
                            <Product key={product.id} item={product} />
                        ))}
                    </ul>
                ) : (
                    <div>Loading products....</div>
                )
            }
            <AddProduct addProduct={addProduct} />

        </Fragment>
    )

}

export default Home

