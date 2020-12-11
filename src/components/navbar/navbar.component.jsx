import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {  
    flexGrow: 1,
    textAlign: 'left',
    cursor: 'pointer',
  },
}));

const Navbar = ({ history, prefersDarkMode, setTheme }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundImage: 'linear-gradient(to right, #3f6cfe 0%, #00f2fe 100%)' }}>
        <Toolbar>
          <Typography onClick={() => history.push('/')} variant="h5" className={classes.title}>
            Dictionary
          </Typography>
          <IconButton edge="end" onClick={() => {setTheme(!prefersDarkMode)}} >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
