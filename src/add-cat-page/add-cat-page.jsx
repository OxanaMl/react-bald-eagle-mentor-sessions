import React, { useEffect, useContext } from "react";
import CatForm from "../cat-form/cat-form";
import CatData from '../cat-data-context';
import {addTableData} from '../utils';

const AddCatPage = () => {
    const catData = useContext(CatData);
    const { catList, setCatList } = catData;
    const onSubmitForm = async (name, imageUrl, age) => {
        const newCatData = await addTableData("CatAdoption", {
            age,
            name,
            image: imageUrl,
        });
        setCatList([...newCatData.records, ...catList]);
    };
    return (
        <div>
            <h1>Add a New Cat!</h1>
            <CatForm onSubmit={onSubmitForm}/>
        </div>
    );
};

export default AddCatPage;
