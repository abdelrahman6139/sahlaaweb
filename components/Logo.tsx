import React from "react";
import { cn } from "@/lib/utils";

export default function Logo({
  className = "h-9",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="relative flex aspect-square h-full items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            <linearGradient id="sahlaa-logo" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path
            d="M30 35C30 35 35 25 50 25C65 25 70 35 70 42C70 49 65 52 50 52C35 52 30 55 30 62C30 69 35 79 50 79C65 79 70 69 70 69"
            stroke="url(#sahlaa-logo)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="75" cy="27" r="4" fill="#38bdf8" />
          <circle cx="82" cy="35" r="3" fill="#7dd3fc" />
          <circle cx="25" cy="68" r="4" fill="#38bdf8" />
          <circle cx="18" cy="76" r="3" fill="#7dd3fc" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-extrabold tracking-tight text-foreground">
          Sahlaa<span className="text-sky-500 dark:text-sky-400">.AI</span>
        </span>
      )}
    </div>
  );
}
