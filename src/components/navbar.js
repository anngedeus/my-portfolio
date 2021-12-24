import React from 'react'
import {
    Toolbar,
    Typography,
    makeStyles,

} from "@material-ui/core";
import './styles.css';
import { NavLink } from 'react-router-dom'

const UseStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(-60),
      display: "flex",
    },
    linkcustom: {
        textDecoration: "none",
        color: "black",
        fontSize: "15px",
        fontFamily: "Arvo",
        marginLeft: theme.spacing(5),
        "&:hover": {
            color: "#00FF00",
        },
    },
    name: {
        color: "black",
        fontSize: "20px",
        fontFamily: "Arvo",
        flexGrow: "1",
        cursor: "pointer",
        marginLeft: theme.spacing(15),
    },
}));

export default function navbar() {

const classes = UseStyles();

    return (
        <Toolbar>
            <Typography className={classes.name}>
                <NavLink to="/" exact  className={classes.linkcustom}>Ann-Kareen Gedeus</NavLink>
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
    )
}