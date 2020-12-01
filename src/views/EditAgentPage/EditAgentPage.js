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
const agentTypes = ['Empresa', 'Empresa Social', 'Startup', 'ONGD-Fundación', 'ONGD-Asociación de la Sociedad Civil',
    'Organismo Internacional', 'Cooperativa', 'Iglesia', 'Patronato', 'Sindicato', 'Colegios profesionales',
    'Organización gremial', 'Institución educativa', 'Municipalidad', 'Gobierno central', 'Iniciativa Ciudadana'];
const legalStatuses = ['Constituido', 'No Constituido'];

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
        axios.get(`http://localhost:8082/agents/${localStorage.id}`)
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
                                    password: '',
                                    confirmPassword: '',
                                    legalStatus: '',
                                    agentType: '',
                                    city: '',
                                    state: '',
                                    facebook: '',
                                    twitter: '',
                                    instagram: '',
                                    linkedIn: '',
                                    email: '',
                                    phone: '',
                                    workplace: '',
                                    studiesAt: '',
                                    profession: '',
                                    generalInformation: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email('Debe de ser un correo electrónico válido')
                                })}
                                onSubmit={values => {
                                    axios
                                        .put(`http://localhost:8082/agents/${localStorage.id}`, {
                                            firstName: values.firstName,
                                            lastName: values.lastName,
                                            password: values.password,
                                            confirmPassword: values.confirmPassword,
                                            legalStatus: values.legalStatus,
                                            agentType: values.agentType,
                                            location: {
                                                municipio: values.city,
                                                departament: values.state
                                            },
                                            facebook: values.facebook,
                                            twitter: values.twitter,
                                            instagram: values.instagram,
                                            linkedIn: values.linkedIn,
                                            email: values.email,
                                            phone: values.phone,
                                            generalInformation: values.generalInformation
                                        })
                                        .then(response => {
                                            history.push("/agent/profile");
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
                                            <h3 className={classes.title}>Información General</h3>
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
                                                fullWidth
                                                label="Estatus Legal"
                                                name="legalStatus"
                                                margin="normal"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                select
                                                SelectProps={{ native: true }}
                                                value={values.legalStatus}
                                                variant="outlined"
                                            >
                                                {legalStatuses.map(option => (
                                                    <option key={option.value} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                fullWidth
                                                label="Tipo de Agente"
                                                name="agentType"
                                                margin="normal"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                select
                                                SelectProps={{ native: true }}
                                                value={values.agentType}
                                                variant="outlined"
                                            >
                                                {agentTypes.map(option => (
                                                    <option key={option.value} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                error={Boolean(touched.firstName && errors.firstName)}
                                                fullWidth
                                                helperText={touched.firstName && errors.firstName}
                                                multiline
                                                rows={4}
                                                label="Informacion General"
                                                margin="normal"
                                                name="generalInformation"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.generalInformation}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="generalInformation"
                                            />
                                            <h3 className={classes.title}>Ubicación</h3>
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
                                            <h3 className={classes.title}>Redes Sociales</h3>
                                            <TextField
                                                error={Boolean(touched.facebook && errors.facebook)}
                                                fullWidth
                                                helperText={touched.facebook && errors.facebook}
                                                label="Facebook"
                                                margin="normal"
                                                name="facebook"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.facebook}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="facebook"
                                            />
                                            <TextField
                                                error={Boolean(touched.twitter && errors.twitter)}
                                                fullWidth
                                                helperText={touched.twitter && errors.twitter}
                                                label="Twitter"
                                                margin="normal"
                                                name="twitter"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.twitter}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="twitter"
                                            />
                                            <TextField
                                                error={Boolean(touched.instagram && errors.instagram)}
                                                fullWidth
                                                helperText={touched.instagram && errors.instagram}
                                                label="Instagram"
                                                margin="normal"
                                                name="instagram"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.instagram}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="instagram"
                                            />
                                            <TextField
                                                error={Boolean(touched.linkedIn && errors.linkedIn)}
                                                fullWidth
                                                helperText={touched.linkedIn && errors.linkedIn}
                                                label="LinkedIn"
                                                margin="normal"
                                                name="linkedIn"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="text"
                                                value={values.linkedIn}
                                                variant="outlined"
                                                autoComplete='off'
                                                id="linkedIn"
                                            />
                                            <h3 className={classes.title}>Contacto</h3>
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
