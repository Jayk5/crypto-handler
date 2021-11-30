import React from 'react'
import Typography from '@mui/material/Typography';
import Wrap from './Wrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Fav() {
    return (
        <Wrap>
            <Card alignItems='center' sx={{ minWidth: 275, mb: 3, borderBottom: 20, borderColor: 'primary.main' }}>
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} variant="h4" component="div" align="center">
                        YOUR FAVORITES
                    </Typography>
                </CardContent>
            </Card>
        </Wrap>
    )
}
