import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {CSSTransition} from "react-transition-group"

import {ReactComponent as BrandLogo} from "../images/TMV.svg"
import {ReactComponent as BurgerMenu} from "../images/Menu.svg"
import {ReactComponent as HomeIcon} from "../images/Home.svg"
import {ReactComponent as ProductsIcon} from "../images/Products.svg"
import {ReactComponent as CartIcon} from "../images/Cart.svg"
import {ReactComponent as WhiteBurgerMenu} from "../images/WhiteBurgerMenu.svg"
import {ReactComponent as TMVIcon} from "../images/TMV-whiteIcon.svg"
import {ReactComponent as CrossIcon} from "../images/CrossIcon.svg"
import {ReactComponent as Lighning} from "../images/Lighning.svg"
import {ReactComponent as LeftArrowIcon} from "../images/LeftArrowIcon.svg"
import {ReactComponent as RightArrowIcon} from "../images/RightArrowIcon.svg"
import "../styles/Navbar.css"

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const navbarDarkenRef = useRef(null);
    // when i click the search button the desktop navbar must hide only in mobile screens, and in desktop, the grid template must change
    const [mobileScreen, setMobileScreen] = useState(false);
    const [isSearchBarActive, setIsSearchBarActive] = useState(false);

    useEffect(() => {
        changeScreenWidth();
    }, [])

    //changes the screenWidth variable values
    useEffect(() => {
        window.addEventListener('resize', changeScreenWidth);
        window.addEventListener('mousedown', closeSidebarOnLostFocus);

        return () => {
            window.removeEventListener('resize', changeScreenWidth);
            window.removeEventListener('mousedown', closeSidebarOnLostFocus)
        }
    }, [])

    const changeScreenWidth = () => {
        setMobileScreen(window.innerWidth <= 600);
    };
    //-----------------------------------------
    const changeSearchBarState = () => {
        setIsSearchBarActive(prev => !prev);
    }
    //-----------------------------------------

    const closeSidebarOnLostFocus = (e) => {
        if(sidebarRef.current === null) return;
        setSidebarOpen((prevSidebarOpen) => {
            if (!sidebarRef.current.contains(e.target) && prevSidebarOpen) {
                prevSidebarOpen = false;
            }
    
            // Devuelve el nuevo valor del estado
            return prevSidebarOpen;
        });
    }

    //-----------------------------------------
    const addClass = (element, classToAdd) => {
        return element ? classToAdd : "";
    };
    //-----------------------------------------

    return (
        <nav className="navbar">
            <div className={`navbar__desktop`}>
                <div>
                    <button className="navbar__button-style" onClick={() => setSidebarOpen(!sidebarOpen)} style={{cursor: 'pointer'}}>
                        <BurgerMenu className="navbar__exclusive-mobile"  />
                    </button>
                    
                    <BrandLogo />

                    <div>
                        <button className={`navbar__search-button navbar__exclusive-mobile ${addClass(isSearchBarActive, "navbar__hide")}`} onClick={changeSearchBarState}>
                                <span>
                                    <svg width="23" height="23" viewBox="0 0 343 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M215 129.5C215 176.72 176.72 215 129.5 215C82.2797 215 44 176.72 44 129.5C44 82.2797 82.2797 44 129.5 44C176.72 44 215 82.2797 215 129.5ZM203.765 235.603C182.739 250.347 157.13 259 129.5 259C57.9791 259 0 201.021 0 129.5C0 57.9791 57.9791 0 129.5 0C201.021 0 259 57.9791 259 129.5C259 157.556 250.078 183.528 234.917 204.733L336.505 306.321C345.068 314.884 345.068 328.768 336.505 337.332C327.942 345.895 314.058 345.895 305.494 337.332L203.765 235.603Z" fill="#F58634"/>
                                    </svg>
                                </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`navbar__mobile ${(isSearchBarActive && mobileScreen) ? "navbar__mobile--onsearch-mobile" : ''}`}>
                <ul className={`${addClass(isSearchBarActive, "navbar__hide")}`}>
                    <li className="navbar__exclusive-desktop">
                        <Link className="navbar__desktop-burger-menu" to="#" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <WhiteBurgerMenu />
                            MENU
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar__home" to="/">
                            <HomeIcon />
                            INICIO
                        </Link>
                    </li>
                    <li key="products">
                        <Products mobile={mobileScreen}/>
                    </li>
                    <li>                        
                        <Link to="/cart">
                            <CartIcon />
                            CARRITO
                        </Link>
                    </li>
                </ul>

                <div className={`navbar__search-cart ${addClass((!mobileScreen && isSearchBarActive), "navbar__hide")}`}>
                    <button className="navbar__search-button navbar__exclusive-desktop" onClick={changeSearchBarState} >
                        <span>
                            <svg width="23" height="23" viewBox="0 0 343 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M215 129.5C215 176.72 176.72 215 129.5 215C82.2797 215 44 176.72 44 129.5C44 82.2797 82.2797 44 129.5 44C176.72 44 215 82.2797 215 129.5ZM203.765 235.603C182.739 250.347 157.13 259 129.5 259C57.9791 259 0 201.021 0 129.5C0 57.9791 57.9791 0 129.5 0C201.021 0 259 57.9791 259 129.5C259 157.556 250.078 183.528 234.917 204.733L336.505 306.321C345.068 314.884 345.068 328.768 336.505 337.332C327.942 345.895 314.058 345.895 305.494 337.332L203.765 235.603Z" fill="white"/>
                            </svg>
                        </span>
                    </button>
                </div>

                <div className={`navbar__search-input ${addClass(!isSearchBarActive, "navbar__hide")}`}>
                    <button className="navbar__back-arrow navbar__search-button" onClick={changeSearchBarState} >
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

            <div className={sidebarOpen ? 'navbar__sidebar active' : 'navbar__sidebar'} ref={sidebarRef}>
                <button className="navbar__button-style sidebar__close-button" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <CrossIcon />
                </button>

                <ul>
                    <li className="sidebar__home" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Link to="/" >
                            <TMVIcon />
                            INICIO
                        </Link>
                    </li>

                    {SidebarOptions.map((value, index) => {
                        return <li key={index} onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Link to={value.url}>{value.string}</Link>
                        </li>
                    })}
                </ul>

                <div className="sidebar__account">
                    <Link className="sidebar__login-button" to="/login" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        TENGO MI CUENTA
                        <Lighning />
                    </Link>

                    <Link to="/register" onClick={() => setSidebarOpen(!sidebarOpen)}>CREAR CUENTA</Link>
                </div>
            </div>

            <CSSTransition 
                nodeRef={navbarDarkenRef}
                in={sidebarOpen}
                unmountOnExit
                timeout={350}
                classNames={"navbar__darken-transition"}
            >
                <div className="navbar__darken" ref={navbarDarkenRef}/>
            </CSSTransition>
        </nav>
    );
}

const Products = (props) => {
    const [open, setOpen] = useState(false);
    const dropDownMenuRef = useRef(null)

    useEffect(() => {
        const closeOnLostFocus = (e) => {
            if(dropDownMenuRef.current === null) return;
            if(!dropDownMenuRef.current.contains(e.target)) setOpen(false);
        }
    

        window.addEventListener('mousedown', closeOnLostFocus)

        return () => {
            window.removeEventListener('mousedown', closeOnLostFocus)
        }
    });

    const DropDownMenu = (props) => {
        const [list, setList] = useState([JSON.parse(JSON.stringify(ProductsData))]);
        const [transition, setTransition] = useState(false);
        const lastList = useRef(null);

        useEffect(() => {
            open || setList([JSON.parse(JSON.stringify(ProductsData))]);
        }, []);

        useEffect(() => {
            lastList.current = list[list.length - 1];
        }, [list])

        const LoopProductsData = (array) => {
            const onProductClick = (value) => {
                if(value.dropDown.length === 0 && !value.deleteHimself){
                    setOpen(prev => !prev);
                    return;
                };

                //Crea lo que se podria llamar la nueva pestaña de la lista que se va a mostrar en el array
                if(value.dropDown.length !== 0){

                    let listElement = Array.from(value.dropDown);
                    //Añadimos el boton que se habia clickeado anteriormente a esta lista, para volver a la pagina anterior
                    listElement.unshift({
                        string: value.string,
                        URL: value.URL,
                        deleteHimself: true,
                        dropDown: []
                    })

                    if(JSON.stringify(list[list.length - 1]) === JSON.stringify(listElement)) return;

                    setList(prev => [...prev, listElement]);
                    setTransition(true);
                }

                //Sistema para volver a la pestaña anterior
                if(value.deleteHimself && list.length > 1){
                    setList(prev => prev.slice(0, -1));
                    setTransition(false);
                }
            }

            return (
                array.map((value) => {
                    return (
                        <DropDownItem to={value.URL} key={value.string} orangeBackground={value.deleteHimself || value.orangeBackground} showArrowNever={(value.dropDown.length === 0) && value.orangeBackground} showArrowAlways={(value.deleteHimself) || ((value.dropDown.length > 0) && value.orangeBackground)} leftIcon={(value.deleteHimself) ? <LeftArrowIcon /> : <RightArrowIcon />} click={() => {onProductClick(value)}} >{value.string}</DropDownItem>
                    );
                })
            );
        }

        const DropDownItem = (props) => {
            const [hover, setHover] = useState(false);
            const buttonRef = useRef(null);

            useEffect(() => {
                buttonRef.current && buttonRef.current.addEventListener('mouseleave', () => setHover(false));
                buttonRef.current && buttonRef.current.addEventListener('mouseover', () => setHover(true));

                return () => {
                    buttonRef.current && buttonRef.current.removeEventListener('mouseleave', () => setHover(false));
                    buttonRef.current && buttonRef.current.removeEventListener('mouseover', () => setHover(true));
                }
            }, [])

            return (
                <Link ref={buttonRef} to={props.to} className={`drop-down-menu__item ${props.orangeBackground ? 'return-item' : ''}`} onClick={props.click}>
                    <span style={((!hover && !props.showArrowAlways) || props.showArrowNever) ? {opacity: "0"} : {opacity: "1"}}>{props.leftIcon}</span>
                    {props.children}
                </Link>
            );
        }

        const TransitionDiv = (props) => {
            const [timeEnd, setTimeEnd] = useState(false);

            const handleTransition = (transitionOn, direction, state) => {
                if(!transitionOn) return '';

                if(direction === 'left'){
                    return (state === 'exit') ? 'exit-left' : 'enter-left';
                }
    
                if(direction === 'right'){
                    return (state === 'exit') ? 'exit-right' : 'enter-right';
                }
            }

            const handleTimeOut = (timeout) => {
                if(timeout < 0 || !timeout) return;

                setTimeout(() => {
                    setTimeEnd(true);
                }, timeout)            
            }

            return (
                <div 
                className={`${props.classNames} ${handleTransition(props.transitionOn, props.direction, props.state)} ${timeEnd ? 'navbar__hide' : ''}`} 
                >
                    {props.unmountOnExit && handleTimeOut(props.timeout)}
                    {props.children}
                </div>
            );
        }

        return (
            <div className={`drop-down-menu ${props.mobile ? 'mobile' : ''}`}>
                {((list.length === 1) && !lastList.current) && LoopProductsData(list[list.length - 1])}

                {/* Avanzar */}
                {(transition && list.length > 1) && 
                    <>
                        <TransitionDiv
                            classNames='drop-down-menu__transition'
                            transitionOn={transition}
                            direction='left'
                            state='exit'
                            unmountOnExit
                            timeout={250}
                        >
                            {LoopProductsData(list[(list.length > 1) ? (list.length - 2) : (list.length - 1)])}
                        </TransitionDiv>

                        <TransitionDiv
                            classNames='drop-down-menu__transition'
                            transitionOn={transition}
                            direction='left'
                            state='enter'
                            timeout={250}
                        >
                            {LoopProductsData(list[list.length - 1])}
                        </TransitionDiv>
                    </>
                }

                {/* Retroceder */}
                {(!transition && lastList.current !== null) && 
                    <>
                        <TransitionDiv
                        classNames='drop-down-menu__transition'
                        transitionOn={!transition}
                        direction='right'
                        state='exit'
                        unmountOnExit
                        timeout={250}
                        >
                            {LoopProductsData(lastList.current !== null ? lastList.current : list[list.length - 1])}
                        </TransitionDiv>

                        <TransitionDiv
                        classNames='drop-down-menu__transition'
                        transitionOn={!transition}
                        direction='right'
                        state='enter'
                        timeout={250}
                        >
                            {LoopProductsData(list[list.length - 1])}
                        </TransitionDiv>
                    </>
                }
            </div>
        );
    }

    return (
        <div ref={dropDownMenuRef} className="navbar__products">
            <Link to="#" onClick={() => setOpen(!open)}>
                <ProductsIcon />
                PRODUCTOS
            </Link>

            {open && <DropDownMenu mobile={props.mobile}/>}
        </div>
    );
}

const SidebarOptions = [
    {
        string: "¿QUIENES SOMOS?",
        url: '/who-we-are'
    },
    {
        string: "PREGUNTAS FRECUENTES",
        url: '/frecuent-questions'
    },
    {
        string: "CAMBIOS DE PRENDAS",
        url: 'clothing-exchanges'
    }
]

const ProductsData = [
    {
        string: "INDUMENTARIA HOMBRE",
        URL: "#",
        orangeBackground: true,
        dropDown: [
            {
                string: "TODO",
                URL: "/hombre",
                dropDown: []
            },
            {
                string: "REMERAS",
                URL: "/hombre/remeras",
                dropDown: []
            },
            {
                string: "MUSCULOSAS",
                URL: "#",
                dropDown: [
                    {
                        string: "AZUL",
                        URL: "/azul",
                        dropDown: []
                    }
                ]
            },
            {
                string: "SHORTS",
                URL: "/shorts",
                dropDown: []
            },
        ]
    },
    {
        string: "VER TODOS LOS PRODUCTOS",
        URL: "/productos",
        orangeBackground: true,
        dropDown: []
    }
]