import React from 'react'
import Box from '@mui/material/Box';
import Item from './Item';

export default function List(props) {
    return (
        <Box
            component="main"
            sx={{ width: 1, flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            {props.data.map((x) => {
                return <Item key={x.id} name={x.name} image={x.image} symbol={x.symbol} volume={x.total_volume} marketcap={x.market_cap} priceChange={x.price_change_percentage_24h} price={x.current_price} id={x.id} setList={props.setList} />
            })}
        </Box>
    )
}
