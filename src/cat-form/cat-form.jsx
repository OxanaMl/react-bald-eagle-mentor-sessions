import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CatForm = ({ onSubmit, defaultName = '' }) => {
    const [age, setAge] = useState(1);
    const [name, setName] = useState(defaultName);
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(onSubmit) onSubmit(name, imageUrl, age)
    }

    const handleNameChange = (e) => setName(e.target.value)
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={handleNameChange} value={name}/>
            <label htmlFor="imageUrl">Image Url</label>
            <input id="imageUrl" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={(e) => setAge(Number(e.target.value))} value={age}/>
            <button type="submit">Add Cat</button>
            <input type="checkbox" onChange={(e) => console.log(e.target.checked)} value={age}/>
        </form>
    );
};

CatForm.propTypes = {
    onSubmit: PropTypes.func,
    defaultName: PropTypes.string,
};

export default CatForm;