"use client";

import { useState } from "react";
import UrlDisplayCard from "../cards/UrlDisplayCard";
import UrlInputForm from "../forms/UrlInputForm";

const UrlShortner = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [longUrl, setLongUrl] = useState(null);

  const handleSubmitResponse = (data) => {
    setShortUrl(data.shortUrl);
    setLongUrl(data.longUrl);
  };

  return (
    <div className="flex flex-col gap-5">
      <UrlInputForm handleResponse={handleSubmitResponse} />
      {shortUrl && <UrlDisplayCard shortUrl={shortUrl} longUrl={longUrl} />}
    </div>
  );
};

export default UrlShortner;
