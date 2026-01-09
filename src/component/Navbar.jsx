export default function Navbar () {

    const isLoggedIn = true;
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                
                { isLoggedIn ? (
                    <li><a href="#profile">Profile</a></li>
                ) : (
                    <>
                        <li><a href="#login">Login</a></li>
                        <li><a href="#login">Register</a></li>
                    </>
                )}

            </ul>
        </nav>
    )
}