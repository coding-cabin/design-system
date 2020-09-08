import styled, { css } from "styled-components";
import { colors, breakpoints } from "../../styles/variables";

const Root = styled.nav`
  background-color: ${colors.white};
`;

const RootLink = styled.ul`
  list-style: none;
`;

const RootLinkItem = styled.li`
  & + li {
    a {
      border-top: 1px solid ${colors.borderColor};
    }
  }

  a {
    width: 100%;
    display: inline-flex;
    padding: 1rem 1rem;
    text-decoration: none;
  }
`;

export default function LinkList() {
  return (
    <>
      <Root>
        <RootLink>
          <RootLinkItem>
            <a href="#1">Get Started</a>
          </RootLinkItem>
          <RootLinkItem>
            <a href="#2">Layout</a>
          </RootLinkItem>
          <RootLinkItem>
            <a href="#3">General</a>
          </RootLinkItem>
        </RootLink>
      </Root>
    </>
  );
}
