"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/shared/social-icons";
import { whatsappLink } from "@/lib/site";

export function StickyMobileCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 p-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex items-center gap-2.5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <Link
              href="/contact#demo"
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-secondary text-sm font-semibold text-white"
            >
              Free Demo
            </Link>
            <Link
              href="/contact#enroll"
              className="flex h-11 flex-1 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}