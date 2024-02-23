import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircleOutline as CheckIcon } from "@mui/icons-material";

export default function ShowTodo({todo, remove, done, toggle}) {
    return <Box sx={{ mt: 5 }}>
        <List sx={{ opacity: done ? .5 : 1 }}>
            {todo.map(item => (
                <ListItem key={item._id}
                    secondaryAction={
                        <>
                            <Link to="/edit" state={{ item }}>
                                <IconButton color="success">
                                    <Edit />
                                </IconButton>
                            </Link>
                            <IconButton color="error" onClick={() => remove(item._id)}>
                                <Delete />
                            </IconButton>
                        </>
                    }
                >
                    <IconButton sx={{ mr: 3 }}
                        onClick={() => toggle(item._id)}
                    >
                        {done ? 
                            <CheckIcon color="success" />    
                            : <CheckIcon />
                        } 
                    </IconButton>
                    <ListItemText primary={item.list} />
                    
                </ListItem>
            ))}
        </List>
    </Box>
}