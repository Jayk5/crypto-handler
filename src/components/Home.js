import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Wrap from './Wrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import List from './List';


export default function Home() {

    const searchRef = useRef('');
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=250&page=1&sparkline=false')
            .then(res => {
                setList(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const filter = list.filter(l => l.name.toLowerCase().includes(search.toLowerCase()) || l.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
        <Wrap>
            <Card alignItems='center' display='block' sx={{ maxWidth: 1000, mb: 3, pb: 1, borderBottom: 20, borderColor: 'primary.main' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="https://wallpapersmug.com/download/2048x1152/40d771/crypto-currency-abstract-bitcoin.jpg"
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
                    <TextField fullWidth label="Search" id="fullWidth" inputRef={searchRef} onChange={handleSearch} />
                </CardActions>

            </Card>
            <List data={filter} />
        </Wrap >
    )
}
