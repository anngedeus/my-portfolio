import React from 'react'
import {
    Toolbar,
    Typography,
    makeStyles,
    AppBar,

} from "@material-ui/core";
import { NavLink } from 'react-router-dom'

const UseStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(-70),
      display: "flex",
    },
    linkcustom: {
        fontFamily: "Arvo",
        textDecoration: "none",
        color: "black",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#2EC400",
        },
        display: "flex",
    },
    name: {
        color: "black",
        fontSize: "20px",
        fontFamily: "Shadows Into Light",
        fontWeight: "bolder",
        flexGrow: "1",
        cursor: "pointer",
        marginLeft: theme.spacing(15),
        display: "flex",
    },
    appBar: {
        background: "white"
    },
}));

export default function Navbar() {

const classes = UseStyles();

    return (
        <AppBar className={classes.appBar} elevation={0} position='fixed' top='0'>
        <Toolbar>
            <Typography className={classes.name}>
                <div><NavLink to="/" exact  className={classes.linkcustom}>AKG.</NavLink></div>
            </Typography>
            <Typography>
                <div className={classes.navlinks}>
                    <NavLink to="/" exact className={classes.linkcustom} fontSize="15px">
                        Home
                    </NavLink>
                    <NavLink to="About" className={classes.linkcustom} fontSize="15px">
                        About Me
                    </NavLink>
                    <NavLink to="Project" className={classes.linkcustom} fontSize="15px">
                        Projects
                    </NavLink>
                    <NavLink to="Resume" className={classes.linkcustom} fontSize="15px">
                        Resume
                    </NavLink>
                </div>
            </Typography>
        </Toolbar>
        </AppBar>
    )
}