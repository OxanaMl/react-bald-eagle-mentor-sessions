import React, { useEffect, useState } from "react";
import ProductSummary from "./product-summary";
import "./app.css";
//some user input (probably a form)
//Data we would want to persist

//e-commerce application
//Form to make new products
//image urls
//price
//title
//stock
//List of all current products

function App() {
    const [products, setProducts] = useState([]);

    const addTableData = async (formData) => {
        const res = await fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/MentorSession`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                ...formData,
                            },
                        },
                    ],
                }),
            }
        );
        const data = await res.json();
        return data;
    };

    const fetchTableData = async () => {
        const res = await fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/MentorSession`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
            }
        );
        const data = await res.json();
        setProducts(data.records);
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log('submitting form', e.target.title.value)
      const title = e.target.title.value;
      const image = e.target.imageUrl.value;
      const price = Number(e.target.price.value);
      console.log('price', price, typeof price)
      const stock = Number(e.target.stock.value);
      const data = await addTableData({title, image, price, stock});
      setProducts([...data.records, ...products]);
    }

    useEffect(() => {
        fetchTableData();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" placeholder="title"/>

            <label htmlFor="imageUrl">Image Url</label>
            <input id="imageUrl" placeholder="Image Url"/>

            <label htmlFor="price">Price</label>
            <input id="price" type="number" />

            <label htmlFor="stock">Stock</label>
            <input id="stock" type="number" />

            <button>Add entry</button>
          </form>
            {products.map((product) => {
                return <ProductSummary key={product.id} product={product} />;
            })}
        </div>
    );
}

export default App;
