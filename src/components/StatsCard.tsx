interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  color?: string;
}

export default function StatCard({
  icon,
  value,
  suffix = "",
  label,
  color = "",
}: StatCardProps) {
  return (
    <div className="bg-gaming-dark/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-gaming-red/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gaming-red/10">
      <div className="mb-6 flex justify-center">
        <div
          className={`p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-2xl shadow-lg ${color}`}
        >
          {icon}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {value}
          {suffix}
        </span>
      </div>

      <p className="text-gray-300 font-medium text-lg">{label}</p>
    </div>
  );
}
