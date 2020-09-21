import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/avatar.png";
import Typed from "react-typed";


//CSS STYLES

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },

  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      zIndex: 1


  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
      <Avatar className={classes.avatar} src={avatar} alt="Ivan Tomic"/>
      </Grid>
      <Typography variant="h4">
        <Typed className={classes.title} strings={["Ivan Tomic."]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography  className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Development", "Web Desing", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
