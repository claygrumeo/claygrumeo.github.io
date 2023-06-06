import React from "react";
import "./Skills.css";
import SkillsList from "./SkillsList";
import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState("Skills");

  const SkillsData = [
    {
      title: "Languages",
      items: ["JavaScript", "TypeScript", "CoffeeScript", "Golang", "Java", "Python"],
    },
    {
      title: "Front-End Technologies",
      items: ["HTML", "Jade/Pug", "CSS", "LESS", "Tailwind", "Storybook"],
    },
    {
      title: "Frameworks",
      items: ["Angular", "React", "AngularJS", "Ruby on Rails"],
    },
    {
      title: "Databases",
      items: ["CouchDB", "MySQL"],
    },
    {
      title: "Testing & Automation",
      items: ["Jasmine/Karma", "Jest", "Cypress", "Postman"],
    },
    {
      title: "DevOps Tools",
      items: ["Azure DevOps", "Jira", "GitLab", "GitHub", "Docker"],
    },
  ];

  const EducationData = [
    {
      title: "Indiana University Bloomington",
      items: ["Bachelor of Science in Informatics", "2008-2012"],
    },
    {
      title: "IVY Tech Community College",
      items: ["Certificate - Java Application Development", "2019-2020"],
    },
  ];

  const WorkHistoryData = [
    {
      title: "Software Engineer @ Exclaimer",
      items: [
        "Feb 2022 - Nov 2022",
        "Implemented full-stack solutions for new features using Golang, AngularJS, CoffeeScript, and CouchDB.",
        "Led a team of front-end engineers to achieve sprint goals and road-map milestones in an agile workflow.",
        "Built and tested prototypes/MVPs for modernized versions of the Periodic platform using many technologies like NX, Angular, React, Typescript, Jest, Jasmine/Karma, and Storybook.",
      ],
    },
    {
      title: "Developer @ Periodic",
      items: [
        "Apr 2020 - Feb 2022",
        "Worked closely with UX designers and product teams to build advanced, pixel-perfect, mobile-friendly user interfaces and features using AngularJS, Jade/Pug, and LESS.",
        "Resolved hundreds of bug tickets to improve performance and strength of the overall platform.",
        "Played an essential role in planning and generating ideas around new features and their implementation.",
        "Demonstrated aptitude for learning new technologies and languages quickly and effectively.",
      ],
    },
    {
      title: "Asst. Manager @ T&T Pet Food & Supply",
      items: [
        "Feb 2016 - Apr 2020",
        "Worked with multiple distributors to resolve all weekly order discrepancies.",
        "Implemented Quickbooks to more effectively manage store finance information.",
        "Built an inventory system to simplify and automate the year-end inventory process.",
        "Utilized SQL and Python scripting to gain insights from captured sales data.",
      ],
    },
    {
      title: "IT Manager @ ClipLizard Systems",
      items: [
        "Sep 2015 - Feb 2016",
        "Imaged, cloned, and prepped computers with software used to manage clips and fastener inventory.",
        "Serviced, monitored, and maintained all internal servers and communication systems.",
        "Provided phone and remote desktop support for proprietary software to hundreds of body shops around the US & Canada.",
        "Tested proprietary software and communicated issues to developers.",
      ],
    },
    {
      title: "Desktop Support Tech @ The AME Group",
      items: [
        "Jun 2013 - Sep 2015",
        "Troubleshot, diagnosed, and solved desktop problems for customers in many different industries including manufacturing, government, healthcare, education, and more.",
        "Installed and repaired desktop machines, printers, network equipment, and servers.",
        "Traveled around Indiana and surrounding states to deliver outstanding in-person support and customer service.",
        "Recognized as one of the company's “employees of the year” two years in a row.",
      ],
    },
    {
      title: "Video Editor @ United States Auto Club",
      items: [
        "Apr 2013 - May 2013",
        "Created, edited, and produced video media including commercials and promotional materials for USAC's many racing series.",
        "Assisted track setup crew with race preparation as well as the TV crew during setup and live broadcast on Redbull.tv.",
      ],
    },
    {
      title: "Video Designer @ SproutBox",
      items: [
        "May 2012 - Apr 2013",
        'Created advertisements, explainer videos, and more for SproutBox and their various "Sprouts"',
      ],
    },
    {
      title: "Tech Team Consultant @ Indiana University Bloomington",
      items: [
        "Apr 2012 - Mar 2013",
        "Maintained and monitored residential computer labs on the Indiana University Bloomington campus.",
        "Addressed tech problems for residents of campus housing by appointment."
      ],
    },
    {
      title: "Technology Center Consultant @ Indiana University Bloomington",
      items: [
        "Jan 2012 - Apr 2012",
        "Monitored and maintained Indiana University Student Technology Center computer labs.",
        "Assist customers with any software being used on lab machines."
      ],
    },
  ];

  const HobbiesData = [
    {
      title: "Interests",
      items: ["Animals", "Movies/TV", "Superheroes", "Stand-up Comedy"],
    },
    {
      title: "Hobbies",
      items: ["Video Games", "Guitar", "Cooking", "Tabletop Games"],
    },
  ];

  return (
    <div className="SkillsParent">
      <div className="SkillsParentBackground"></div>
      <div className="SkillsParentOverlay" />
      <div className="SkillsContent">
        <div className="NavButtonsContainer">
          <h1
            onClick={() => setActive("Skills")}
            className={`SkillsHeadingText ${
              active === "Skills" ? "active" : ""
            }`}
          >
            Skills
          </h1>
          <h1
            onClick={() => setActive("Education")}
            className={`SkillsHeadingText ${
              active === "Education" ? "active" : ""
            }`}
          >
            Education
          </h1>
          <h1
            onClick={() => setActive("WorkHistory")}
            className={`SkillsHeadingText ${
              active === "WorkHistory" ? "active" : ""
            }`}
          >
            Work
          </h1>
          <h1
            onClick={() => setActive("Interests")}
            className={`SkillsHeadingText ${
              active === "Interests" ? "active" : ""
            }`}
          >
            Interests
          </h1>
        </div>
        {active === "Skills" && <SkillsList data={SkillsData} type="Skills" />}
        {active === "Education" && (
          <SkillsList data={EducationData} type="Education" />
        )}
        {active === "WorkHistory" && (
          <SkillsList data={WorkHistoryData} type="WorkHistory" />
        )}
        {active === "Interests" && (
          <SkillsList data={HobbiesData} type="Interests" />
        )}
      </div>
    </div>
  );
}
