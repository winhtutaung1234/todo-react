import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";

const api = "http://localhost:5000/todos";

export default function App() {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
       ( async () => {
          const res = await fetch(api);
          const data = await res.json();
          setTodo(data);
       })()
    }, []);

    const add = async (list) => {
      const res = await fetch(api, {
        method: "post",
        body: JSON.stringify({ list }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if(res.ok) {
        const data = await res.json();
        setTodo([data, ...todo]);
      }
    }

    const remove = async (_id) => {
        await fetch(`${api}/${_id}`, {method: "delete"});
        setTodo(
          todo.filter(item => item._id !== _id)
        );
    }

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout todo={todo} add={add} remove={remove} />
      }
    ]);

    return <RouterProvider router={router} />
}