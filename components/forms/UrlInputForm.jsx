"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function UrlInputForm({ handleResponse }) {
  const [loading, setLoading] = useState(false);
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      const response = await fetch("/api/shorten-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: longUrl }),
      });
      const result = await response.json();
      if (response.ok) {
        handleResponse({ shortUrl: result.short_url, longUrl: longUrl });
        setLongUrl("");
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full sm:w-[30rem] items-center space-x-2">
      <Input
        value={longUrl}
        type="text"
        placeholder="Please enter a URL"
        className="focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        loading={loading}
        className="bg-light-primary hover:bg-[#a56446] dark:bg-dark-primary dark:hover:bg-[#548ca7]"
      >
        Submit
      </Button>
    </div>
  );
}

export default UrlInputForm;
