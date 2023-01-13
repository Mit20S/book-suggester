import styles from '../styles/header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <div className={styles.leftNav}>
                <img src="https://www.azirish.org/wp-content/uploads/2016/05/bookgroup2.png" width="65" height="65"></img>
                <span>BiblioSite</span>
            </div>
            <div>
                <ul className={styles.rightNav}>
                    <li><Link to="/">Home</Link></li>
                    <li>Login</li>
                    <li>Sign Up</li>
                    <li>Contact</li>
                    <li><Link to="/about">About</Link></li>
                    <li>Books</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;