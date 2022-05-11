import { globalCss, keyframes } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif',
  },
  'html,body': {
    background: '$gray50',
    minHeight: '100vh',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  p: {
    mb: '0 !important',
  },
  'ol, ul, dl': {
    mb: '0 !important',
  },
  a: {
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
    },
  },
});

export const shrinkBounce = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '33%': {
    transform: 'scale(.85)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});
