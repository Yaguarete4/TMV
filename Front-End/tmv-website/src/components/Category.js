import { useParams } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";

export const Category = () => {
    //useParams returns a object. I get the pathname, which key is the *, from that object and i store it in categoryPath
    const {"*" : categoryPath} = useParams();

    return (
      <ProductsPage categories={categoryPath}/>
    );
}


// //Removes the / from the category string. Example: /t-shirt/ => /t-shirt
// const clearURL = (string) => {
//     return string[string.length - 1] === "/" ? string.slice(0, -1) : string
// }

export const splitCategories = (itemCategories) => {
    //Contains a list of the categories
    let splitedCategories = itemCategories.split('/')

    //Removes the last item in the array if it's empty
    if(!splitedCategories[splitedCategories.length - 1]) splitedCategories = splitedCategories.slice(0, -1);

    return splitedCategories;
}