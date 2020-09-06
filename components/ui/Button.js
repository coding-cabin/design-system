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
  transition: all 0.5s;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.2);
  }

  ${(props) =>
    props.isPrimary &&
    css`
      background-color: ${colors.accentColorOne};
      color: ${colors.white};
    `}
`;

export default Button;
