import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Wrap(props) {
    return (
        <Box component="main" sx={{ width: 1, flexGrow: 1, bgcolor: "background.default", p: 3 }}>
            <Toolbar />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>{props.children}</div>
        </Box>
    );
}
