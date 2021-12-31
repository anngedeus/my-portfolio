import {
    makeStyles,
    Typography,

} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import aboutMe from '../media/hobbie-image.png'


const AboutStyles = makeStyles((theme) => ({
    bigContainer: {
        marginTop: "80px",
    },
    descriptionContainer: {
       marginTop: "110px",
       marginLeft: "170px",
       background: "yellow",
       width: "950px",
       height: "500px",
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
    hobbies: {
        marginTop: theme.spacing(80),
        marginLeft: theme.spacing(-70),
    },
    aboutSnippet: {
        width: "200px",
        height: "500px",
    },
    imageContainer: {
        background: "red",
        marginTop: "-1300px",
        marginLeft: "100px",
    }
}));

export default function About() {

    const classes = AboutStyles();

    return (
       <div className={classes.bigContainer}>
            <div className={classes.descriptionContainer}>
                <h1 className={classes.header}>A deeper dive</h1>
                <Typography paragraph variant="body1" className={classes.aboutMe}>Hello, my name is Ann-Kareen and I'm currently a second-year computer <br/> 
                science student with a minor in digital arts at the University of Florida. <br/>
                I was in raised in Croix-des-bouquets, Haiti and moved to the United States <br/>
                in July of 2016 to start High School. My first introduction to STEM was when <br/>
                I joined Girls of Distinction, an after school program aimed at getting young black girls <br/>
                into the STEM fields. Joining this program made me realize my passion for innovation <br/>
                and my continual drive to learn about technology. Additionally, this made me realize <br/>
                the importance of these programs for underrepresented groups into the STEM fields. <br/>
                I'm constantly finding ways to expand my CS knowledge whether it is through undergraduate <br/>
                <span><NavLink to="Research" target="_blank" className={classes.research}> research</NavLink></span> and engineering clubs.
                </Typography>
            </div>
            <div className={classes.hobbies}>
                <h1 className={classes.header}>Outside CS</h1>
                <Typography paragraph variant="body1" className={classes.aboutMe}>When I'm not doing school work I'm probably in my room rereading my favorite book 📚, <br/>
                Children of Blood and Bone, or watching an overly dramatic reality show. Or I can be found on a random bench <br/>
                around my college campus listening to Summer Walker. Or catching up on some sleep 😴😴😴 </Typography>
            </div>
            <div className={classes.imageContainer}>
                <img src={aboutMe} alt="" className={classes.aboutSnippet}/>
            </div>
        </div>
    )
}