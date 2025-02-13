import { useState } from "react"; 
// Krav: 
// Ändra på state
// Lätt och grundläggande CSS på HTML 
// Två funktioner med parametrar och argument som är typad 
// Minst en funktion med typad returvärde
// Minst ett inface i en extern fil där du använder en export och import

/**------------------------------------------------------------------------
 *                           Simple Counter
 *------------------------------------------------------------------------**/

// Interface 

interface CountState {
    count:number;
}

// Funktion som returnerar ett värde med typade värden 

    //  count - tal som är det aktuella värdet
    //  increment: tal som är hur mycket vi vill öka värdet med 
    // return count + increment = lägger ihop count och increment och 
    // returnerar sedan värdet tillbaka så att vi kan använda det. 
const calculatorNewCount= (count: number, increment: number): number => {
    return count + increment;
}

// Lägger ihop allt med en useState och använder knappar för att öka värdet dynamiskt 
const SimpleCounter = () => {
    const [count, setCount] = useState<CountState>({count:0});


    // Funktioner som ökar värdet
    const increateNumberBy1 = (): void => setCount({count: calculatorNewCount(count.count, 1)})
    const increateNumberBy5 = (): void => setCount({count: calculatorNewCount(count.count, 5)})
    const increateNumberBy10 = (): void => setCount({count: calculatorNewCount(count.count, 10)})

    return(
        <div>
            {/* Knappar med funktionen över inlagt */}
             <button onClick={increateNumberBy1}>Öka med 1</button>
             <button onClick={increateNumberBy5}>Öka med 5</button>
            <button onClick={increateNumberBy10}>Öka med 10</button>

            {/* count.count används för att vi behöver komma åt count-värdet som ligger i objektet count */}
            <p>Nuvarande värde: {count.count}</p>
            
        </div>
    );
};

export default SimpleCounter;
