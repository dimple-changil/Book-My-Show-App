import './App.css';
import axios from "axios";
//import env from 

//Routers
import {Routes,Route} from "react-router-dom";

//React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import PlayPage from './pages/Play.page';
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = "17ea7ce97a12e8d1a71b164e780914cb";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path="/movie/:id"  element={<MoviePage/>}/>
      <Route path="/plays"  element={<PlayPage/>}/>
    </Routes>
  );
}

export default App;
