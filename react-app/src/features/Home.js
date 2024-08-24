// import data from "./apps/Data"
import React, { Fragment, useState } from "react"
import Product from "./Product";
// import AddProduct from "./Product/AddForm";

import styled from "styled-components";




function Home({products,className}) {
     // Put the empty array to make sure that the hook is executed only once

    // function addProduct(product) {
    //     const newProduct = { id: ++currentProductId, ...product };
    //     setProducts([...products, newProduct]);
    // }

    return (
        <div className={className}>
            {/* {
                products.length > 0 ? ( */}
                    <ul className="Home__products">
                        {products.map((product) => (
                            <Product key={product.id} item={product} />
                         ))} 
                    </ul>
                {/* ) : (
                    <div>Loading products....</div>
                )
            } */}
            {/* <AddProduct addProduct={addProduct} /> */}

        </div>
    )

}

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;
