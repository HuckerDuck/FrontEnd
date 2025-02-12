import { Link } from "react-router"

export function Home(){
    return (
        <div>
            <p>Navigerat till Hemsidan</p>
            <Link to="/about">About</Link>

        </div>
    )
}