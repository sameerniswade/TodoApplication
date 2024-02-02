import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthWrapper } from "../components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

function Home() {
  const { register, handleSubmit } = useForm();

  const handleAddTask = (data) => {
    console.log(data);
  };
  const [todos, setTodos] = useState([]);
  const [hoverId, setHoverId] = useState("");

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
    <AuthWrapper>
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
            <Input {...register("todo", { required: true })} />
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
                              {todo.id == hoverId ? (
                                <div className="flex justify-between items-center gap-3">
                                  <p>{todo.todo}</p>
                                  <div className="flex justify-center items-center gap-2">
                                    <Button
                                      onClick={() => handleDelete(todo.id)}
                                    >
                                      Complete
                                    </Button>
                                    <Button
                                      onClick={() => handleDelete(todo.id)}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      onClick={() => handleDelete(todo.id)}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <p>{todo.todo}</p>
                              )}
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
    </AuthWrapper>
  );
}

export default Home;
