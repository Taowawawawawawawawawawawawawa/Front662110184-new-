import React, { Fragment, useState } from "react";
function AddProduct({addProduct}) {
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [type, setType] = useState("");

    const onChange = (setter, value) => {
        setter(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addProduct({ name, type, imageURL });
    }

    return (
        <Fragment>
            <h1>Add Product</h1>
            <form id="create-form" onSubmit={onSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" id="name" onChange={(event) => onChange(setName, event.target.value)}/>
                </div>

                <div className=" input-group">
                    <label htmlFor="imageURL">Image URL</label>
                    <input name="imageURL" type="text" id="imageURL" onChange={(event) => onChange(setImageURL, event.target.value)}/>
                </div>

                <div className=" input-group">
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" id="type" onChange={(event) => onChange(setType, event.target.value)}/>
                </div>

                <button type="submit">Add product</button>
            </form>
        </Fragment>
    )
}

export default AddProduct;