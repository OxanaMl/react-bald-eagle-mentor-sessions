import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
    }, []);
    // v5 react router
    // return <Redirect to="/home"></Redirect>
    return null;
};

export default NotFound;