// Google Analytics gtag types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        page_path?: string;
        custom_map?: Record<string, string>;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}

// Google Analytics event parameters
export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: string;
  [key: string]: any;
}

// Google Analytics config parameters
export interface GtagConfigParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  custom_map?: Record<string, string>;
  send_page_view?: boolean;
  [key: string]: any;
}

export {};