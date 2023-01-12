import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'
import { getTableRecord } from './utils';

const CatDetailsPage = () => {
    const params = useParams();
    const [catInfo, setCatInfo] = useState(null);
    useEffect(() => {
        getTableRecord("CatAdoption", params.catId).then((data) => {
            setCatInfo(data);
        });
    }, [])

    if(!catInfo) return <p>Loading...</p>

    return (
        <div>
            <h1>{catInfo.fields.name}</h1>
            <h2>{catInfo.fields.age} years old</h2>
            <img src={catInfo.fields.image} />
        </div>
    );
};

export default CatDetailsPage;