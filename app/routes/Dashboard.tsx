import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
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

import { Bar, Line } from "react-chartjs-2";
import type { SidebarMenu } from "~/types/sidebarMenuType";
import SidebarMenuComponent from "~/components/SidebarMenuComponent";

const navItems: SidebarMenu[] = [
  { name: "Dashboard", href: "/", current: true, icon: HomeModernIcon },
  { name: "About", href: "/about", current: false, icon: Cog6ToothIcon },
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

export default function Dashboard() {
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
    <>
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
    </>
  );
}
