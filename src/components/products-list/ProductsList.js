import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextField, Box, Grid } from '@material-ui/core';

import Page from '../Page.js';
import { selectProducts, selectSearchValue } from '../../selectors/products';
import { requestLoadProducts, setSearchValue } from '../../actions/products.js';
import ProductItem from '../product-item/ProductItem';
import AppDialog from '../app-dialog/AppDialog.js';
import { selectErrorMessage } from '../../selectors/errors.js';
import { setErrorMessage } from '../../actions/errors.js';

const ProductsList = ({products, requestLoadProducts, searchValue, setSearchValue, errorMessageDialog, setErrorMessage}) => {

    const onChangeHandler = ({target: { value }}) => {
        setSearchValue(value);         
    }

    useEffect(() => {
        !products?.length && requestLoadProducts();

    }, [requestLoadProducts, products])

    return (
        <Page
          title="Products page">
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
                          id={product.id}
                          model={product.model}
                          img={product.imgUrl}
                          brand={product.brand}
                          price={product.price} />                   
                    )
                }
            </Grid>
            <AppDialog 
                  title="Error description" 
                  message={errorMessageDialog && errorMessageDialog}
                  openDialog={errorMessageDialog?.length ? true : false}
                  buttonText="Retry"
                  handleClose={() => {setErrorMessage(''); requestLoadProducts();}}/>
        </Page>
    )
}

ProductsList.propTypes = {

}

const mapStateToProps = (state) => ({
    products: selectProducts(state),
    searchValue: selectSearchValue(state),
    errorMessageDialog: selectErrorMessage(state)
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ setSearchValue, requestLoadProducts, setErrorMessage }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
