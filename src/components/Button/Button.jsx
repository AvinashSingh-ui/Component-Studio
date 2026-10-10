import { StyledButton } from "./Button.styles";

function Button({ children, variant = "primary", size = "md", disabled = false, onClick, type = "button" }) {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
