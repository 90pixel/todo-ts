import React, { FC } from 'react';
import { styled } from 'stitches.config';

type TextareaProps = {
  placeholder: string;
  maxLength?: number;
  disabled?: boolean;
  rows?: number;
  cols?: number;
};

const Textarea: FC<TextareaProps> = ({
  placeholder,
  maxLength,
  disabled,
  rows,
  cols,
}) => {
  return (
    <TextareaInput
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      rows={rows}
      cols={cols}
    />
  );
};

export default Textarea;

const TextareaInput = styled('textarea', {
  borderRadius: 10,
  background: '#ddd',
  color: '#f23123',
  p: 10,
});
