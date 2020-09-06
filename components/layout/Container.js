import styled from "styled-components";
import { width, breakpoints } from "../../styles/variables";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3.5rem 0rem;

  max-width: ${width.lg}px;
  margin: auto;

  @media (max-width: ${breakpoints.md}rem) {
    padding: 3.5rem 2rem;
  }
`;

export default Container;
