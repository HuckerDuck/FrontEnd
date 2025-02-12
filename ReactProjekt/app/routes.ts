import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),  // Här definieras startsidan
    route("/about", "routes/about.tsx")  
] satisfies RouteConfig;

