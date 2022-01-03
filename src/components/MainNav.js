import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Top from "./Top";
import Home from "./Home";
import Fav from "./Fav";
import { Routes, Route, Link } from "react-router-dom";

const drawerWidth = 200;

export default function MainNav() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        CryptoCurrency Handler
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem button key="Home" component={Link} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="Top" component={Link} to="/top">
                        <ListItemIcon>
                            <LeaderboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Top" />
                    </ListItem>
                    <Divider />
                    <ListItem button key="Favorites" component={Link} to="/fav">
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Favorites" />
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/top" exact element={<Top />} />
                <Route path="/fav" exact element={<Fav />} />
            </Routes>
        </Box>
    );
}
