import styled from "styled-components";
import reset from "../styles/reset";
import { width, colors } from "../styles/variables";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1.5rem;

  max-width: ${width.md}px;
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
      <style jsx global>
        {reset}
      </style>
      <Container>
        <Title>Coding Cabin's Design System</Title>
        <Text>
          Hi! This page is currently under construction. We apologize for the
          unconvenience.
        </Text>
      </Container>
    </>
  );
}
