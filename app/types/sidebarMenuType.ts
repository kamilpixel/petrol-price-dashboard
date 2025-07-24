import React from 'react';

export interface SidebarMenu {
  name: string;
  href: string;
  current?: boolean;
  icon?: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}
