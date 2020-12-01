import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from "classnames";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import * as Yup from 'yup';
import { Formik } from 'formik';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavBar from "components/NavBar.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/profile_img3.png";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import axios from 'axios';

const useStyles = makeStyles(styles);

export default function ProfilePage(nm) {
    const classes = useStyles();
    const history = useHistory();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8082/users/${localStorage.id}`)
            .then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
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
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <Typography className={classes.title}>
                                Actualizar Perfil
                            </Typography>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    city: '',
                                    state: '',
                                    email: '',
                                    password: '',
                                    confirmPassword: '',
                                    phone: '',
                                    workplace: '',
                                    studiesAt: '',
                                    profession: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email('Debe de ser un correo electrónico válido')
                                })}
                                onSubmit={values => {
                                    axios
                                        .put(`http://localhost:8082/users/${localStorage.id}`, {
                                            firstName: values.firstName,
                                            lastName: values.lastName,
                                            location: {
                                                city: values.city,
                                                departamento: values.state
                                            },
                                            email: values.email,
                                            password: values.password,
                                            confirmPassword: values.confirmPassword,
                                            phone: values.phone,
                                            workplace: values.workplace,
                                            studiesAt: values.studiesAt,
                                            profession: values.profession
                                        })
                                        .then(response => {
                                            history.push("/user/profile");
                                        });
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
                                                autoComplete='off'
                                                id="firstName"
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
                                                autoComplete='off'
                                                id="lastName"
                                            />
                                            <TextField
                                                error={Boolean(touched.city && errors.city)}
                                                fullWidth
                                                helperText={touched.city && errors.city}
                                                label="Municipio"
                                                margin="normal"
                                                name="city"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.city}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="city"
                                            />
                                            <TextField
                                                error={Boolean(touched.state && errors.state)}
                                                fullWidth
                                                helperText={touched.state && errors.state}
                                                label="Departamento"
                                                margin="normal"
                                                name="state"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.state}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="state"
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
                                                autoComplete='off'
                                                id="email"
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
                                                autoComplete='off'
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
                                                id="confirmPassword"
                                                autoComplete="off"
                                            />
                                            <TextField
                                                error={Boolean(touched.phone && errors.phone)}
                                                fullWidth
                                                helperText={touched.phone && errors.phone}
                                                label="Teléfono"
                                                margin="normal"
                                                name="phone"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.phone}
                                                variant="outlined"
                                                id="phone"
                                                autoComplete='off'
                                            />
                                            <TextField
                                                error={Boolean(touched.workplace && errors.workplace)}
                                                fullWidth
                                                helperText={touched.workplace && errors.workplace}
                                                label="Lugar de Trabajo"
                                                margin="normal"
                                                name="workplace"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.workplace}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="workplace"
                                            />
                                            <TextField
                                                error={Boolean(touched.studiesAt && errors.studiesAt)}
                                                fullWidth
                                                helperText={touched.studiesAt && errors.studiesAt}
                                                label="Lugar donde Estudia"
                                                margin="normal"
                                                name="studiesAt"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.studiesAt}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="studiesAt"
                                            />
                                            <TextField
                                                error={Boolean(touched.profession && errors.profession)}
                                                fullWidth
                                                helperText={touched.v && errors.profession}
                                                label="Profesión"
                                                margin="normal"
                                                name="profession"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.profession}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="profession"
                                            />
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                                    <Button
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        fullWidth
                                                        variant="contained"
                                                        className={classes.submit}
                                                    >
                                                        Actualizar
                                                    </Button>
                                                </GridItem>
                                            </GridContainer>
                                        </form>
                                    )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            {/* Possible Footer here<Footer /> */}
        </div >
    );
}
