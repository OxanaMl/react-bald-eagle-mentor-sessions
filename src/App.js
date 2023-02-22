import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Select from "react-select";

const movieList = [
    {
        title: "Home Alone",
        releaseYear: 1990,
        releaseDate: new Date(1990, 11, 20),
    },
    {
        title: "Lord of the Rings",
        releaseYear: 2001,
        releaseDate: new Date(1990, 10, 20),
    },
    {
        title: "The Goonies",
        releaseYear: 1985,
        releaseDate: new Date(1990, 10, 21),
    },
    {
        title: "The Hobbit",
        releaseYear: 2012,
        releaseDate: new Date(1990, 9, 21),
    },
];

const sortCategories = [
    {
        label: "Title",
    },
    {
        label: "Release Year",
        sortMethod: (movieA, movieB) => {
          if(movieA.releaseYear > movieB.releaseYear) { 
            return 1
          } else if(movieA.releaseYear < movieB.releaseYear){
            return -1
          } else {
            return 0
          }
        }
    },
    {
      label: "Release Date",
      sortMethod: (movieA, movieB) => {
        if(movieA.releaseDate > movieB.releaseDate) { 
          return 1
        } else if(movieA.releaseDate < movieB.releaseDate){
          return -1
        } else {
          return 0
        }
      }
  },
];

function App() {
    const [sortCategory, setSortCategory] = useState(null);
    let sortedMovies = [...movieList];
    if(sortCategory) {
      sortedMovies = movieList.sort(sortCategory.sortMethod);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/home"
                        exact
                        element={
                            <div>
                                <h1>Movie List</h1>
                                <Select
                                    value={sortCategory}
                                    onChange={(option) => setSortCategory(option)}
                                    options={sortCategories}
                                />
                                {sortedMovies.map((movie) => {
                                    return (
                                        <div>
                                            <h3>
                                                {movie.title} (
                                                {movie.releaseYear})
                                            </h3>
                                            <p>{movie.releaseDate.toLocaleDateString()}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
