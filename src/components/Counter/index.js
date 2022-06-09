import { useEffect, useState } from "react";

function Counter() {
 // Mengembalikan sepasang value dalam bentuk (array) : {0, function ()}
    const [number, setNumber] = useState(0); 

    function addNumber(){
        setNumber(number + 1);
    }

    // Use Effect dijalankan pada lifecycle dan update

    function updateDOM(){
        console.log("Lifecycle: Dimount");

        // melakukan side effect: mengakses dom
        document.title = `Result: ${number}`;
    }

    useEffect(updateDOM, [number]);

    console.log("Lifecycle: Dirender");
    return (
        <div>
            <p>result: {number}</p>
            <button onClick={addNumber}>Add</button>
        </div>
    )
}

export default Counter;