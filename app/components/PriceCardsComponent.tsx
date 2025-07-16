import { Icon } from "@iconify/react";
import type { PetrolCard } from "~/types/petrolType";

interface IPetrolCard {
  card: PetrolCard;
}

export default function PriceCardsComponents({ card }: IPetrolCard) {
  // set bgColor variable based on three conditions
  let bgColor = "bg-orange-100";
  if (card.type === "ron97") {
    bgColor = "bg-green-100";
  } else if (card.type === "diesel") {
    bgColor = "bg-gray-100";
  }

  // Set textColor
  let textColor = "text-orange-500";
  if (card.type === "ron97") {
    textColor = "text-green-500";
  } else if (card.type === "diesel") {
    textColor = "text-gray-500";
  }

  return (
    <div className="bg-white p-6 shadow ring-1 ring-slate-200">
      {/* Petrol type and price label */}
      <div className="flex flex-start gap-4">
        <div>
          <div
            className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
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
            {card.label}
          </h3>
          <p className="text-gray-600 font-medium">RM{card.price}/per litre</p>

          {/* Region label */}
          {card.region && (
            <div className="text-gray-400 pb-2">{card.region}</div>
          )}
        </div>
      </div>
    </div>
  );
}
