import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
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
                    <h3 className={classes.title}>Cesia Perdomo</h3>
                    <h6>San Pedro Sula, Cortés</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
                <h6>Trabaja</h6>
                <p>Universidad Tecnológica de Honduras</p>
                <h6>Estudia</h6>
                <p>Universidad Tecnológica de Honduras</p>
                <h6>Profesión</h6>
                <p>Universidad Tecnológica de Honduras</p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Habilidades",
                      tabIcon: BuildIcon,
                      tabContent: (
                        <GridContainer justify="center">
                            <div className={classes.description}>
                                <p>Adobe CC</p>
                                <p>Recursos Humanos</p>
                                <p>Comunicaciones</p>
                                <p>Microsoft Office</p>
                                <p>Trello</p>
                                <p>G-Suite</p>
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
    </div>
  );
}
