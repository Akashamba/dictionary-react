import React from "react";
import SearchBar from './components/search-bar/search-bar.component';
import Result from './pages/word-data/word-data.component';
// import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Link to='/'>Simple Dictionary</Link>
      <SearchBar />
      <Switch>
        {/* <Route exact path='/' component={Homepage} /> */}
        <Route exact path='/word/:word' component={Result} />
      </Switch>
    </div>
  );
}
