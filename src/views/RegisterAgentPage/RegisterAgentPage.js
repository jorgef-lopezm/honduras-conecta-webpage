import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import AgentNavBar from "../../components/AgentNavBar.js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../assets/img/working-hands.jpeg';
import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';

const agentTypes = ['Empresa', 'Empresa Social', 'Startup', 'ONGD-Fundación', 'ONGD-Asociación de la Sociedad Civil',
  'Organismo Internacional', 'Cooperativa', 'Iglesia', 'Patronato', 'Sindicato', 'Colegios profesionales',
  'Organización gremial', 'Institución educativa', 'Municipalidad', 'Gobierno central', 'Iniciativa Ciudadana'];

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
  phoneRoot: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
      margin: 80
    },
    "&$disabled": {
      '&:before': {
        borderBottom: 'none!important',
      },
      '& svg': {
        display: 'none',
      },
    },
  },
  underline: {
    '&:after': {
      transition: 'none',
    },
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AgentNavBar />
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
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                agentType: '',
                phone: ''
              }}
              validationSchema={Yup.object().shape({
                firstName: Yup.string()
                  .max(50)
                  .required('El nombre es requerido'),
                email: Yup.string()
                  .email('Debe de ser un correo electrónico válido')
                  .max(50)
                  .required('El correo electronico es requerido'),
                password: Yup.string()
                  .max(255)
                  .required('La contraseña es requerida'),
                confirmPassword: Yup.string()
                  .max(255)
                  .required('Favor confirmar la contraseña')
              })}
              onSubmit={values => {
                axios
                  .post('http://localhost:8082/agents', {
                    firstName: values.firstName,
                    email: values.email,
                    password: values.password,
                    passwordConfirmation: values.confirmPassword
                  })
                  .then(response => {
                    axios
                      .put(`http://localhost:8082/agents/${response.data._id}`, {
                        lastName: values.lastName,
                        agentType: values.agentType,
                        phone: values.phone
                      })
                      .then(response => {
                        history.push("/agent/login");
                      });
                  })
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
                      type="text"
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
                    />
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
                      required
                    >
                      {agentTypes.map(option => (
                        <option key={option.value} value={option}>
                          {option}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Teléfono"
                      margin="normal"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                      required
                      id="phone"
                      autoComplete="off"
                      autoFocus
                      className={classes.phoneRoot + " " + classes.underline}
                    />
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
