
import './App.css';
import {
  useState
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import { Form } from 'react-bootstrap';
import MovieList from './components/MovieList';

function App() {

  const [search, setSearch] = useState('');
  console.log(search);

  const [movies, setMovies] = useState([

    {
      Title: "Spider Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: No Way Home",
      Year: "2021",
      imdbID: "tt10872600",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider Man",
      Year: "2012",
      imdbID: "tt0948470",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man 2",
      Year: "2004",
      imdbID: "tt0316654",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Homecoming",
      Year: "2017",
      imdbID: "tt2250912",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man 3",
      Year: "2007",
      imdbID: "tt0413300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Into the Spider-Verse",
      Year: "2018",
      imdbID: "tt4633694",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider Man 2",
      Year: "2014",
      imdbID: "tt1872181",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: Far from Home",
      Year: "2019",
      imdbID: "tt6320628",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Spider Man: The Animated Series",
      Year: "1994–1998",
      imdbID: "tt0112175",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmQ1NzBlYmItNmZkZi00OTZkLTg5YTEtNTI5YjczZjk3Yjc1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  const addMovie = (data) => {

    setMovies([
      ...movies,
      {

        "Title": data,
        "Year": "2019",
        "imdbID": "tt2527338",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"

      },


    ]);

  };


  const handleSearch = (e) => {


    let value = e.target.value;
    setSearch(value);
  };

  console.log(search);


  return (
    <>





      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Movie"
          className="me-auto"
          aria-label="Search"
          onChange={handleSearch}



        />

      </Form>
      <NavBar addMovie={addMovie} />


      <MovieList movies={movies} search={search} />






    </>
  );
};

export default App;
