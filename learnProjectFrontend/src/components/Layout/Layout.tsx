import styles from './Layout.module.scss';
import {NavLink, Outlet} from 'react-router-dom';

export const Layout = () => {


    return (
        <>
            <div className={styles.body}>
                <header>
                    <NavLink to="/">Menu</NavLink>
                    <ul>
                        <li>
                            <NavLink to="gallery">Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to="login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="questionnaire">Questionnaire</NavLink>
                        </li>
                    </ul>
                </header>

                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    );
}

