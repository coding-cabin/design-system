import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

import Link from "./Link";

const Logo = styled.h1`
    color:${colors.black};
    font-weight:bold
    font-size:16px;

    @media (max-width: ${breakpoints.md}rem) {
        margin:1.5rem 0;
    }
`;

const NavRoot = styled.nav`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${colors.backgroundColor};
  z-index: 15;
  border-bottom: 1px solid ${colors.borderColor};

  @media (max-width: ${breakpoints.md}rem) {
    flex-direction: column;
  }
`;

const NavInner = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;

  list-type: none;
  padding: 0;
  margin: 0;
`;

const NavList = styled.li`
  display: inline-flex;
  align-items: center;

  a {
    display: block;
    padding: 1.65rem 1.5rem;
    text-decoration: none;
    color: ${colors.black};

    &.selected,
    &:hover,
    &:focus {
      font-weight: bold;
      border-bottom: 2px solid ${colors.black};
    }
  }
`;

export default function Header() {
  return (
    <>
      <NavRoot>
        <Logo>Coding Cabin</Logo>
        <NavInner>
          <NavList>
            <Link href="/">
              <a>Home</a>
            </Link>
          </NavList>
          <NavList>
            <Link href="/about">
              <a>About</a>
            </Link>
          </NavList>
          <NavList>
            <Link href="/guides">
              <a>Guides</a>
            </Link>
          </NavList>
          <NavList>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </NavList>
        </NavInner>
      </NavRoot>
    </>
  );
}
