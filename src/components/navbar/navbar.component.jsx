import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

const Navbar = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundImage: 'linear-gradient(to right, #3f6cfe 0%, #00f2fe 100%)' }}>
        <Toolbar>
          <Typography onClick={() => history.push('/')} variant="h5" className={classes.title}>
            Dictionary
          </Typography>
          {/* <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
