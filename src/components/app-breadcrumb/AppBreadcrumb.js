import React from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import { selectProductById } from '../../selectors/products';
import { connect } from 'react-redux';

const AppBreadcrumb = ({product}) => {

    const history = useHistory();

    const pathnames = history?.location?.pathname?.split('/').filter(p => p);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                pathnames?.length && pathnames?.map((name, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const isProduct = product(name) !== undefined;
                    const title = name[0].toUpperCase() + name.slice(1);
                    
                    return isLast ? (
                        <Typography key={name} style={{ color: 'white' }}>
                            { isProduct ? product(name)?.model : title }                        
                        </Typography>
                    ) : (
                        <Link key={name} style={{ color: 'white' }} onClick={() => history.push(to)}>
                            { isProduct ? product(name)?.model : title }
                        </Link>
                    )
                })
            }
        </Breadcrumbs>
    )
}

const mapStateToProps = (state) => ({
    product: (id) => selectProductById(state, id)
})

export default connect(mapStateToProps)(AppBreadcrumb)
