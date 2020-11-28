import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavBar from "../../components/NavBar.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/cesia.jpg";
import BuildIcon from '@material-ui/icons/Build';
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CreateIcon from '@material-ui/icons/Create';
import Button from "components/CustomButtons/Button.js";
import axios from 'axios';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [studiesAt, setStudiesAt] = useState("");
  const [profession, setProfession] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8082/users/${localStorage.id}`)
      .then(response => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setCity(response.data.location.city);
        setState(response.data.location.departamento);
        setWorkPlace(response.data.workplace);
        setStudiesAt(response.data.studiesAt);
        setProfession(response.data.profession);
      });
  });

  return (
    <div>
      <NavBar />
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
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <Typography className={classes.title}>
                <CreateIcon className={classes.linkIcon} /> Informacion
              </Typography>
              <h6 className={classes.textColor}>Trabaja</h6>
              <p className={classes.textColor}>{workPlace}</p>
              <h6 className={classes.textColor}>Estudia</h6>
              <p className={classes.textColor}>{studiesAt}</p>
              <h6 className={classes.textColor}>Profesión</h6>
              <p className={classes.textColor}>{profession}</p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Habilidades",
                      tabIcon: BuildIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <div className={classes.description}>
                            <p className={classes.textColor}>Adobe CC</p>
                            <p className={classes.textColor}>Recursos Humanos</p>
                            <p className={classes.textColor}>Comunicaciones</p>
                            <p className={classes.textColor}>Microsoft Office</p>
                            <p className={classes.textColor}>Trello</p>
                            <p className={classes.textColor}>G-Suite</p>
                          </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Intereses",
                      tabIcon: FavoriteIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <div className={classes.description}>
                            <h6>Hambre Cero</h6>
                            <p>Alimentacion</p>
                            <p>Nutrición</p>
                            <h6>Salud y Bienestar</h6>
                            <p>Salud Infantil</p>
                            <p>Salud Mental</p>
                          </div>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Contacto",
                      tabIcon: RecentActorsIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <div className={classes.description}>
                            <h6>Correo Electrónico</h6>
                            <p>cesiaperdomo@hondurasconecta.hn</p>
                            <h6>Telefono</h6>
                            <p>(+504) 9580-5899</p>
                          </div>
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
      {/* Possible Footer here<Footer /> */}
    </div >
  );
}
