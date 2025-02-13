import React from "react";
import { useState } from "react";

interface RandomBackgroundColorInterface{
    onColorChange: (color:string) => void;
}

const RandomBackgroundChanger: React.FC<RandomBackgroundColorInterface> = ({onColorChange}) => {
    // Vi börjar med att skapa ett useState som kommer hålla i den aktuella färgen
    //    Standardfärgen kommer vara antiquewhite som vi hade i CSS från början
    const [color, setBackgroundColor] = useState<string>('#FAEBD7'); 

    // Funktion för att generera en slumpmässig färg baserat på hexkoden 
    const getARandomColor = (): string => {
        const letter ='0123456789ABCDEF';
        // Vi startar en varibel som kommer att börja med # som är starten av en hex
        let color = '#'; 
        // Denna for kommer att köra 6 gånger då hex består av 6 tecken
        for (let i = 0; i < 6; i++) {
            color += letter [Math.floor(Math.random() * 16)]
        }
        return color;
    }; 

    const changeBackgroundColor = (): void =>  {
        const newColor = getARandomColor();
        setBackgroundColor(newColor);
        onColorChange(newColor)
    }

    return (
        <div className="random-Background-changer">
            <button onClick={changeBackgroundColor}>Ändra Backgrundsfärgen</button>

        </div>
    );
}; 



export default RandomBackgroundChanger;