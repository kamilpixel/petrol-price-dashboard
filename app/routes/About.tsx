export function meta() {
  return [
    { title: 'About' },
    { name: 'description', content: 'About Fuelflux' },
  ];
}

export default function About() {
  return (
    <div className="p-6 max-w-7xl text-slate-600">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-1">
          <p className="mb-4">
            Fuelflux is a user-friendly fuel price dashboard application
            designed to help you track and analyze fuel prices in your area.
            With real-time data and intuitive visualizations, Fuelflux empowers
            users to make informed decisions about when and where to refuel
            their vehicles.
          </p>
          <p className="mb-4">
            Our app provides a comprehensive overview of fuel prices across
            various stations, allowing you to compare costs for different fuel
            types, including gasoline, diesel, and alternative fuels. The
            interactive dashboard features charts and maps to visualize price
            trends and locate the most cost-effective stations near you.
          </p>
          <p className="mb-4">
            Whether you&apos;re a daily commuter, a road-trip enthusiast, or a
            business managing a fleet, Fuelflux helps you save money and time by
            providing actionable insights into fuel price fluctuations. Stay
            ahead of the market with our easy-to-use interface and up-to-date
            information.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/id/182/1000/700"
            alt="Fuel enerygy"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
