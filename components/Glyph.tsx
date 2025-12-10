import React from 'react';
import { Cpu, Database, Shield, HardDrive, Globe, Server, Network, Code } from 'lucide-react';
import { GlyphType } from '../types';

interface GlyphProps {
  type: GlyphType;
  label?: string; // If provided, renders text with the glyph. If not, just renders the inline icon.
}

const iconMap: Record<GlyphType, React.FC<any>> = {
  compute: Cpu,
  data: Database,
  privacy: Shield,
  hardware: HardDrive,
  global: Globe,
  nodes: Server,
  network: Network,
  code: Code,
};

export const Glyph: React.FC<GlyphProps> = ({ type, label }) => {
  const Icon = iconMap[type];

  if (label) {
    return (
      <span className="inline-flex items-center gap-1.5 align-baseline group cursor-help transition-all duration-300 hover:text-fresh-400">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-charcoal-700/50 border border-charcoal-600/50 group-hover:border-fresh-400/30 transition-colors">
          <Icon className="w-3 h-3 text-fresh-400" strokeWidth={2.5} />
        </span>
        <span className="font-medium tracking-tight border-b border-transparent group-hover:border-fresh-400/20">{label}</span>
      </span>
    );
  }

  // Inline glyph only
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 mx-1 rounded bg-charcoal-700 text-fresh-400 align-text-bottom transform -translate-y-[2px]">
      <Icon className="w-3 h-3" strokeWidth={2.5} />
    </span>
  );
};
