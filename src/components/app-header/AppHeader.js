import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const AppHeader = ({title}) => {
    return (
        <Toolbar>
            <Box>
                <Typography 
                  component={Link} 
                  to="/products" 
                  variant="h6" 
                  style={{ textDecoration: 'none', color: 'white' }}>
                    { title }
                </Typography>
            </Box>
        </Toolbar>
    )
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default AppHeader
