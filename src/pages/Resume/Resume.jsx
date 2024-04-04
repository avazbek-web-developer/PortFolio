import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="School Number 37, Namangan city"
            date="2011-2021"
            description="I have studied at 37 school which is located in the heart of Namangan city utill I graduated."
          />
          <TimelineItem
            title="Learning Skills Lab"
            date="2019-2021"
            description="I have learned English language in this LSL centre which helps me to gain 7.5 band score overall with the help of Jaloliddin Kosimov"
          />
          <TimelineItem
            title="Namangan state univercity"
            date="2021 - Now"
            description="I have successfully entered to univercity in 2021 in Namangan city, English faculty and I am a third year univercity student now"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Manager"
            date="2021 — 2022"
            description="I have worked as a Manager of education centre for organising exams and registering students for exams."
          />
          <TimelineItem
            title="English teacher"
            date="2022-2023"
            description="After taking IELTS, I have decided to be an English instructor to help learner to learn English."
          />
          <TimelineItem
            title="Web developer"
            date="2022 - Now"
            description="I have learned many web programming Languages such as JavaScript, ReactJs, NextJs, TypeScript, BootStrap, MongoDb, NodeJs, I have started to work as a Web developer since December."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="JavaScript" value={60} />
          <SkillItem title="ReactJs" value={90} />
          <SkillItem title="NextJs" value={70} />
          <SkillItem title="NodeJs" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
