import { observer } from 'mobx-react-lite';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#7bae7ec',
    },
    button: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: "#000000",
    }
  }));

function NavBar() {
    const classes = useStyles();
  return (
    <AppBar position="sticky">
        <Toolbar className={classes.root}>
            <Button color="inherit">
                <NavLink  to='/' className={classes.button}>Home</NavLink>
            </Button>
            <Button color="inherit">
                <NavLink  to='/about' className={classes.button}>About</NavLink>
            </Button>
        </Toolbar>
    </AppBar>
  );
}

export default observer(NavBar);