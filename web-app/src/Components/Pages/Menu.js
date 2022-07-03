import React, { useState, useEffect } from 'react';
import { Grid} from '@material-ui/core';
import Category from './Category';
import { categoryGridStyles } from '../../assets/styles/sharedStyles';
import Paging from '../reusable/Paging';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFetch, 
        getSubCategoryFetch, 
        getMealTypeFetch,
        setSubCategory } from '../actions';
import CircularProgress from '@mui/material/CircularProgress';



const Menu = (props) => {
  const classes = categoryGridStyles();
  const { history } = props;
  const dispatch = useDispatch();
  let loading = useSelector(state => state.receipeReducer.loadingData);
  let categories = useSelector(state => state.receipeReducer.categories); 
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCategoryFetch())
    setPage(1)
  }, [])

  const handleCategory = (categoryType) => {
    dispatch(setSubCategory(categoryType));
    dispatch(getSubCategoryFetch());
    history.push('/subMenu');
    setPage(1)
  }

  // const handleMeal = (MealType) => {
  //   dispatch(getMealTypeFetch(MealType));
  //   setPage(1)
  // }

  // const handleClose = () => {
  //   dispatch(getSubCategoryFetch(categoryType));
  //   setPage(1)
  // }


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
      {/* {subCategory &&
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
      } */}
      {/* {mealcontent && <MealContent mealcontent={mealcontent} handleClose={handleClose} />} */}
    </>
  )
}

export default Menu;