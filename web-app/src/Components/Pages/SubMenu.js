
import React from 'react';
import { Grid } from '@material-ui/core';
import Paging from '../reusable/Paging';
import { subMenuStyles } from '../../styles/sharedStyles';
import { connect } from 'react-redux';
import Receipe from '../reusable/Receipe';
import { getReceipeTypeFetch,  getSubCategoryFetch } from '../../actions/actions';
import ReceipeContent from '../reusable/ReceipeContent';
import CircularProgress from '@mui/material/CircularProgress';

class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: 1 }
        this.classes = '';
        this.myRef = React.createRef();
    }

    scrollToMyRef = () => window.scrollTo(0, 0)
    componentDidMount() {
        this.props.getSubCategoryFetch();
        this.setState({ page: 1 });
        this.classes=subMenuStyles;
        this.scrollToMyRef();
    }
    componentDidUpdate() {
        this.scrollToMyRef();
    }
    handleReceipe = (receipeType) => {
        this.props.getReceipeTypeFetch(receipeType);
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
                    {this.props.receipeContent && <ReceipeContent receipeContent={this.props.receipeContent} handleClose={this.handleClose} />}
                    {this.props.subCategory && !this.props.receipeContent &&
                        <>
                            <Grid className={this.classes.card} container spacing={3}>
                                {this.props.subCategory.slice((this.state.page - 1) * 8, this.state.page * 8).map((receipe, index) => {
                                    return (
                                        <Grid className={this.classes.gridItem} item xs={6} sm={3} key={index}>
                                            <Receipe receipe={receipe} handleReceipe={this.handleReceipe} />
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
        receipeContent: state.receipeReducer.receipeType
    }
};

function mapDispatchToProps(dispatch) {
    return {
        getSubCategoryFetch: () => dispatch(getSubCategoryFetch()),
        getReceipeTypeFetch: (receipeType) => dispatch(getReceipeTypeFetch(receipeType)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubMenu);