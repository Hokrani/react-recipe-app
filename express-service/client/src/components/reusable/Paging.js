import { Pagination } from '@material-ui/lab';
import { menuGridStyles } from '../../styles/sharedStyles';
import Box from '@mui/material/Box';

/**
 * This is component to display Pagination at the bottom of the page. 
 */

const Paging = (props) => {
    const classes = menuGridStyles();
    return (
        <>
        <Box display="flex" justifyContent="center">
            <Pagination
                count={Math.ceil(props.type.length / 8)}
                page={props.page}
                defaultPage={1}
                boundaryCount={2}
                onChange={props.handlePageChange}
                className={classes.pagination}
                color="primary"
                variant="outlined"
                shape="rounded"
                size="large"
                showFirstButton showLastButton
            />
            </Box>
        </>
    )
}

export default Paging;
