import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Startsidan
    index("routes/home.tsx"),  
    // Om mig sidan
    route("/about", "routes/about.tsx")  
] satisfies RouteConfig;

