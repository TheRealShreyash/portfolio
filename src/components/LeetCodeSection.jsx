import { useEffect, useRef, useState } from "react";

const LEETCODE = {
  username: "2PQT9RQGGy",
  solved: 15,
  language: "C++",
  blurb:
    "Most of the practice goes into arrays, two pointers and strings, with dynamic programming and tries at the advanced end.",
  topics: [
    { name: "Array", count: 14 },
    { name: "Two pointers", count: 11 },
    { name: "String", count: 8 },
    { name: "Math", count: 5 },
    { name: "Hash table", count: 4 },
    { name: "Sorting", count: 4 },
  ],
  badge: null, // e.g. "/leetcode-badge.webp"
};

const LeetCodeSection = ({ className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { username, solved, language, blurb, topics, badge } = LEETCODE;
  const max = Math.max(...topics.map((t) => t.count), 1);

  return (
    <div
      ref={ref}
      className={`p-6 bg-[#1a1a1a] border border-[#262626] rounded-xl ${className || ""}`}
    >
      <div className="flex justify-between items-center mb-6 gap-2">
        <span className="pp-font text-base sm:text-lg md:text-xl truncate">
          {username}
        </span>
        <a
          href={`https://leetcode.com/u/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-3 md:px-4 py-1 rounded-md text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors shrink-0"
        >
          view profile
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {badge && (
          <img
            src={badge}
            alt="LeetCode badge"
            className="w-full sm:w-36 rounded-xl border border-[#262626] shrink-0"
          />
        )}
        <div className="min-w-0 w-full">
          <h3 className="pp-font text-3xl md:text-4xl font-semibold leading-tight">
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {solved}
            </span>{" "}
            problems solved in {language}.
          </h3>
          <p className="mt-3 text-sm text-[#898989]">{blurb}</p>

          <div className="mt-5 flex flex-col gap-3">
            {topics.map((topic, i) => (
              <div
                key={topic.name}
                className="grid grid-cols-[6.5rem_1fr_2rem] items-center gap-3 text-sm"
              >
                <span className="text-[#c0c0c0] truncate">{topic.name}</span>
                <div className="h-1.5 rounded-full bg-[#262626] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-purple-400 to-pink-400 transition-[width] duration-1000 ease-out"
                    style={{
                      width: visible ? `${(topic.count / max) * 100}%` : "0%",
                      transitionDelay: `${i * 90}ms`,
                    }}
                  />
                </div>
                <span className="text-[#666] font-mono text-xs text-right">
                  {topic.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeSection;
