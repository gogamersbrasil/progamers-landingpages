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
        p-5 
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
        w-[90%] 
        mx-auto 
        h- {{md:h-[150px] sm:h-[100px] }} 
        flex flex-col items-center justify-center
      "
    >
      <div className="w-8 h-8 mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-1 group-hover:text-gaming-purple">
        {title}
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
