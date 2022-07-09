import CircularProgress from '@mui/material/CircularProgress';

import { progressBarStyles } from '../../styles/sharedStyles';

const ProgressBar = () => {
    const classes = progressBarStyles();
    return (
        <div className={classes.progressBar}>
            <CircularProgress color="inherit" />
        </div>
    )
}

export default ProgressBar;