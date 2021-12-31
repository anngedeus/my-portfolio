import React from 'react'
import {
    makeStyles,
    Typography,
} from "@material-ui/core";


const TeamStyles = makeStyles((theme) => ({
  bigContainer: {
    marginTop: "80px",
  },
  container: {
    background: "#B4FFC4",
    marginTop: "110px",
    height: "420px", 
  },
  container2: {
    marginTop: "110px",
    height: "420px",
  },
  header: {
    marginLeft: "185px",
    fontFamily: "Arvo",
  },
  subheader: {
    fontFamily: "Arvo",
    fontWeight: "bolder",
    marginLeft: "185px",
    marginTop: "50px",
  },
  descriptions: {
    fontFamily: "Arvo",
    marginLeft: "185px",
  }
}));

export default function TeamTech() {

    const classes = TeamStyles();

    return (
      <div className={classes.bigContainer}>
      <h1 className={classes.header}>Team Tech - UF Society of Women Engineers</h1>
      <div className={classes.container}>
          <br></br>
          <h4 className={classes.subheader}>OVERVIEW</h4>
              <Typography paragraph className={classes.descriptions}>
                  This project was a collaborative project aimed at getting team tech members acquianted with <br/>
                  either front-end or back-end web development. The main objective was to create a device that monitered <br/>
                  employee health in companies.
              </Typography>
          <h4 className={classes.subheader}>ROLE</h4>
              <Typography paragraph className={classes.descriptions}>
                  <h4 fontWeight="bolder">Front-end Developer</h4>
                  User Experience, Visual Webpage Design
              </Typography>
              <Typography paragraph className={classes.descriptions}>
                 September 2020 - April 2021
              </Typography>
      </div>
      <div className={classes.container2}>
          <h2 className={classes.subheader}>My Contributions</h2>
          <Typography paragraph className={classes.descriptions}>
              During this project I chose to work with front-end development because I wated to learn how <br/>
              to use React and Bootsrap. 
          </Typography>
          <Typography paragraph className={classes.descriptions}>
              The front-end team for this project consisted of 4 people and we were each working on a different <br/>
              page of the health website.
          </Typography>
          <Typography paragraph className={classes.descriptions}>
              My first individual task was to create a wireframe using Figma for the location page as <br/>
              to visualize what the page would look like. My second task was to actually built the visuals of the location page <br/>
              using Bootsrap as my main design component. This part of the project came with challenges as I wasn't very well-versed <br/>
              in React and CSS styling. So I had to rely on my teammates code samples to build my page.
          </Typography>
      </div>
    </div>
    )
}