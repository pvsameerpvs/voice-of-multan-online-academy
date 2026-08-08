"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p
      role="alert"
      className="flex items-center gap-1.5 pt-1.5 text-xs font-medium text-rose-500"
    >
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}

export function FormStatus({
  type,
  title,
  message,
  className,
}: {
  type: "success" | "error";
  title: string;
  message: string;
  className?: string;
}) {
  const isSuccess = type === "success";
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 text-sm",
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-rose-200 bg-rose-50 text-rose-800",
        className,
      )}
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      )}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed opacity-80">{message}</p>
      </div>
    </div>
  );
}