import React from "react";
import { TbPokeball } from "react-icons/tb";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div id="experience" className="mb-32">
      <h1 className="font-press-start-2P mb-8 text-red-600 text-xl md:text-3xl">
        Experience.
      </h1>
      <VerticalTimeline lineColor="#ff0000">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#f00", color: "#fff" }}
          icon={<TbPokeball />}
        >
          <h3 className="vertical-timeline-element--title font-press-start-2P text-sm text-red-600">
            Self Employed
          </h3>
          <h4 className="vertical-timeline-element--subtitle font-press-start-2P text-xs">
            Freelance
          </h4>
          <p>
            Built two website for different clients. Project Links:
            <ul className="ml-1">
              <li className="text-red-600 underline hover:text-black hover:no-underline">
                <a
                  href="https://mundhra-gardens.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mundhra Gardens
                </a>
              </li>
              <li className="text-red-600 underline hover:text-black hover:no-underline">
                <a
                  href="https://susovan-jana-portfolio-test.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio Website for Client
                </a>
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
