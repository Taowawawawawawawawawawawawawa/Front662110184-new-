import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateProduct,deleteProduct } from "./actions";

function UpdateForm() {

    const { id } = useParams();
    const products = useSelector((state) => state.products);
    const product = products.find((product) => product.id === Number(id));

    const [name, setName] = useState(product.name);
    const [type, setType] = useState(product.type);
    const [imageURL, setImageURL] = useState(product.imageURL);

    const onChange = (setter, value) => {
        setter(value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(updateProduct({ id: product.id, name, type, imageURL }));
        navigate('/');
    };

    const onDelete = () => {
        dispatch(deleteProduct({ id: product.id }));
        navigate('/');
      };

    // useEffect(() => {
    //     async function getProducts() {
    //       const products = await axios.get(
    //         'https://apimocha.com/front184/products'
    //       );
    //       setProducts(products.data);
    //     }

    //     getProducts();
    //   }, []); // Put the empty array to make sure that the hook is executed only once


    return (
        <>
            <h1>Update Product</h1>
            <form id="create-form">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" id="name" value={name} onChange={(event) => onChange(setName, event.target.value)} />
                </div>

                <div className=" input-group">
                    <label htmlFor="imageURL">Image URL</label>
                    <input name="imageURL" type="text" id="imageURL" value={imageURL} onChange={(event) => onChange(setImageURL, event.target.value)} />
                </div>

                <div className=" input-group">
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" id="type" value={type} onChange={(event) => onChange(setType, event.target.value)} />
                </div>

                <button type="button" className="UpdateForm__delete-button" onClick={onDelete()}>
                    Delete restaurant
                </button>
                <button type="submit" onClick={onSubmit()}>Update product</button>
            </form>
        </>
    )
}
export default UpdateForm;
// export default function A() {
//     const { id } = useParams();
//     console.log(id);

// };