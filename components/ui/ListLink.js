import styled, { css } from "styled-components";
import { colors, breakpoints } from "../../styles/variables";
import Link from "../layout/Link";

const Root = styled.nav`
  //   background-color: ${colors.white};
  border: 1px solid ${colors.borderColor};
`;

const RootLink = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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

    &:hover,
    &.selected {
      font-weight: bold;
      border-left: 4px solid ${colors.accentColorThree};
    }
  }
`;

export default function LinkList() {
  return (
    <>
      <Root>
        <RootLink>
          <RootLinkItem>
            <Link href="/docs">
              <a>Get Started</a>
            </Link>
          </RootLinkItem>
          <RootLinkItem>
            <Link href="/docs/layout">
              <a>Layout</a>
            </Link>
          </RootLinkItem>
          <RootLinkItem>
            <Link href="/docs/general">
              <a>General</a>
            </Link>
          </RootLinkItem>
        </RootLink>
      </Root>
    </>
  );
}
