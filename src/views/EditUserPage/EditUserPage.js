import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
    Button,
    TextField,
    Link,
    Box,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';
import classNames from "classnames";
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
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';

const useStyles = makeStyles(styles);

export default function EditPage(props) {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const history = useHistory();

    return (
        <div>
            <NavBar />
            <Parallax small filter image={require("assets/img/logofooter_HondurasConecta.png")} />
            <div>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <div className={classes.profile}>
                                <div>
                                    <img src={profile} alt="..." className={imageClasses} />
                                </div>
                            </div>
                        </GridItem>
                    </GridContainer>
                    <div className={classes.description}>
                        <Typography component="h1" variant="h5">
                            Actualizar Perfil
                            </Typography>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                phoneNo: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email('Debe de ser un correo electrónico válido')
                            })}
                            onSubmit={values => {
                                // axios
                                //     .post('http://localhost:8082/users', {
                                //         name: values.firstName,
                                //         lastName: values.lastName,
                                //         email: values.email,
                                //         password: values.password,
                                //         passwordConfirmation: values.confirmPassword,
                                //         phoneNo: phoneNo
                                //     })
                                //     .then(response => {
                                //         history.push("/login");
                                //     });
                                //AQUI VA EL REQUEST Y LO QUE VAYA EN VALUES PARA EL PUT Y EL USER ID DEL QUE QUERES ACTUALIZAR ESTA EN localStorage.id QUE SE GUARDA DESPUES DE HACER UN LOGIN
                            }}
                        >
                            {({
                                errors,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                touched,
                                values
                            }) => (
                                    <form onSubmit={handleSubmit} className={classes.form} noValidate>
                                        <TextField
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="Nombre"
                                            margin="normal"
                                            name="firstName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="text"
                                            value={values.firstName}
                                            variant="outlined"
                                            required
                                            id="firstName"
                                            autoComplete="firstName"
                                            autoFocus
                                        />
                                        <TextField
                                            error={Boolean(touched.lastName && errors.lastName)}
                                            fullWidth
                                            helperText={touched.lastName && errors.lastName}
                                            label="Apellido"
                                            margin="normal"
                                            name="lastName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="text"
                                            value={values.lastName}
                                            variant="outlined"
                                            required
                                            id="lastName"
                                            autoComplete="lastName"
                                            autoFocus
                                        />
                                        <TextField
                                            error={Boolean(touched.email && errors.email)}
                                            fullWidth
                                            helperText={touched.email && errors.email}
                                            label="Correo Electrónico"
                                            margin="normal"
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="email"
                                            value={values.email}
                                            variant="outlined"
                                            required
                                            id="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            error={Boolean(touched.password && errors.password)}
                                            fullWidth
                                            helperText={touched.password && errors.password}
                                            label="Contraseña"
                                            margin="normal"
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="password"
                                            value={values.password}
                                            variant="outlined"
                                            required
                                            id="password"
                                        />
                                        <TextField
                                            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                            fullWidth
                                            helperText={touched.confirmPassword && errors.confirmPassword}
                                            label="Confirmar Contraseña"
                                            margin="normal"
                                            name="confirmPassword"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="password"
                                            value={values.confirmPassword}
                                            variant="outlined"
                                            required
                                            id="confirmPassword"
                                        />
                                        <TextField
                                            error={Boolean(touched.phoneNo && errors.phoneNo)}
                                            fullWidth
                                            helperText={touched.phoneNo && errors.phoneNo}
                                            label="Nombre"
                                            margin="normal"
                                            name="firstName"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type="text"
                                            value={values.phoneNo}
                                            variant="outlined"
                                            required
                                            id="firstName"
                                            autoComplete="firstName"
                                            autoFocus
                                        />
                                        <Button
                                            disabled={isSubmitting}
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            className={classes.submit}
                                        >
                                            Actualizar
                                        </Button>
                                    </form>
                                )}
                        </Formik>
                    </div>
                </div>
                {/* Possible Footer here<Footer /> */}
            </div >
        </div>
    );
}
