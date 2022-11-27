import React from "react";
import "./Skills.css";
import SkillsList from "./SkillsList";
import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState("Skills");

  const SkillsData = [
    {
      title: "Frameworks",
      items: ["Angular", "React", "AngularJS"],
    },
    {
      title: "Languages",
      items: ["JavaScript/TypeScript", "HTML/CSS", "Golang", "Java"],
    },
    {
      title: "Other",
      items: ["Git", "SQL/NoSQL", "Adobe After Effects"],
    },
  ];

  const EducationData = [
    {
      title: "Indiana University Bloomington",
      items: ["B.S. Informatics", "2008-2012"],
    },
    {
      title: "IVY Tech Community College",
      items: ["Certificate - Java Application Development", "2019-2020"],
    },
  ];

  const HobbiesData = [
    {
      title: "Interests",
      items: ["Animals", "Movies/TV", "Superheroes", "Stand-up Comedy"]
    },
    {
      title: "Hobbies",
      items: ["Video Games", "Guitar", "Cooking", "Tabletop Games"]
    }
  ]

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
            onClick={() => setActive("Interests")}
            className={`SkillsHeadingText ${
              active === "Interests" ? "active" : ""
            }`}
          >
            Interests
          </h1>
        </div>
        {active === "Skills" && <SkillsList data={SkillsData} />}
        {active === "Education" && <SkillsList data={EducationData} />}
        {active === "Interests" && <SkillsList data={HobbiesData} />}
      </div>
    </div>
  );
}
