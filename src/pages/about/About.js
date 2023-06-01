import React from "react";
import "./about.css";
import { Flower } from "../../components/flower/Flower";

export default function About() {
  return (
    <>
      <section className="about">
        <Flower
          width="154"
          height="133"
          colora="rgba(213,157,169,.2)"
          colorb="rgba(213,157,169,.3)"
          colorc="rgba(213,157,169,.5)"
          className="about__flower"
        />
        <div className="about__container">
          <h1 className="about__heading">About the Project</h1>
          <p className="about__text">
            This is a fun experiement designed to create haikus from a single
            word subject with accompanying song chords using AI via the
            openai-api.
          </p>
          <p className="about__text">
            The app uses the text-davinci-003 model which is not as advanced as
            the newer chatGPT models and doesn't always return a perfect Haiku
            or audibly pleasing chord progressions. Despite these minor
            glitches, it is fun to see what davinci will come up with next!
          </p>
          <h2 className="about__heading">Tech Stack</h2>
          <ul className="about__list">
            <li className="about__list-item">
              The frontend: React, React router, react-hook-form, YUP,
              mui/icons-material, framer-motion,react-loading-icons.
            </li>
            <li className="about__list-item">
              The backend: Express and MongoDB.
            </li>
            <li className="about__list-item">
              The future: implement Tone.js (a Web Audio Framework) to play back
              the songs.
            </li>
          </ul>
        </div>
        <div className="about__container">
          <h1 className="about__heading">About Me</h1>
          <p className="about__text">
            I like puzzles, I like to laugh, I like music. Put them all together
            and you get haikukedoodle - my final project for Practicum's
            Software Engineering Bootcamp!
          </p>
          <p className="about__text">
            After years of tinkering with code and trying to make work more
            productive (there should be a button for that!), I have taken the
            plunge to do transition to the world of software engineering. This
            was my final project for Practicum's Software Engineering Bootcamp.
            Hope you enjoy!
          </p>
          <p className="about__text_me">
            Krista Ehrenclou - Full Stack Developer (React, Node.js, Express,
            MongoDB)
          </p>
        </div>
      </section>
    </>
  );
}
