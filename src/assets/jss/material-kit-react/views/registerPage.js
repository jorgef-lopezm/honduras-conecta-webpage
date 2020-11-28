import { container, title } from "assets/jss/material-kit-react.js";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Image from 'assets/img/group-of-people.jpeg';

const registerPageStyle = (theme) => ({
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
})

export default registerPageStyle;
