import { useState } from "react";
import { ReactComponent as OrangeFowardArrow } from "../images/OrangeFowardArrow.svg" 
import { ReactComponent as OrangeBackArrow } from "../images/OrangeBackArrow.svg" 
import "../styles/Slider.css"

export const Slider = (props) => {
    const images = props.images;

    const [ imageIndex, setImageIndex ] = useState(0);

    const showPrevImage = () => {
        setImageIndex(index => {
            if(index === 0) return images.length - 1;
            return index - 1
        })
    }

    const showNextImage = () => {
        setImageIndex(index => {
            if(index === images.length - 1) return 0;
            return index + 1
        })
    }

    const goToIndex = (index) => {
        if(imageIndex === index) return
        setImageIndex(index);
    }

    return (
        <div className="slider">
            <div className="slider__main">
                <button className="slider__button left" onClick={showPrevImage}><OrangeBackArrow /></button>

                <div className="slider__images">
                    {images.map((url, i) => {
                        return (
                            <img key={i} src={url} alt="Imagen" style={{translate: `${-100 * imageIndex}%`}}/>
                        );
                    })}
                </div>

                <button className="slider__button right" onClick={showNextImage}><OrangeFowardArrow /></button>
            </div> 

            <div className="slider__ref-images">
                {images.map((url, i) => {
                    return (
                        <button key={i} onClick={() => goToIndex(i)}>
                            <img src={url} alt={"Imagen"} style={i === imageIndex ? {"border": "2px solid #F58634"} : {}}/>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}