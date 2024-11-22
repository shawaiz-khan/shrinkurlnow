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

export const ProfileSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  avatar: z.instanceof(File).nullable(),
});
