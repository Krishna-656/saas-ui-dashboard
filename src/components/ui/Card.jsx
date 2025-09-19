import React from 'react';
import { motion } from 'framer-motion';

export default function Card({children, title, footer}) {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-white dark:bg-[var(--card)] rounded-2xl p-5 shadow-soft-lg border border-gray-100 dark:border-gray-800">
      {title && <header className="flex items-center justify-between mb-3"><h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">{title}</h3></header>}
      <div>{children}</div>
      {footer && <div className="mt-4 text-xs text-gray-500">{footer}</div>}
    </motion.section>
  );
}
