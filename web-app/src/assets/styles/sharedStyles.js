import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles({
    app: {
        // minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#6666ff',
    },
}, {index: 1});

export const navBarStyles = makeStyles((theme) => ({
    navBar: {
        background: '#6666ff',
        maxWidth: '88vw',
        minHeight: '8vh',
        maxHeight: '15vh',
        position: 'static',
        marginLeft: '6%',
        
    },
    container: {
        paddingTop: '0.5%',
        backgroundColor: '#6666ff',
    },
    home: {
        marginRight: 'auto',
        
    },
    homeBtn: {
        color: 'black',
        fontSize: '4.5vh',
        
    },
    btn: {
        marginRight: theme.spacing(2),
        textTransform: 'none',
        fontSize: '2.5vh',
        '&:hover': {
            textDecoration: 'underline',
        },
        '&:focus': {
            textDecoration: 'underline',
        },
        
        
    },
    mainText: {
        // textAlign: 'center',
        // marginLeft: '5%',
        // paddingBottom: '2%',
        // fontSize: '5vh',
    },
}), {index: 1});

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(5), 
        alignItems: 'center',
        display: 'flex',
        width: '35%',
    },
    searchBtn: {
        marginRight: 'auto',
    },
    inputField: {
        minWidth: '80%',
        marginLeft: '5%',
        marginRight: 'auto',
        fontSize: '2.5vh',
    },
}), {index: 1});

export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '84vh',
        backgroundColor: '#5c00e6',
        marginTop: '2vh',
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.11), 0 6px 20px 0 rgba(0, 0, 0, 0.18)',
    },
}, {index: 1});

export const dialogStyles = makeStyles({
    dialog: {
        background: '#ffffff',
    },
    dialogTitle: {
        color: 'black',
        fontStyle: 'oblique',
        background: '#6666ff',
    },
    dialogInfoText: {
        color: 'black',
        paddingBottom: '2%',
    },
    dialogText: {
        fontSize: '2.35vh',
    },
    dialogAction: {
        background: '#6666ff',
        
    },
    dialogBtn: {
        textDecorationLine: 'underline',
        fontSize: '1.5vh',
    },
    dialogIngredients: {
        paddingTop: '1%',
        marginBottom: '1%',
        fontSize: '3.5vh',
    },
    dialogCloseBtn: {
        textDecorationLine: 'underline',
        fontSize: '2vh',
        fontStyle: 'oblique',
        textAlign:'right'
    },
}, {index: 1});

export const cardStyles = makeStyles({
    card: {
        width:  '100%',
        height: '40vh',
        background: '#ffffff',
        borderStyle: 'solid',
        border: 3.6,
        borderColor: '#8CA3BA',
        '&:hover': {
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.31)',
        },
    },
    cardAvatar: {
        textAlign: 'center',
        fontSize: '1.4vh',
    },
    cardImg: {
        paddingTop: '70.00%',
    },
    cardContent: {
        maxHeight: '50%',
        maxWidth: '100%',
    },
    cardMainText: {
        fontStyle: 'oblique', 
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",  
        fontSize: '2.8vh',     
    },
    cardOverline: {
        fontWeight: 600, 
        fontSize: '2.25vh',
    },
    cardInfoText: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: '2vh',
    }
}, {index: 1});

export const categoryGridStyles = makeStyles((theme) => ({
    grid: {
        background: '#ffffff', 
    },
    gridItem: {
        width:  '100%',
        height: '100%',
    },
    pagination: {
        marginTop: theme.spacing(2)
    }
}), {index: 1});

export const randomMealStyles = makeStyles((theme) => ({
    
    root: {
        paddingTop: '3%',
        backgroundColor: '#ffffff',
      },
    inner: {
        paddingTop: '3%',
    },
    image: {
        height: '35%', 
        width: '35%',
        marginLeft: '35%',
    },
    mainText: {
        textAlign: 'center',
        marginLeft: '5%',
        paddingBottom: '2%',
        fontSize: '5vh',
    },
    dishText: {
        fontWeight: 600, 
        fontSize: '4vh',
        paddingBottom: '0.5%',
    },
    infoText: {
        fontSize: '2.35vh',
    }
}), {index: 1});

export const textStyles = makeStyles({
    mainText: {
        paddingTop: '3%',
        textAlign: 'center',
        fontWeight: 600, 
        fontSize: '5vh',
    },
    infoText: {
        textAlign: 'center',
        fontSize: '3vh',
    },
}, {index: 1});