"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projectMeta";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function ProjectsExplorer({
  projects,
  locale,
  allLabel,
  viewLabel,
  emptyLabel,
}: {
  projects: Project[];
  locale: Locale;
  allLabel: string;
  viewLabel: string;
  emptyLabel: string;
}) {
  const types = useMemo(() => {
    const set = Array.from(new Set(projects.map((p) => p.type)));
    return [allLabel, ...set];
  }, [projects, allLabel]);

  const [active, setActive] = useState(allLabel);
  const filtered =
    active === allLabel ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-2">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
              active === type
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-surface text-muted-foreground hover:text-foreground"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">{emptyLabel}</p>
      ) : (
        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} locale={locale} viewLabel={viewLabel} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
