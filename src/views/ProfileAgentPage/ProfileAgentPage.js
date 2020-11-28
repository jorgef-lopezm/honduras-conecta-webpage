import React, { useState, useEffect } from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavBar from "../../components/NavBar.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/cesia.jpg";
import studio1 from "assets/img/working-hands.jpeg";
import studio2 from "assets/img/profile_img1.jpg";
import studio3 from "assets/img/logofooter_HondurasConecta.png";
import studio4 from "assets/img/holding-hands.jpeg";
import studio5 from "assets/img/group-of-people.jpeg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import CreateIcon from '@material-ui/icons/Create';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(styles);

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ProfilePage(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [generalInfo, setGeneralInfo] = useState("");

  useEffect(() => {
    // Cambiar eso al path indicado y cambiar los nombres de atributos del obj
    // axios.get(`http://localhost:8082/users/${localStorage.id}`)
    //   .then(response => {
    //     setFirstName(response.data.firstName);
    //     setLastName(response.data.lastName);
    //     setCity(response.data.location.city);
    //     setState(response.data.location.departamento);
    //     setGeneralInfo(response.data.info);
    //   });
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <h2>Text in a modal</h2>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter " + classes.textColor} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram " + classes.textColor} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook " + classes.textColor} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin-in " + classes.textColor}></i>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <Button justIcon link className={classes.margin5} onClick={handleOpen}>
                <CreateIcon className={classes.textColor} />
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
              >
                {body}
              </Modal>
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
      {/* Possible Footer here<Footer /> */}
    </div>
  );
}
