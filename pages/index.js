import styled from "styled-components";
import { width, colors, breakpoints } from "../styles/variables";

import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // min-height: 100vh;
  padding: 3.5rem 2rem;

  max-width: ${width.base}px;
  margin: auto;
`;

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
