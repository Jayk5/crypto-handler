import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Item({ name, image, symbol, price, volume, marketcap, priceChange }) {


    const [bstate, setbstate] = useState(false)

    function clickHandler() {
        setbstate(true);
    }

    return (
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1, border: 3, mb: 1, borderColor: 'primary.main' }}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 100, height: 100 }}>
                        <Img alt={name} src={image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Volume : {volume.toLocaleString()}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Market Cap : {marketcap.toLocaleString()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {symbol}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={1.5}>
                        <Typography variant="subtitle1" component="div">
                            ₹ {price.toLocaleString()}
                        </Typography>
                        {priceChange < 0
                            ?
                            <Typography color="error.main" variant="subtitle1" component="div">
                                {priceChange.toFixed(2)}%
                            </Typography>
                            :
                            <Typography color="success.main" variant="subtitle1" component="div">
                                {priceChange.toFixed(2)}%
                            </Typography>
                        }
                        <FavoriteTwoToneIcon onClick={clickHandler} style={{ color: bstate ? 'red' : 'black' }} />

                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
