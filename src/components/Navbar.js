import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemTest,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import Header from "./Header"

//CSS STYLES
const useStyles = makeStyles((theme) => ({
  manuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
    
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const togglerSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box className={classes.manuSliderContainer} 
    component="div"
    onClick={togglerSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt="Ivan Tomic" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
   );

  return (
    <>
   
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={togglerSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography varian="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>

            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={togglerSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
        
      </Box>
      
    </>
  );
};

export default Navbar;
