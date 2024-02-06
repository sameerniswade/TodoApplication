import React, { useState } from "react";
import InputForm from "./InputForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function InputDialog({ handleEdit, todo }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger>
        <Button onClick={() => setIsDialogOpen(true)} variant="outline">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-6">
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            <InputForm
              defaultValue={todo.todo}
              buttonLable="Edit"
              handleEdit={handleEdit}
              todo={todo}
              setIsDialogOpen={setIsDialogOpen}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default InputDialog;
