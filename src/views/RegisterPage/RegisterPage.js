import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  makeStyles,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import NavBar from "../../components/NavBar.js";
import styles from "assets/jss/material-kit-react/views/registerPage.js";
import axios from 'axios';

const useStyles = makeStyles(styles);

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Regístrate
            </Typography>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .max(50)
                  .required('El nombre es requerido'),
                lastName: Yup.string()
                  .max(50)
                  .required('El apellido es requerido'),
                email: Yup.string()
                  .email('Debe de ser un correo electrónico válido')
                  .max(50)
                  .required('El correo electronico es requerido'),
                password: Yup.string()
                  .max(255)
                  .required('La contraseña es requerida'),
                confirmPassword: Yup.string()
                  .max(255)
                  .required('Se necesita confirmar la contraseña')
              })}
              onSubmit={values => {
                axios
                  .post('http://localhost:8082/users', {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    passwordConfirmation: values.confirmPassword
                  })
                  .then(response => {
                    history.push("/user/login");
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
                      required
                      id="firstName"
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Al registrarse, confirma que está de acuerdo con los terminos y condiciones"
                    />
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                    >
                      Registrarse
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        ¿Ya estas registrado?
                        <Link href="#" variant="body2">
                          {`  Inicia sesión`}
                        </Link>
                      </Grid>
                    </Grid>
                    <Box mt={5} />
                  </form>
                )}
            </Formik>
          </div>
        </Grid>
      </Grid>
    </div>

  );
}
