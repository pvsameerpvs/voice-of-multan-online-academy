"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck2, Sparkles } from "lucide-react";
import { demoBookingSchema, type DemoBookingFormValues } from "@/lib/validations";
import { gradeOptions, subjectOptions, demoTimeOptions } from "@/data/form-options";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { FieldError } from "@/components/ui/form-status";

export function DemoBookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoBookingFormValues>({
    resolver: zodResolver(demoBookingSchema),
  });

  const [status, setStatus] = React.useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  async function onSubmit(values: DemoBookingFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: "demo" }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus({
        type: "success",
        title: "Demo booked successfully!",
        message: "A FREE demo session is reserved. We'll confirm the exact time within a few hours.",
      });
    } catch {
      setStatus({
        type: "error",
        title: "Booking not complete",
        message: "Please try again in a moment, or contact us on WhatsApp to reserve instantly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4.5" noValidate>
      {status && (
        <div
          role="status"
          className={`flex items-center gap-3 rounded-xl border p-4 text-sm ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          <CalendarCheck2 className="h-4 w-4 shrink-0" />
          <div>
            <p className="font-semibold">{status.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed opacity-80">{status.message}</p>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="demo-name">Parent Name *</Label>
          <Input id="demo-name" placeholder="Your name" {...register("parentName")} />
          <FieldError message={errors.parentName?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="demo-phone">Phone / WhatsApp *</Label>
          <Input id="demo-phone" type="tel" placeholder="+92 300 1234567" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="demo-email">Email *</Label>
          <Input id="demo-email" type="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="demo-grade">Class / Grade *</Label>
          <Select id="demo-grade" placeholder="Select class" options={gradeOptions} {...register("grade")} />
          <FieldError message={errors.grade?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="demo-subject">Subject *</Label>
          <Select id="demo-subject" placeholder="Pick subject" options={subjectOptions} {...register("subject")} />
          <FieldError message={errors.subject?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="demo-time">Preferred Time</Label>
          <Select id="demo-time" placeholder="Any time" options={demoTimeOptions} {...register("preferredTime")} />
          <FieldError message={errors.preferredTime?.message} />
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        <Sparkles className="h-4 w-4" />
        {isSubmitting ? "Booking..." : "Book My Free Demo"}
      </Button>
    </form>
  );
}