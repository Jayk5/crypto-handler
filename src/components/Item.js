import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
});

export default function Item({ id, name, image, symbol, price, volume, marketcap, priceChange, setList, setRed = false }) {
    const [bstate, setbstate] = useState(false);

    async function clickHandler() {
        setbstate(true);
        const snap = await getDoc(doc(db, "userFavs", auth.currentUser.email));
        if (snap.exists()) {
            console.log(snap.data());
            let x = snap.data().Favstr;
            console.log(x);
            if (x.includes(`${id}%2C`)) {
                x = x.replace(`${id}%2C`, "");
                console.log("x replaced is this - ", x);
                await updateDoc(doc(db, "userFavs", auth.currentUser.email), {
                    Favstr: x,
                });
                setList((list) => {
                    return list.filter((item) => item.id !== id);
                });
            } else {
                await updateDoc(doc(db, "userFavs", auth.currentUser.email), {
                    Favstr: snap.data().Favstr + id + "%2C",
                });
            }
        } else {
            await setDoc(doc(db, "userFavs", auth.currentUser.email), {
                Favstr: id + "%2C",
            });
        }
    }

    return (
        <Paper sx={{ p: 2, margin: "auto", maxWidth: 1000, flexGrow: 1, border: 3, mb: 1, borderColor: "primary.main" }}>
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
                        {priceChange < 0 ? (
                            <Typography color="error.main" variant="subtitle1" component="div">
                                {priceChange}%
                            </Typography>
                        ) : (
                            <Typography color="success.main" variant="subtitle1" component="div">
                                {priceChange}%
                            </Typography>
                        )}
                        {auth.currentUser && !setRed ? (
                            <FavoriteTwoToneIcon onClick={clickHandler} style={{ color: bstate ? "red" : "black" }} />
                        ) : auth.currentUser && setRed ? (
                            <FavoriteTwoToneIcon onClick={clickHandler} style={{ color: bstate ? "black" : "red" }} />
                        ) : (
                            " "
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
