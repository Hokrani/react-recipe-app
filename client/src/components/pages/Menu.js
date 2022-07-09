import React, { useState, useEffect,useRef } from 'react';
import { Grid } from '@material-ui/core';
import Category from '../reusable/Category';
import { menuGridStyles } from '../../styles/sharedStyles';
import Paging from '../reusable/Paging';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryFetch,
  getSubCategoryFetch,
  setSubCategory
} from '../../actions/actions';
import ProgressBar from '../reusable/ProgressBar';

/**
 * This is component to display all receipe category in the main page. 
 */
const Menu = (props) => {
  const classes = menuGridStyles();
  const { history } = props;
  const dispatch = useDispatch();
  let loading = useSelector(state => state.receipeReducer.loadingData);
  let categories = useSelector(state => state.receipeReducer.categories);
  const [page, setPage] = useState(1);
  const myRef = useRef(null)
  
    // once the page is loaded, mouse pointer should move top of the page
  const scrollToRef = (ref) => window.scrollTo(0, 0) 


  // load the all category receipent once the page is loaded. 
  useEffect(() => {
    dispatch(getCategoryFetch());
    setPage(1);
    scrollToRef(myRef);
  },[dispatch])

  // Once user click on category type, store in redux and fetch the sub-category list
  const handleCategory = (categoryType) => {
    dispatch(setSubCategory(categoryType));
    dispatch(getSubCategoryFetch());
    history.push('/subMenu');
    setPage(1)
  }

  // Once the page link is clicked, it should navigate to other page.
  const handlePageChange = (e, value) => {
    setPage(value);
    scrollToRef(myRef);
  };


  return (
    <>
      <div ref={myRef}>
        {loading &&  <ProgressBar />}
        {categories && (
          <>
            <Grid className={classes.grid} container spacing={3}>
              {categories.slice((page - 1) * 8, page * 8).map((category, index) => {
                return (
                  <Grid className={classes.gridItem} item xs={6} sm={3} key={index}>
                    <Category key={index} category={category} handleCategory={handleCategory} />
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