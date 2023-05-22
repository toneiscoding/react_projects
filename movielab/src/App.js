import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import { useState, useEffect} from 'react';

function App() {
  //variable with apiKEY
  

  //State to hold movie data
  const [movie, setMovie] = useState([null]);
  const apiKey = "85d7d533";
  //function to getMovie
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      )
    //Parse JSON response into a javascript object
      const data = await response.json();
      setMovie(data);
      console.log(data)
    } catch(e){
      console.error(e)
    }
  };
  console.log(movie)
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);
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
