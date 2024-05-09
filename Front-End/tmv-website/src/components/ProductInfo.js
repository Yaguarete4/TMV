import { splitCategories } from "./Category";
import { ReactComponent as OrangeBackArrow } from "../images/OrangeBackArrow.svg" 
import { Breadcrumbs, firstToUpper } from "./Breadcrumbs"
import { Link } from "react-router-dom";
import "../styles/ProductInfo.css"

export const ProductInfo = (props) => {
    const productDetails = props.productDetails && true;
    let title;

    if(props.title) title = props.title;

    else {
        title = splitCategories(props.categoryPath)
        title = title[title.length - 1]
    }

    return (
        <div className="products__info">
            <Breadcrumbs url={props.categoryPath} productDetails={productDetails}/>
            <h1>{firstToUpper(title)}</h1>
            <BackToPrev url={props.categoryPath} productDetails={productDetails}/>
        </div>
    );
}

const BackToPrev = (props) => {
    const splitUrl = splitCategories(props.url);
    
    //adding item to the array so if the Back to prev is use in product details it wont go 2 pages back
    if(props.productDetails) splitUrl.push("a")

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