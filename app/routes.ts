import type { RouteConfig } from '@react-router/dev/routes';
import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('_/:slug', 'routes/long-url.tsx'),
] satisfies RouteConfig;
