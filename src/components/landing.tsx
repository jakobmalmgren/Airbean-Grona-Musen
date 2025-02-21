import homepage from '../images/homepage.png';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const HandleClick: () => void = () => {
        navigate('/homepage');
    };
    return(
        <div className="wrapper" onClick={HandleClick}>
            <img src={homepage} alt="homepage" />
        </div>
    )};

export default HomePage;