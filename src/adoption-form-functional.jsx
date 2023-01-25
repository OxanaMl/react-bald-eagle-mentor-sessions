import React, { useEffect, useState } from 'react';

const AdoptionFormFunctional = () => {
    const [name, setName] = useState('');
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log(name);
        setName('');
    }
    return (<div>
        <h1>Adoption Form</h1>
        <form onSubmit={(e) => handleFormSubmit(e)}>
            <input value={name} onChange={(e) => handleNameChange(e)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>)
};

export default AdoptionFormFunctional;