import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

function InputForm({
  buttonLable,
  lable,
  defaultValue = "",
  handleEdit,
  todo,
  setIsDialogOpen,
}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleEdit(todo.id, data.input);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center gap-4 "
    >
      <div className="flex gap-2 justify-center items-center">
        {lable && <Label>{lable}</Label>}
        <Input
          className="w-96"
          {...register("input")}
          defaultValue={defaultValue}
        />
      </div>
      <Button
        type="submit"
        variant="outline"
        onClick={() => setIsDialogOpen(false)}
      >
        {buttonLable}
      </Button>
    </form>
  );
}

export default InputForm;
