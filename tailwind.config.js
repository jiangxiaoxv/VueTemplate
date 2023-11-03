const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      wspacing: {
        '-12': '-12px',
        '-11': '-11px',
        '-10': '-10px',
        '-9': '-9px',
        '-8': '-8px',
        '-7': '-7px',
        '-6': '-6px',
        '-5': '-5px',
        '-4': '-4px',
        '-3': '-3px',
        '-2': '-2px',
        '-1': '-1px',
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        23: '23px',
        24: '24px',
        25: '25px'
      },
      spacing: {
        ...defaultTheme.spacing,
        px: '1px',
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px'
      },
      blur: {
        0: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px'
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
        full: '9999px'
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      hueRotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-60': '-60deg',
        '-30': '-30deg',
        '-15': '-15deg',
        0: '0deg',
        15: '15deg',
        30: '30deg',
        60: '60deg',
        90: '90deg',
        180: '180deg'
      },
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none'
      },
      flexGrow: {
        0: '0',
        DEFAULT: '1'
      },
      flexShrink: {
        0: '0',
        DEFAULT: '1'
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xs: ['10px', { lineHeight: '12px' }],
        sm: ['12px', { lineHeight: '14px' }],
        base: ['14px', { lineHeight: '16px' }],
        lg: ['16px', { lineHeight: '18px' }],
        xl: ['18px', { lineHeight: '20px' }],
        '2xl': ['20px', { lineHeight: '22px' }],
        '3xl': ['30px', { lineHeight: '30px' }],
        '4xl': ['40px', { lineHeight: '40px' }],
        '5xl': ['50px', { lineHeight: '1' }],
        '6xl': ['60px', { lineHeight: '1' }],
        '7xl': ['70px', { lineHeight: '1' }],
        '8xl': ['80px', { lineHeight: '1' }],
        '9xl': ['90px', { lineHeight: '1' }],
        12: ['12px'],
        14: ['14px'],
        16: ['16px'],
        22: ['22px'],
        18: ['18px'],
        24: ['24px'],
        26: ['26px'],
        28: ['28px'],
        30: ['30px'],
        32: ['32px'],
        34: ['34px']
      },
      gap: (theme) => theme('spacing'),
      width: (theme) => ({
        auto: 'auto',
        ...defaultTheme.width,
        ...theme('wspacing')
      }),
      height: (theme) => ({
        auto: 'auto',
        ...defaultTheme.height,
        ...theme('wspacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        full: '100%',
        screen: '100vh'
      }),
      inset: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%',
        '-1/2': '-50%',
        '-1/3': '-33.333333%',
        '-2/3': '-66.666667%',
        '-1/4': '-25%',
        '-2/4': '-50%',
        '-3/4': '-75%',
        '-full': '-100%'
      }),
      letterSpacing: {
        tighter: '-0.8px',
        tight: '-0.4px',
        normal: '0px',
        wide: '0.4px',
        wider: '0.8px',
        widest: '1.6px'
      },
      lineHeight: {
        ...defaultTheme.lineHeight,
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px'
      },
      margin: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('wspacing'),
        ...negative(theme('wspacing'))
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        full: '100%',
        screen: '100vh'
      }),
      maxWidth: (theme, { breakpoints }) => ({
        none: 'none',
        0: '0px',
        xs: '320px',
        sm: '384px',
        md: '448',
        lg: '512px',
        xl: '576px',
        '2xl': '672px',
        '3xl': '768px',
        '4xl': '896px',
        '5xl': '1024px',
        '6xl': '1152px',
        '7xl': '1280px',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        ...breakpoints(theme('screens'))
      }),
      minHeight: {
        0: '0px',
        full: '100%',
        screen: '100vh'
      },
      minWidth: {
        0: '0px',
        full: '100%',
        min: 'min-content',
        max: 'max-content'
      },
      outline: {
        none: ['2px solid transparent', '0'],
        white: ['2px dotted white', '0'],
        black: ['2px dotted black', '0']
      },
      padding: (theme) => theme('wspacing'),
      ringOffsetWidth: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      ringOpacity: (theme) => ({
        DEFAULT: '0.5',
        ...theme('opacity')
      }),
      ringWidth: {
        DEFAULT: '3px',
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px'
      },
      space: (theme, { negative }) => ({
        ...theme('spacing'),
        ...negative(theme('spacing'))
      }),
      zIndex: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
      },
      colors: {
        ...defaultTheme.colors,
        'gray-350': 'rgba(187, 187, 187)'
      }
    }
  },
  prefix: 'tw-',
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
