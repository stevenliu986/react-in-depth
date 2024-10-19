import { PropsWithChildren } from "react";
import "./Rating.css";

interface IStarsProps {
  count: number;
  faded?: boolean;
}

function Stars({
  count,
  faded = false,
  children,
}: PropsWithChildren<IStarsProps>) {
  return (
    <span className={`rating__stars ${faded && "rating__stars--faded"}`}>
      {Array.from(Array(count).keys()).map((_, i) => (
        <span key={i} className="rating__star">
          {children}
        </span>
      ))}
    </span>
  );
}

interface IRatingProps {
  icon?: string;
  value: number;
  max?: number;
  label?: string;
}

export default function Rating({
  icon = "⭐",
  value,
  max = 5,
  label = "",
}: Readonly<IRatingProps>) {
  const percentage = Math.round((value / max) * 100);
  return (
    <div className="rating" title={label}>
      <Stars faded count={max}>
        {icon}
      </Stars>
      <div className="rating__overlay" style={{ width: `${percentage}%` }}>
        <Stars count={max}>{icon}</Stars>
      </div>
    </div>
  );
}
