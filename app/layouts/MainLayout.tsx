import { Outlet } from "react-router";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import BannerComponent from "~/components/BannerComponent";
import type { SidebarMenu } from "~/types/sidebarMenuType";
import SidebarMenuComponent from "~/components/SidebarMenuComponent";
import "~/app.css";

const navItems: SidebarMenu[] = [
  { name: "Dashboard", href: "/", current: true, icon: HomeModernIcon },
  { name: "About", href: "/about", current: false, icon: Cog6ToothIcon },
  { name: "Settings", href: "/settings", current: false, icon: Cog6ToothIcon },
];

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white w-full h-full">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            {/* Button close menu */}
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Mobile link goes here */}
            <SidebarMenuComponent menuItems={navItems} />
          </DialogPanel>
        </div>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-full">
        {/* Sidebar container */}
        <div className="col-span-2 bg-white border-b-1 border-slate-200 md:border-b-0 h-14">
          {/* Desktop menu */}
          <div className="lg:min-h-full">
            <div className="flex justify-between pt-2 md:hidden">
              {/* Nav burger menu */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
              {/* Logo mobile */}
              <img
                src="/logo_fuel_flux_low.png"
                alt="Fuelflux"
                className="w-12 h-auto object-contain mr-2"
              />
            </div>

            {/* Logo desktop */}
            <div className="relative hidden lg:block">
              <div className="flex flex-col items-center justify-center h-42">
                <img
                  src="/logo_fuel_flux_low.png"
                  alt="Fuelflux"
                  className="w-32 h-auto"
                />
                <span className="text-lg text-green-600">Malaysia</span>
              </div>
              {/* Navigation desktop */}
              <SidebarMenuComponent menuItems={navItems} />
            </div>
          </div>
        </div>
        {/* Main content container */}
        <div className="col-span-10 bg-white min-h-full">
          <BannerComponent />
          {/* Page title & description */}
          <div className="bg-gray-50 p-6 pb-10">
            <p className="text-3xl text-gray-600 pb-2">
              Price of petroleum & diesel trends
            </p>
            <p className="text-gray-400">
              A comprehensive platform for analyzing and tracking retail
              petroleum price trends
            </p>
          </div>
          {/* Main content goes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
