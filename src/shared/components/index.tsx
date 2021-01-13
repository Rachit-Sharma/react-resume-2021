import styled, { css } from "styled-components";
import TableWrapper from "./TableWrapper";

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(#fff0da, #fff8ef);
  overflow: hidden;
  z-index: -1;
`;

const panelShadowMixin = css`
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1),
    0px 0px 20px 0px rgba(0, 0, 0, 0.3), 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

interface CoordinateProps {
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  transforms?: {
    dx?: string;
    dy?: string;
    scale?: string;
  };
}

const DecorativeBox = styled.div<CoordinateProps>`
  @media print {
    ${/AppleWebKit/i.test(window.navigator.userAgent) ? "" : "display: none;"}
  }
  position: absolute;
  ${props => {
    let cssRules = "";
    if (props.position?.top) {
      cssRules += `top: ${props.position.top};`;
    }
    if (props.position?.right) {
      cssRules += `right: ${props.position.right};`;
    }
    if (props.position?.bottom) {
      cssRules += `bottom: ${props.position.bottom};`;
    }
    if (props.position?.left) {
      cssRules += `left: ${props.position.left};`;
    }
    return cssRules;
  }}
  height: 30rem;
  width: 30rem;
  background-image: linear-gradient(
    30deg,
    var(--color-primary) 70%,
    var(--color-secondary)
  );
  ${panelShadowMixin}
  border-radius: 3rem;
  z-index: -1;
  ${props => {
    let transformFunctions = "";
    if (props.transforms?.dx) {
      transformFunctions += ` translateX(${props.transforms.dx})`;
    }
    if (props.transforms?.dy) {
      transformFunctions += ` translateY(${props.transforms.dy})`;
    }
    if (props.transforms?.scale) {
      transformFunctions += ` scale(${props.transforms.scale})`;
    }
    if (transformFunctions.length < 1) {
      return "";
    }
    return `transform:${transformFunctions};`;
  }}
`;

const FrostedPanel = styled.div`
  ${({ flex }: { flex?: string }) => (flex ? `flex: ${flex};` : "")};
  padding: 1rem 2rem;
  border-radius: 1rem;
  ${panelShadowMixin}
  background-color: rgba(220, 220, 220, 0.8);
  backdrop-filter: blur(3px);
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > :not(:last-child) {
    margin-right: 2rem;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const BaseCol = styled(FlexCol)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 2rem;
  overflow: auto;
`;

const FlexibleContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const Heading1 = styled.h1`
  margin: 1rem 0;
  color: var(--text-color-secondary);
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
`;

const H2Styling = css`
  font-size: 1.5rem;
  line-height: 1;
`;

const Heading2 = styled.h2`
  ${H2Styling}
  margin: 0.2rem;
`;

const ExternalLink = styled.a`
  font-size: 1.2rem;
  color: inherit;
`;

const H2Link = styled(ExternalLink)`
  ${H2Styling}
`;

const Photograph = styled.img`
  margin: 1rem;
  border-radius: 1rem;
  height: 9rem;
`;

const JustifiedDiv = styled.div`
  text-align: justify;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;

const Point = styled.li`
  position: relative;
  list-style: none;
  margin-left: 2rem;

  &::before {
    position: absolute;
    content: "↠";
    margin-left: -1.25rem;
  }
`;

const VerticalRule = styled.div`
  width: 1px;
  background-color: var(--text-color-primary);
`;

const WrappingDiv = styled.div`
  margin: 1rem;
  width: auto;
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 100%;
  border: 1px solid currentColor;
  border-spacing: 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  overflow: hidden;

  thead {
    font-size: 1.4rem;
    border-bottom: 1px solid currentColor;
    background-color: var(--highlight-color-primary);
  }

  th,
  td {
    padding: 0.5rem;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid currentColor;
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: var(--highlight-color-secondary);
    }
  }
`;

export {
  Base,
  DecorativeBox,
  FrostedPanel,
  FlexRow,
  FlexCol,
  BaseCol,
  FlexibleContainer,
  Heading1,
  Heading2,
  ExternalLink,
  H2Link,
  Photograph,
  JustifiedDiv,
  Paragraph,
  Point,
  VerticalRule,
  WrappingDiv,
  TableWrapper,
  Table
};
