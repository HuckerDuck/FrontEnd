import { Link } from "react-router"
import SimpleCounter from "../componments/Counter"

export function Home(){
    return (
        <div>
            <p>Navigerat till Hemsidan</p>
            
            <SimpleCounter />

        </div>
    )
}