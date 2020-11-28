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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(styles);

export default function EditAgentPage(props) {
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
                                password: '',
                                confirmPassword: '',
                                legalStatus: '',
                                agentType: ''
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
                                        <Select
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="agentType"
                                            label="Tipo de Agente"
                                            id="agentType"
                                            value={values.agentType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Empresa'}>Empresa</MenuItem>
                                            <MenuItem value={'Empresa Social'}>Empresa Social</MenuItem>
                                            <MenuItem value={'Startup'}>Startup</MenuItem>
                                            <MenuItem value={'ONGD-Fundación'}>ONGD-Fundación</MenuItem>
                                            <MenuItem value={'ONGD-Asociación de la Sociedad Civil'}>ONGD-Asociación de la Sociedad Civil</MenuItem>
                                            <MenuItem value={'Organismo Internacional'}>Organismo Internacional</MenuItem>
                                            <MenuItem value={'Cooperativa'}>Cooperativa</MenuItem>
                                            <MenuItem value={'Iglesia'}>Iglesia</MenuItem>
                                            <MenuItem value={'Patronato'}>Patronato</MenuItem>
                                            <MenuItem value={'Sindicato'}>Sindicato</MenuItem>
                                            <MenuItem value={'Colegios profesionales'}>Colegios profesionales</MenuItem>
                                            <MenuItem value={'Organización gremial'}>Organización gremial</MenuItem>
                                            <MenuItem value={'Institución educativa'}>Institución educativa</MenuItem>
                                            <MenuItem value={'Municipalidad'}>Municipalidad</MenuItem>
                                            <MenuItem value={'Gobierno central'}>Gobierno central</MenuItem>
                                            <MenuItem value={'Iniciativa Ciudadana'}>Iniciativa Ciudadana</MenuItem>
                                        </Select>
                                        <InputLabel>Estatus Legal</InputLabel>
                                        <Select
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="agentType"
                                            label="Estatus Legal"
                                            id="agentType"
                                            value={values.legalStatus}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Constituido'}>Constituido</MenuItem>
                                            <MenuItem value={'No Constituido'}>No Constituido</MenuItem>
                                        </Select>
                                        <InputLabel>Departamento</InputLabel>
                                        <Select
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="agentType"
                                            label="Estatus Legal"
                                            id="agentType"
                                            value={values.agentType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'Atlántida'}>Atlántida</MenuItem>
                                            <MenuItem value={'Colón'}>Colón</MenuItem>
                                            <MenuItem value={'Comayagua'}>Comayagua</MenuItem>
                                            <MenuItem value={'Copán'}>Copán</MenuItem>
                                            <MenuItem value={'Cortés'}>Cortés</MenuItem>
                                            <MenuItem value={'Choluteca'}>Choluteca</MenuItem>
                                            <MenuItem value={'El Paraíso'}>El Paraíso</MenuItem>
                                            <MenuItem value={'Francisco Morazán'}>Francisco Morazán</MenuItem>
                                            <MenuItem value={'Gracias a Dios'}>Gracias a Dios</MenuItem>
                                            <MenuItem value={'Intibucá'}>Intibucá</MenuItem>
                                            <MenuItem value={'Islas de la Bahía'}>Islas de la Bahía</MenuItem>
                                            <MenuItem value={'La Paz'}>La Paz</MenuItem>
                                            <MenuItem value={'Lempira'}>Lempira</MenuItem>
                                            <MenuItem value={'Ocotepeque'}>Ocotepeque</MenuItem>
                                            <MenuItem value={'Olancho'}>Olancho</MenuItem>
                                            <MenuItem value={'Santa Barbara'}>Santa Barbara</MenuItem>
                                            <MenuItem value={'Valle'}>Valle</MenuItem>
                                            <MenuItem value={'Yoro'}>Yoro</MenuItem>
                                        </Select>
                                        <TextField
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="Municipio"
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
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="Facebook"
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
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="Instagram"
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
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="Twitter"
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
                                            error={Boolean(touched.firstName && errors.firstName)}
                                            fullWidth
                                            helperText={touched.firstName && errors.firstName}
                                            label="LinkedIn"
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
