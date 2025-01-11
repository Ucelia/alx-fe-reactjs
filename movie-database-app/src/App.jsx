import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'
import MovieDetails from './components/MovieDetails'
import axios from 'axios'

const API_KEY='80a40185';
const App =()=> {
  const [movies, setMovies] = useState([]);
  const [SelectedMovie, setSelectedMovie] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ||"light");
  const [errorMsg, setErrorMsg] = useState("");
  const fetchMovies = async(query)=>{
    try{
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      console.log("API Response:", response.data);
      if (response.data.Search) {
        setMovies(response.data.Search);
        setErrorMsg("")
      } else {
        setMovies([]); 
        setErrorMsg("Oops! We couldn't find any movies matching your search.");
      }
    }
    catch(error){
      console.error("Error fetching movies:", error);
    }
  };

  const fetchMovieDetails = async(id)=>{
    try{
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
      setSelectedMovie(response.data);
    }
    catch(error){
      console.error("Error fetching movie details:", error);
    }
  };

  const toggleTheme =() =>{
    const newTheme = theme == "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() =>{
    document.body.className =theme;
  }, [theme]);

  return (
    <div className={theme === "light" ? "bg-white text-black" : " text-white"}> 
    <div className="container mx-auto p-4" >
      <h1 className="text-3xl font-bold text-center my-4 mb-20">Movie Database App</h1>
      <button onClick={toggleTheme} className="bg-gray-500 text-white py-2 px-4 rounded-full">
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <SearchBar onSearch={fetchMovies}  theme={theme}/>
      <div className='text-red-500 text-center my-4'>
        {errorMsg}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => fetchMovieDetails(movie.imdbID)}
          />
        ))}
      </div>
      {SelectedMovie && (
        <MovieDetails movie={SelectedMovie} onClose={() => setSelectedMovie (null)} />
      )}
    </div>
    </div>
  );
};

export default App
