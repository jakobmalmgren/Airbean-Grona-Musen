import React from "react";
import Button from "Button";
import {useNavigate} from "react-router-dom";
import "./NoOrdertStatus.scss";
// imnport "/Button.css" not sure if i should import button css or no

// created the no order status page with a button imported from statusModal branch and add bgColor and color for styling, 
// rest of the stylling will keep the same as the original button design


const NoOrderStatus:React.FC = () => {
    const bgColor :string = "rgba(47, 41, 38, 1)";
    const color :string = "rgba(255, 255, 255, 1)";
    const handleClick= () => {
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

