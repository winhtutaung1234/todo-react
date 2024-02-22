import { Container } from "@mui/material";
import AddTodo from "./todo/AddTodo";
import ShowTodo from "./todo/ShowTodo";

export default function Layout({todo, add, remove}) {
    return <Container maxWidth="sm" sx={{ mt: 5 }}>
        <AddTodo add={add} />
        <ShowTodo todo={todo} remove={remove} />
    </Container>
}