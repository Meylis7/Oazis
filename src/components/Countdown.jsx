"use client";

import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <>
        <p className="text-[40px] md:text-[80px] text-[#FF6A00] leading-tight font-black opacity-0">
          <span>00</span> : <span>00</span> : <span>00</span>
        </p>
        <div className="flex justify-between items-center gap-2 w-[320px] opacity-0">
          <span>дня</span>
          <span>часов</span>
          <span>минут</span>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="text-[45px] sm:text-[60px] md:text-[80px] text-[#FF6A00] leading-tight font-black">
        <span>{String(timeLeft.days).padStart(2, '0')}</span> : <span>{String(timeLeft.hours).padStart(2, '0')}</span> : <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
      </p>

      <div className="flex justify-between items-center gap-2 w-[240px] md:w-[320px]">
        <span>{getDaysLabel(timeLeft.days)}</span>
        <span>{getHoursLabel(timeLeft.hours)}</span>
        <span>{getMinutesLabel(timeLeft.minutes)}</span>
      </div>
    </>
  );
}

// Helper functions for Russian pluralization
function getDaysLabel(days) {
  const lastDigit = days % 10;
  const lastTwoDigits = days % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "дней";
  if (lastDigit === 1) return "день";
  if (lastDigit >= 2 && lastDigit <= 4) return "дня";
  return "дней";
}

function getHoursLabel(hours) {
  const lastDigit = hours % 10;
  const lastTwoDigits = hours % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "часов";
  if (lastDigit === 1) return "час";
  if (lastDigit >= 2 && lastDigit <= 4) return "часа";
  return "часов";
}

function getMinutesLabel(minutes) {
  const lastDigit = minutes % 10;
  const lastTwoDigits = minutes % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "минут";
  if (lastDigit === 1) return "минута";
  if (lastDigit >= 2 && lastDigit <= 4) return "минуты";
  return "минут";
}
