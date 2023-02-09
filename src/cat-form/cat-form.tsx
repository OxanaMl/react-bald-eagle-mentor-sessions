import React, { useEffect, useState } from 'react';

type ItemProps = {onSubmit: (name: string, imageUrl: string, age: number, microchipped: boolean) => void, defaultName: string}

const CatForm = ({ onSubmit, defaultName = '' } : ItemProps) => {
    const [age, setAge] = useState(1);
    const [name, setName] = useState(defaultName);
    const [imageUrl, setImageUrl] = useState('');
    const [microchipped, setMicrochipped] = useState(true);

    const handleSubmit = (e : React.SyntheticEvent) => {
        e.preventDefault();
        if(onSubmit) onSubmit(name, imageUrl, age, microchipped)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={(e) => setName(e.target.value)} value={name}/>
            <label htmlFor="imageUrl">Image Url</label>
            <input id="imageUrl" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" onChange={(e) => setAge(Number(e.target.value))} value={age}/>
            <button type="submit">Add Cat</button>
            <label htmlFor="microchipped">Microchipped</label>
            <input id="microchipped" type="checkbox" checked={microchipped} onChange={(e) => {

                setMicrochipped(e.target.checked)
                handleSubmit(e)
            }} value={age}/>
        </form>
    );
};

export default CatForm;