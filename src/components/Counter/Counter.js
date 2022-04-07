import { useState } from "react";

function Counter(){
    //  Mbuat variable state
    // Mengembalikan 2 data
    // nilai fungsi ini: 0
    // fungsi untuk mengubah state
    const [hasil, setHasil] = useState(0);

    function tambah(){
        // jalankan fungsi setHasil
        // untuk mengubah hasil
        setHasil(hasil + 1);
    }
    return(
        <div>
            <p>hasl: {hasil}</p>
            <button onClick={tambah}>Add</button>
        </div>
    );
}

export default Counter;