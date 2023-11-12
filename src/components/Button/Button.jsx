import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ onButtonClick, children, timeWindow, disabled }) => {
  return (
    <StyledButton
      className="Button"
      type="button"
      onClick={onButtonClick}
      data-time={timeWindow}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
