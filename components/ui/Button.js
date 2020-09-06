import styled, { css } from "styled-components";
import { colors } from "../../styles/variables";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  box-shadow: none;
  border: 0;
  border-radius: 4px;
  padding: 0.65rem 0.85rem;
  background: transparent;
  cursor: pointer;
  margin: 1.5rem 0;
  text-decoration: none;
  border: 2px solid ${colors.accentColorOne};
  color: ${colors.accentColorOne};

  ${(props) =>
    props.isPrimary &&
    css`
      background-color: ${colors.accentColorOne};
      color: ${colors.white};
    `}
`;

export default Button;
