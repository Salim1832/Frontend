/**
 * Membuat komponen header
 * menampilkan Navigasi
 */

 function Header() {
    //Mengirim props name ke component Hello
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Header;