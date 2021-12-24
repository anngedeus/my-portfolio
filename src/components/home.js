import React from 'react'
import {
    Toolbar,
    Typography,
    makeStyles,
    Grid

} from "@material-ui/core";
import './styles.css';
import me from '../images/me.webp';
import { NavLink } from 'react-router-dom';

console.log(me);

const HomeStyles = makeStyles((theme) => ({
    welcome: {
        marginTop: theme.spacing(-20),
        marginLeft: theme.spacing(20),
        fontFamily: "Arvo",
        fontSize: "40px",
        cursor: "pointer",
        color: "#FFC457"
    },
    message1: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(20),
        fontFamily: "Arvo",
        fontSize: "20px",
        cursor: "pointer",
    },
    message2: {
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(20),
        fontFamily: "Arvo",
        fontSize: "20px",
        cursor: "pointer",
    },
    image: {
        width: "500px",
        height: "500px",
        marginLeft: theme.spacing(13),
        marginTop: theme.spacing(10),
        border: "2px solid",
        borderColor: "black",
        borderRadius: "50%",
        borderWidth: "10px",
    },
    about: {
        textDecoration: "none",
        color: "#FF77FF",
        fontSize: "15px",
        fontFamily: "Arvo",
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(100),
        borderBottomColor: "black",
        borderTop: "none",
        borderRight: "none",
        borderLeft: "none",
        border: "2px solid",
        borderWidth: "2px",
        borderRadius: "5px",
        "&:hover": {
            color: "black",
        },
    },  
}));


export default function home() {

const classes = HomeStyles();

    return (
        <Toolbar>
            <Typography>
                <Grid className={classes.welcome}>Hello, I'm Ann-Kareen!</Grid>
                <Grid className={classes.message1}>A second-year computer science student attending the University of Florida. I'm passionate about creating Human-centered designs and exploring the world of IoT.</Grid>
                <Grid className={classes.message2}>
                    <NavLink to="about" className={classes.about}>
                        Learn more about me
                    </NavLink>
                </Grid>
            </Typography>
            <img src={me} alt="image" className={classes.image}/>
        </Toolbar>
    )
}
