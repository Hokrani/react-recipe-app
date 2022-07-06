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
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFetch, getSubCategoryFetch } from '../../actions/actions'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Link as NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '20px',
        paddingLeft: '20px',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        },
        color: 'black',
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    homeBtn: {
        color: 'black',
        fontSize: '4.5vh',
        paddingRight: '30px'

    },
}));

/**
 * This component is to display Header of the  page.
 */
const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const dispatch = useDispatch();
    let subCategory = useSelector(state => state.receipeReducer.subCategory);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    // Navigate to page based on button clicked and fetch value from API.
    const handleButtonClick = (pageURL, btnName) => {
        if (btnName === 'Menu')
            dispatch(getCategoryFetch())
        else if (btnName === 'Sub Menu')
            dispatch(getSubCategoryFetch());
        history.push(pageURL);
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="#ffffff">
                <Toolbar >
                    {/* <img src={ReactLogo} alt="React Logo" /> */}
                    <IconButton className={classes.home} component={NavLink}
                        to="/">
                        <HomeOutlinedIcon className={classes.homeBtn} />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        Receipe
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
                                <MenuItem onClick={() => handleButtonClick('/', 'Menu')}>
                                    Menu
                                </MenuItem>
                                {subCategory ? (
                                    <MenuItem onClick={() => handleButtonClick('/subMenu', 'Sub Menu')}>
                                        Sub Menu
                                    </MenuItem>
                                )
                                    : (
                                        <MenuItem disabled={true}>
                                            Sub Menu
                                        </MenuItem>
                                    )}
                                <MenuItem onClick={() => handleButtonClick('/about', 'About')}>
                                    About
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOptions}>
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick('/', 'Menu')}
                            >
                                Menu
                            </Button>
                            {subCategory ? (
                                <Button variant="contained"
                                    onClick={() => handleButtonClick('/subMenu', 'Sub Menu')} >
                                    Sub Menu
                                </Button>)
                                : (<Button variant="contained" disabled >
                                    Sub Menu
                                </Button>)}
                            <Button
                                variant="contained"
                                onClick={() => handleButtonClick('/about', 'About')}
                            >
                                About
                            </Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Header);
