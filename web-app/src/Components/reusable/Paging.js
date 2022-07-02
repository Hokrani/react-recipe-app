import { Pagination } from '@material-ui/lab';
import { categoryGridStyles } from '../../assets/styles/sharedStyles';


const Paging = (props) => {
    const classes = categoryGridStyles();
    return (
        <>
            <Pagination
                count={Math.ceil(props.type.length / 8)}
                page={props.page}
                defaultPage={1}
                boundaryCount={2}
                onChange={props.handlePageChange}
                className={classes.pagination}
                color="secondary"
                variant="contained"
                shape="rounded"
                size="large"
                showFirstButton showLastButton
            />
        </>
    )
}

export default Paging;
