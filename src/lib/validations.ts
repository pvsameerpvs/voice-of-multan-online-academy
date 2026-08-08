import { z } from "zod";

const phoneRegex = /^(\+\d{1,3}[- ]?)?\(?\d{3,4}\)?[- ]?\d{3,4}[- ]?\d{3,4}$/;

const baseFields = {
  parentName: z
    .string({ message: "Parent name is required." })
    .min(2, "Parent name must be at least 2 characters."),
  phone: z
    .string({ message: "Phone number is required." })
    .regex(phoneRegex, "Please enter a valid phone number (e.g. +92 300 1234567)."),
};

export const enrollmentSchema = z.object({
  ...baseFields,
  studentName: z
    .string()
    .min(2, "Student name must be at least 2 characters.")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Please enter a valid email address."),
  grade: z.string().min(1, "Please select a grade."),
  subjects: z.array(z.string()).min(1, "Please select at least one subject."),
  message: z.string().max(1000, "Message must be under 1000 characters.").optional(),
});

export const contactSchema = z.object({
  name: z.string({ message: "Name is required." }).min(2, "Name must be at least 2 characters."),
  email: z.string({ message: "Email is required." }).email("Please enter a valid email address."),
  phone: z.string({ message: "Phone is required." }).regex(phoneRegex, "Please enter a valid phone number."),
  subject: z.string().min(2, "Subject must be at least 2 characters.").optional().or(z.literal("")),
  message: z.string({ message: "Message is required." }).min(10, "Message must be at least 10 characters."),
});

export const demoBookingSchema = z.object({
  ...baseFields,
  email: z.string({ message: "Email is required." }).email("Please enter a valid email address."),
  grade: z.string().min(1, "Please select a class."),
  subject: z.string().min(1, "Please select a subject."),
  preferredTime: z.string().optional().or(z.literal("")),
});

export const courseEnquirySchema = z.object({
  ...baseFields,
  course: z.string().min(1, "Please select a course."),
  email: z.string({ message: "Email is required." }).email("Please enter a valid email address."),
  message: z.string().optional().or(z.literal("")),
});

export type EnrollmentFormValues = z.infer<typeof enrollmentSchema>;
export type ContactFormValues = z.infer<typeof contactSchema>;
export type DemoBookingFormValues = z.infer<typeof demoBookingSchema>;
export type CourseEnquiryFormValues = z.infer<typeof courseEnquirySchema>;