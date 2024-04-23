import React, { useState, useEffect } from 'react';
import Header from './components/SearchBar/SearchBar';
import MovieList from './components/MovieList/MovieList';
import './App.css';

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setMovies(respData.results);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);
      setSearchTerm("");
    }
  };

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <MovieList movies={movies} getClassByRate={getClassByRate} />
    </div>
  );
}
