import React from "react";
import Box from "@mui/material/Box";
import Item from "./Item";
import Typography from "@mui/material/Typography";

export default function List(props) {
    // console.log(props.data);

    if (props.data.length === 0 && props.setRed) {
        // console.log("object");
        return (
            <Box component="main" sx={{ width: 1, flexGrow: 1, bgcolor: "background.default", p: 3 }}>
                <Typography style={{ fontWeight: 600 }} gutterBottom variant="h5" component="div" align="center">
                    NO FAVORITES
                </Typography>
            </Box>
        );
    }
    return (
        <Box component="main" sx={{ width: 1, flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            {props.data.map((x) => {
                return (
                    <Item
                        key={x.id}
                        name={x.name}
                        image={x.image}
                        symbol={x.symbol}
                        volume={x.total_volume}
                        marketcap={x.market_cap}
                        priceChange={x.price_change_percentage_24h}
                        price={x.current_price}
                        id={x.id}
                        setList={props.setList}
                        setRed={props.setRed}
                    />
                );
            })}
        </Box>
    );
}
