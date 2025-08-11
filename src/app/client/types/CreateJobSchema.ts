import { z } from "zod";

export const CreateJobSchema = z
  .object({
    // 1. Job Details
    jobTitle: z.string().min(3, "Job title is required"),
    jobDescription: z.string().min(10, "Job description is required"),
    responsibilities: z.string().min(10, "Responsibilities are required"),
    requirements: z
      .array(
        z.string().min(3, "Requirement must be at least 3 characters long")
      )
      .min(1, "At least one requirement is needed"),
    employmentType: z.enum([
      "Full-time",
      "Part-time",
      "Contract",
      "Internship",
    ]),
    workLocationType: z.enum(["Remote", "On-site", "Hybrid"]),
    // location: z
    //   .string()
    //   .optional()
    //   .superRefine((val, ctx) => {
    //     const parent = ctx.parent;
    //     if (
    //       parent.workLocationType !== "Remote" &&
    //       (!val || val.trim() === "")
    //     ) {
    //       ctx.addIssue({
    //         code: z.ZodIssueCode.custom,
    //         message: "Location is required for On-site or Hybrid jobs",
    //       });
    //     }
    //   }),
    salaryMin: z
      .number()
      .int()
      .nonnegative("Salary must be a non-negative number")
      .optional(),
    salaryMax: z
      .number()
      .int()
      .nonnegative("Salary must be a non-negative number")
      .optional(),
    currency: z
      .string()
      .min(1, "Currency is required if salary is provided")
      .optional(),
    numberOfOpenings: z
      .number()
      .int()
      .min(1, "At least one opening is required"),
    experienceMin: z
      .number()
      .int()
      .nonnegative("Experience must be a non-negative number")
      .optional(),
    experienceMax: z
      .number()
      .int()
      .nonnegative("Experience must be a non-negative number")
      .optional(),
    educationLevel: z
      .enum(["Bachelor’s", "Master’s", "Diploma", "PhD"])
      .optional(),
    jobTags: z.array(z.string()).optional(),
    applicationDeadline: z.coerce.date().optional(),
    jobCategory: z.string().min(1, "Job category is required"),
    applicationMethod: z
      .union([
        z.url("Must be a valid URL").includes("http"),
        z.email("Must be a valid email"),
      ])
      .optional(),

    // 2. Company Info
    companyName: z.string().min(2, "Company name is required"),
    companyLogo: z.url("Company logo must be a valid URL").optional(),
    companyDescription: z.string().optional(),
    companyWebsite: z.url("Company website must be a valid URL").optional(),

    // 3. Internal
    hiringManagerNotes: z.string().optional(),
    customQuestions: z.array(z.string()).optional(),

    // 4. Publishing Options
    isDraft: z.boolean().optional().default(false),
    publishDate: z.coerce.date().optional(),
    visibility: z.enum(["Public", "Private", "Invite-only"]),
  })
  .refine(
    (data) => {
      if (
        data.salaryMin !== undefined &&
        data.salaryMax !== undefined &&
        data.salaryMin > data.salaryMax
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Minimum salary cannot be greater than maximum salary",
      path: ["salaryMin"],
    }
  )
  .refine(
    (data) => {
      if (
        data.experienceMin !== undefined &&
        data.experienceMax !== undefined &&
        data.experienceMin > data.experienceMax
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Minimum experience cannot be greater than maximum experience",
      path: ["experienceMin"],
    }
  );
