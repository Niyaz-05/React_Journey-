import { useEffect, useState } from "react";

function Quote(){
    const [quote, setQuote] = useState("");
    useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => setQuote(data.content));
    }, []);
    return(
    <div>
        <h2>Random Quote</h2>
        <p>{quote}</p>
    </div>
    );
}

export default Quote;