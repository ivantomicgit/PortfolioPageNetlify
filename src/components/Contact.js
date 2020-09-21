import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Typogrphy,
  Button,
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";



const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
        color: "red",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const useSyles = makeStyles({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "peru",
    borderColor: "peru",
  },
});

function Contact() {
  const classes = useSyles();

  return (
    <div>
        <Navbar/>
      <Box component="div">
        <Grid container justify="center" >
          <Box
            component="form"
            className={classes.form}
            // style={{
            //   top: "50%",
            //   left: "50%",
            //   transform: "translate(-50%, -50%)",
            //   position: "apsolute",
            // }}
            //className={classes.form}
          >
            <Typography variant="h5" style={{color: "peru"}}>Contact me or hire me...</Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"              
            />
            <br />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <br />
            <InputField
              fullWidth={true}
              label="Company"
              variant="outlined"
              inputProps={{ style: { color: "white" } }}
              margin="dense"
              size="medium"
            />
            <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
              contact me
            </Button>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;
