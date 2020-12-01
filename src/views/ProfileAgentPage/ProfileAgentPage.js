import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classNames from "classnames";
import { makeStyles, Link } from "@material-ui/core";
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AgentNavBar from "../../components/AgentNavBar.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/profile_img3.png";
import studio1 from "assets/img/working-hands.jpeg";
import studio2 from "assets/img/profile_img1.jpg";
import studio3 from "assets/img/logofooter_HondurasConecta.png";
import studio4 from "assets/img/holding-hands.jpeg";
import studio5 from "assets/img/group-of-people.jpeg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import axios from 'axios';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [generalInfo, setGeneralInfo] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8082/agents/${localStorage.id}`)
      .then(response => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setCity(response.data.location.municipio);
        setState(response.data.location.departament);
        setGeneralInfo(response.data.generalInformation);
        setFacebook(response.data.facebook);
        setLinkedin(response.data.linkedIn);
        setTwitter(response.data.twitter);
        setInstagram(response.data.instagram);
      });
  });

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <AgentNavBar />
      <Parallax small filter image={require("assets/img/logofooter_HondurasConecta.png")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{firstName + " " + lastName}</h3>
                    <h6>{city}, {state}</h6>
                    <Button justIcon link className={classes.margin5}>
                      <RouterLink to={twitter}>
                        <Link>
                          <i className={"fab fa-twitter " + classes.textColor} />
                        </Link>
                      </RouterLink>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <RouterLink to={instagram}>
                        <Link>
                          <i className={"fab fa-instagram " + classes.textColor} />
                        </Link>
                      </RouterLink>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <RouterLink to={facebook}>
                        <Link>
                          <i className={"fab fa-facebook " + classes.textColor} />
                        </Link>
                      </RouterLink>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <RouterLink to={linkedin}>
                        <Link>
                          <i className={"fab fa-linkedin-in " + classes.textColor}></i>
                        </Link>
                      </RouterLink>
                    </Button>
                  </div>
                  <RouterLink to={"/agent/edit"} className={classes.link}>
                    <Button variant="outlined">Editar Perfil</Button>
                  </RouterLink>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p className={classes.textColor}>
                {generalInfo}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Galeria",
                      tabIcon: Filter1Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Galeria",
                      tabIcon: Filter2Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Galeria",
                      tabIcon: Filter3Icon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
