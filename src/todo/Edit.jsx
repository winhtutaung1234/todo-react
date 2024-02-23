import { Container, IconButton, Input } from "@mui/material";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import {
    KeyboardBackspaceOutlined as BackIcon
} from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Edit({ update }) {
    const { state } = useLocation();
    const { _id, list } = state.item;
    const [item, setItem] = useState(list);

    const navigate = useNavigate();

    return <Container maxWidth="sm" sx={{ mt: 5 }}>
        <form onSubmit={e => {
            e.preventDefault();
            update(_id, item);
            navigate("/");
        }}>
            <Input
                value={item}
                onChange={e => {
                    setItem(e.target.value);
                }}
                fullWidth
                startAdornment={
                    <Link to="/">
                        <IconButton color="success">
                            <BackIcon />
                        </IconButton>
                    </Link>
                }
                endAdornment={
                    <IconButton type="submit" color="success">
                        <UpgradeIcon />
                    </IconButton>
                }
            />
        </form>
    </Container>
}