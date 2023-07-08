import React from "react";
import "./about.css";
import { Flower } from "../../components/flower";

export default function About() {
  const email = "kedoodledev@gmail.com";
  const subject = "Greetings from haikukedoodle!";
  const body = "Hi there, I am contacting you from the haikukedoodle website";
  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const gitHubLink = "https://github.com/kehrenclou";
  const linkedInLink = "https://www.linkedin.com/in/krista-ehrenclou/";
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
            openAI-api.
          </p>
          <p className="about__text">
            The app uses the text-davinci-003 model which is not as advanced as
            the newer chatGPT models and doesn't always return a perfect Haiku
            or audibly pleasing chord progressions. Despite these minor
            glitches, it is fun to see what davinci will come up with next!
          </p>
          <p className="about__text">
            The UI/UX and design for this app was created by me.
          </p>
          <h2 className="about__heading">Tech Stack</h2>
          <ul className="about__list">
            <li className="about__list-item">
              The frontend: React 18.2, React Router Dom 16.10, react-hook-form,
              YUP, mui/icons-material, framer-motion,react-loading-icons.
            </li>
            <li className="about__list-item">
              The backend: Express 4.18, MongoDB 5.3, Mongoose, Joi, Celebrate,
              bcrypt, Winston,.
            </li>
            <li className="about__list-item">
              The future: implement Tone.js (a Web Audio Framework) to play back
              the songs.
            </li>
          </ul>
        </div>
        <div className="about__container">
          <h2 className="about__heading">About Me</h2>
          <p className="about__text">
            I like puzzles, I like to laugh, I like music. Put them all together
            and you get haikukedoodle!
          </p>
          <p className="about__text">
            After years of tinkering with code and trying to make work more
            productive (there should be a button for that!), I have taken the
            plunge to do transition to the world of software engineering. This
            was my final project for TripleTen's (formerly Practicum) Software
            Engineering Bootcamp.
          </p>
          <p className="about__text">Hope you enjoy!</p>

          <p className="about__text_me">
            Krista Ehrenclou - Full Stack Developer (React, Node.js, Express,
            MongoDB)
          </p>
          <p className="about__text">
            Like the app? Connect with me on Github, LinkedIn or shoot me an
            email!
          </p>
          <a className="about__link" href={gitHubLink}>
            github.com/kehrenclou
          </a>
          <a className="about__link" href={linkedInLink}>
            linkedIn.com/krista-ehrenclou
          </a>
          <a className="about__link" href={mailToLink}>
            kedoodledev@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
