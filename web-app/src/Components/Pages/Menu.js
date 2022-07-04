import React, { useState, useEffect,useRef } from 'react';
import { Grid } from '@material-ui/core';
import Category from '../reusable/Category';
import { menuGridStyles } from '../../styles/sharedStyles';
import Paging from '../reusable/Paging';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryFetch,
  getSubCategoryFetch,
  getMealTypeFetch,
  setSubCategory
} from '../../actions/actions';
import CircularProgress from '@mui/material/CircularProgress';



const Menu = (props) => {
  const classes = menuGridStyles();
  const { history } = props;
  const dispatch = useDispatch();
  let loading = useSelector(state => state.receipeReducer.loadingData);
  let categories = useSelector(state => state.receipeReducer.categories);
  const [page, setPage] = useState(1);
  const myRef = useRef(null)
  const scrollToRef = (ref) => window.scrollTo(0, 0) 

  useEffect(() => {
    dispatch(getCategoryFetch());
    setPage(1);
    scrollToRef(myRef);
  }, [])

  const handleCategory = (categoryType) => {
    dispatch(setSubCategory(categoryType));
    dispatch(getSubCategoryFetch());
    history.push('/subMenu');
    setPage(1)
  }

  const handlePageChange = (e, value) => {
    setPage(value);
    scrollToRef(myRef);
  };


  return (
    <>
      <div ref={myRef}>
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
      </div>
    </>
  )
}

export default Menu;