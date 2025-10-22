// Утилиты для работы с Google Analytics

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Отслеживание событий
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Отслеживание просмотров страниц
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

// Отслеживание покупок
export const trackPurchase = (transactionId: string, value: number, currency: string = 'RUB') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

// Отслеживание добавления в корзину
export const trackAddToCart = (itemId: string, itemName: string, value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'RUB',
      value: value,
      items: [
        {
          item_id: itemId,
          item_name: itemName,
          price: value,
          quantity: 1,
        },
      ],
    });
  }
};

// Отслеживание кликов по кнопкам
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

// Отслеживание отправки форм
export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

// Отслеживание времени на странице
export const trackTimeOnPage = (pageName: string, timeInSeconds: number) => {
  trackEvent('timing_complete', 'page_time', pageName, timeInSeconds);
};
