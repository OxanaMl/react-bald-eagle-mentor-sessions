import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/home">Home</Link>
            <Link to="/adopt">Adopt</Link>
        </header>
    );
};

export default Header;