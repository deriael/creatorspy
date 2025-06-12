import { ReactNode, useState } from "react";
import { Info } from "lucide-react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative group inline-block">
      <div
        className="flex items-center gap-1"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      {visible && (
        <div className="absolute z-10 mt-2 w-max max-w-xs px-3 py-2 text-sm text-white bg-black rounded-md shadow-md">
          {text}
        </div>
      )}
    </div>
  );
}
