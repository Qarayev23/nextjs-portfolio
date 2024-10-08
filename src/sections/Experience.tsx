import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Wemark",
      role: "Frontend Developer",
      url: "https://wemark-six.vercel.app/",
      start: "May 2024",
      end: "Present",
      shortDescription: [
        "Converting design files and integrate them into web pages.",
        "Making code improvements to improve performance and fix errors.",
        "Supporting existing projects.",
        "Collaborating with team members to implement new feature developments.",
      ],
    },
    {
      name: "Baku Electronics",
      role: "Frontend Developer",
      url: "https://bakuelectronics.az/",
      start: "Feb 2024",
      end: "May 2024",
      shortDescription: [
        "Converting design files and integrate them into web pages.",
        "Making code improvements to improve performance and fix errors.",
        "Supporting existing projects.",
        "Collaborating with team members to implement new feature developments.",
      ],
    },
    {
      name: "Gamboo",
      role: "Frontend Developer",
      url: "https://gamboo.io/",
      start: "May 2022",
      end: "Jul 2022",
      shortDescription: [
        "Creating a new landing page on Next.js.",
        "Supporting existing React app.",
        "Collaborating with team members to implement new feature developments.",
        "Optimize webpages to increase speed and reduce loading times."
      ],
    },
    {
      name: "Labrin",
      role: "Frontend Developer",
      url: "https://labrin.net/",
      start: "Nov 2021",
      end: "Jul 2022",
      shortDescription: [
        "Converting design files and integrate them into web pages.",
        "Making code improvements to improve performance and fix errors.",
        "Supporting existing projects.",
        "Collaborating with team members to implement new feature developments.",
      ],
    },
    {
      name: "Khan Buta Group",
      role: "Frontend Developer",
      url: "https://khanbutagroup.az/",
      start: "Sep 2021",
      end: "Nov 2021",
      shortDescription: [
        "Creating a mobile-first, responsive websites.",
        "Supporting existing projects.",
        "Collaborating with team members to implement new feature developments.",
      ],
    },
  ];

  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} target="_blank" className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
