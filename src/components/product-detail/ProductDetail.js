import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Box } from '@material-ui/core';

import Page from '../Page.js';
import { selectProduct } from '../../selectors/index';
import { requestProductDetail } from '../../actions/products.js';
import ActionButtons from '../action-buttons/ActionButtons.js';

const ProductImage = ({model, img}) => (
    <Box
      display="flex"
      justifyContent="center">
        <img alt={model} src={img} />
    </Box>
)

const ProductDescription = ({product}) => (
    <ul>
        { product.brand && <li> { `Brand: ${product.brand}` } </li> }
        { product.model && <li> { `Model: ${product.model}` } </li> }
        { product.price && <li> { `Price: ${product.price}€` } </li> }
        { product.cpu && <li> { `CPU: ${product.cpu}` } </li> }
        { product.ram && <li> { `RAM: ${product.ram}` } </li> }
        { product.os &&  <li> { `OS: ${product.os}` } </li> }
        { product.displayResolution && <li> { `Display: ${product.displayResolution}` } </li> }
        { product.battery && <li> { `Battery: ${product.battery}` } </li> }
        { product.primaryCamera?.length > 0 && 
            <li> 
                { `Cameras: ` }
                <ul>
                    <li>
                        { `Primary: ${product.primaryCamera}` }
                    </li>
                    { product.secondaryCmera && <li> { `Secondary: ${product.secondaryCmera}` } </li> }
                </ul>
            </li> 
        } 
        { product.dimentions && <li> { `Dimentions: ${product.dimentions}` } </li> }
        { product.weight && <li> { `Weight: ${product.weight}` } </li> }
    </ul>
)


const ProductDetail = ({product, requestProductDetail}) => {

    const { id } = useParams();
    useEffect(() => {
        requestProductDetail(id);

    }, [requestProductDetail, id])

    return (
        <Page
          title="Products page">

            <Box mx={30} my={10}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6} md={6}>
                        <ProductImage model={product.model} img={product.imgUrl}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <ProductDescription product={product} />
                        <Box 
                          my={10}>
                            <ActionButtons product={product} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Page>
    )
}

ProductDetail.propTypes = {

}

const mapStateToProps = (state) => ({
    product: selectProduct(state)
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ requestProductDetail }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
