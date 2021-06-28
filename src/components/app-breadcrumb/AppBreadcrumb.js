import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { selectProductById } from '../../selectors';
import { connect } from 'react-redux';

const AppBreadcrumb = ({product}) => {

    const history = useHistory();

    const pathnames = history?.location?.pathname?.split('/').filter(p => p);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                pathnames?.length > 1 ? (
                    <Link style={{ color: 'white' }} onClick={() => history.push('/')}>
                        Products
                    </Link>
                ) : (
                    <Typography style={{ color: 'white' }}>
                        Products
                    </Typography>
                )
            }    
            {
                pathnames?.map((name, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    const isProduct = product(name) !== undefined
                    
                    if (index !== 0) {
                        return isLast ? (
                            <Typography key={name} style={{ color: 'white' }}>
                                { isProduct ? product(name)?.model : name }                        
                            </Typography>
                        ) : (
                            <Link key={name} style={{ color: 'white' }} onClick={() => history.push(to)}>
                                { isProduct ? product(name)?.model : name }
                            </Link>
                        )
                    }
                    
                })
            }
        </Breadcrumbs>
    )
}

AppBreadcrumb.propTypes = {

}

const mapStateToProps = (state) => ({
    product: (id) => selectProductById(state, id)
})

export default connect(mapStateToProps)(AppBreadcrumb)
