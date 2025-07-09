import React from "react";
import clsx from "clsx";
import {ChampionshipStatus} from "@/hooks/interfaces/championships.interface";

interface StatusBadgeProps {
  status: ChampionshipStatus;
  label: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  className,
}) => {
  const baseStyles =
    "inline-flex w-fit items-center justify-center rounded-full font-medium shadow-md px-2 py-1";

  // Solid background colors for each status
  const statusStyles = {
    [ChampionshipStatus.UPCOMING]:
      "bg-blue-600 text-white border border-blue-700",
    [ChampionshipStatus.OPEN_FOR_REGISTRATION]:
      "bg-green-600 text-white border border-green-700",
    [ChampionshipStatus.REGISTRATION_CLOSED]:
      "bg-yellow-600 text-white border border-yellow-700",
    [ChampionshipStatus.ONGOING]:
      "bg-orange-600 text-white border border-orange-700",
    [ChampionshipStatus.CANCELLED]:
      "bg-red-600 text-white border border-red-700",
    [ChampionshipStatus.FINISHED]:
      "bg-gray-600 text-white border border-gray-700",
  };

  return (
    <div className={clsx(baseStyles, statusStyles[status], className)}>
      <span>{label}</span>
    </div>
  );
};

export default StatusBadge;
