import React from 'react'
import {
    makeStyles,
    Container,
    Card,
    CardMedia,
    CardActionArea,
} from "@material-ui/core";
import research from '../media/research.jpeg'
import portfolio from '../media/portfolioArt.webp'
import swe from '../media/swe.png'
import { NavLink } from 'react-router-dom';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const ProjectStyles = makeStyles((theme) => ({
    cardSizes: {
        width: 970,
        height: 550,
        marginTop: "70px",
        "&:hover": {
            transform: "translateY(-3px)",
        },
        fontSize: "25px",
        
    },
    header: {
        fontFamily: "Arvo",
        fontWeight: "bolder",
        marginTop: "70px",
    },
    header2: {
        fontFamily: "Arvo",
        fontSize: "35px",
        fontWeight: "bolder",
        marginTop: "70px",
        color: "#2EC400"
    },
    container: {
        justifyContent: "center",
        marginLeft: "250px",
        alignItems: "center",
        flexDirection: "column",
        flex: "1",
    }
}));

  
export default function Project() {

    const classes = ProjectStyles();

    const textRef = useRef();
    
    useEffect(() =>{
        init(textRef.current, { 
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["RESEARCHED", "CREATED", "COLLABORATED ON"] })
    },[])

    return (
       <Container className={classes.container}>
           <h1><span className={classes.header}>Works I've: </span> <span ref={textRef} className={classes.header2}></span></h1>
           <NavLink to="Research" target="_blank">
            <Card className={classes.cardSizes} elevation={5}>
                <CardActionArea>
                        <CardMedia component="img" image={research} height="550"/>
                </CardActionArea>          
            </Card>
           </NavLink>
           <NavLink to="Portfolio" target="_blank">
            <Card className={classes.cardSizes} elevation={5}>
                <CardActionArea>
                        <CardMedia component="img" image={portfolio} height="550"/>
                </CardActionArea>
            </Card>
           </NavLink>
           <NavLink to="TeamTech" target="_blank">
            <Card className={classes.cardSizes} elevation={5}>
                <CardActionArea>
                        <CardMedia component="img" image={swe} height="550"/>
                </CardActionArea>
            </Card>
           </NavLink>
           <br></br>
           <br></br>
           <br></br>
       </Container>
    )
}