import { FC } from 'react';
import { styled } from 'stitches.config';

interface InputsProps {
  placeholder: string;
  maxLength?: number;
  disabled?: boolean;
  value?: string;
  type: string;
  label?: string;
}

const Inputs: FC<InputsProps> = ({
  type,
  placeholder,
  maxLength,
  disabled,
  value,
  label,
}) => {
  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <Input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        value={value}
      />
    </InputWrapper>
  );
};

export default Inputs;

const Input = styled('input', {
  borderRadius: '$2xl',
  color: '$gray400',
  background: '$gray50',
  fontWeight: '$regular',
  padding: '10px 20px',
  fontSize: 16,
  '&:focus': {
    outline: 'none',
  },
});

const InputLabel = styled('label', {
  position: 'absolute',
  top: '-26px',
  left: '20px',
  color: '$gray400',
  fontWeight: '$regular',
  fontSize: 16,
});

const InputWrapper = styled('div', {
  position: 'relative',
  top: '100px',
  color: '$gray400',
  fontWeight: '$regular',
  fontSize: 16,
});
