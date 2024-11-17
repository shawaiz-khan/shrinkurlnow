"use client";
import { handleApiResponse } from "@/lib/apiResponseHandler";
import { toastTypes } from "@/lib/constants";
import { UrlInputSchema } from "@/lib/schema";
import { showToast } from "@/lib/toastHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

function UrlInputForm({ handleDisplayShortUrl }) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(UrlInputSchema),
    defaultValues: {
      longUrl: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await fetch("/api/shorten-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: values.longUrl,
        }),
      });
      const result = await handleApiResponse(response);

      if (result.success) {
        handleDisplayShortUrl({
          shortUrl: result.data.short_url,
          longUrl: values.longUrl,
        });

        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      showToast(toastTypes.ERROR, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full sm:w-[30rem] justify-center space-x-2"
      >
        <FormField
          control={form.control}
          name="longUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="text"
                  placeholder="Please enter a URL"
                  className="focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          loading={loading}
          className="bg-light-primary hover:bg-[#a56446] dark:bg-dark-primary dark:hover:bg-[#548ca7]"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default UrlInputForm;
