// import React from "react";
import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumb = styled.section`
  width: 100%;
  padding: 5.35rem 6.5rem;
  background-color: ${colors.accentColorTwo};

  @media (max-width: ${breakpoints.md}rem) {
    padding: 3rem 3rem;
  }
`;

const BreadCrumbInner = styled.div`
  max-width: ${width.md}px;
  margin: auto;
`;

const BreadCrumbTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}rem) {
    font-size: 26px;
  }
`;

const BreadCrumbLink = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BreadCrumbLinkItem = styled.li`
  display: inline-flex;
  align-items: center;
  text-transform: capitalize;

  &:not(:first-child):before {
    content: "/";
    margin: 0 0.85rem;
  }

  a {
    color: ${colors.accentColorThree};
    font-weight: bold;
  }
`;

const HOME_TITLE = "home";

/**
 *
 * @param {string} path pathname property from next/router
 */
function getCrumbs(path) {
  const paths = path.split("/");

  const crumbs = paths.map((crumb, index) => {
    const url = paths.slice(0, index + 1).join("/") || "/";
    return {
      title: crumb || HOME_TITLE,
      url,
    };
  });

  const currentCrumb = crumbs.pop();

  return { crumbs, currentCrumb };
}

export default function BreadCrumbs() {
  const { pathname } = useRouter();
  const { crumbs, currentCrumb } = getCrumbs(pathname);
  return (
    <>
      <BreadCrumb>
        <BreadCrumbInner>
          <BreadCrumbLink>
            {crumbs.map(crumb => (
              <BreadCrumbLinkItem key={crumb.title}>
                <Link href={crumb.url}>{crumb.title}</Link>
              </BreadCrumbLinkItem>
            ))}
            <BreadCrumbLinkItem>{currentCrumb.title}</BreadCrumbLinkItem>
          </BreadCrumbLink>
        </BreadCrumbInner>
      </BreadCrumb>
    </>
  );
}
