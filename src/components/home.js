import React from 'react'
import {
    Toolbar,
    makeStyles,
    Grid

} from "@material-ui/core";
import './styles.css';
import me1 from '../images/me(1).webp';
import { NavLink } from 'react-router-dom';
import {GitHub, LinkedIn } from '@material-ui/icons';

const HomeStyles = makeStyles((theme) => ({
    message: {
        marginTop: theme.spacing(-30),
        marginLeft: theme.spacing(19),
    },
    welcome: {
        fontFamily: "Shadows Into Light",
        fontSize: "40px",
        cursor: "pointer",
        color: "#FFAE00"
    },
    message1: {
        fontFamily: "Arvo",
        fontSize: "15px",
        fontWeight: "lighter",
    },
    message2: {
        marginTop: "40px",
        fontFamily: "Arvo",
        fontSize: "20px",
        fontWeight: "bolder",
    },
    about: {
        textDecoration: "none",
        color: "#FF77FF",
        fontSize: "18px",
        fontFamily: "Arvo",
        borderBottomColor: "#FF77FF",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        border: "2px solid",
        borderWidth: "4px",
        "&:hover": {
            color: "#FF77FF",
            borderWidth: "9px",
        },
    },
    image: {
        width: "450px",
        height: "450px",
        marginLeft: theme.spacing(13),
        marginTop: theme.spacing(-5),
        border: "2px solid",
        borderColor: "#BEC9FF",
        borderRadius: "30%",
        borderWidth: "5px",
        display: "flex",
    },
    container: {
        background: "none",
        marginLeft: theme.spacing(-150.5),
        marginTop: theme.spacing(70),
    },
    social: {
       background: "none",
       marginLeft: "0px",
       marginTop: "5px",
       margin: "0 2rem",
       display: "inline-block",
       color: "black",
       transform: "scale(1.5)",
       "&:hover": {
        color: "black",
        transform: "scale(2.0)",
        },
    },
    connect: {
        fontSize: "25px",
        fontFamily: "Arvo",
        fontWeight: "bolder",
    },
    email: {
        fontSize: "15px",
        fontFamily: "Arvo",
        fontWeight: "lighter",
    }
}));

export default function home() {

const classes = HomeStyles();

    return (
        <Toolbar>
            <div className={classes.message}>
                <h1 className={classes.welcome}>Hello, I'm Ann-Kareen!</h1>
                <h2 className={classes.message1}>A second-year computer science student attending the University of Florida.</h2>
                <h2 className={classes.message1}>I'm passionate about creating Human-centered designs and exploring the world of IoT.</h2>
                <h2 className={classes.message2}>
                    <NavLink to="about" className={classes.about}>
                        Learn more about me
                    </NavLink>
                </h2>
            </div>
            <div><img src={me1} alt="" className={classes.image}/></div>
            <div className={classes.container}>
                <h3 className={classes.connect}>Let's Connect </h3>
                <h3 className={classes.email}>akgedeus@gmail.com</h3>
                <a href="https://www.linkedin.com/in/ann-kareen-gedeus/" rel="noopener noreferrer" target="_blank" className={classes.social}>
                    <LinkedIn/>
                </a>
                <a href="https://github.com/anngedeus" rel="noopener noreferrer" target="_blank" className={classes.social}>
                    <GitHub/>
                </a>
                <Grid></Grid>
            </div>
        </Toolbar>
    )
}
