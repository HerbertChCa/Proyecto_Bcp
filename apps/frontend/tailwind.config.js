// const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');

// The above utility import will not work if you are using Next.js' --turbo.
// Instead you will have to manually add the dependent paths to be included.
// For example
// ../libs/buttons/**/*.{ts,tsx,js,jsx,html}',                 <--- Adding a shared lib
// !../libs/buttons/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', <--- Skip adding spec/stories files from shared lib

// If you are **not** using `--turbo` you can uncomment both lines 1 & 19.
// A discussion of the issue can be found: https://github.com/nrwl/nx/issues/26510

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    //     ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        surface: '#f7f9fb',
        'surface-dim': '#d8dadc',
        'surface-bright': '#f7f9fb',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f2f4f6',
        'surface-container': '#eceef0',
        'surface-container-high': '#e6e8ea',
        'surface-container-highest': '#e0e3e5',
        'on-surface': '#191c1e',
        'on-surface-variant': '#444652',
        'inverse-surface': '#2d3133',
        'inverse-on-surface': '#eff1f3',
        outline: '#757684',
        'outline-variant': '#c5c5d4',
        'surface-tint': '#3c57b8',
        primary: '#00185c',
        'on-primary': '#ffffff',
        'primary-container': '#002a8d',
        'on-primary-container': '#7e98fd',
        'inverse-primary': '#b7c4ff',
        secondary: '#fe6b00',
        'on-secondary': '#ffffff',
        'secondary-container': '#ffdbcc',
        'on-secondary-container': '#572000',
        tertiary: '#00adc6',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#003b45',
        'on-tertiary-container': '#a5eeff',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        background: '#f7f9fb',
        'on-background': '#191c1e',
        'primary-fixed': '#dde1ff',
        'primary-fixed-dim': '#b7c4ff',
        'on-primary-fixed': '#001452',
        'on-primary-fixed-variant': '#304284',
        'secondary-fixed': '#ffdbcc',
        'secondary-fixed-dim': '#ffb693',
        'on-secondary-fixed': '#351000',
        'on-secondary-fixed-variant': '#7a3000',
        'tertiary-fixed': '#a6eeff',
        'tertiary-fixed-dim': '#54d7f1',
        'on-tertiary-fixed': '#001f25',
        'on-tertiary-fixed-variant': '#004e5b',
        'surface-variant': '#e3e1e8',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      spacing: {
        'container-padding': '1.5rem',
        gutter: '1.5rem',
        'margin-desktop': '2rem',
        'margin-mobile': '1rem',
        'bento-gap': '1.5rem',
      },
      fontFamily: {
        'headline-lg-mobile': ['Montserrat'],
        'label-md': ['Inter'],
        'display-lg': ['Montserrat'],
        'body-lg': ['Inter'],
        'title-lg': ['Montserrat'],
        'label-lg': ['Inter'],
        'headline-lg': ['Montserrat'],
        'body-md': ['Inter'],
      },
      fontSize: {
        'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'display-lg': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'title-lg': ['22px', { lineHeight: '28px', fontWeight: '600' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
};
