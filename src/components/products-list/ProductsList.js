import React, { useEffect, useState, bind } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Box, Grid } from '@material-ui/core';

import Page from '../Page.js';
import { selectProducts, selectSearchValue } from '../../selectors/index';
import { requestLoadProducts, setSearchValue } from '../../actions/products.js';
import ProductItem from '../product-item/ProductItem';

const ProductsList = ({products, requestLoadProducts, searchValue, setSearchValue}) => {

    const onChangeHandler = ({target: { value }}) => {
        setSearchValue(value);         
    }

    useEffect(() => {
        requestLoadProducts();

    }, [requestLoadProducts])

    return (
        <Page
          title="List of products">
            <Box my={2}              
              display="flex"
              flexDirection="row-reverse">
                <TextField 
                  label="Search"
                  value={searchValue}
                  onChange={onChangeHandler} />
            </Box>
            <Grid container spacing={5}>
                {
                    products?.length > 0 && products.map(product => 
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
    products: selectProducts(state),
    searchValue: selectSearchValue(state)
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ setSearchValue, requestLoadProducts }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
