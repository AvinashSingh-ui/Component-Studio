import styled from "@emotion/styled";

export const StyledButton = styled.button`
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  color: ${({ $variant }) =>
    $variant === "primary" ? "#ffffff" : "#222222"};

  background: ${({ $variant }) =>
    $variant === "primary" ? "#171717" : "#f3f3f3"};

  &:hover:not(:disabled) {
    opacity: 0.8;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #777777;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;