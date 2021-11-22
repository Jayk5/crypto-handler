import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Wrap(props) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Toolbar />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {props.children}
            </div>
        </Box>
    )
}
