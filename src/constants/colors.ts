// Централизованная цветовая палитра сайта
export const colors = {
  // Основные цвета
  primary: {
    // Темно-пепельный (заменяет черный)
    dark: '#2C2C2C', // Основной темно-пепельный
    darker: '#1A1A1A', // Более темный оттенок
    light: '#404040', // Светлее для hover состояний
  },

  // Вторичные цвета
  secondary: {
    // Акцентный цвет (уже есть)
    accent: '#9A8A88',
    accentLight: '#B5A8A6',
    accentDark: '#7A6D6B',
  },

  // Текстовые цвета
  text: {
    primary: '#2C2C2C', // Основной текст (темно-пепельный)
    secondary: '#404040', // Вторичный текст
    muted: '#6B6B6B', // Приглушенный текст
    light: '#8A8A8A', // Светлый текст
    white: '#FFFFFF', // Белый текст
  },

  // Фоновые цвета
  background: {
    primary: '#FFFFFF', // Основной фон
    secondary: '#F8F8F8', // Вторичный фон
    dark: '#000000', // Темный фон (для hero секции)
    glass: 'rgba(154, 138, 136, 0.1)', // Стеклянный эффект
  },

  // Границы
  border: {
    primary: '#E5E5E5', // Основные границы
    secondary: '#D1D1D1', // Вторичные границы
    accent: '#9A8A88', // Акцентные границы
    dark: '#2C2C2C', // Темные границы
  },

  // Состояния
  states: {
    hover: '#404040', // Hover состояние
    active: '#1A1A1A', // Active состояние
    focus: '#2C2C2C', // Focus состояние
    disabled: '#B0B0B0', // Disabled состояние
  },

  // Градиенты
  gradients: {
    primary: 'linear-gradient(135deg, #2C2C2C 0%, #404040 100%)',
    accent: 'linear-gradient(135deg, #9A8A88 0%, #B5A8A6 100%)',
    text: 'linear-gradient(135deg, #2C2C2C 0%, #6B6B6B 100%)',
  }
} as const;

// Утилиты для быстрого доступа к цветам
export const getColor = (path: string) => {
  const keys = path.split('.');
  let result: any = colors;

  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Color path "${path}" not found`);
      return '#2C2C2C'; // Fallback цвет
    }
  }

  return result;
};

// CSS переменные для использования в стилях
export const cssVariables = {
  '--color-primary-dark': colors.primary.dark,
  '--color-primary-darker': colors.primary.darker,
  '--color-primary-light': colors.primary.light,
  '--color-secondary-accent': colors.secondary.accent,
  '--color-text-primary': colors.text.primary,
  '--color-text-secondary': colors.text.secondary,
  '--color-text-muted': colors.text.muted,
  '--color-background-primary': colors.background.primary,
  '--color-background-secondary': colors.background.secondary,
  '--color-border-primary': colors.border.primary,
  '--color-border-accent': colors.border.accent,
  '--color-hover': colors.states.hover,
  '--color-active': colors.states.active,
} as const;
