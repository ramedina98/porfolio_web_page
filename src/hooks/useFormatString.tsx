//Import the necessary react hooks...
import { useState, useEffect } from "react";

//create a custom hook called useFormatString that takes a string as input...
const useFormatString = (inputString: string): string => {

    //Define state to store the formatted string...
    const [formattedString, setFormattedString] = useState<string>('');

    //use useEffect to execute logic when the input string changes...
    useEffect(() => {

        //define an internal function to format the string...
        const formatString = (input: string): string => {
            //Split the string into words and remove any extra white spaces at the beginning and end
            const words = input.trim().split(/\s+/);
            //Map throught the words and add an underscore "_" in front of all except the first one...
            const formattedWords = words.map((word, index) => (index !== 0 ? `_${word}` : word));
            //Join the formatted words to get the final string 
            return formattedWords.join('');
        };
        
        //call the formatting function and update the state with the formatted string...
        setFormattedString(formatString(inputString));
    }, [inputString]);

    //Return the formatted as the result of the hook...
    return formattedString; 
}

export default useFormatString;