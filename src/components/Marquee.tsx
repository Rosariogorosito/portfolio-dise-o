import React from "./styles/styles.css";

const Marquee = () => {
  const items = [
    "Brand design",
    "Packaging",
    "Web design",
    "Illustration",
    "UI/UX",
    "Social Media",
    "Digital Art",
  ];

  return (
    <div className="bg-foreground py-3 overflow-hidden" id="items-container">
      <div className="flex animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            id="animate-items"
            key={index}
            className="font-body text-background text-sm whitespace-nowrap mx-4 flex items-center gap-4"
          >
            [{item}]
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
