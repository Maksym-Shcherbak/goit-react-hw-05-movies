import styled from 'styled-components';

export const StyledInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  opacity: 0;
  z-index: -1;

  &:checked + div::before {
    transform: scale(0);
  }

  &:checked ~ p {
    color: hsl(0, 0%, 40%);
  }
`;

export const InputCircle = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 100px;
  background: linear-gradient(
    to right bottom,
    hsl(154, 97%, 62%),
    hsl(225, 97%, 62%)
  );
  position: relative;

  &::before {
  content: '';
  display: inline-block;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background: hsl(0, 0%, 90%);
  transform: scale(1.1);
  transition: .3s;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 14px 16px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover,
  &:focus-within {
    background: hsla(0, 0%, 80%, 0.14);
  }
`;

export const LabelText = styled.p`
  color: hsl(0, 0%, 60%);
  margin-left: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 900;
  transition: 0.3s;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
`;
