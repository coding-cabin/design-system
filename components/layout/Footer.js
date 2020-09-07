import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

const Root = styled.footer`
  padding: 4.5rem 4rem;
  margin-top: 4.5rem;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.borderColor};
`;

const RootInner = styled.div`
  max-width: ${width.lg}px;
  margin: auto;
`;

export default function Footer({ children }) {
  return (
    <>
      <Root>
        <RootInner>{children}</RootInner>
      </Root>
    </>
  );
}
