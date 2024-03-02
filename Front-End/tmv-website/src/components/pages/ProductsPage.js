import "../../styles/ProductsPage.css"
import remera from './remera.jpg';

export const ProductsPage = () => {
    return (
        <ItemsContainer />
    );
}

const ItemsContainer = () => {
    const Item = () => {
        return (
            <div className="items-container__item">
                <img src={remera} alt="item"/>
            </div>
        );
    }

    return (
        <Item />
    );
}