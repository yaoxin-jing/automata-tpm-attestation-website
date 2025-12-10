export interface NavItem {
  label: string;
  href: string;
}

export type GlyphType = 'compute' | 'data' | 'privacy' | 'hardware' | 'global' | 'nodes' | 'network' | 'code';

export interface ArchitectureNode {
  id: string;
  label: string;
  description?: string;
  children?: ArchitectureNode[];
}
