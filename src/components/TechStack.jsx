const TechStack = ({ items }) => {
  return (
    <div className={`marquee-container`}>
      <div className="marquee-content">
        {[...items, ...items].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md bg-[#1a1a1a] border border-[#262626] px-3 py-1.5 cursor-pointer text-[#898989] hover:text-white duration-300 group"
          >
            {tech.image && (
              <img
                src={tech.image}
                alt=""
                className="size-4 grayscale brightness-75 shrink-0 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100"
              />
            )}
            <span className="text-sm font-medium lowercase">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
