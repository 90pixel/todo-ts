import { FC } from 'react';
import { styled, keyframes } from 'stitches.config';
import { shrinkBounce } from 'styles/globals';

interface CheckboxProps {
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => (
  <Label>
    <CheckboxInput
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      type="checkbox"
    />
    <Check checked={checked} />
    {label}
  </Label>
);

export default Checkbox;

const Label = styled('label', {
  position: 'relative',
  display: 'flex',
  margin: '.6em 0', // TODO: It should be space token
  alignItems: 'center',
  height: '1.3em',
});

const CheckboxInput = styled('input', {
  display: 'none',
});

const checkboxCheck = keyframes({
  '0%': {
    width: '0',
    height: '0',
    borderColor: '#212121', // TODO: It should be color token
    transform: 'translate3d(0,0,0) rotate(45deg)',
  },
  '33%': {
    width: '.3em',
    height: '0',
    transform: 'translate3d(0,0,0) rotate(45deg)',
  },
  '100%': {
    width: '.3em',
    height: '.6em',
    borderColor: '#212121', // TODO: It should be color token
    transform: 'translate3d(0,-.6em,0) rotate(45deg)',
  },
});

const Check = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '.3em', // TODO: It should be space token
  width: '1.3em',
  height: '1.3em',
  background: '$gray300',
  border: '2px solid $gray300',
  borderRadius: '$circle',
  cursor: 'pointer',
  transition: 'all 250ms cubic-bezier(.4,.0,.23,1)',

  variants: {
    checked: {
      true: {
        border: '.65em solid #FFEB3B', // TODO: It should be primary color
        animation: `${shrinkBounce} 200ms cubic-bezier(.4,.0,.23,1)`,

        '&:before': {
          content: '',
          position: 'absolute',
          top: '.6em',
          left: '.3em',
          borderRight: '3px solid transparent',
          borderBottom: '3px solid transparent',
          transform: 'rotate(45deg)',
          transformOrigin: '0% 100%',
          animation: `${checkboxCheck} 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards`,
        },
      },
    },
  },
});
