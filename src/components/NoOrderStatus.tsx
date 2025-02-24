import React from "react";
import Button from "Button";
import {useNavigate} from "react-router-dom";

const NoOrderStatus = () => {
    const bgColor = "rgba(47, 41, 38, 1)";
    const color= "rgba(255, 255, 255, 1)";
    const handleClick = () => {
        const navigate=useNavigate();
        navigate("/XXXmenupage");   
    };
    return(
        <section className="no__order__status__frame">
            <h1 className="no__order__status__title">Din Korg är Tomt!</h1>
            <Button onClick={handleClick} bgColor={bgColor} color={color}>Köp Nu!</Button>
        </section>
    )};

export default NoOrderStatus;

