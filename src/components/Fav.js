import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Wrap from "./Wrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { onAuthStateChanged, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import List from "./List";
import axios from "axios";

const google_provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();

export default function Fav() {
    const [curUser, setCurUser] = useState(auth.currentUser);
    const [list, setList] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const qu = await getDoc(doc(db, "userFavs", auth.currentUser.email));
            if (qu.exists()) {
                // console.log(qu.data().Favstr);
                if (qu.data().Favstr) {
                    axios
                        .get(
                            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${
                                qu.data().Favstr
                            }&order=market_cap_desc&per_page=100&page=1&sparkline=false`
                        )
                        .then((res) => {
                            setLoading(false);
                            setList(res.data);
                        })
                        .catch((error) => {
                            // console.log(error);
                            setLoading(false);
                            setList([]);
                        });
                } else {
                    setLoading(false);
                    setList([]);
                }
            } else {
                setLoading(false);
                setList([]);
            }
        }
        if (auth.currentUser) fetchData();
    }, [auth.currentUser]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurUser(auth.currentUser);
        });
    }, []);

    function signInwithFirebase() {
        signInWithPopup(auth, google_provider)
            .then(() => {
                setList(undefined);
                // console.log(auth.currentUser);
            })
            .catch((e) => {
                // console.log(e);
            });
    }

    function signOutwithFirebase() {
        signOut(auth)
            .then(() => {
                setList(undefined);
                // console.log("Signed out successfully");
            })
            .catch((e) => {
                // console.log(e);
            });
    }

    return (
        <Wrap>
            <Card alignItems="center" sx={{ minWidth: 275, mb: 3, borderBottom: 20, borderColor: "primary.main" }}>
                <CardContent textAlign="center">
                    <Typography style={{ fontWeight: 600 }} variant="h4" gutterBottom component="div" align="center">
                        YOUR FAVORITES
                    </Typography>
                    <Typography align="center">
                        {auth.currentUser ? (
                            <Button variant="contained" onClick={signOutwithFirebase}>
                                LOGOUT
                            </Button>
                        ) : (
                            <Button variant="contained" onClick={signInwithFirebase}>
                                LOGIN
                            </Button>
                        )}
                    </Typography>
                </CardContent>
            </Card>
            {auth.currentUser && !loading && list ? (
                <List data={list} setList={setList} setRed={true} />
            ) : auth.currentUser && loading && list === undefined ? (
                <Box sx={{ width: "80%", pt: 2 }}>
                    <LinearProgress />
                </Box>
            ) : (
                " "
            )}
        </Wrap>
    );
}
