import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setErrorMessage } from "../store/authSlice";
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
import authServices from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.authSlice.errorMessage);
  const navigate = useNavigate();
  const handleSignup = (data) => {
    authServices.createAccount(data).then(
      (res) => {
        if (res) {
          dispatch(setUserData(authServices.account.get()));
          navigate("/home");
        }
      },
      (rej) => dispatch(setErrorMessage(rej.message))
    );
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
          {errorMessage && (
            <Label className="text-red-400">{errorMessage}</Label>
          )}
        </CardContent>
        <CardFooter className="flex justify-center item-center">
          <Button type="submit">Signup</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Signup;
