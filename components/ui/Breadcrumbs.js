// import React from "react";
import styled, { css } from "styled-components";
import { width, colors, breakpoints } from "../../styles/variables";

// import Link from "next/link";
// import { useRouter } from "next/router";

const BreadCrumb = styled.section`
  width: 100%;
  padding: 5.35rem 6.5rem;
  background-color: ${colors.accentColorTwo};

  @media (max-width: ${breakpoints.md}rem) {
    padding: 3rem 3rem;
  }
`;

const BreadCrumbInner = styled.div`
  max-width: ${width.lg}px;
  margin: auto;
`;

const BreadCrumbTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;

  @media (max-width: ${breakpoints.md}rem) {
    font-size: 26px;
  }
`;

export default function BreadCrumbs({ title }) {
  return (
    <>
      <BreadCrumb>
        <BreadCrumbInner>
          <BreadCrumbTitle>{title}</BreadCrumbTitle>
        </BreadCrumbInner>
      </BreadCrumb>
    </>
  );
}
