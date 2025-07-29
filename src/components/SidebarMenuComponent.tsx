import { NavLink } from 'react-router-dom';
import type { SidebarMenu } from '~/types/sidebarMenuType';
interface SidebarMenuComponentProps {
  menuItems: SidebarMenu[];
}

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function SidebarMenuComponent({ menuItems }: SidebarMenuComponentProps) {
  return (
    <>
      {menuItems.map(item => {
        const ItemIcon = item.icon;

        return (
          <NavLink
            className={({ isActive, isPending }) =>
              classNames(
                isActive
                  ? 'bg-green-800 text-white'
                  : isPending
                    ? 'bg-green-800'
                    : 'text-slate-600 hover:bg-green-700 hover:text-white',
                'block px-4 py-4 text-base flex items-center w-full cursor-pointer'
              )
            }
            to={item.href}
            key={item.name}
          >
            {ItemIcon && <ItemIcon aria-hidden="true" className="size-5 mr-2" />}
            {item.name}
          </NavLink>
        );
      })}
    </>
  );
}
