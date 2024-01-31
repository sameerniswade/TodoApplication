import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSignup = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <Card>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Input your information to establish an account.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1 flex items-center justify-start gap-2">
            <Label htmlFor="name" className="w-1/3">
              Name
            </Label>
            <Input
              id="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="space-y-1 flex items-center justify-center gap-2">
            <Label htmlFor="name" className="w-1/3">
              Email
            </Label>
            <Input
              id="name"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "invalid email address",
                },
              })}
            />
          </div>
          <div className="space-y-1 flex items-center justify-center gap-2">
            <Label htmlFor="username" className="w-1/3">
              Password
            </Label>
            <Input
              id="username"
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message:
                    "Passwords should be longer than eight characters and contain a number and a special character.",
                },
              })}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center item-center">
          <Button type="submit">Signup</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Signup;
