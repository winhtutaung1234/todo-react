import { Add } from "@mui/icons-material";
import { IconButton, Input, TextField } from "@mui/material";
import { useRef, useState } from "react";

export default function AddTodo() {
    const inputRef = useRef();

    return <form onSubmit={e => {
        e.preventDefault();
    }}>
        <Input 
            inputRef={inputRef}
            fullWidth
            placeholder="Add your daily list..."
            endAdornment={
                <IconButton type="submit">
                    <Add />
                </IconButton>
            }
        />
    </form>
}