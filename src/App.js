import React from "react";
import SearchBar from './components/search-bar/search-bar.component';
import Result from './pages/word-data/word-data.component';
import Homepage from "./pages/homepage/homepage.component";
import Navbar from './components/navbar/navbar.component';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Switch, Route, /*Link*/ } from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Link to='/'>Simple Dictionary</Link> */}
      <Navbar />
      <br />
      <Container>
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/word/:word' component={Result} />
          <Route component={Homepage} />
        </Switch>
      </Container>
    </div>
  );
}
