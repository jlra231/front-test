import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Typography, Box, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestAddProductCart } from '../../actions/cart';
import { setErrorMessage } from '../../actions/errors';
import AppDialog from '../app-dialog/AppDialog';
import { selectErrorMessage } from '../../selectors/errors';

const ActionButtons = ({requestAddProductCart, id, options, errorMessageDialog, setErrorMessage}) => {

    const [ color, setColor ] = useState(options?.colors?.length > 1 ? 0 : options?.colors[0]?.code);

    const [ storage, setStorage ] = useState(options?.storages?.length > 1 ? 0 : options?.storages[0]?.code);

    const onColorChangeHandler = (e, newValue) => {
        newValue !== null && setColor(newValue);
    }

    const onStorageChangeHandler = (e, newValue) => {
        newValue !== null && setStorage(newValue);
    }

    const addProduct = () => {
        requestAddProductCart({ 
            id: id,
            colorCode: color,
            storageCode: storage
        });
    }

    return (
        <>
            <Box
              display="flex"
              justifyContent="center">
                <ToggleButtonGroup
                  value={color}
                  exclusive
                  onChange={onColorChangeHandler}
                  aria-label="text formatting">
                    { 
                        options?.colors?.length > 0 && options.colors.map(({code, name}) => 
                            <ToggleButton key={code} value={code} aria-label="bold">
                                <Typography 
                                  variant="body1"
                                  color="textPrimary"> {name} 
                                </Typography>
                            </ToggleButton>
                        )
                    }
                </ToggleButtonGroup>
            </Box>
            
            <Box
              my={5}
              display="flex"
              justifyContent="center">
                <ToggleButtonGroup
                  value={storage}
                  exclusive
                  onChange={onStorageChangeHandler}
                  aria-label="text formatting">
                    { 
                        options?.storages?.length > 0 && options.storages.map(({code, name}) => 
                            <ToggleButton key={code} value={code} aria-label="bold">
                                <Typography 
                                variant="body1"
                                color="textPrimary"> {name} </Typography>
                            </ToggleButton>
                        )
                    }
                </ToggleButtonGroup>
            </Box>
            <Box
              my={5}
              display="flex"
              justifyContent="center">
                <Button 
                  variant="contained" 
                  disabled={color === 0 || storage === 0}
                  color="primary"
                  size="large"
                  onClick={addProduct}>
                    Add to cart
                </Button>

                <AppDialog 
                  title="Error description" 
                  message={errorMessageDialog && errorMessageDialog}
                  openDialog={errorMessageDialog?.length ? true : false}
                  buttonText="Accept"
                  handleClose={() => {setErrorMessage('')}}/>
                
            </Box>
            
        </>
    )
}

ActionButtons.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
        colors: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ).isRequired,
        storages: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired
}

const mapStateToProps = (state) => ({
    errorMessageDialog: selectErrorMessage(state)
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ requestAddProductCart, setErrorMessage }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);
