import React from "react";
import {
  FrostedPanel,
  Heading1,
  JustifiedDiv,
  Paragraph,
  Point
} from "../../shared/components";
import workExperienceData from "../../shared/data/workExperience.json";

function WorkExperiencePanel({ flex }: { flex?: string }) {
  return (
    <FrostedPanel flex={flex}>
      <Heading1>Work Experience</Heading1>
      {workExperienceData.map((project, i) => {
        return (
          <JustifiedDiv key={project.heading}>
            <Paragraph>
              <strong>{project.heading}</strong> (
              <em>
                {project.as}, {project.at}
              </em>
              ) -<br />
              {project.description.map((point: string) => (
                <Point>{point}</Point>
              ))}
              <strong>Technologies used</strong>:{" "}
              {project.technologies.map(
                (technology, j) =>
                  technology + (j < project.technologies.length - 1 ? ", " : "")
              )}
            </Paragraph>
          </JustifiedDiv>
        );
      })}
    </FrostedPanel>
  );
}

export default WorkExperiencePanel;
