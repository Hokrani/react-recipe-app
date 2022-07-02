import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Category from './Category';
import SearchBar from '../reusable/SearchBar';
import { categoryGridStyles } from '../../assets/styles/sharedStyles';
import Meal from './Meal';
import Paging from '../reusable/Paging';
import MealContent from '../reusable/MealContent';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialData, getCategoryFetch, getSubCategoryFetch, getMealTypeFetch } from '../actions';
import CircularProgress from '@mui/material/CircularProgress';


const CategoriesGrid = () => {
  const classes = categoryGridStyles();

  const dispatch = useDispatch();
  // const categories=useSelector(state=>state.receipeReducer.categories);
  //initial to fetch data
  // dispatch(setInitialData())
  let loading = useSelector(state => state.receipeReducer.loadingData);
  let categories = useSelector(state => state.receipeReducer.categories);
  let subCategory = useSelector(state => state.receipeReducer.subCategory);
  let mealcontent = useSelector(state => state.receipeReducer.mealType);
  const [categoryType, setCategoryType] = useState();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    dispatch(getCategoryFetch())       
  }, [1])

  const handleCategory = (categoryType) => {
    dispatch(getSubCategoryFetch(categoryType));
    setCategoryType(categoryType);
  }

  const handleMeal = (MealType) => {
    dispatch(getMealTypeFetch(MealType));   
  }

  const handleClose = () => {
    dispatch(getSubCategoryFetch(categoryType));
  }

 
  const handlePageChange = (e, value) => {
    setPage(value);
  };


  return (
    <>
      {loading && <CircularProgress color="inherit" />}
      {categories && (
        <>
          <Grid className={classes.grid} container spacing={3}>
            {categories.slice((page - 1) * 8, page * 8).map((category, index) => {
              return (
                <Grid className={classes.gridItem} item xs={6} sm={3} key={index}>
                  <Category category={category} handleCategory={handleCategory} />
                </Grid>
              )
            })}
          </Grid>
          <Paging type={categories} page={page} handlePageChange={handlePageChange} />
        </>
      )}
      {subCategory &&
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
      {mealcontent && <MealContent mealcontent={mealcontent} handleClose={handleClose} />}
    </>
  )
}

export default CategoriesGrid;