import React from "react";
import "./Skills.css"; // Import CSS for styling

import reactIcon from "../assets/img/react.webp";
import jsIcon from "../assets/img/javascript.png";
import tsIcon from "../assets/img/typescript.png";
import cssIcon from "../assets/img/css.svg";
import reduxIcon from "../assets/img/redux.png";
import muiIcon from "../assets/img/mui.png";
import dsaIcon from "../assets/img/dsa.png";
import gitIcon from "../assets/img/git.png";
import bitbucketIcon from "../assets/img/bitbucket.png";
import jiraIcon from "../assets/img/jira.svg";

// Additional Skills
import vscodeIcon from "../assets/img/vscode.jpeg";
import figmaIcon from "../assets/img/figma.png";
import postmanIcon from "../assets/img/postman.svg";
import intellijIcon from "../assets/img/intellij.png";
import sublimeIcon from "../assets/img/sublimeIcon.svg";
import githubIcon from "../assets/img/github.svg";
import netlifyIcon from "../assets/img/netlify.svg";
import vercelIcon from "../assets/img/Vercel.svg";
import cIcon from "../assets/img/c++.png";
import nodeIcon from "../assets/img/node.png";
import mongoIcon from "../assets/img/mongoDB.png";
import expressIcon from "../assets/img/express.png";
import npmIcon from "../assets/img/npm.png";
import restApiIcon from "../assets/img/RESTAPIs.png";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React Js", icon: reactIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Redux", icon: reduxIcon },
      { name: "Material UI", icon: muiIcon },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node Js", icon: nodeIcon },
      { name: "MongoDB", icon: mongoIcon },
      { name: "Express", icon: expressIcon },
      { name: "REST APIs", icon: restApiIcon },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C/C++", icon: cIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Bitbucket", icon: bitbucketIcon },
    ],
  },
  {
    category: "Package Managers & Tools",
    skills: [{ name: "npm", icon: npmIcon }],
  },
  {
    category: "Project Management & API Testing",
    skills: [
      { name: "Jira", icon: jiraIcon },
      { name: "Postman", icon: postmanIcon },
    ],
  },
  {
    category: "UI/UX & Design",
    skills: [{ name: "Figma", icon: figmaIcon }],
  },
  {
    category: "Code Editors & IDEs",
    skills: [
      { name: "IntelliJ IDEA", icon: intellijIcon },
      { name: "Sublime Text", icon: sublimeIcon },
      { name: "VS Code", icon: vscodeIcon },
    ],
  },
  {
    category: "Hosting & Deployment",
    skills: [
      { name: "Netlify", icon: netlifyIcon },
      { name: "Vercel", icon: vercelIcon },
    ],
  },
  {
    category: "Computer Science Fundamentals",
    skills: [{ name: "Data Structures & Algorithms", icon: dsaIcon }],
  },
];

export const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          Here are some of my skills that I have been working on.
        </p>
        <div className="skills-container">
          {skillsData.map((category, index) => (
            <div key={index} className="skills-box">
              <h3 className="skills-category">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
