import {
    Toolbar,
    makeStyles,
    Typography,

} from "@material-ui/core";
import { NavLink } from 'react-router-dom';


const AboutStyles = makeStyles((theme) => ({
    description: {
        marginTop: theme.spacing(-25),
        marginLeft: theme.spacing(19),
    },
    header: {
        fontSize: "30px",
        fontFamily: "Arvo",
        fontWeight: "bolder",
    },
    aboutMe: {
        fontSize: "20px",
        fontFamily: "Arvo",
        fontWeight: "lighter",
    },
    research: {
        color: "#FF77FF",
        textDecoration: "none",
        "&:hover": {
            color: "#2EC400",
        },
    },
    random: {
        marginTop: theme.spacing(80),
        marginLeft: theme.spacing(-70),
    }
}));

export default function About() {

    const classes = AboutStyles();

    return (
        <Toolbar>
            <div className={classes.description}>
                <h1 className={classes.header}>A deeper dive</h1>
                <Typography paragraph="true" variant="body1" className={classes.aboutMe}>Hello, my name is Ann-Kareen and I'm currently a second-year computer <br/> science 
                student with a minor in digital arts at the University of Florida. <br/>
                I was in raised in Croix-des-bouquets, Haiti and moved to the United States
                <br/> in July of 2016 to start High School. My first introduction to STEM was when <br/>
                I joined Girls of Distinction, an after school program aimed at getting young black  <br/> girls
                into the STEM fields. Joining this program made me realize my passion for <br/> innovation  
                and my continual drive to learn about technology. Additionally, this made me realize
                the importance of these programs for underrepresented groups into the STEM fields.
                I'm constantly finding ways to expand my CS knowledge whether it is through undergraduate
                <span><NavLink to="project" className={classes.research}> research</NavLink></span> and engineering clubs.
                </Typography>
            </div>
            <div className={classes.random}>
                <h1 className={classes.header}>Outside CS</h1>
                <Typography paragraph="true" variant="body1" className={classes.aboutMe}>When I'm not doing school work I'm probably in my room rereading my favorite book 📚, 
                Children of Blood and Bone, or watching an overly dramatic reality show. Or I can be found on a random bench
                around my college campus listening to Summer Walker. Or catching up on some sleep 😴😴😴 </Typography>
            </div>

        </Toolbar>
    )
}