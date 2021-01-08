import React from "react";
import { FrostedPanel, Heading1, Paragraph } from "../../shared/components";
import workExperienceData from "../../shared/data/workExperience.json";

function WorkExperiencePanel({ flex }: { flex?: string }) {
  return (
    <FrostedPanel flex={flex}>
      <Heading1>Work Experience</Heading1>
      {workExperienceData.map((project, i) => {
        return (
          <div key={project.heading}>
            <Paragraph>
              <strong>{project.heading}</strong> - in my role as{" "}
              <em>{project.as}</em> at <em>{project.at}</em> -{" "}
              {project.description}
              <br />
              <strong>Technologies used</strong>:{" "}
              {project.technologies.map(
                (technology, j) =>
                  technology + (j < project.technologies.length - 1 ? ", " : "")
              )}
            </Paragraph>
          </div>
        );
      })}
    </FrostedPanel>
  );
}

export default WorkExperiencePanel;
