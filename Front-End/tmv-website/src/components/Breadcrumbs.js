import { Link, useLocation } from "react-router-dom"
import "../styles/Breadcrumbs.css"

export const Breadcrumbs = (props) => {
    const whiteStyle = props.whiteStyle && true;
    const location = useLocation();

    let currentLink = '';
    let crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '');
    
    crumbs.unshift("Inicio");
    crumbs = crumbs.map((crumb, index) => {
        //Both uses whiteStyle var to add the white class, this class makes the font-color white
        if(index === 0) return <div className={`crumb ${whiteStyle ? 'white' : ''}`} key={crumb}><Link to='/'>{firstToUpper(crumb)}</Link></div>

        currentLink += `/${crumb}`;

        return (
            <div className={`${(index === crumbs.length - 1) ? 'last-crumb' : 'crumb'} ${whiteStyle ? 'white' : ''}`}key={crumb}>
                <Link to={currentLink}>{firstToUpper(crumb)}</Link>
            </div>
        );
    })

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
}

export const firstToUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}