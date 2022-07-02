import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCategoryFetch,getSubCategoryFetch } from './Components/actions';
import ReactLogo from './Components/logo1.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        }
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    }
}));

const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const dispatch = useDispatch();

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

   const handleButtonClick = (pageURL,btnName) => {
       if(btnName === 'Menu')
             dispatch(getCategoryFetch())
        else if(btnName === 'Sub Menu')
              dispatch(getSubCategoryFetch());
        history.push(pageURL);
        setAnchorEl(null);
    };

    const menuItems = [
        {
            menuTitle: "Menu",
            pageURL: "/"        
        },    
        {
            menuTitle: "Sub Menu",
            pageURL: "/"        
        }, 
        {
            menuTitle: "About",
            pageURL: "/about"
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                {/* <img src={ReactLogo} alt="React Logo" /> */}
                    <Typography variant="h6" className={classes.title}>
                        Hoks Receipe Specialist
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem onClick={() => handleButtonClick(pageURL,menuTitle)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOptions}>
                            {menuItems.map(menuItem => {
                                const { menuTitle, pageURL } = menuItem;
                                return (
                                    <Button
                                        variant="contained"
                                        onClick={() => handleButtonClick(pageURL,menuTitle)}
                                    >
                                        {menuTitle}
                                    </Button>
                                );
                            })}
                            {/* <Button
                variant="contained"
                onClick={() => handleButtonClick("/")}
              >
                HOME
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/contact")}
              >
                CONTACT
              </Button>
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/about")}
              >
                ABOUT
              </Button> */}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);
