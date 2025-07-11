interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "producer" | "brand";
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        bg-gradient-to-b from-gray-800/40 to-gray-900/60
        p-6
        rounded-xl
        text-center
        transition-all
        duration-300
        ease-in-out
        group
        shadow-md
        hover:shadow-lg
        hover:border-gaming-purple/50
        hover:scale-[1.03]
        w-full
        min-h-[180px]
        flex flex-col items-center justify-center flex-grow
      "
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl text-purple-400">{icon}</div>
      <h3 className="text-lg font-bold mb-1 group-hover:text-gaming-purple">
        {title}
      </h3>
      <p className="text-sm text-gray-400 break-words max-w-[90%] mx-auto">{description}</p>
    </div>
  );
}
