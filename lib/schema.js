import { z } from "zod";

export const UrlInputSchema = z.object({
  longUrl: z.string(
    {
      required_error: "Please enter a URL",
    }
  ).url(
    {
      message: "Please enter a valid URL",
    }
  ),
})