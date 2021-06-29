import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppHeader from './app-header/AppHeader';

const Page = ({title, children}) => {

    return (
        <>
            <AppBar position="sticky">
                <AppHeader title={title}/>
            </AppBar>
            <Container maxWidth="xl">
                <Box >
                    { children }
                </Box>
            </Container>
        </>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Page;
