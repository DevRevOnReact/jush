export {};

declare global {
  interface CalFunction {
    (...args: any[]): void;
    q?: any[];
    loaded?: boolean;
    ns?: Record<string, CalFunction>;
  }

  interface Window {
    Cal?: CalFunction;
  }
}