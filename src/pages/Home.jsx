import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuthWrapper } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { InputDialog } from "../components/index";
import {
  addTodo,
  deleteTodo,
  editTodo,
  complateTodo,
} from "../store/todoSlice";
import { v4 as uuid } from "uuid";

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
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const todos = useSelector((state) => state.todoSlice.todos);
  const handleAddTask = (data) => {
    let todo = {
      id: uuid(),
      todo: data.todo,
      completed: false,
    };

    dispatch(addTodo(todo));
    reset();
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [hoverId, setHoverId] = useState("");

  const handleHover = (id) => {
    setHoverId(id);
  };

  const handleEdit = (id, todo) => {
    dispatch(editTodo({ id: id, text: todo }));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(complateTodo(id));
  };

  return (
    <AuthWrapper>
      <Card className="w-2/3">
        <CardHeader>
          <div className="flex justify-between ">
            <div className="flex flex-col items-start gap-2">
              <CardTitle>Welcome Back, Aman</CardTitle>
              <CardDescription>Here is your task list.</CardDescription>
            </div>
            <Button variant="outline" className="w-[86px]">
              Logout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(handleAddTask)}
            className="flex justify-center items-center gap-3 mb-5"
          >
            <Input {...register("todo", { required: true })} />
            <Button variant="outline" className="w-1/5">
              Add
            </Button>
          </form>

          <ScrollArea className="w-full h-80 rounded-md border ">
            <div className="flex flex-col justify-center items-baseline ">
              {todos?.map((todo) => {
                return (
                  <Table key={todo.id}>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          className="font-medium"
                          onMouseEnter={() => handleHover(todo.id)}
                          onMouseLeave={() => handleHover("")}
                        >
                          {todo.id == hoverId ? (
                            <div className="flex justify-between items-center gap-3">
                              <p
                                className={todo.completed ? "line-through" : ""}
                              >
                                {todo.todo}
                              </p>
                              <div className="flex justify-center items-center gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() => handleComplete(todo.id)}
                                >
                                  {todo.completed == true
                                    ? "Incomplete"
                                    : "Complete"}
                                </Button>
                                <InputDialog
                                  handleEdit={handleEdit}
                                  todo={todo}
                                />

                                <Button
                                  variant="outline"
                                  onClick={() => handleDelete(todo.id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <p className={todo.completed ? "line-through" : ""}>
                              {todo.todo}
                            </p>
                          )}
                        </TableCell>
                      </TableRow>
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
