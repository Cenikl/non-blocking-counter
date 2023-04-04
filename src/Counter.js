import { useState, useEffect } from "react";

const Counter = ({from, to}) => {
    const progressivelyPrintBy = 100;
    const [maxPrinted, setMaxPrinted] = useState(from + progressivelyPrintBy);

    useEffect(() => {
        const progressivelyIncreaseMaxPrinted = currentMaxPrinted => {
            if(currentMaxPrinted < to){
                setMaxPrinted(currentMaxPrinted + progressivelyPrintBy);
                setTimeout(() => progressivelyIncreaseMaxPrinted(currentMaxPrinted + progressivelyPrintBy),0);
            } else {
                setMaxPrinted(to);
            }
        };
        progressivelyIncreaseMaxPrinted(maxPrinted);
    }, []);
    
    const consecutiveNumbers = [...Array(maxPrinted-from).keys()].map(i => i + from);
    return <div>
        {consecutiveNumbers.map(n => <p key={n}>{n}</p>)}
        </div> 
}

export default Counter
