/// <reference types="vite/client" />

// Google Analytics gtag function declaration
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_title?: string;
        page_location?: string;
        custom_map?: Record<string, string>;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

export {};
