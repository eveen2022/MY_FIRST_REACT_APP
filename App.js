import {useEffect, useState} from "react";

import './App.css';

import MovieCard from "./MovieCard";

import SearchIcon from './search.svg';

// 6bc680c6
const API_URL = 'http://www.omdbapi.com?apikey=6bc680c6'

const movie1 = {

    "Title": "#TBT to That Time Archer Met Kingsman",
    "Year": "2017",
    "imdbID": "tt8918212",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjg5ZTFhYzUtMzE5OS00MjVjLWJmMTctNTM0NGJjZmFiOWQ1XkEyXkFqcGdeQXVyMTg3NTA2NzI@._V1_SX300.jpg"

}

const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (titel) =>{
        const response = await fetch(`${API_URL}&s=${titel}`);
        const data = await response.json();


        setMovies(data.Search);

    }
    useEffect(() => {
        searchMovies('Avengers');

    }, []);

    return (
        <div className="app">
            <h1>MovieWorld</h1>

            <div className="search">
                <input
                    placeholder="Search your favorite movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                        <div className="container">
                            {movies.map((movie) =>(
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>Sorry! No Movies found</h2>
                        </div>
                    )
            }
        </div>

    );
}

export default App;