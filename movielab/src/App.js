import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useState, useEffect} from 'react';

function App() {
  //variable with apiKEY
  const apiKey = "85d7d533";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //function to getMovie
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    const reponsee = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    //Parse JSON response into a javascript object
    const data = await Response.json();
    setMovie(data);
  }
  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}  />
    </div>
  );
}

export default App;
