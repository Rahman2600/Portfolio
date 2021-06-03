import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from '@material-ui/core';


import project1 from "../images/hsbc.png";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "MailIt!",
    description: `Templated email solution for HSBC`,
    image: project1,
    demoLink: "https://main.d3gwitonpxsdyn.amplifyapp.com/",
    codeLink: "https://github.com/Rahman2600/7MailIt",
    additionalInformation: `Username: mountainSasquatch00@gmail.com Password: teamMailIt!`
  },
  // {
  //   name: "InsightUBC",
  //   description: `Query system for UBC courses and rooms`,
  //   image: project3,
  //   demoLink: "",
  //   codeLink: "https://github.com/Rahman2600/InsightUBC"
  // },
  {
    name: "Schedule Builder",
    description: `Helps UBC students create their timetables more easily by generating all possible combinations of course sections in different courses and displaying the different combinations in a browsable list of timetables.`,
    image: project2,
    demoLink: "http://rahman2600.github.io/Schedule-Builder",
    codeLink: "https://github.com/Rahman2600/Schedule-Builder",
    additionalInformation: `Unfortunately, I lost the backend code. The demo version is the offline version of the application`
  }
];

const Portfolio = () => {
  const preventDefault = event => event.preventDefault();
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button size="small" color="primary" href={project.demoLink} target="_blank">
                      Live Demo
                  </Button>
                  <Button href={project.codeLink} target="_blank" size="small" color="primary">
                    Code
                  </Button>
              </CardActions>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                      {project.additionalInformation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
