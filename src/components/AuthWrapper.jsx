import React from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function AuthWrapper({ children }) {
  // const navigate = useNavigate();
  const isLogin = useSelector((state) => state.authSlice.isLogin);
  console.log(isLogin);
  return isLogin ? (
    children
  ) : (
    <AlertDialog open={true}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>First, you must log in.</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => console.log("add navigate here")}>
            Login
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AuthWrapper;
