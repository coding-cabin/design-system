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
      <Layout pageTitle="About">
        <BreadCrumbs />
        <Container isSmall>
          <Title>About this site</Title>
          <Text>
            This website is designed for theme developers to help the community
            in creating fast, accessible and mobile-friendly UI components to
            build the coding cabin blog faster.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
