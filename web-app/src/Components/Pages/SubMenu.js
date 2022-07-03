
import React from 'react';
import { Grid } from '@material-ui/core';
import Paging from '../reusable/Paging';
import { subMenuStyles } from '../../assets/styles/sharedStyles';
import { connect } from 'react-redux';
import Meal from '../reusable/Meal';
import { getMealTypeFetch,  getSubCategoryFetch } from '../actions';
import MealContent from '../reusable/MealContent';
import CircularProgress from '@mui/material/CircularProgress';

class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 }
        this.classes = subMenuStyles;
        this.myRef = React.createRef();
    }

    scrollToMyRef = () => window.scrollTo(0, 0)
    componentDidMount() {
        this.props.getSubCategoryFetch();
        this.setState({ page: 1 });
        this.scrollToMyRef();
    }
    componentDidUpdate() {
        this.scrollToMyRef();
    }
    handleMeal = (MealType) => {
        this.props.getMealTypeFetch(MealType);
        this.setState({ page: 1 });
    }
    handlePageChange = (e, value) => {
        this.setState({ page: value });
    };
    handleClose = () => {
        this.props.getSubCategoryFetch();
        this.setState({ page: 1 });
    }
    render() {
        return (
            <>
                <div ref={this.myRef}>
                    {this.props.loading && <CircularProgress color="inherit" />}
                    {this.props.mealcontent && <MealContent mealcontent={this.props.mealcontent} handleClose={this.handleClose} />}
                    {this.props.subCategory && !this.props.mealcontent &&
                        <>
                            <Grid className={this.classes.grid} container spacing={3}>
                                {this.props.subCategory.slice((this.state.page - 1) * 8, this.state.page * 8).map((meal, index) => {
                                    return (
                                        <Grid className={this.classes.gridItem} item xs={6} sm={3} key={index}>
                                            <Meal meal={meal} handleMeal={this.handleMeal} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            <Paging type={this.props.subCategory} page={this.state.page} handlePageChange={this.handlePageChange} />
                        </>
                    }
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        loading: state.receipeReducer.loadingData,
        subCategory: state.receipeReducer.subCategory,
        mealcontent: state.receipeReducer.mealType
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getSubCategoryFetch: () => dispatch(getSubCategoryFetch()),
        getMealTypeFetch: (MealType) => dispatch(getMealTypeFetch(MealType)),
        getSubCategoryFetch: () => dispatch(getSubCategoryFetch()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);