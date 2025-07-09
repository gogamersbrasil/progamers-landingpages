import React, { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import {ChampionshipStatus} from "@/hooks/interfaces/championships.interface";

// Define the CSS animation for gradient movement and glass reflection
const gradientAnimation = `
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes glassReflection {
  0% {
    transform: translateX(-100%) skewX(45deg);
  }
  100% {
    transform: translateX(200%) skewX(45deg);
  }
}

.glass-reflection::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%) skewX(45deg);
  animation: glassReflection 6s ease-in-out infinite;
  z-index: 1;
  pointer-events: none;
}
`;

interface CountdownProps {
  date: string | null;
  current: number;
  max: number;
  status: string;
  label: string;
}

const Countdown: React.FC<CountdownProps> = ({ date, current, max, label, status }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = date ? new Date(date).getTime() : now;
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [date]);

  const progress = Math.min((current / max) * 100, 100);
  const spotsLeft = max - current;
  const isRunningOut = progress >= 80; // 80% or more spots filled
  const isCritical = progress >= 95; // 95% or more spots filled
  const showWarning = status === ChampionshipStatus.OPEN_FOR_REGISTRATION;

  // Determine progress bar color based on availability and status
  const progressBarClass = showWarning && isCritical
    ? "h-full bg-gradient-to-r from-red-500/80 to-red-600/80 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]"
    : showWarning && isRunningOut
    ? "h-full bg-gradient-to-r from-yellow-400/80 to-orange-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]"
    : "h-full bg-gradient-to-r from-green-400/80 to-green-500/80 shadow-[0_0_8px_rgba(74,222,128,0.4)]";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientAnimation }} />
      <div className={`relative inline-flex rounded-lg shadow-lg overflow-hidden w-full glass-reflection
        ${showWarning && isRunningOut ? '  border-yellow-500/30' : ''} 
        ${showWarning && isCritical ? '  border-red-500/30' : ''} 
        ${!showWarning || (!isRunningOut && !isCritical) ? '  border-white/10' : ''}`}>
        {/* Content */}
        <div className={`relative z-10 px-3 py-1.5 flex flex-col items-center 
          bg-white/5 backdrop-blur-md w-full 
          ${showWarning && isCritical ? 'bg-red-900/10' : showWarning && isRunningOut ? 'bg-yellow-900/10' : ''}
          before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-30 before:z-0`}>
          <span className="text-xs font-medium text-white/90 mb-0.5 z-10">{label}</span>

          <div className="flex items-center justify-center z-10">
            {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-row gap-1 items-center">
                  <span className={`text-sm font-bold ${showWarning && isCritical ? 'text-red-300' : 'text-white/95'} drop-shadow-sm`}>
                    {String((timeLeft as any)[unit]).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-white/80">
                    {unit.substring(0, 1)}
                  </span>
                </div>
                {idx < 3 && <span className="mx-1 text-white/60 text-sm font-bold">:</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Spots remaining warning - only show when status is OPEN_FOR_REGISTRATION */}
          {isRunningOut && showWarning && (
            <div className={`flex items-center justify-center mt-1 z-10 
                ${showWarning && isCritical ? 'text-red-300/90 bg-red-900/20' : 'text-yellow-300/90 bg-yellow-900/20'} 
                px-2 py-0.5 rounded-full backdrop-blur-sm`} 
                style={{ animation: showWarning && isCritical ? 'pulse 1.5s infinite' : 'none' }}>
              <AlertTriangle size={12} className="mr-1" />
              <span className="text-xs font-semibold">
                {isCritical 
                  ? `Apenas ${spotsLeft} ${spotsLeft === 1 ? 'vaga restante!' : 'vagas restantes!'}` 
                  : `Apenas ${spotsLeft} vagas restantes!`}
              </span>
            </div>
          )}

          <div className="w-full bg-gray-700/20 h-1 mt-1.5 rounded-full overflow-hidden backdrop-blur-sm z-10   border-white/5">
            <div
              className={progressBarClass}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
