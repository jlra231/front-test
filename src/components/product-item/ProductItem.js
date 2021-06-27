import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardActions, Button, Grid, CardMedia, Typography, Box } from '@material-ui/core';


const ProductItem = ({model, img, brand, price}) => {

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card>
                <CardMedia 
                  style={{height: '100%', width: 'auto',margin: 'auto'}}
                  component="img"
                  image={img}/>
                <CardContent>
                
                    <Typography variant="h5">
                        { brand }
                    </Typography>

                    <Typography 
                      variant="h6"
                      color="textSecondary">
                        { model }
                    </Typography>

                    <Box 
                      my={2}
                      display="flex"
                      justifyContent="center">
                        <Typography 
                        style={{margin: 'auto'}}
                        variant="h5"
                        color="textPrimary">
                            { price !== '' ? `${price}€` : `0€` }
                        </Typography>
                    </Box>

                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button 
                        variant="outlined" 
                        color="primary"
                        fullWidth={true}>
                        See more...
                    </Button>


                </CardActions>
            </Card>
        </Grid>
    )
}

ProductItem.propTypes = {
    model: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default ProductItem
