"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";

const Signin = () => {
  const methods = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;
  const router = useRouter();

  const onSubmit = async (data) => {
    try{
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        console.error("Error logging in:", error.message);
        alert("Error logging in: " + error.message); 
      } else {
        router.push("/")
      }
    }catch (error) {
      console.error("Unexpected error:", error);
      alert("Unexpected error occurred. Please try again.");
    }
  };

  return (
    <section className="flex flex-col max-w-md w-full space-y-4 section">
      <h1 className="text-purple-900 dark:text-purple-500 font-bold text-center">Sign Up</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full m-auto"
        >
          <Input
            type="email"
            label="Email"
            className="focus:outline-none focus:border-purple-900 focus:ring-2  "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="Password"
            className="focus:outline-none focus:border-purple-900 focus:ring-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password}
          />
          <Button type="submit" className="bg-purple-900 text-white dark:bg-purple-900 dark:text-white hover:bg-purple-600 dark:hover:bg-purple-600 w-full">
            Sign In
          </Button>
        </form>
        <small className="text-center  text-black  dark:text-white ">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold hover:font-bold text-purple-900 dark:text-purple-900 hover:text-purple-600 dark:hover:text-purple-600">
            Sign Up
          </Link>
        </small>
      </FormProvider>
    </section>
  );
};

export default Signin;
