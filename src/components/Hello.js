/**
 * 
 * membuat component Hello
 * Mencetak UI
 */
 function Hello(props) {
    console.log(props);

    //Melakukan destructing props
    const {name} = props;
    //diluar return adalah javascript biasa
    const major = "Informatika";

    //didalam return jsx
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya { name } </p>
            <p> Jurusan Saya {major}</p>
        </div>
    );
}

export default Hello;