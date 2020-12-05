import React from "react";
import SearchBar from './components/search-bar/search-bar.component';
import Result from './pages/word-data/word-data.component';
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Minimal Dictionary</h1>
      <SearchBar />
      <Switch>
        {/* <Route exact path='/' component={Homepage} /> */}
        <Route exact path='/:word' component={Result} />
      </Switch>
    </div>
  );
}
