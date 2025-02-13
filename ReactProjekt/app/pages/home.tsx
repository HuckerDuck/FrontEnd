import { Link } from "react-router"
import SimpleCounter from "../componments/Counter"
import RandomBackgroundChanger from "../componments/BackgroundColorChanger"
import { useState } from "react";

export function Home(){
    // Vi skapar en useState för att hålla startfärgen 
    const[backgroundColor, setBackgroundColor] = useState<string>('#FAEBD7');

    // Funktion för att uppdatera backgrundsfärgen på klassen home-main när vi trycker 
    const updateBackgroundColor =(color: string): void => {
        setBackgroundColor(color);
    }
    
    return (
        <main className="home-main" style={{backgroundColor}}>
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
                    <RandomBackgroundChanger onColorChange={updateBackgroundColor}/>

                </article>
            </section>

        </main>
    ); 
}

