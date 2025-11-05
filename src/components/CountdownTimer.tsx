import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-lg">
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <p className="text-center text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wide">
          O Evento Começa Em:
        </p>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-lg w-full aspect-square flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium">DIAS</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-lg w-full aspect-square flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium">HORAS</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-lg w-full aspect-square flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium">MIN</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary text-primary-foreground rounded-lg w-full aspect-square flex items-center justify-center">
              <span className="text-3xl md:text-4xl font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 font-medium">SEG</span>
          </div>
        </div>
      </div>
    </div>
  );
};
