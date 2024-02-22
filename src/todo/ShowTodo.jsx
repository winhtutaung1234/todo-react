import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";

export default function ShowTodo({todo, remove}) {
    return <Box sx={{ mt: 5 }}>
        <List>
            {todo.map(item => (
                <ListItem key={item._id}
                    secondaryAction={
                        <>
                            <IconButton color="success">
                                <Edit />
                            </IconButton>
                            <IconButton color="error" onClick={() => remove(item._id)}>
                                <Delete />
                            </IconButton>
                        </>
                    }
                >
                    <ListItemText primary={item.list} />
                    
                </ListItem>
            ))}
        </List>
    </Box>
}