"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { enrollmentSchema, type EnrollmentFormValues } from "@/lib/validations";
import { gradeOptions, subjectOptions } from "@/data/form-options";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { FieldError, FormStatus } from "@/components/ui/form-status";

export function EnrollmentForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: { subjects: [] },
  });

  const [status, setStatus] = React.useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  const selectedSubjects = watch("subjects") ?? [];

  function toggleSubject(subject: string) {
    const current = watch("subjects") ?? [];
    const next = current.includes(subject)
      ? current.filter((s) => s !== subject)
      : [...current, subject];
    setValue("subjects", next, { shouldValidate: true });
  }

  async function onSubmit(values: EnrollmentFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: "enrollment" }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus({
        type: "success",
        title: "Application received!",
        message:
          "Thank you for choosing Voice of Multan. Our admissions team will contact you within 24 hours for scheduling.",
      });
    } catch {
      setStatus({
        type: "error",
        title: "Something went wrong",
        message:
          "We couldn't submit your application. Please try again or reach us on WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4.5 w-full" noValidate>
      {status && <FormStatus {...status} />}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="enroll-parent">Parent Name *</Label>
          <Input id="enroll-parent" placeholder="e.g. Muhammad Ahmed" {...register("parentName")} />
          <FieldError message={errors.parentName?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enroll-student">Student Name</Label>
          <Input id="enroll-student" placeholder="e.g. Ayesha" {...register("studentName")} />
          <FieldError message={errors.studentName?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="enroll-phone">Phone / WhatsApp *</Label>
          <Input id="enroll-phone" type="tel" placeholder="+92 300 1234567" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="enroll-email">Email *</Label>
          <Input id="enroll-email" type="email" placeholder="parent@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="enroll-grade">Class / Grade *</Label>
        <Select id="enroll-grade" placeholder="Select a class" options={gradeOptions} {...register("grade")} />
        <FieldError message={errors.grade?.message} />
      </div>

      <div className="space-y-2">
        <Label>Subjects *</Label>
        <div className="flex flex-wrap gap-2">
          {subjectOptions.map((subject) => {
            const active = selectedSubjects.includes(subject);
            return (
              <button
                key={subject}
                type="button"
                onClick={() => toggleSubject(subject)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                  active
                    ? "border-primary bg-primary text-white shadow-[0_6px_16px_rgba(19,74,124,0.3)]"
                    : "border-slate-200 bg-white text-ink hover:border-primary/50 hover:text-primary",
                )}
              >
                {subject}
              </button>
            );
          })}
        </div>
        <FieldError message={errors.subjects?.message} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="enroll-message">Message</Label>
        <Textarea id="enroll-message" placeholder="Any questions for the academy..." {...register("message")} />
        <FieldError message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        <motion.span
          animate={isSubmitting ? { rotate: 360 } : {}}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="inline-flex"
        >
          <Send className="h-4 w-4" />
        </motion.span>
        {isSubmitting ? "Submitting..." : "Submit Enrollment"}
      </Button>
    </form>
  );
}