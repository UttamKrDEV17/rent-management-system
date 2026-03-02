import { email, z } from "zod";

export const ownerRegistrationSchema = z.object({
  body: z.object({
    email: z
      .string()
      .pipe(z.string().min(1, "Email is required"))
      .pipe(z.string().email("Invalid email format")),
    password: z
      .string()
      .pipe(z.string().min(6, "Password must be at least 6 characters long"))
      .pipe(
        z.string().max(100, "Password must be at most 100 characters long"),
      ),
    name: z
      .string()
      .trim()
      .pipe(z.string().nonempty("Name is required"))
      .pipe(z.string().min(2, "Name must be at least 2 characters long")),
    phone: z
      .string()
      .trim()
      .min(1, "Phone number is required")
      .transform((val) => val.replace(/^(\+91|0)/, "")) // normalize
      .refine((val) => /^[1-9]\d{9}$/.test(val), {
        message: "Invalid phone number",
      }),
  }),
});

export const loginSchema = z.object({
  body: z
    .object({
      email: z
        .string()
        .trim()
        .pipe(z.string().min(1, "Email is required"))
        .pipe(z.string().email("Invalid email format"))
        .optional(),
      phone: z
        .string()
        .trim()
        .pipe(z.string().min(1, "Phone number is required"))
        .pipe(z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"))
        .optional(),
      password: z
        .string()
        .pipe(z.string().min(6, "Password must be at least 6 characters long"))
        .pipe(
          z.string().max(100, "Password must be at most 100 characters long"),
        ),
    })
    .refine((data) => data.email || data.phone, {
      message: "Either email or phone must be provided",
      path: ["email", "phone"],
    }),
});
