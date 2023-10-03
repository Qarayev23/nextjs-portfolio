import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/papajohns.png",
      projectName: "Papa Johns",
      projectTech: [
        "Next.js",
        "Typescript",
        "Redux Toolkit",
        "Redux Persist",
        "Next Auth"
      ],
      projectExternalLinks: {
        github: "https://github.com/Qarayev23/papajohns-next.js",
        externalLink: "https://papajohns-next-js.vercel.app",
      },
    },
    {
      image: "/texnomart.png",
      projectName: "Texnomart",
      projectTech: [
        "React",
        "Typescript",
        "Redux Toolkit",
        "RTK Query",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/Qarayev23/texnomart",
        externalLink: "https://texnomart-clone.netlify.app/",
      },
    },
    {
      image: "/gamboo.png",
      projectName: "gamboo.io",
      projectTech: [
        "React",
        "Next.js",
        "Context API",
        "React Bootstrap",
        "SCSS"
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://gamboo.io",
      },
    },
    {
      image: "/app-gamboo.png",
      projectName: "app.gamboo.io",
      projectTech: [
        "React",
        "Redux Toolkit",
        "Context API",
        "React Bootstrap",
        "CSS",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://app.gamboo.io/",
      },
    },
    {
      image: "/trustme.png",
      projectName: "TRUSTME",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://trustmedigital.com/",
      },
    },
    {
      image: "/linex.png",
      projectName: "Linex",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://linex.az/az/",
      },
    },
    {
      image: "/alison-travel.png",
      projectName: "Alison Travel",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://www.alisontravelgroup.com/",
      },
    },
    {
      image: "/socar.png",
      projectName: "SOCAR AQS",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://www.socar-aqs.com/az/",
      },
    },
    {
      image: "/cargodiem.png",
      projectName: "CargoDiem",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://cargodiem.az/az/",
      },
    }, {
      image: "/brain-academy.png",
      projectName: "Brain Academy",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://brainacademy.az/az",
      },
    }, {
      image: "/study-abroad.png",
      projectName: "Study Abroad",
      projectTech: [
        "HTML",
        "SCSS",
        "Javascript",
        "Bootstrap",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "http://study-abroad.surge.sh/",
      },
    },

  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <Link href={projectExternalLinks.externalLink} target="blank" className="project-info-title">{projectName}</Link>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        target="blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
