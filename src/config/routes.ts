export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '/404',
  INTAKE_FORM: '/intake-form',
} as const;

export type AppRoute = typeof ROUTES[keyof typeof ROUTES]; 