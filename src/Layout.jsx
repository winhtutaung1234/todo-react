import { Container } from "@mui/material";
import AddTodo from "./todo/AddTodo";
import ShowTodo from "./todo/ShowTodo";

export default function Layout({todo, add, remove, toggle}) {
    return <div>
        <AddTodo add={add} />
        <ShowTodo todo={todo.filter(item => !item.done)} toggle={toggle} remove={remove} />
        <ShowTodo todo={todo.filter(item => item.done)} toggle={toggle} remove={remove} done={true} />
    </div>
}