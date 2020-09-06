import styled, { css } from "styled-components";
import { colors, breakpoints } from "../../styles/variables";

const Card = styled.article`
  background-color: ${colors.white};
  border: 1px solid ${colors.borderColor};
  padding: 3.5rem 4rem;
  border-radius: 7px;

  @media (max-width: ${breakpoints.md}rem) {
    padding: 1.95rem 2rem;
  }
`;

const CardTitle = styled.h2`
  color: ${colors.headingColor};
`;

const CardBody = styled.div`
  color: ${colors.bodyColor};
`;

export default function Cards({ title, desc }) {
  return (
    <>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardBody>{desc}</CardBody>
      </Card>
    </>
  );
}
