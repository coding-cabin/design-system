import styled from "styled-components";

import Container from "../components/layout/Container";
import ContainerGrid from "../components/layout/ContainerGrid";
import Cards from "../components/ui/Card";

import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

import { colors } from "../styles/variables";

import data from "../data/home.json";

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 0.65rem;
  color: ${colors.headingColor};
`;

const Version = styled.div`
  margin-bottom: 1rem;

  span {
    background-color: ${colors.accentColorThree};
    color: ${colors.white};
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
  }
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
          <Version>
            <span>v1.0</span>
          </Version>
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
        <ContainerGrid>
          {/* {data.map((data) => (
            <Cards title={data.title} />
          ))} */}
          <Cards
            title="Styles"
            desc="Make your design with guides for applying layout, typography, color and images"
          />
          <Cards
            title="Components"
            desc="Save your time with these reusable components for your design and more"
          />
        </ContainerGrid>
      </Layout>
    </>
  );
}
