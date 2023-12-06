import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [
        nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        // light: {
        //   layout: {}, // light theme layout tokens
        //   colors: {}, // light theme colors
        // },
        // dark: {
        //   layout: {}, // dark theme layout tokens
        //   colors: {}, // dark theme colors
        // },
        light: {
          colors: {
            primary: "#000000",
            secondary: "#EE457E",
            default: "#946E48",
            // background:"#F4E8D1"
            background: "#946E48"
          }
        },
        dark: {
          colors: {
            primary: "#FFD34E",
            secondary: "#EE457E",
            background: "#E1CA9E"
          }
        },


        // ... custom themes
      },
    }),
  ],
}
export default config
