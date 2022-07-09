
import React from 'react';
import { Grid } from '@material-ui/core';
import Paging from '../reusable/Paging';
import { subMenuStyles } from '../../styles/sharedStyles';
import { connect } from 'react-redux';
import Receipe from '../reusable/Receipe';
import { getReceipeTypeFetch,  getSubCategoryFetch } from '../../actions/actions';
import ReceipeContent from '../reusable/ReceipeContent';
import ProgressBar from '../reusable/ProgressBar';

/**
 * This is component to display all sub category receipe. 
 */
class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 }
        this.classes = '';
        this.myRef = React.createRef();
    }

    // once the page is loaded, mouse pointer should move top of the page
    scrollToMyRef = () => window.scrollTo(0, 0)

    
    // load the all sub-category list once the page is loaded. 
    componentDidMount() {
        this.props.getSubCategoryFetch();
        this.setState({ page: 1 });
        this.classes=subMenuStyles;
        this.scrollToMyRef();
    }
    
    // once component is updated, move the cursor at the top of the page. 
    componentDidUpdate() {
        this.scrollToMyRef();
    }

    // after clicking on sub-category type, the fetch the receipe content from API and store in redux.
    handleReceipe = (receipeType) => {
        this.props.getReceipeTypeFetch(receipeType);
        this.setState({ page: 1 });
    }
     // Once the page link is clicked, it should navigate to other page.
    handlePageChange = (e, value) => {
        this.setState({ page: value });
    };

    // In receipe content page is closed, the fetch the sub-category list. 
    handleClose = () => {
        this.props.getSubCategoryFetch();
        this.setState({ page: 1 });
    }
    render() {
        return (
            <>
                <div ref={this.myRef}>
                    {this.props.loading && <ProgressBar />}
                    {this.props.receipeContent && <ReceipeContent key={this.props.receipeContent.idMeal} receipeContent={this.props.receipeContent} handleClose={this.handleClose} />}
                    {this.props.subCategory && !this.props.receipeContent &&
                        <>
                            <Grid className={this.classes.card} container spacing={3}>
                                {this.props.subCategory.slice((this.state.page - 1) * 8, this.state.page * 8).map((receipe, index) => {
                                    return (
                                        <Grid className={this.classes.gridItem} item xs={6} sm={3} key={index}>
                                            <Receipe key={index} receipe={receipe} handleReceipe={this.handleReceipe} />
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

/**
 * Get redux store value and assiged the variabled.
 * @param {state} state of the redux. 
 */
function mapStateToProps(state) {
    return {
        loading: state.receipeReducer.loadingData,
        subCategory: state.receipeReducer.subCategory,
        receipeContent: state.receipeReducer.receipeType
    }
};


/**
 * Dispatch action to sage.
 */
function mapDispatchToProps(dispatch) {
    return {
        getSubCategoryFetch: () => dispatch(getSubCategoryFetch()),
        getReceipeTypeFetch: (receipeType) => dispatch(getReceipeTypeFetch(receipeType)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);