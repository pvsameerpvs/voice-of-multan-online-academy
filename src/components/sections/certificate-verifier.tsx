"use client";

import * as React from "react";
import { Search, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CertificateVerifier() {
  const [certNumber, setCertNumber] = React.useState("");

  const verifyHref = whatsappLink(
    certNumber.trim()
      ? `Hi Voice of Multan Online Academy! I'd like to verify certificate number: ${certNumber.trim()}.`
      : "Hi Voice of Multan Online Academy! I'd like to verify a certificate.",
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(verifyHref, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="glass relative overflow-hidden rounded-[2rem] p-8 shadow-card-hover sm:p-10">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
      />
      <div className="relative mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-card">
          <Search className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-base font-bold text-dark">
            Certificate Checker
          </p>
          <p className="text-xs text-muted">
            Verification via WhatsApp in one working day
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="relative flex flex-col gap-2.5 sm:flex-row">
        <Input
          aria-label="Certificate number"
          value={certNumber}
          onChange={(e) => setCertNumber(e.target.value)}
          placeholder="e.g. VOMA-2026-0128"
          className="bg-white"
        />
        <Button type="submit" variant="secondary" className="shrink-0">
          <Send className="h-4 w-4" />
          Verify
        </Button>
      </form>

      <p className="relative mt-4 flex items-center gap-2 text-xs text-muted">
        Enter your certificate number and we&apos;ll confirm its authenticity
        instantly on WhatsApp — no forms, no waiting.
      </p>

      <div className="relative mt-6 flex flex-col gap-2.5 sm:flex-row">
        <a
          href={whatsappLink(
            "Hi Voice of Multan Online Academy! I'd like to request a certificate verification.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-ink shadow-sm transition-all hover:border-secondary hover:text-primary"
        >
          Request a Verification
        </a>
        <a
          href={whatsappLink(
            "Hi Voice of Multan Online Academy! I'm interested in getting certified. Please share the details.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Get Certified
        </a>
      </div>
    </div>
  );
}