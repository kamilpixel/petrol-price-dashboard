import { type RouteConfig, layout, route } from '@react-router/dev/routes';

export default [
  layout('./layouts/MainLayout.tsx', [
    route('', './routes/Dashboard.tsx'),
    route('about', './routes/About.tsx'),
    route('settings', './routes/Settings.tsx'),
  ]),
] satisfies RouteConfig;
