import styled, { css } from "styled-components";
import { width, breakpoints } from "../../styles/variables";

const ContainerGrid = styled.section`
  display: grid;
  gap: 3.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  padding: 0rem 0rem;

  max-width: ${width.lg}px;
  margin: auto;

  @media (max-width: ${breakpoints.md}rem) {
    padding: 0rem 2rem;
    gap: 1.85rem;
  }
`;

export default ContainerGrid;
