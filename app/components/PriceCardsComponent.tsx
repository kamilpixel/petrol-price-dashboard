import { Icon } from "@iconify/react";
import type { PetrolType, PetrolRegion } from "~/types/petrolType";

interface PriceCardsComponentsProps {
  petrolType: PetrolType;
  petrolPrice: number;
  petrolRegion?: PetrolRegion;
}

export default function PriceCardsComponents({
  petrolType,
  petrolPrice,
  petrolRegion,
}: PriceCardsComponentsProps) {
  // set bgColor variable based on three conditions
  let bgColor = "bg-orange-100";
  if (petrolType === "RON97") {
    bgColor = "bg-green-100";
  } else if (petrolType === "DIESEL") {
    bgColor = "bg-gray-100";
  }

  // Set textColor
  let textColor = "text-orange-500";
  if (petrolType === "RON97") {
    textColor = "text-green-500";
  } else if (petrolType === "DIESEL") {
    textColor = "text-gray-500";
  }

  return (
    <div className="bg-white p-6 shadow-lg ring-1 ring-slate-200">
      {/* Petrol type and price label */}
      <div className="flex flex-start gap-4">
        <div>
          <div
            className={`${bgColor} w-12 h-12 rounded-lg flex justify-center items-center `}
          >
            <Icon
              icon="mdi:gas-station-outline"
              width="32"
              height="32"
              className={`${textColor}`}
            />
          </div>
        </div>
        <div>
          <h3 className={`text-2xl font-semibold ${textColor}`}>
            {petrolType}
          </h3>
          <p className="text-gray-600 font-medium">RM{petrolPrice}/per litre</p>

          {/* Region label */}
          {petrolRegion && (
            <div className="text-gray-400 pb-2">{petrolRegion}</div>
          )}
        </div>
      </div>
    </div>
  );
}
