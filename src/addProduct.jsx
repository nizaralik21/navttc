import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const Fields = {
    category: "",
    title: "",
    heading: "",
    price: "",
    oldPrice: "",
    rating: "",
    ratingCount: "",
    image: "",
  };
  const [addtitle, setAddTitle] = useState(Fields);

  const inputHandler = (e) => {
    setAddTitle({ ...addtitle, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7000/api/cardlist", addtitle);
      alert("Product Added Successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <form onSubmit={submitHandler}>
            <label htmlFor="category">Category</label>
            <br />
            <select
              name="category"
              onChange={inputHandler}
              value={addtitle.category}
            >
              <option value="">Select Category</option>
              <option value="Phones">Phones</option>
              <option value="Computer">Computer</option>
              <option value="SmartWatch">SmartWatch</option>
              <option value="Camera">Camera</option>
              <option value="HeadPhones">HeadPhones</option>
              <option value="Gaming">Gaming</option>
              <option value="Furniture">Furniture</option>
            </select>
            <br />

            <label htmlFor="text">Product Title</label>
            <br />
            <input type="text" onChange={inputHandler} name="title" value={addtitle.title} />
            <br />
            <label htmlFor="text">Prodcut Heading</label>
            <br />
            <input type="text" onChange={inputHandler} name="heading" value={addtitle.heading} />
            <br />
            <label htmlFor="text">Price</label>
            <br />
            <input type="text" onChange={inputHandler} name="price" value={addtitle.price} />
            <br />
            <label htmlFor="text">Rating</label>
            <br />
            <input type="text" onChange={inputHandler} name="rating" value={addtitle.rating} />
            <br />
            <label htmlFor="text">Rating Count</label>
            <br />
            <input type="text" onChange={inputHandler} name="ratingCount" value={addtitle.ratingCount} />
            <br />
            <label htmlFor="text">Old Price</label>
            <br />
            <input type="text" onChange={inputHandler} name="oldPrice" value={addtitle.oldPrice} />
            <br />
            <label htmlFor="">Image URL</label>
            <br />
            <input type="text" onChange={inputHandler} name="image" value={addtitle.image} />
            <br />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
