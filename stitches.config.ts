import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

type SpaceCSSProperty = Stitches.ScaleValue<'space'> | string | number;

export const {
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      bg: '#E5E5E5',
      avatarBg: '#C4C4C4',
      primary: '#1D2939',
      gray800: '#1D2939',
      gray500: '#667085',
      gray400: '#98A2B3',
      gray300: '#D0D5DD',
      gray200: '#E4E7EC',
      gray100: '#F2F4F7',
      gray50: '#F9FAFB',
    },
    shadows: {
      // primary: '0px 0px 32px 0px rgba(143, 164, 189, 0.24)',
      md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);',
      lg: '0px 8px 60px -4px rgba(16, 24, 40, 0.1), 0px 4px 8px -2px rgba(16, 24, 40, 0.06);',
    },
    radii: {
      sm: '2px',
      default: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
      circle: '50%',
      full: '9999px',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    space: {
      0: '4px',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xlMax: '(max-width: 1279px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  },
  utils: {
    m: (value: SpaceCSSProperty) => ({
      margin: value,
    }),
    mt: (value: SpaceCSSProperty) => ({
      marginTop: value,
    }),
    mr: (value: SpaceCSSProperty) => ({
      marginRight: value,
    }),
    mb: (value: SpaceCSSProperty) => ({
      marginBottom: value,
    }),
    ml: (value: SpaceCSSProperty) => ({
      marginLeft: value,
    }),
    mx: (value: SpaceCSSProperty) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: SpaceCSSProperty) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: number) => ({
      padding: 4 * value,
    }),
    pt: (value: SpaceCSSProperty) => ({
      paddingTop: value,
    }),
    pr: (value: SpaceCSSProperty) => ({
      paddingRight: value,
    }),
    pb: (value: SpaceCSSProperty) => ({
      paddingBottom: value,
    }),
    pl: (value: SpaceCSSProperty) => ({
      paddingLeft: value,
    }),
    px: (value: SpaceCSSProperty) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: SpaceCSSProperty) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    bgColor: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    size: (value: number) => ({
      width: value,
      height: value,
    }),
    radius: (value: Stitches.ScaleValue<'radii'> | number) => ({
      borderRadius: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    widthPercent: (value: number) => ({
      width: `${value}%`,
    }),
    sizePercent: (value: number) => ({
      width: `${value}%`,
      height: `${value}%`,
    }),
    lineClamp: (rows: number) => ({
      display: '-webkit-box',
      '-webkit-line-clamp': rows,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;
