// import React from "react";
import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

import Link from "next/link";

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

export default function BreadCrumbs({ title }) {
  return (
    <>
      <BreadCrumb>
        <BreadCrumbInner>
          <BreadCrumbTitle>{title}</BreadCrumbTitle>
          <BreadCrumbLink>
            <BreadCrumbLinkItem>Home</BreadCrumbLinkItem>
            <BreadCrumbLinkItem>
              <Link href={title}>{title}</Link>
            </BreadCrumbLinkItem>
          </BreadCrumbLink>
        </BreadCrumbInner>
      </BreadCrumb>
    </>
  );
}
