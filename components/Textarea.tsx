import { FC } from 'react';
import { styled } from 'stitches.config';

interface TextareaProps {
  placeholder: string;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  value?: string;
}

const Textarea: FC<TextareaProps> = ({
  placeholder,
  maxLength,
  disabled,
  rows,
  cols,
  value,
}) => {
  return (
    <TextareaInput
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      rows={rows}
      cols={cols}
      value={value}
    />
  );
};

export default Textarea;

const TextareaInput = styled('textarea', {
  borderRadius: '$2xl',
  color: '$gray400',
  background: '$gray50',
  p: 16,
  resize: 'none',
  fontWeight: '$regular',
  fontSize: 16,
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
