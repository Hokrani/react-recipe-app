import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles({
    app: {
        // minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#6666ff',
    },
}, {index: 1});
export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '84vh',
        backgroundColor: '#5c00e6',
        marginTop: '2vh',
        boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.11), 0 6px 20px 0 rgba(0, 0, 0, 0.18)',
    },
}, {index: 1});

export const mealContentStyles = makeStyles({
    dialog: {
        background: '#ffffff',
    },
    title: {
        color: 'black',
        fontStyle: 'oblique',
        background: '#6666ff',
    },
    infoText: {
        color: 'black',
        paddingBottom: '2%',
        fontFamily:'Georgia',
    },
   
    action: {
        background: '#6666ff',
        
    },
    cardImg: {
        paddingTop: '70.00%',
    },
    
    ingredients: {
        paddingTop: '1%',
        marginBottom: '1%',
        fontSize: '3.5vh',
        textDecorationLine: 'underline',
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
        overflow: "scroll",
        overflowX:"hidden",
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
        fontFamily:'Arial Black',
    },
    
    cardInfoText: {        
        fontSize: '2vh',
        fontFamily:'Georgia',
    }
}, {index: 1});


export const subMenuCardStyles = makeStyles({
    // card: {
    //     width:  '100%',
    //     height: '35vh',
    //     background: '#ffffff',
    //     borderStyle: 'solid',
    //     border: 3.6,
    //     borderColor: '#8CA3BA',
    //     '&:hover': {
    //         boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.31)',
    //     },
    //     overflow: "scroll",
    //     overflowX:"hidden",
    // },
    card: {
        width:  '100%',
        height: '35vh',
        background: '#ffffff',
        borderStyle: 'solid',
        border: 3.6,
        borderColor: '#8CA3BA',
        '&:hover': {
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.24), 0 6px 20px 0 rgba(0, 0, 0, 0.31)',
        },
        overflow: "scroll",
        overflowX:"hidden",
    },
    cardImg: {
        paddingTop: '70.00%',
    },
    cardContent: {
        maxHeight: '50%',
        maxWidth: '100%',     
    },
    cardOverline: {
        fontWeight: 600, 
        fontSize: '2vh',
        fontFamily:'Arial Black',
    },
    
}, {index: 1});

export const menuGridStyles = makeStyles((theme) => ({
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


export const subMenuStyles = makeStyles((theme) => ({
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