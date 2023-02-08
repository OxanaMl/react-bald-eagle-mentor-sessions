import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'
import { getTableRecord } from './utils';
import CatData from "./cat-data-context";

const CatDetailsPage = () => {
    const params = useParams();
    // const [catInfo, setCatInfo] = useState(null);
    const catData = useContext(CatData);
    const { catList, setCatList } = catData;
    const catInfo = catList.find((catRow) => catRow.id === params.catId)

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