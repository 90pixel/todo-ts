import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '"Inter", sans-serif',
  },
  'html,body': {
    background: '$gray50',
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
