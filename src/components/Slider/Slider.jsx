import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/10610417/pexels-photo-10610417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "/img/slider.png",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ,
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="container">
            <div className="wrapper" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <div className="slide">
                    <div className="imgContainer">
                        <img src={data[0]} alt="" />
                    </div>
                    <div className="infoContainer">
                        <h2 className="titleInfo">PROMOÇÃO</h2>
                        <h3 className="descInfo">Aproveite nossas promoções e adquira peças incríveis para compor looks cheios de estilo e personalidade!</h3>
                        <button className="buttonInfo"><a className='link' href="/products/:id">COMPRE AGORA</a></button>
                    </div>
                </div>

                <div className="slide">
                    <div className="imgContainer">
                        <img src={data[1]} alt="" />
                    </div>
                    <div className="infoContainer">
                        <h2 className="titleInfo">COLEÇÃO  </h2>
                        <h3 className="descInfo">Desperte a sua autoconfiança e mostre a sua personalidade com a nossa coleção de roupas exclusivas!</h3>
                        <button className="buttonInfo"><a className='link' href="/products/:id">COMPRE AGORA</a></button>
                    </div>
                </div>

                <div className="slide">
                    <div className="imgContainer">
                        <img src={data[2]} alt="" />
                    </div>
                    <div className="infoContainer">
                        <h2 className="titleInfo">LIQUIDAÇÃO</h2>
                        <h3 className="descInfo"> Não perca a oportunidade de renovar o seu guarda-roupa com descontos imperdíveis!</h3>
                        <button className="buttonInfo"><a className='link' href="/products/:id">COMPRE AGORA</a></button>
                    </div>
                </div>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;