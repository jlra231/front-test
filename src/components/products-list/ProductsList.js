import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Page from '../Page.js';
import { selectProducts } from '../../selectors/index';
import { ACTION_PRODUCTS_REQUEST_LOAD } from '../../actions/products.js';
import ProductItem from '../product-item/ProductItem';

const ProductsList = ({products, getProducts}) => {

    useEffect(() => {
        getProducts();

    }, [getProducts])

    console.log(products);

    return (
        <Page
          title="List of products">
            <Grid container spacing={5}>
                {
                    products?.length && products.map(product => 
                        <ProductItem 
                          key={product.id} 
                          model={product.model}
                          img={product.imgUrl}
                          brand={product.brand}
                          price={product.price} />                   
                    )
                }
            </Grid>
        </Page>
    )
}

ProductsList.propTypes = {

}

const mapStateToProps = (state) => ({
    products: selectProducts(state)
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch({type: ACTION_PRODUCTS_REQUEST_LOAD})
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
