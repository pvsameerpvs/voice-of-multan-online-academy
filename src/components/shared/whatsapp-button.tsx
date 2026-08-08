"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { whatsappLink } from "@/lib/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function WhatsAppButton() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const waLink = whatsappLink(
    message.trim()
      ? `Hi Voice of Multan Online Academy! ${message.trim()}`
      : undefined,
  );

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            aria-label="WhatsApp enquiry"
            className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)] transition-transform hover:scale-110"
          >
            <span aria-hidden className="absolute inset-0 rounded-full bg-emerald-400/60 animate-pulse-ring" />
            <WhatsAppIcon className="h-7 w-7" />
          </motion.button>
        )}
      </AnimatePresence>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10">
                <WhatsAppIcon className="h-5 w-5 text-green-600" />
              </span>
              WhatsApp Enquiry
            </DialogTitle>
            <DialogDescription>
              Chat with our admissions team instantly — usually replies within a
              few minutes.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="wa-msg">Your message</Label>
              <Textarea
                id="wa-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="I&apos;d like to ask about enrollment..."
                className="min-h-24"
              />
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-3 text-sm text-green-800">
              <Send className="h-4 w-4 shrink-0" />
              You&apos;ll be redirected to WhatsApp to continue the conversation.
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.4)] transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Open WhatsApp
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}