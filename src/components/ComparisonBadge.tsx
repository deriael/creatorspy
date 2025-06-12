import { Check, X } from "lucide-react";

type Props = {
  better: boolean;
};

export default function ComparisonBadge({ better }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1 ml-2 text-xs px-2 py-0.5 rounded-full ${
        better ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {better ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
      {better ? "Better" : "Worse"}
    </span>
  );
}
