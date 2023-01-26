import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AdoptPage from "./adopt-page/adopt-page";
import CatDetailsPage from "./cat-details-page";
import Header from "./header";
import HomePage from "./home-page";
import NotFound from "./not-found";
import "./app.css";

//Website concept is animal shelter
//Multi page site (two pages)
//home/about page
//adoption list page
//individual cat details page

//goals for 20230117
//add a delete button for individual cats
//Sorting buttons for different cat criteria (name, age) on adopt page
//random cat of day button

function App() {
    return (
        <BrowserRouter>
            <div style={{ textAlign: "center" }}>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/adopt" element={<AdoptPage />} />
                    <Route path="/cat/:catId" element={<CatDetailsPage />} />
                    <Route path="/*" element={<NotFound />} />
                    {/* <Route
                    path="/*"
                    element={
                        <div>
                          <h1>Page not found!</h1>
                          <Link to="/home">Return to Home Page</Link>
                        </div>
                    }
                /> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
