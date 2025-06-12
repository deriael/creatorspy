type Insight = {
  title: string;
  description: string;
};

type Props = {
  insights: Insight[];
};

export default function InsightCard({ insights }: Props) {
  return (
    <div className="mt-8 bg-white border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">📈 Improvement Insights</h2>
      <ul className="space-y-4">
        {insights.map((insight, idx) => (
          <li key={idx} className="border-l-4 border-blue-600 pl-4">
            <p className="font-medium">{insight.title}</p>
            <p className="text-sm text-gray-600">{insight.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
