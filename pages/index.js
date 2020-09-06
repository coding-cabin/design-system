import styled from "styled-components";

import Container from "../components/layout/Container";

import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

import { colors } from "../styles/variables";

const Title = styled.h1`
  margin-bottom: 0.65rem;
  color: ${colors.headingColor};
`;

const Text = styled.p`
  color: ${colors.bodyColor};
`;

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home">
        <Container>
          <Title>Coding Cabin's Design System</Title>
          <Text>
            Hi! This page is currently under construction. We apologize for the
            unconvenience.
          </Text>
          <div>
            <Button isPrimary as="a" href="https://codingcabin.tumblr.com/">
              Visit our blog
            </Button>
          </div>
        </Container>
      </Layout>
    </>
  );
}
