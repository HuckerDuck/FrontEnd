import { Link } from "react-router"

export function About(){
    return (
        <main className="about-main">
            <header className="about-header">
                {/* Huvudrubrik */}
                <h1>Välkommen till Om Mig sidan</h1>
                <h2>Detta är den andra sidan</h2>

            </header>
            {/* Bodyn av huvudsidan */}
            <section className="about-body">
                {/* En enkel räknare */}
                <article>
                    <h2>Exempel text</h2>
                    

                </article>
            </section>

        </main>
        

    );
}