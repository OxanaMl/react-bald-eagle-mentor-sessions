import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getTableData, deleteTableData } from "../utils";
import './adopt-page.css'
import CatData from "../cat-data-context";

const AdoptPage = () => {
    // const [catList, setCatList] = useState([]);
    const catData = useContext(CatData);
    const { catList, setCatList } = catData;

    const handleDeleteCat = async(catId) => {
        await deleteTableData("CatAdoption", catId);
        const newCatList = catList.filter((catInfo) => {
            return catInfo.id !== catId;
        })
        setCatList(newCatList);
    }

    return (
        <div className="adopt-page">
            <h1>Adopt One of These Cats!</h1>
            <button onClick={() => {
                const newCatList = [...catList].sort((catInfoA, catInfoB) => {
                    debugger
                    if(catInfoA.fields.age < catInfoB.fields.age) {
                        return 1;
                    } else if(catInfoA.fields.age > catInfoB.fields.age) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
                setCatList(newCatList);
            }}>Sort by age</button>
            <button onClick={() => {
                const newCatList = [...catList].sort((catInfoA, catInfoB) => {
                    return catInfoA.fields.name.localeCompare(catInfoB.fields.name)
                })
                setCatList(newCatList);
            }}>Sort by name</button>
            {catList.map((catInfo) => {
                return (
                    <div className="cat-summary">
                        <img src={catInfo.fields.image} />
                        <div className="info-box">
                            <Link to={`/cat/${catInfo.id}`}>
                                <h3>{catInfo.fields.name}</h3>
                            </Link>
                            <button onClick={() => handleDeleteCat(catInfo.id)}>Cat Adopted</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AdoptPage;
