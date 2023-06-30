import { StyledButton } from "./style";

interface ButtonProps {
  color?: 'primary' | 'default'
  label?: React.ReactElement | string
  url?: string
  onClick?: () => void
}


const Button: React.FC<ButtonProps> = ({
  label, 
  color,
  url,
  onClick
}) => (
  <a href={url}>
    <StyledButton
      colorbackground={color === 'primary' ? '#e62429' : 'transparent'}
      colorfont={color === 'primary' ? '#FFFFFF' : '#3B4252'}
      onClick={onClick}
    >
      <span>
        {label}
      </span>

    </StyledButton>
  </a>
);

export default Button;
