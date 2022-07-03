
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Paging from '../reusable/Paging';
import { categoryGridStyles } from '../../assets/styles/sharedStyles';
import { useDispatch } from 'react-redux';
import Meal from './Meal';
import { getMealTypeFetch, getCategoryFetch, getSubCategoryFetch } from '../actions';
import MealContent from '../reusable/MealContent';
import CircularProgress from '@mui/material/CircularProgress';

const SubMenu = (props) => {
    const dispatch = useDispatch();
    const classes = categoryGridStyles();
    const [page, setPage] = useState(1);
    const { history } = props;
    let loading = useSelector(state => state.receipeReducer.loadingData);
    let subCategory = useSelector(state => state.receipeReducer.subCategory);
    let mealcontent = useSelector(state => state.receipeReducer.mealType);


    useEffect(() => {
        dispatch(getSubCategoryFetch());
        setPage(1)
    }, [])
    const handleMeal = (MealType) => {
        dispatch(getMealTypeFetch(MealType));
        setPage(1)
    }
    const handlePageChange = (e, value) => {
        setPage(value);
    };
    const handleClose = () => {
        dispatch(getSubCategoryFetch());
        setPage(1)
    }
    useEffect(() => {
        dispatch(getCategoryFetch())
        setPage(1)
    }, [])
    return (
        <>
            {loading && <CircularProgress color="inherit" />}            
            {mealcontent && <MealContent mealcontent={mealcontent} handleClose={handleClose} />}
            {subCategory && !mealcontent &&
                <>
                    <Grid className={classes.grid} container spacing={3}>
                        {subCategory.slice((page - 1) * 8, page * 8).map((meal, index) => {
                            return (
                                <Grid className={classes.gridItem} item xs={6} sm={3} key={index}>
                                    <Meal meal={meal} handleMeal={handleMeal} />
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Paging type={subCategory} page={page} handlePageChange={handlePageChange} />
                </>
            }
        </>
    )
}

export default SubMenu;