/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'primary-blue': '#00bfff',
        'primary-blue-hover': '#0099cc',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-muted': '#666666',
        'accent-silver': '#c0c0c0',
        'border-color': '#333333',
        'success-green': '#00ff88',
        'warning-orange': '#ff8800',
        'error-red': '#ff4444',
        'shadow-light': 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin': 'spin 1s ease-in-out infinite',
        'whatsapp-pulse': 'whatsappPulse 2s infinite',
        'skeleton-loading': 'skeletonLoading 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.1' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(1.1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 191, 255, 0.6)' },
        },
        whatsappPulse: {
          '0%': { boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1)' },
          '100%': { boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' },
        },
        skeletonLoading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-80': '80vh',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
