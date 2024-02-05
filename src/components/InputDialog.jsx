import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function InputDialog({ handleEdit, todo }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("d", data);
    handleEdit(todo.id, data.editedTodo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Make changes to your todo here. Click Edit when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                {...register("editedTodo")}
                defaultValue={todo.todo}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Edit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}

export default InputDialog;
