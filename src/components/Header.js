import '../styles/header.css'

function Header(){
    return(
        <header>
            <div className='leftNav '>
                <img src="https://www.azirish.org/wp-content/uploads/2016/05/bookgroup2.png" width="65" height="65"></img>
                <span>BiblioSite</span>
            </div>
            <div>
                <ul className='rightNav'>
                <li>Home</li>
                <li>Login</li>
                <li>Sign Up</li>
                <li>Contact</li>
                <li>About</li>
                <li>Books</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;