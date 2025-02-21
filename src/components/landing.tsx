import homepage from '../images/homepage.png';
import React from 'react';
import {useNavigate} from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const handleClick: ()=>void =() => {
        navigate('/landing');
    };
    return(
        <div className="wrapper" onClick={handleClick}>
            <img className="homepage__img" src={homepage} alt="homepage" />
        </div>
    )};

export default HomePage;