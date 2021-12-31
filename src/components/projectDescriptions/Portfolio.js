import React from 'react'
import {
    makeStyles,
    Typography,
} from "@material-ui/core";

const PortfolioStyles = makeStyles((theme) => ({
  bigContainer: {
    marginTop: "80px",
  },
  container: {
    background: "#FFB4B4",
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

export default function Portfolio() {

    const classes = PortfolioStyles();

    return (
      <div className={classes.bigContainer}>
      <h1 className={classes.header}>My Portfolio Website</h1>
      <div className={classes.container}>
          <br></br>
          <h4 className={classes.subheader}>OVERVIEW</h4>
              <Typography paragraph className={classes.descriptions}>
                  You are currently in my portfolio website. This is a project that I have always wanted <br/>
                  to do. Because it allows me to further expand my knowledge of React and Material UI and also <br/>
                  showcase why I'm passionate about creating human-centered visual designs. I still have alot to learn <br/>
                  but this is one of many steps to that rode of me understanding how to create user interfaces.
              </Typography>
          <h4 className={classes.subheader}>ROLE</h4>
              <Typography paragraph className={classes.descriptions}>
                  <h4 fontWeight="bolder">Lead Developer</h4>
                  User Experience, Visual Webpage Design, Human-Centered Designs
              </Typography>
              <Typography paragraph className={classes.descriptions}>
                 December 2021 - January 2022
              </Typography>
      </div>
      <div className={classes.container2}>
          <h2 className={classes.subheader}>How did I build this?</h2>
          <Typography paragraph className={classes.descriptions}>
             For this project I used React and Material UI to create the various interfaces you have seen <br/>
             The first steps to building this was watching YouTube videos on how to set up a React App portfolio <br/>
             website. I also went and looked at personal websites of various UI/UX designers for inspiration and followed<br/>
             some of their layouts.
          </Typography>
          <Typography paragraph className={classes.descriptions}>
             The biggest challenge of creating this website was following material guidelines and also making sure that <br/>
             the design was responsive to screen changes. I solved these problems with many google searches and asking friends <br/>
             who have built their websites how did they go about solving these problems.
          </Typography>
      </div>
    </div>
    )
}