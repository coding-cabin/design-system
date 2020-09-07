import styled from "styled-components";

import Layout from "../components/layout/Layout";
import Container from "../components/layout/Container";
import Link from "next/link";

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
      <Layout pageTitle="Not Found">
        <Container isSmall>
          <Title>Not found</Title>
          <Text>
            The page you are looking for cannot be found. Click{" "}
            <Link href="/">here</Link> to go back to home page.
          </Text>
        </Container>
      </Layout>
    </>
  );
}
