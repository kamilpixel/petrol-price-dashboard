export interface SidebarMenu {
  name: string;
  href: string;
  current?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  pageTitle?: string;
  pageDescription?: string;
}
