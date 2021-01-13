import React, { Fragment } from "react";
import {
  ExternalLink,
  FrostedPanel,
  Heading1,
  Paragraph,
  Point
} from "../../shared/components";
import personalProjects from "../../shared/data/projects.json";

function PersonalProjectPanel({ flex }: { flex?: string }) {
  return (
    <FrostedPanel flex={flex}>
      <Heading1>Personal Projects</Heading1>
      {personalProjects.map((project, i) => {
        return (
          <div key={project.heading}>
            <Paragraph>
              <strong>{project.heading}</strong> -<br />
              {project.description.map((point: string) => (
                <Point>{point}</Point>
              ))}
              {project.repository ? (
                <Fragment>
                  <strong>Repository</strong>:{" "}
                  <ExternalLink href={project.repository}>
                    {project.repository}
                  </ExternalLink>
                  <br />
                </Fragment>
              ) : null}
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

export default PersonalProjectPanel;
