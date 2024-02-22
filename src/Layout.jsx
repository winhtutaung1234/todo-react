import { Container } from "@mui/material";
import AddTodo from "./todo/AddTodo";

export default function Layout() {
    return <Container maxWidth="sm" sx={{ mt: 5 }}>
        <AddTodo />
    </Container>
}