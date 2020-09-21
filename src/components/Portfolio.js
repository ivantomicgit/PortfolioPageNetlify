import React from "react";
import Navbar from "./Navbar";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainContainer: {
    background: "#223",
    height: "100%",
    opacity: 0.7,
  },
  cardContiner: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={9} md={6}>
            <Card className={classes.cardContiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  //   image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              
            </Card>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={9} md={6}>
            <Card className={classes.cardContiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  //   image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
             
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
