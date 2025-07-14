import type { SidebarMenu } from "~/types/sidebarMenuType";

interface SidebarMenuComponentProps {
  menuItems: SidebarMenu[];
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SidebarMenuComponent({
  menuItems,
}: SidebarMenuComponentProps) {
  return (
    <>
      {menuItems.map((item) => {
        const ItemIcon = item.icon;

        return (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-green-800 text-white"
                : "text-slate-600 hover:bg-green-700 hover:text-white",
              "block px-4 py-4 text-base flex items-center w-full cursor-pointer"
            )}
          >
            <ItemIcon aria-hidden="true" className="size-5 mr-2" />
            {item.name}
          </a>
        );
      })}
    </>
  );
}