import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import NavBar from "../../components/NavBar.js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Image from '../../assets/img/working-hands.jpeg';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';


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
              Régistro de Agente
            </Typography>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                agentType: ''
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string()
                  .max(50)
                  .required('El nombre es requerido'),
                email: Yup.string()
                  .email('Debe de ser un correo electrónico válido')
                  .max(50)
                  .required('El correo electronico es requerido'),
                password: Yup.string()
                  .max(255)
                  .required('La contraseña es requerida'),
                agentType: Yup.string()
                  .required('El correo electronico es requerido')
              })}
              onSubmit={values => {
                // AQUI VA EL REQUEST Y EN VALUES ESTAN LOS VALORES
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
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Nombre"
                      margin="normal"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.name}
                      variant="outlined"
                      required
                      id="firstName"
                      autoComplete="firstName"
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
                      type="text"
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
                      autoComplete="current-password"
                    />
                    <InputLabel>Tipo de Agente</InputLabel>
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
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Al registrarse, confirma que está de acuerdo con los terminos y condiciones"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Subscribirse al boletín"
                    />
                    <Button
                      disable={isSubmitting}
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
