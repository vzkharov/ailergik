import type { Config } from 'tailwindcss'

import plugin from './tailwind.plugin'

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1192px',
      },
    },
    fontWeight: {
      normal: 'var(--font-normal)',
      medium: 'var(--font-medium)',
      bold: 'var(--font-bold)',
    },
    fontSize: {
      xs: 'var(--font-xs)',
      sm: 'var(--font-sm)',
      md: 'var(--font-md)',
      lg: 'var(--font-lg)',
      xl: 'var(--font-xl)',
      '2xl': 'var(--font-2xl)',
      '3xl': 'var(--font-3xl)',
      '4xl': 'var(--font-4xl)',
    },
    borderRadius: {
      none: '0px',
      xs: 'calc(var(--radius) - 4px)',
      sm: 'calc(var(--radius) - 2px)',
      md: 'var(--radius)',
      lg: 'calc(var(--radius) + 2px)',
      xl: 'calc(var(--radius) + 4px)',
      full: '999px',
    },
    extend: {
      spacing: {
        0: '0px',
        xs: 'var(--indent-xs)',
        sm: 'var(--indent-sm)',
        md: 'var(--indent-md)',
        lg: 'var(--indent-lg)',
        xl: 'var(--indent-xl)',
        '2xl': 'var(--indent-2xl)',
      },

      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        topic: 'var(--topic)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        gilroy: 'var(--font-gilroy)',
        helvetica: 'var(--font-helvetica)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate'), plugin()],
} satisfies Config

export default config
