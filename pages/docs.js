import styled from "styled-components";

import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";

import BreadCrumbs from "../components/ui/Breadcrumbs";

import { colors } from "../styles/variables";

const Title = styled.h1`
  margin-bottom: 0.65rem;
  color: ${colors.headingColor};
`;

const Text = styled.p`
  color: ${colors.bodyColor};
`;

export default function About() {
  return (
    <>
      <Layout pageTitle="Docs">
        <BreadCrumbs title="docs"></BreadCrumbs>
        <Container isSmall>
          <Title>Documentation</Title>
        </Container>
      </Layout>
    </>
  );
}
