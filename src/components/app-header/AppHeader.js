import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import { selectProductQuantity } from '../../selectors/cart';
import AppBreadcrumb from '../app-breadcrumb/AppBreadcrumb';

const AppHeader = ({title, productQuantity}) => {

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
            <Box mx={10} flexGrow={1}>
                <AppBreadcrumb />
            </Box>
            <Box>
                <Badge badgeContent={productQuantity} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </Box>
        </Toolbar>
    )
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    productQuantity: selectProductQuantity(state)
})

export default connect(mapStateToProps)(AppHeader)
