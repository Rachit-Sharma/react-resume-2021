import React from "react";
import { FrostedPanel, Heading1, TableWrapper } from "../../shared/components";
import educationalQualifications from "../../shared/data/education.json";

function EducationPanel() {
  return (
    <FrostedPanel>
      <Heading1>Education</Heading1>
      <TableWrapper>
        <thead>
          <tr>
            <th>QUALIFICATION</th>
            <th>YEAR</th>
            <th>SCHOOL/COLLEGE</th>
            <th>BOARD/UNIVERSITY</th>
            <th>PERCENTAGE/CGPA</th>
          </tr>
        </thead>
        <tbody>
          {educationalQualifications.map(qualification => (
            <tr key={qualification.qualification}>
              <td>{qualification.qualification}</td>
              <td>{qualification.year}</td>
              <td>{qualification.institution}</td>
              <td>{qualification.accreditingBody}</td>
              <td>{qualification.score}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    </FrostedPanel>
  );
}

export default EducationPanel;
