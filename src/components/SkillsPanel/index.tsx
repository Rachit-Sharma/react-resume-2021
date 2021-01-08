import React from "react";
import {
  FlexibleContainer,
  FlexRow,
  FrostedPanel,
  Heading1,
  Heading2,
  Paragraph,
  VerticalRule
} from "../../shared/components";
import skills from "../../shared/data/skills.json";

function SkillsPanel() {
  return (
    <FrostedPanel>
      <Heading1>Skills</Heading1>
      <FlexRow>
        <FlexibleContainer>
          <Heading2>Technologies:</Heading2>
          <Paragraph>
            {skills.technologies.map(
              (technology, i) =>
                technology + (i < skills.technologies.length - 1 ? ", " : "")
            )}
          </Paragraph>
        </FlexibleContainer>
        <VerticalRule />
        <FlexibleContainer>
          <Heading2>Languages:</Heading2>
          <Paragraph>
            {skills.languages.map(
              (language, i) =>
                language + (i < skills.languages.length - 1 ? ", " : "")
            )}
          </Paragraph>
        </FlexibleContainer>
      </FlexRow>
    </FrostedPanel>
  );
}

export default SkillsPanel;
