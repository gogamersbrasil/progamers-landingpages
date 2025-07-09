import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
  time: string;
  className?: string;
}

const EventCountdown: React.FC<CountdownProps> = ({
  targetDate,
  time,
  className = "",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeParts = time ? time.split(":") : ["00", "00"];
      const dateParts = targetDate.split("T");
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);

      // Check if targetDate is already a Date object
      const target = new Date(`${dateParts[0]} ${hours}:${minutes}`);

      const difference = target.getTime() - now.getTime();
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <div className="text-lg font-semibold text-gray-300">
          O evento já começou!
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="text-center">
          <div className="bg-gray-800/80 rounded-lg p-3 w-20 h-20 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs text-gray-400">Dias</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800/80 rounded-lg p-3 w-20 h-20 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs text-gray-400">Horas</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800/80 rounded-lg p-3 w-20 h-20 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-400">Minutos</div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800/80 rounded-lg p-3 w-20 h-20 flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-400">Segundos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
