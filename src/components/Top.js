import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Wrap from './Wrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from './List';

export default function Top() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then(res => {
                setList(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Wrap>
            <Card alignItems='center' sx={{ minWidth: 275, mb: 3, borderBottom: 20, borderColor: 'primary.main' }}>
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} variant="h4" component="div" align="center">
                        TOP CURRENCIES
                    </Typography>
                </CardContent>
            </Card>
            <List data={list} />
        </Wrap>
    )
}
