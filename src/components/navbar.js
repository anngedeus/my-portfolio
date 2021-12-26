import React from 'react'
import {
    Toolbar,
    Typography,
    makeStyles,
    AppBar,

} from "@material-ui/core";
import './styles.css';
import { NavLink } from 'react-router-dom'

const UseStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(-70),
      display: "flex",
    },
    linkcustom: {
        textDecoration: "none",
        color: "black",
        fontSize: "15px",
        fontFamily: "Arvo",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#2EC400",
            transform: "scale(1.1)",
        },
        display: "flex",
    },
    name: {
        color: "black",
        fontSize: "20px",
        fontFamily: "Arvo",
        flexGrow: "1",
        cursor: "pointer",
        marginLeft: theme.spacing(15),
        display: "flex",
    },
    appBar: {
        background: "none"
    },
}));

export default function navbar() {

const classes = UseStyles();

    return (
        <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
            <Typography className={classes.name}>
                <div><NavLink to="/" exact  className={classes.linkcustom}>Ann-Kareen Gedeus</NavLink></div>
            </Typography>
            <Typography>
                <div className={classes.navlinks}>
                    <NavLink to="/" exact className={classes.linkcustom}>
                        Home
                    </NavLink>
                    <NavLink to="about" className={classes.linkcustom}>
                        About Me
                    </NavLink>
                    <NavLink to="project" className={classes.linkcustom}>
                        Projects
                    </NavLink>
                    <NavLink to="resume" className={classes.linkcustom}>
                        Resume
                    </NavLink>
                </div>
            </Typography>
        </Toolbar>
        </AppBar>
    )
}