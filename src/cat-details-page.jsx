import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getTableRecord } from "./utils";
import CatData from "./cat-data-context";
import CatForm from "./cat-form/cat-form.tsx";
import {editTableData} from './utils';

const CatDetailsPage = () => {
    const params = useParams();
    // const [catInfo, setCatInfo] = useState(null);
    const catData = useContext(CatData);
    const { catList, setCatList } = catData;
    const catInfo = catList.find((catRow) => catRow.id === params.catId);
    const [isEditing, setIsEditing] = useState(false);

    const onSubmitForm = async (name, imageUrl, age) => {
        const newCatData = await editTableData("CatAdoption", {
            id: params.catId,
            fields: {
                age,
                name,
                image: imageUrl,
            }
        });
        setCatList([...newCatData.records, ...catList]);
    };

    if (!catInfo) return <p>Loading...</p>;

    return (
        <div className="cat-details">
            <h1>{catInfo.fields.name}</h1>
            <h2>{catInfo.fields.age} years old</h2>
            <p>Microchipped: {catInfo.fields.microchipped ? 'Yes' : 'No'}</p>
            <img src={catInfo.fields.image} />
            <div>
                {isEditing ? (
                    <>
                        <CatForm onSubmit={onSubmitForm} defaultName={catInfo.fields.name}/>
                        <button onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                    </>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
            </div>
        </div>
    );
};

export default CatDetailsPage;
