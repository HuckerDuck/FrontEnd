import { Link } from "react-router"
import SimpleCounter from "../componments/Counter"

export function Home(){
    return (
        <main className="home-main">
            <header className="home-header">
                {/* Huvudrubrik */}
                <h1>Välkommen till hemsidan</h1>
                <h2>Detta är första sidan</h2>

            </header>
            {/* Bodyn av huvudsidan */}
            <section className="home-body">
                {/* En enkel räknare */}
                <article>
                    <h2>Enkel räknare</h2>
                    <SimpleCounter/>

                </article>
            </section>

        </main>
    )
}