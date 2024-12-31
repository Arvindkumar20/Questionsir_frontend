import React from "react";
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    IconButton,
    CardMedia,
    Button,
  } from '@mui/material';
  import { makeStyles } from '@mui/styles';
  import GitHubIcon from "@mui/icons-material/GitHub";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import InfoIcon from "@mui/icons-material/Info";
  import TwitterIcon from "@mui/icons-material/Twitter";  
import logo from "../logo.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    position: "fixed",
    color: "primary",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(8),
    color: "black",
  },
  logo: {
    width: 45,
    height: 45,
    margin: theme.spacing(0.5),
  },
  item: {
    marginRight: theme.spacing(2),
  },
  itemEnd: {
    marginRight: theme.spacing(8),
  },
}));

export default function Navbar() {
  // const classes = useStyles();
  const gotoGitProfile = (event) =>
    (window.location.href = "http://www.github.com/kashaudhan");

  const gotoLinkedInProfile = (event) =>
    (window.location.href = "http://www.linkedin.com/in/kashaudhan");

  const gotoInfo = (event) =>
    (window.location.href = "http://www.github.com/kashaudhan/questionPairing");

  return (
    <div>
      <AppBar >
        <Container>
          <Toolbar>
            <IconButton>
              <CardMedia  image={logo} />
            </IconButton>
            <Typography variant="h5" color="inherit" className={"classes.title"}>
              Pair Questions
            </Typography>
            <Typography variant="body2" className={""}>
              <Button>Home</Button>
            </Typography>
            <Typography variant="body2" className={"classes.item"}>
              <Button>Git Repo</Button>
            </Typography>
            <Typography variant="body2" className={"classes.item"}>
              <Button>Projects</Button>
            </Typography>
            <Typography variant="body2" className={"classes.itemEnd"}>
              <Button>Contact</Button>
            </Typography>

            <IconButton onClick={gotoGitProfile}>
              <GitHubIcon />
            </IconButton>
            <IconButton onClick={gotoLinkedInProfile}>
              <LinkedInIcon />
            </IconButton>
            <IconButton onClick={gotoInfo}>
              <TwitterIcon />
            </IconButton>
            <IconButton onClick={gotoInfo}>
              <InfoIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}