import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import { selectUiState } from '../selectors/index';
import { UiState } from '../utils/UiState';
import AppHeader from './app-header/AppHeader';

const Page = ({title, children}) => {

    return (
        <>
            <AppBar position="sticky">
                <AppHeader title={title}/>
            </AppBar>
            <Container maxWidth="xl">
                <Box >
                    { /*uiState === UiState.Ready && */ children }
                </Box>
                <Box
                  my={6}
                  display="flex"
                  justifyContent="center">

                    { /*uiState === UiState.Loading && (
                        <CircularProgress />
                    )*/}

                </Box>
            </Container>
        </>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    //uiState: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
//     uiState: selectUiState(state)
})

export default connect(mapStateToProps)(Page);
