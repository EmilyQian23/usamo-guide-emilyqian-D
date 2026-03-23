import * as React from 'react';

export default function DashboardCard(props) {
  return (
    <div
      className="backdrop-blur-sm rounded-2xl border border-white/30 bg-white/40 p-0 shadow-lg transition hover:shadow-2xl dark:border-slate-700/60 dark:bg-slate-900/40 dark:hover:bg-slate-900/60"
      {...props}
    />
  );
}
