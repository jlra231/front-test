import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

const AppDialog = ({openDialog, title, message, buttonText, handleClose }) => {
    return (
        <Dialog
          open={openDialog}
          onClose={() => {}}
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                { title }
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    { message }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
                { buttonText }
            </Button>
            </DialogActions>
        </Dialog>
    )
}

AppDialog.propTypes = {
    openDialog: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default AppDialog
