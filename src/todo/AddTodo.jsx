import { Add } from "@mui/icons-material";
import { IconButton, Input, TextField } from "@mui/material";
import { useRef, useState } from "react";

export default function AddTodo({add}) {
    const listRef = useRef();

    const formSubmit = () => {
        const list = listRef.current.value;
        add(list);
        listRef.current.value = "";
        listRef.current.focus();
    }

    return <form onSubmit={e => {
        e.preventDefault();
        formSubmit();
    }}>
        <Input 
            inputRef={listRef}
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