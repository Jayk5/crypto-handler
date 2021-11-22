import React from 'react'
import Typography from '@mui/material/Typography';
import Wrap from './Wrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Top() {
    return (
        <Wrap>
            <Card alignItems='center' sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} gutterBottom variant="h4" component="div" align="center">
                        TOP CURRENCIES
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Paisa hi paisa hoga
                    </Typography>
                </CardContent>
            </Card>
        </Wrap>
    )
}
