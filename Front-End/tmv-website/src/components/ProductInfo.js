import { splitCategories } from "./Category";
import { ReactComponent as OrangeBackArrow } from "../images/OrangeBackArrow.svg" 
import { Breadcrumbs, firstToUpper } from "./Breadcrumbs"
import { Link } from "react-router-dom";
import "../styles/ProductInfo.css"

export const ProductInfo = (props) => {
    let title = splitCategories(props.categoryPath)
    title = title[title.length - 1]

    return (
        <div className="products__info">
            <Breadcrumbs url={props.categoryPath}/>
            <h1>{firstToUpper(title)}</h1>
            <BackToPrev url={props.categoryPath}/>
        </div>
    );
}

const BackToPrev = (props) => {
    const splitUrl = splitCategories(props.url);

    //It's the url that you will be send when you press the button
    let backURL = '';
    //The string that indicates you which page section are you coming back
    let backString = 'INICIO';

    for(let i = 0; i < splitUrl.length; i++){
        if(i !== splitUrl.length - 1) backURL += `/${splitUrl[i]}`;
    }

    if((splitUrl.length - 2) !== -1) backString = splitUrl[splitUrl.length - 2].toUpperCase();
    else backURL = '/';

    return (
        <Link to={backURL}>
            <OrangeBackArrow />
            {backString}
        </Link>
    );
}