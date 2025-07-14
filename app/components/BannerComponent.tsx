export default function BannerComponent() {
  return (
    <div className="w-full h-[150px] relative hidden md:block">
      <div className="w-full h-full relative">
        <img
          className="w-full h-full object-cover"
          src="/bg.jpg"
          alt="Fuelflux"
        />
        <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0"></div>
      </div>
      <div className="absolute bottom-0 right-0 p-4">
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="size-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs/5 text-white">
            Last update 26 Jun 2025, 12:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}
