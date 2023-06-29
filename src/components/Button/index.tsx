import { StyledButton } from "./style";
import { Link } from 'react-router-dom'

interface ButtonProps {
  color?: 'primary' | 'default'
  label?: React.ReactElement | string
  url: string
}


const Button: React.FC<ButtonProps> = ({
  label, 
  color,
  url
}) => (
  <Link to={url}>
    <StyledButton
      colorbackground={color === 'primary' ? '#e62429' : 'transparent'}
      colorfont={color === 'primary' ? '#FFFFFF' : '#3B4252'}
    >
      <span>
        {label}
      </span>

    </StyledButton>
  </Link>
);

export default Button;
