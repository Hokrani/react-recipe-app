import { AppBar, Toolbar, IconButton, Button,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { navBarStyles } from '../assets/styles/sharedStyles';


function NavBar() {
    const classes = navBarStyles();

    return (
        <div className={classes.container}>
            <AppBar className={classes.navBar} >
                <Toolbar>
                    <IconButton className={classes.home} component={Link} 
                                to="/">
                        <HomeOutlinedIcon className={classes.homeBtn}/>
                    </IconButton>   
                    <Button className={classes.btn} component={Link} 
                                to="/Main Menu">
                        About
                    </Button>
                    <Button className={classes.btn} component={Link} 
                                to="/about">
                        About
                    </Button>                
                    <Button className={classes.btn} component={Link} 
                                to="/about">
                        About
                    </Button>
                </Toolbar>
            </AppBar>  
        </div>
         
    )
}

export default NavBar;