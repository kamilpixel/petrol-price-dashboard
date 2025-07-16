export default function PetrolCardsLoading() {
  return (
    <div className="bg-white p-6 shadow ring-1 ring-slate-200">
      <div className="flex animate-pulse space-x-4">
        <div className="size-20 rounded-full bg-gray-300"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 rounded bg-gray-300"></div>
          <div className="h-2 rounded bg-gray-300"></div>
          <div className="h-2 w-[40px] rounded bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
