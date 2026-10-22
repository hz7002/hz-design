/**
 * hz Tailwind preset
 * 先在全局 CSS 里引入 hz-tokens.css，再在 tailwind.config.js 里：
 *   presets: [require('./tokens/tailwind.preset.js')]
 * 语义色引用 CSS 变量，深浅模式自动跟随 data-theme / 系统设置。
 */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#F4F3FD', 100: '#E9E6FB', 200: '#D3CDF7', 300: '#B5ACF1', 400: '#9187E6',
          500: '#7366D8', 600: '#5A4BC6', 700: '#4A3CA8', 800: '#3A2F85', 900: '#282160',
        },
        gray: {
          50: '#F7F7FA', 100: '#EFEFF4', 200: '#E2E2EA', 300: '#C9C9D4', 400: '#A2A2B0',
          500: '#7C7C8C', 600: '#5E5E6E', 700: '#464654', 800: '#2E2E38', 900: '#1C1C23', 950: '#121216',
        },
        page: 'var(--bg-page)',
        subtle: 'var(--bg-subtle)',
        muted: 'var(--bg-muted)',
        elevated: 'var(--bg-elevated)',
        fg: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          disabled: 'var(--text-disabled)',
        },
        line: { DEFAULT: 'var(--border)', strong: 'var(--border-strong)' },
        brand: {
          DEFAULT: 'var(--brand)',
          hover: 'var(--brand-hover)',
          active: 'var(--brand-active)',
          text: 'var(--brand-text)',
          subtle: 'var(--brand-subtle)',
          'subtle-text': 'var(--brand-subtle-text)',
        },
        success: { DEFAULT: 'var(--success)', bg: 'var(--success-bg)', text: 'var(--success-text)' },
        warning: { DEFAULT: 'var(--warning)', bg: 'var(--warning-bg)', text: 'var(--warning-text)' },
        danger: { DEFAULT: 'var(--danger)', bg: 'var(--danger-bg)', text: 'var(--danger-text)' },
      },
      fontFamily: {
        display: ['Nunito', '"Resource Han Rounded SC"', '"Noto Sans SC"', 'sans-serif'],
        sans: ['Inter', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Noto Sans SC"', 'monospace'],
      },
      fontSize: {
        display: ['48px', '56px'],
        h1: ['36px', '44px'],
        h2: ['28px', '36px'],
        h3: ['20px', '28px'],
        'body-l': ['18px', '32px'],
        body: ['16px', '28px'],
        small: ['14px', '22px'],
        caption: ['12px', '18px'],
        'app-title': ['20px', '28px'],
        'app-section': ['16px', '24px'],
        'app-body': ['14px', '22px'],
        'app-secondary': ['13px', '20px'],
        'app-small': ['12px', '16px'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        bubble: '16px 16px 16px 4px',
        'bubble-user': '16px 16px 4px 16px',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionDuration: { fast: '120ms', base: '200ms', slow: '320ms' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0, 0, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};
