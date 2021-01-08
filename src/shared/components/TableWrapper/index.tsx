import React, { ReactElement } from "react";
import { Table, WrappingDiv } from "..";

function TableWrapper({ children }: { children: ReactElement[] }) {
  return (
    <WrappingDiv>
      <Table>{children}</Table>
    </WrappingDiv>
  );
}

export default TableWrapper;
