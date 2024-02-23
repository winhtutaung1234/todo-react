import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import Edit from "./todo/Edit";
import Header from "./todo/Headers";

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

    const update = async (_id, list) => {
      await fetch(`${api}/${_id}`, {
        method: "put",
        body: JSON.stringify({ list }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setTodo(
        todo.map(item => {
          if(item._id === _id) item.list = list;
          return item;
        })
      );
    }

    const toggle = async (_id) => {
       await fetch(`${api}/toggle/${_id}`, {
        method: "put",
       });

       setTodo(
        todo.map(item => {
          if(item._id === _id) item.done = !item.done;
          return item;
        })
       );
    }

    const clear = async () => {
      await fetch(`${api}`, {method: 'delete'});
      setTodo(todo.filter(item => !item.done));
    }

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Header clear={clear} />,
        children: [
          {
            path: "/",
            element: <Layout todo={todo} add={add} remove={remove} toggle={toggle} />
          }
        ]
      },
      {
        path: "/edit",
        element: <Edit update={update} />
      }
    ]);

    return <RouterProvider router={router} />
}