import { useEffect, useState } from 'react';
import PriceCardsComponents from '~/components/PriceCardsComponent';
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
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios';
import type { PetrolCard } from '~/types/petrolType';
import PetrolCardsLoading from '~/components/shared/skeletons/PetrolCardsLoading';
import type { Frequency } from '~/types/frequencyType';
import LoadingSpinner from '~/components/shared/LoadingSpinner';
import type { ChartData } from 'chart.js';
import { Helmet } from "react-helmet-async";

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
  LineElement,
);

export default function Dashboard() {
  const [selectedChart, setSelectedChart] = useState<Frequency>('daily');
  const [loading, setLoading] = useState(true);
  const [petrolPrices, setPetrolPrices] = useState<PetrolCard[]>([]);
  const [loadingCharts, setLoadingCharts] = useState(true);
  const [lineChartData, setLineChartData] = useState<ChartData<'line'> | null>(
    null,
  );
  const [barChartData, setBarChartData] = useState<ChartData<'bar'> | null>(
    null,
  );

  let initData = true;
  let isChartLoaded = false;

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

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  // Fetch petrol price data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('data/petrol-price.json');
        setPetrolPrices(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    if (initData) {
      initData = false;
      fetchData();
    }
  }, []);

  // Fetch charts data
  useEffect(() => {
    const fetchData = async (frequency: Frequency) => {
      const CHARTS_API = {
        daily: 'data/daily-chart.json',
        monthly: 'data/monthly-chart.json',
      };

      setLoadingCharts(true);
      try {
        const response = await axios.get(
          frequency === 'daily' ? CHARTS_API.daily : CHARTS_API.monthly,
        );
        if (frequency === 'daily') {
          setLineChartData(response.data);
        } else {
          setBarChartData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoadingCharts(false);
    };

    if (!isChartLoaded) {
      isChartLoaded = true;
      fetchData(selectedChart);
    }
  }, [selectedChart]); // Listen to selectedChart and fetch data accoring to filter type

  const onChangeChart = (chartType: Frequency) => {
    isChartLoaded = false;
    setSelectedChart(chartType);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Fuelflux</title>
        <meta
          name="description"
          content="A fuel price dashboard that helps you compare, track, and save on fuel costs with real-time visual analytics."
        />
      </Helmet>

      {/* Cards section */}
      <div className="p-4">
        {loading ? (
          // Cards loading state
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <PetrolCardsLoading key={item} />
            ))}
          </div>
        ) : (
          // Render actual cards
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {petrolPrices.length ? (
              petrolPrices.map((item) => (
                <PriceCardsComponents key={item.type} card={item} />
              ))
            ) : (
              <div>No records available...</div>
            )}
          </div>
        )}
      </div>
      {/* Charts section */}
      <div className="p-4 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="bg-white shadow ring-1 ring-slate-200 md:col-span-3 order-2 md:order-1">
            {loadingCharts ? (
              // Charts loading state
              <div className="flex-1 flex items-center justify-center p-4 h-96">
                <LoadingSpinner />{' '}
                <span className="text-green-800">Loading charts...</span>
              </div>
            ) : (
              // Render actual charts
              <>
                <div className="p-4 border-b border-slate-200 font-medium text-gray-600 bg-gray-50">
                  {selectedChart === 'daily'
                    ? lineChartData && lineChartData.heading
                    : barChartData && barChartData.heading}
                </div>
                <div className="flex-1 flex items-center justify-center p-4 h-96">
                  {selectedChart === 'daily' ? (
                    lineChartData ? (
                      <Line data={lineChartData} options={lineOptions} />
                    ) : (
                      <div>Data not available...</div>
                    )
                  ) : barChartData ? (
                    <Bar data={barChartData} options={barOptions} />
                  ) : (
                    <div>Data not available...</div>
                  )}
                </div>
              </>
            )}
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
                    checked={selectedChart === 'daily'}
                    onChange={() => onChangeChart('daily')}
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
                    checked={selectedChart === 'monthly'}
                    onChange={() => onChangeChart('monthly')}
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
