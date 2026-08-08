"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FieldError, FormStatus } from "@/components/ui/form-status";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [status, setStatus] = React.useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type: "contact" }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus({
        type: "success",
        title: "Message sent!",
        message: "Thank you for reaching out — we usually reply within a few hours.",
      });
      reset();
    } catch {
      setStatus({
        type: "error",
        title: "Message not sent",
        message: "Please try again in a moment, or contact us directly on WhatsApp.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5" noValidate>
      {status && <FormStatus {...status} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input id="contact-name" placeholder="Your name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone">Phone *</Label>
          <Input id="contact-phone" type="tel" placeholder="+92 300 1234567" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email *</Label>
          <Input id="contact-email" type="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-subject">Subject</Label>
          <Input id="contact-subject" placeholder="How can we help?" {...register("subject")} />
          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          placeholder="Tell us about your child, question or inquiry..."
          className="min-h-32"
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}