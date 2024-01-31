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
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.todos));
  }, []);

  console.log(todos);
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
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
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
