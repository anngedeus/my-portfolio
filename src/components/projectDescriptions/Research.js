import React from 'react'
import {
  Hidden,
    makeStyles,
    Typography,
} from "@material-ui/core";


const ResearchStyles = makeStyles((theme) => ({
      bigContainer: {
        marginTop: "80px",
      },
      container: {
        background: "#FFDDB4",
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

export default function Research() {

    const classes = ResearchStyles();

    return (
      <div className={classes.bigContainer}>
        <h1 className={classes.header}>Undergraduate Research - Human Experience Research Lab</h1>
        <div className={classes.container}>
            <br></br>
            <h4 className={classes.subheader}>OVERVIEW</h4>
                <Typography paragraph className={classes.descriptions}>
                    The goal of this research project is developing an IoT healthcare <br/>  system using Web Bluetooth Low Energy (WEBLE) technology
                    <br/> that supports a variety of health device.
                </Typography>
            <h4 className={classes.subheader}>ROLE</h4>
                <Typography paragraph className={classes.descriptions}>
                    <h4 fontWeight="bolder">Undergraduate Researcher</h4>
                    User Interaction, User Experience, and Visual Design
                </Typography>
                <Typography paragraph className={classes.descriptions}>
                   September 2021 - Ongoing
                </Typography>
        </div>
        <div className={classes.container2}>
            <h2 className={classes.subheader}>Work so far</h2>
            <Typography paragraph className={classes.descriptions}>
                My task for this research project is focused on User Experiences and User Interfaces of a visual health app.
            </Typography>
            <Typography paragraph className={classes.descriptions}>
                The following were my research questions to consider: <br/>
            </Typography>
            <Typography paragraph className={classes.descriptions}>
                How do people interact with health platforms? <br/>
                Designing UI for Health platforms?
            </Typography>
            <Typography paragraph className={classes.descriptions}>
                Using these questions I searched for articles relating to designing health apps and making these apps human-centered <br/>
                and cross-platformed. Using 2 of the articles I conducted a literature review and gave a presentation of the methods <br/>
                that I'll be using in the second phase of the research project which is to create a cross-platform health app.
            </Typography>
        </div>
      </div>
    )
}