import React, {useState} from "react";
import SearchBar from './components/search-bar/search-bar.component';
import Result from './pages/word-data/word-data.component';
import Homepage from "./pages/homepage/homepage.component";
import Navbar from './components/navbar/navbar.component';
import Container from '@material-ui/core/Container';
import { Switch, Route,  } from 'react-router-dom';
import "./styles.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  const x = window.matchMedia('prefers-color-scheme: dark').matches; 
  const [prefersDarkMode, setTheme] = useState(x)
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar prefersDarkMode={prefersDarkMode} setTheme={setTheme} />
      <br />
      <Container>
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/word/:word' component={Result} />
          <Route component={Homepage} />
        </Switch>
      </Container>    
    </ThemeProvider>
  );
}
