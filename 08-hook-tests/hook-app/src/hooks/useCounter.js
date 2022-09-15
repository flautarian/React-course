import { useState } from "react"

export const useCounter = ( initialValue = 10) => {
    
    const [valueCounter, setValueCounter] = useState({
        counter1: initialValue + 5,
        counter2: initialValue,
        counter3: initialValue - 5
    });

    const changeValue = (values) =>{
        setValueCounter({
            counter1: valueCounter.counter1 + values[0],
            counter2: valueCounter.counter2 + values[1],
            counter3: valueCounter.counter3 + values[2]
        });
    }

    return {
        valueCounter,
        changeValue
    }
}