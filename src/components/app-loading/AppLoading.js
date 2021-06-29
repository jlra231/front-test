import React from 'react'
import { CircularProgress, Typography, Box } from '@material-ui/core';
import styles from './AppLoading.module.css';

const AppLoading = () => {
    return (
        <div className={styles.divLoading}>

            <Box mx={1}>
                <CircularProgress />
            </Box>
            <Box mx={1}>
                <Typography>
                    Loading...
                </Typography>
            </Box>
            
        </div>
    )
}

export default AppLoading
