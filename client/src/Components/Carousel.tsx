import React, { useState } from "react";
import './Carousel.css';
import { ICarouselData } from '../Interfaces/Types';

const Carousel = (data: ICarouselData) => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        if (current === data.data.length - 1) {
            return;
        }
        setCurrent(current + 1);
    };

    const prevSlide = () => {
        if (current === 0) {
            return;
        }
        setCurrent(current - 1);
    };

    const getClassName = (index: any) => {
        let className = index === current ? "active" : "inactive";
        if (current === 0) {
            if (current === index - 1 || current === index - 2 || current === index - 3 || className === "active") {
                className = className + " show";
            } else {
                className = className + " hide";
            }
            return className;
        }
        if (current === data.data.length - 1) {
            if (current === index + 1 || current === index + 2 || current === index + 3 || className === "active") {
                className = className + " show";
            } else {
                className = className + " hide";
            }
            return className;
        }
        if (current === 1) {
            if (current === index + 1 || current === index - 1 || current === index - 2 || className === "active") {
                className = className + " show";
            } else {
                className = className + " hide";
            }
            return className;
        }
        if (current === index - 1 || current === index + 1 || current === index + 2 || className === "active") {
            className = className + " show";
        } else {
            className = className + " hide";
        }
        return className;
    };

    return (
        <div className="carousel">
            <div className="slides">
                {data?.data?.map((item: any, index: any) => {
                    return (
                        <div
                            className={index === current ? "slide active carousel-item" : "slide inactive carousel-item"}
                            key={index}
                        >
                            <img src={`${process.env.PUBLIC_URL}/images/large/${item.image}`} alt={item.title} />
                            <div className="carousel-text">
                                <p className="image-description-container"><span className="image-description">TITLE: </span><span className="image-text">{item.title}</span></p>
                                <p className="image-description-container"><span className="image-description">DESCRIPTION: </span><span className="image-text">{item.description}</span></p>
                                <p className="image-description-container"><span className="image-description">COST: </span><span className="image-text">{item.cost}</span></p>
                                <p className="image-description-container"><span className="image-description">ID: </span><span className="image-text">{item.id}</span></p>
                                <p className="image-description-container"><span className="image-description">THUMBNAIL FILE: </span><span className="image-text">{item.thumbnail}</span></p>
                                <p className="image-description-container last-container"><span className="image-description">LARGE IMAGE FILE: </span><span className="image-text">{item.image}</span></p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="thumbnails">
                <div className="thumbnails-border">
                    <button className={`prev ${current === 0 ? 'disable' : ''}`} onClick={prevSlide}>
                        &#10094;
                    </button>
                    {data?.data?.map((item: any, index: any) => {
                        return (
                            <img
                                key={index}
                                src={`${process.env.PUBLIC_URL}/images/thumbnails/${item.thumbnail}`}
                                alt={item.title}
                                className={getClassName(index)}
                                onClick={() => setCurrent(index)}
                            />
                        );
                    })}
                    <button className={`next ${current === data.data.length - 1 ? 'disable' : ''}`} onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
