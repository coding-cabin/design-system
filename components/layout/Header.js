import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

import Link from "./Link";

const Logo = styled.div`
    color:${colors.black};
    font-weight:bold
    font-size:16px;

    @media (max-width: ${breakpoints.md}rem) {
        margin:1.5rem 0;
    }

    img {
        max-height:60px;
    }
`;

const Nav = styled.header`
  width: 100%;

  background-color: ${colors.white};
  z-index: 15;
  border-bottom: 1px solid ${colors.borderColor};
`;

const NavRoot = styled.nav`
  max-width: ${width.lg}px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;

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

    &.selected {
      font-weight: bold;
      border-bottom: 2px solid ${colors.black};
    }

    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.05);
      border-bottom: 2px solid ${colors.black};
    }
  }
`;

export default function Header() {
  return (
    <>
      <Nav>
        <NavRoot>
          <Logo>
            <img src="https://64.media.tumblr.com/avatar_5766c7a243de_128.pnj" />
          </Logo>
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
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </NavList>
            <NavList>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </NavList>
          </NavInner>
        </NavRoot>
      </Nav>
    </>
  );
}
