import type { ComponentType, SVGProps } from 'react';

export interface SidebarMenu {
  name: string;
  href: string;
  current?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  pageTitle?: string;
  pageDescription?: string;
}
