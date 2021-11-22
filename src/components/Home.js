import React from 'react'
import Typography from '@mui/material/Typography';
import Wrap from './Wrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Home() {
    return (
        <Wrap>
            <Card alignItems='center' sx={{ flexgrow: 1, maxWidth: 800 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="https://media.istockphoto.com/photos/cryptocurrency-bitcoin-symbol-crypto-binary-virtual-data-blockchain-picture-id1288055255"
                />
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} gutterBottom variant="h4" component="div" align="center">
                        CRYPTO PRICE TRACKER
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        Search your favorite cryptocurrency
                    </Typography>
                </CardContent>
                <CardActions>
                    <TextField fullWidth label="Search" id="fullWidth" />
                </CardActions>
                <CardActions>
                    <Button fullWidth size="large" style={{ backgroundColor: '#1976d2', color: '#FFFFFF' }}>
                        Search
                    </Button>
                </CardActions>
            </Card>
        </Wrap >
    )
}
