import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleAddTask = (data) => {
    console.log(data);
  };
  const [todos, setTodos] = useState([]);
  const [hoverId, setHoverId] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      });
  }, []);

  const handleHover = (id) => {
    setHoverId(id);
  };

  const handleEdit = (e) => {
    console.log("edit", e);
  };
  const handleDelete = (e) => {
    console.log("Delete", e);
  };

  const handleComplete = (e) => {
    console.log("complete", e);
  };
  console.log("todos", todos);
  return (
    <Card className="w-2/3">
      <CardHeader className="flex justify-start items-baseline">
        <CardTitle>Welcome Back, Aman</CardTitle>
        <CardDescription>Here is your task list.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(handleAddTask)}
          className="flex justify-center items-center gap-3 mb-5"
        >
          <Input />
          <Button className="w-1/5">Add</Button>
        </form>

        <ScrollArea className="w-full h-80 rounded-md border ">
          <div className="flex flex-col justify-center items-baseline ">
            {todos.map((todo) => {
              return (
                <Table>
                  <TableBody>
                    {todos.map((todo) => {
                      return (
                        <TableRow>
                          <TableCell
                            className="font-medium"
                            onMouseEnter={() => handleHover(todo.id)}
                            onMouseLeave={() => handleHover("")}
                          >
                            {todo.id == hoverId ? <h1>hello</h1> : todo.todo}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default Home;
