import { ClearAll } from "@mui/icons-material";
import { Toolbar, AppBar, Typography, Container, IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Header({clear}) {
    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    TODO List
                </Typography>
                <IconButton color="inherit" onClick={clear}>
                    <ClearAll />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Outlet />
        </Container>
    </>
}