import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import NavBar from "../../components/NavBar.js";
import Image from '../../assets/img/holding-hands.jpeg';
import { Formik } from 'formik';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    backgroundColor: '#42858C'
  },
  section: {
    padding: "70px 0",
    paddingTop: "0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  navbar: {
    marginBottom: "-20px",
    zIndex: "100",
    position: "relative",
    overflow: "hidden",
    "& header": {
      borderRadius: "0"
    }
  },
  navigation: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    marginTop: "0",
    minHeight: "740px"
  },
  formControl: {
    margin: "0 !important",
    paddingTop: "0"
  },
  inputRootCustomClasses: {
    margin: "0!important"
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    color: "inherit"
  },
  ...headerLinksStyle(theme),
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  imageDropdownButton: {
    padding: "0px",
    top: "4px",
    borderRadius: "50%",
    marginLeft: "5px"
  },
}));

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
              Inicio de Sesión
            </Typography>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email('Debe de ser un correo electrónico válido')
                  .max(50)
                  .required('El correo electronico es requerido'),
                password: Yup.string()
                  .max(255)
                  .required('La contraseña es requerida')
              })}
              onSubmit={values => {
                axios
                  //cambia el path
                  .post('http://localhost:8082/users/authorize', {
                    email: values.email,
                    password: values.password
                  })
                  .then(response => {
                    localStorage.clear();
                    //verifica el response
                    localStorage.id = response.data._id;
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
                    />
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={classes.submit}
                    >
                      Iniciar Sesión
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </Grid>
                      <Grid item>
                        <RouterLink to={"/user/register"} className={classes.link}>
                          <Link href="#" variant="body2">
                            {"Registrate con nosotros"}
                          </Link>
                        </RouterLink>
                      </Grid>
                    </Grid>
                    <Box mt={5}>
                    </Box>
                  </form>
                )}
            </Formik>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
