import { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState<number>(0);

    return(
        <div>
            <h2>Enkel räknare</h2>
            <button onClick={() => setCount(count+1)}>Öka med 1</button>
            <button onClick={() => setCount(count+5)}>Öka med 5</button>
            <button onClick={() => setCount(count+10)}>Öka med 10</button>

            <p>Nuvarande värde: {count}</p>
            
        </div>
    );
};

export default SimpleCounter;
