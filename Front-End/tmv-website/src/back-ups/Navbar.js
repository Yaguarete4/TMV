import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {ReactComponent as BrandLogo} from "../images/TMV.svg"
import {ReactComponent as BurgerMenu} from "../images/Menu.svg"
import {ReactComponent as HomeIcon} from "../images/Home.svg"
import {ReactComponent as ProductsIcon} from "../images/Products.svg"
import {ReactComponent as CartIcon} from "../images/Cart.svg"
import {ReactComponent as WhiteBurgerMenu} from "../images/WhiteBurgerMenu.svg"
import "../styles/Navbar.css"

export const Navbar = () => {
    const [searchState, setSearchState] = useState({
        searchButtonMobile: false,
        searchButtonDesktop: false,
        navbar: true,
        screenWidth: window.innerWidth
    });

    // const [animationEnded, setAnimationEnded] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', changeScreenWidth);

        return () => {
            window.removeEventListener('resize', changeScreenWidth);
        }
    }, [])

    const changeScreenWidth = () => {
        setSearchState(prev => ({...prev, screenWidth: window.innerWidth}));
    };

    // const toggleSearchInputDektop = () => {
    //     if(searchState.searchButtonDesktop) return `navbar__search-input-desktop--show`
    //     else return `navbar__search-input-desktop--hide ${toggleSearch(!animationEnded)}`
    // };

    // const handleAnimationEnded = () => {
    //     if(!searchState.searchButtonDesktop) setAnimationEnded(true);
    //     else setAnimationEnded(false);
    // }

    const toggleSearch = (element) => {
        return element ? "" : "navbar__hide";
    };

    const toggleSearchButton = () => {
        setSearchState(searchStatePrev => 
            ({...searchStatePrev,
            searchButtonMobile: (searchState.screenWidth <= 600) &&  !searchState.searchButtonMobile,
            searchButtonDesktop: (searchState.screenWidth > 600) &&  !searchState.searchButtonDesktop,
            navbar: (searchState.screenWidth > 600) || !searchState.navbar
        }));
    }

    return (
        <nav className="navbar">
            <div className={`navbar__desktop ${toggleSearch(searchState.navbar)}`}>
                <div>
                    <BurgerMenu className="navbar__exclusive-mobile" />
                    <BrandLogo />

                    <button className="navbar__search-button navbar__exclusive-mobile" onClick={toggleSearchButton}>
                            <span>
                                <svg width="23" height="23" viewBox="0 0 343 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M215 129.5C215 176.72 176.72 215 129.5 215C82.2797 215 44 176.72 44 129.5C44 82.2797 82.2797 44 129.5 44C176.72 44 215 82.2797 215 129.5ZM203.765 235.603C182.739 250.347 157.13 259 129.5 259C57.9791 259 0 201.021 0 129.5C0 57.9791 57.9791 0 129.5 0C201.021 0 259 57.9791 259 129.5C259 157.556 250.078 183.528 234.917 204.733L336.505 306.321C345.068 314.884 345.068 328.768 336.505 337.332C327.942 345.895 314.058 345.895 305.494 337.332L203.765 235.603Z" fill="#F58634"/>
                                </svg>
                            </span>
                    </button>
                </div>
            </div>

            <div className={`navbar__mobile ${toggleSearch(searchState.navbar)}`}>
                <ul>
                    <li>
                        <button className="navbar__desktop-burger-menu navbar__button-style navbar__exclusive-desktop">
                            <WhiteBurgerMenu />
                            MENU
                        </button>
                    </li>

                    <li>
                        <Link className="navbar__home" to="/">
                            <HomeIcon />
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__products" to="/products">
                            <ProductsIcon />
                            PRODUCTOS
                        </Link></li>
                    <li>                        
                        <Link to="/cart">
                            <CartIcon />
                            CARRITO
                        </Link>
                    </li>
                </ul>

                <div className="navbar__search-cart">
                    <button className="navbar__search-button navbar__exclusive-desktop" onClick={toggleSearchButton}>
                        <span>
                            <svg width="23" height="23" viewBox="0 0 343 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M215 129.5C215 176.72 176.72 215 129.5 215C82.2797 215 44 176.72 44 129.5C44 82.2797 82.2797 44 129.5 44C176.72 44 215 82.2797 215 129.5ZM203.765 235.603C182.739 250.347 157.13 259 129.5 259C57.9791 259 0 201.021 0 129.5C0 57.9791 57.9791 0 129.5 0C201.021 0 259 57.9791 259 129.5C259 157.556 250.078 183.528 234.917 204.733L336.505 306.321C345.068 314.884 345.068 328.768 336.505 337.332C327.942 345.895 314.058 345.895 305.494 337.332L203.765 235.603Z" fill="white"/>
                            </svg>
                        </span>
                    </button>
                </div>

                <div className={`navbar__search-input`}>
                    <button className="navbar__back-arrow navbar__search-button" onClick={toggleSearchButton}>
                        <span>
                            <svg width="23" height="23" viewBox="0 0 387 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M355 158H32M32 158L157.5 32.5M32 158L157.5 283.5" stroke="#F58634" strokeWidth="64" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>

                    <input type="text" placeholder="Escribe Algo..."/>
                    
                    <button className="navbar__search-button">
                        <span>
                            <svg width="23" height="23" viewBox="0 0 343 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M215 129.5C215 176.72 176.72 215 129.5 215C82.2797 215 44 176.72 44 129.5C44 82.2797 82.2797 44 129.5 44C176.72 44 215 82.2797 215 129.5ZM203.765 235.603C182.739 250.347 157.13 259 129.5 259C57.9791 259 0 201.021 0 129.5C0 57.9791 57.9791 0 129.5 0C201.021 0 259 57.9791 259 129.5C259 157.556 250.078 183.528 234.917 204.733L336.505 306.321C345.068 314.884 345.068 328.768 336.505 337.332C327.942 345.895 314.058 345.895 305.494 337.332L203.765 235.603Z" fill="#F58634"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    );
}