import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Wrap from "./Wrap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "./List";
import LinearProgress from "@mui/material/LinearProgress";

export default function Top() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((res) => {
                setLoading(false);
                setList(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Wrap>
            <Card alignItems="center" sx={{ minWidth: 275, mb: 3, borderBottom: 20, borderColor: "primary.main" }}>
                <CardContent>
                    <Typography style={{ fontWeight: 600 }} variant="h4" component="div" align="center">
                        TOP CURRENCIES
                    </Typography>
                </CardContent>
            </Card>
            {loading ? (
                <Box sx={{ width: "80%", pt: 2 }}>
                    <LinearProgress />
                </Box>
            ) : (
                <List data={list} />
            )}
        </Wrap>
    );
}
