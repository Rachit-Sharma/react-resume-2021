import React, { Fragment } from "react";
import BasePage from "./components/PageBackground";
import EducationPanel from "./components/EducationPanel";
import Header from "./components/Header";
import PersonalProjectPanel from "./components/PersonalProjectsPanel";
import SkillsPanel from "./components/SkillsPanel";
import WorkExperiencePanel from "./components/WorkExperiencePanel";
import { BaseCol, FlexRow } from "./shared/components";

function App() {
  return (
    <Fragment>
      <BasePage></BasePage>
      <BaseCol>
        <Header />
        <FlexRow>
          <WorkExperiencePanel flex="1" />
          <PersonalProjectPanel flex="1" />
        </FlexRow>
        <SkillsPanel />
        <EducationPanel />
      </BaseCol>
    </Fragment>
  );
}

export default App;
