import {
  type RouteConfig,
  route,
  index,
//   layout,
//   prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("home", "routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
