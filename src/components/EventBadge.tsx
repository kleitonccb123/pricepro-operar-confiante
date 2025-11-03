import { Calendar, Radio } from "lucide-react";

interface EventBadgeProps {
  date?: string;
  isLive?: boolean;
}

export const EventBadge = ({ date, isLive }: EventBadgeProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {date && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-sm">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      )}
      {isLive && (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm font-medium text-red-500 backdrop-blur-sm">
          <Radio className="w-4 h-4 animate-pulse" />
          Evento 100% Ao Vivo
        </div>
      )}
    </div>
  );
};
