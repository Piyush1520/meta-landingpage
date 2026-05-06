import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to Saturday, May 9, 2026, at 8:00 PM
    const targetDate = new Date("2026-05-09T20:00:00");

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate.getTime() - currentTime;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 min-w-[70px] md:min-w-[80px] backdrop-blur-sm">
      <span className="text-xl md:text-2xl font-bold font-sans text-primary leading-none">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-secondary-foreground font-medium mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-3 items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hrs" />
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}
