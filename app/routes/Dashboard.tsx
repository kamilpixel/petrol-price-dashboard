"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import PriceCardsComponents from "~/components/PriceCardsComponent";
import BannerComponent from "~/components/BannerComponent";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import { Doughnut, Bar, Line } from "react-chartjs-2";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

const navigationDesktop = [
  { name: "Dashboard", href: "#", current: true, icon: HomeModernIcon },
  { name: "Settings", href: "#", current: false, icon: Cog6ToothIcon },
  { name: "Logout", href: "#", current: false, icon: PowerIcon },
];

// Register Chart.js components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedChart, setSelectedChart] = useState<"daily" | "monthly">(
    "daily"
  );

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const monthlyBarData = {
    labels: [
      "2025-01-31",
      "2025-02-28",
      "2025-03-31",
      "2025-04-30",
      "2025-05-31",
      "2025-06-30",
    ],
    datasets: [
      {
        label: "RON95",
        data: [2.04, 2.1, 2.07, 2.06, 2.02, 2.02],
        backgroundColor: "rgba(255, 105, 0, 1)",
      },
      {
        label: "RON97",
        data: [3.0, 3.33, 3.22, 3.26, 2.99, 3.37],
        backgroundColor: "rgba(0, 201, 81, 1)",
      },
      {
        label: "Diesel",
        data: [2.92, 2.79, 2.79, 2.79, 2.81, 2.85],
        backgroundColor: "rgba(106, 114, 130, 1)",
      },
      {
        label: "Diesel East Malaysia",
        data: [2.15, 2.15, 2.15, 2.15, 2.15, 2.15],
        backgroundColor: "rgba(49, 58, 78)",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const lineData = {
    labels: [
      "2025-06-26",
      "2025-06-19",
      "2025-06-12",
      "2025-06-05",
      "2025-05-29",
    ],
    datasets: [
      {
        label: "RON95",
        data: [2.05, 2.05, 2.05, 2.05, 2.05],
        borderColor: "rgba(255, 105, 0, 1)",
        backgroundColor: "rgba(255, 105, 0, 1)",
        tension: 0.4,
      },
      {
        label: "RON97",
        data: [3.21, 3.14, 3.07, 3.07, 3.1],
        borderColor: "rgba(0, 201, 81, 1)",
        backgroundColor: "rgba(0, 201, 81, 1)",
        tension: 0.4,
      },
      {
        label: "Diesel",
        data: [2.88, 2.81, 2.74, 2.74, 2.77],
        borderColor: "rgba(106, 114, 130, 1)",
        backgroundColor: "rgba(106, 114, 130, 1)",
        tension: 0.4,
      },
      {
        label: "Diesel East Malaysia",
        data: [2.15, 2.15, 2.15, 2.15, 2.15],
        borderColor: "rgb(49, 58, 78)",
        backgroundColor: "rgba(49, 58, 78)",
        tension: 0.4,
      },
    ],
  };

  const charts = [
    {
      id: 11,
      chartType: "line",
      chartTitle: "Daily price trends",
      chartData: lineData,
    },
    {
      id: 12,
      chartType: "bar",
      chartTitle: "Monthly price trends",
      chartData: monthlyBarData,
    },
  ];

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
            <p className="p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ea ducimus atque, ut obcaecati, quibusdam delectus aut facilis temporibus itaque minus at nulla mollitia praesentium explicabo illum assumenda unde placeat.</p>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-full">
        {/* Sidebar container */}
        <div className="col-span-2 bg-white border-r border-gray-200">
          {/* Desktop menu */}
          <div className="lg:min-h-full">
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

            {/* Logo */}
            <div className="relative hidden lg:block">
              <div className="flex flex-col items-center justify-center h-42">
                <img src="/logo_fuel_flux_low.png" alt="Fuelflux" className="w-32 h-auto"/>
                <span className="text-lg text-green-600">Malaysia</span>
              </div>

              <div className="">
                {navigationDesktop.map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <button
                      key={item.name}
                      as="a"
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
                    </button>
                  );
                })}
              </div>
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
          <div className="p-4">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <PriceCardsComponents
                petrolType="RON95"
                petrolPrice={2.5}
                petrolRegion="All region"
              />
              <PriceCardsComponents
                petrolType="RON97"
                petrolPrice={3.21}
                petrolRegion="All region"
              />
              <PriceCardsComponents
                petrolType="DIESEL"
                petrolPrice={2.88}
                petrolRegion="Peninsular Malaysia"
              />
              <PriceCardsComponents
                petrolType="DIESEL"
                petrolPrice={2.15}
                petrolRegion="Sabah, Sarawak & Labuan"
              />
            </div>
          </div>
          <div className="p-4 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* {chartElements} */}

              <div className="bg-white shadow ring-1 ring-slate-200 md:col-span-3 order-2 md:order-1">
                <div className="p-4 border-b border-slate-200 font-medium text-gray-600 bg-gray-50">
                  {selectedChart === "daily"
                    ? charts[0].chartTitle
                    : charts[1].chartTitle}
                </div>
                <div className="flex-1 flex items-center justify-center p-4 h-96">
                  {selectedChart === "daily" ? (
                    <Line data={charts[0].chartData} options={lineOptions} />
                  ) : (
                    <Bar data={charts[1].chartData} options={barOptions} />
                  )}
                </div>
              </div>

              <div className="order-1 md:order-2 pb-4 md:pl-4">
                <fieldset>
                  <legend className="text-sm/6 font-semibold text-gray-900">
                    Filter
                  </legend>
                  <p className="mt-1 text-sm/6 text-gray-600">
                    Filter chart by daily or monthly
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="filterDaily"
                        name="filterChart"
                        type="radio"
                        checked={selectedChart === "daily"}
                        onChange={() => setSelectedChart("daily")}
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-green-800 checked:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        htmlFor="filterDaily"
                        className="block text-sm/6 font-medium text-gray-900 cursor-pointer"
                      >
                        Daily
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="filterMonthly"
                        name="filterChart"
                        type="radio"
                        checked={selectedChart === "monthly"}
                        onChange={() => setSelectedChart("monthly")}
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-green-800 checked:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                      />
                      <label
                        htmlFor="filterMonthly"
                        className="block text-sm/6 font-medium text-gray-900 cursor-pointer"
                      >
                        Monthly
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
