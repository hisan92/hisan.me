/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  // prefix: 'tw-',
  separator: '--',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_2': '50%',
      '1_3': '33.333333%',
      '2_3': '66.666667%',
      '1_4': '25%',
      '2_4': '50%',
      '3_4': '75%',
      '1_5': '20%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      '1_6': '16.666667%',
      '2_6': '33.333333%',
      '3_6': '50%',
      '4_6': '66.666667%',
      '5_6': '83.333333%',
      '1_12': '8.333333%',
      '2_12': '16.666667%',
      '3_12': '25%',
      '4_12': '33.333333%',
      '5_12': '41.666667%',
      '6_12': '50%',
      '7_12': '58.333333%',
      '8_12': '66.666667%',
      '9_12': '75%',
      '10_12': '83.333333%',
      '11_12': '91.666667%',
      full: '100%',
      screen: '100vw'
    }),
    extend: {
      spacing: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem'
      }
    }
  },
  variants: {},
  plugins: []
}
