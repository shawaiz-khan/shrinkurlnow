"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import AvatarUpload from "@/components/ui/avatar-upload";

function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      username: "",
      email: "",
      avatar: null,
    },
  });

  const onSubmit = (values) => {
    console.log("Form Values:", {
      ...values,
      avatar: values.avatar ? values.avatar.name : null,
    });
  };

  const handleFileChange = (file) => {
    form.setValue("avatar", file);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-4 mt-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="mt-20 text-2xl font-bold sm:text-xl">Profile</h2>
        <AvatarUpload onFileChange={handleFileChange} />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Update Profile
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
