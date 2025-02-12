import type { Route } from "./+types/home";
import { About } from "../pages/about"
import { Link } from "react-router"

export function meta({}: Route.MetaArgs){
    return[
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"}
    ]
}

export default function AboutRoute() {
    return <About />
  }
  