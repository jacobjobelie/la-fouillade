import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#9a42ff',
      secondary: '#5961f8',
      danger: '#e3342f',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#9a42ff',
      secondary: '#5961f8',
      danger: '#e3342f',
    }),
    extend: {
      boxShadow: {
        // add next ui theme shadow
        nsm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
        nmd: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
        nlg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
        nxl: '0 25px 65px 0px rgb(104 112 118 / 0.35)',
      },
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-between': 'flex justify-between items-center',
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'txt-2': ' dark:text-gray-200 text-gray-700',
    'bg-success': ' dark:bg-green-400 bg-green-400 hover:bg-green-100',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
  css: [
    'assets/style.css',
    '@fontsource/lato',
    '@fontsource/jetbrains-mono',
    '@fontsource/material-icons',
    '@fontsource/material-icons-outlined',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        default: 'github-dark',
      },
      preload: ['c', 'cpp', 'java', 'shell', 'python', 'js', 'ts', 'css', 'html'],
    },
  },
})
