import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTableData, deleteTableData } from "./utils";

const AdoptPage = () => {
    const [catList, setCatList] = useState([]);
    useEffect(() => {
        getTableData("CatAdoption").then((data) => {
            console.log(data);
            setCatList(data.records);
        });
    }, []);

    const handleDeleteCat = async(catId) => {
        await deleteTableData("CatAdoption", catId);
        const newCatList = catList.filter((catInfo) => {
            return catInfo.id !== catId;
        })
        setCatList(newCatList);
    }

    return (
        <div>
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
                        <Link to={`/cat/${catInfo.id}`}>
                            <h3>{catInfo.fields.name}</h3>
                        </Link>
                        <img src={catInfo.fields.image} />
                        <button onClick={() => handleDeleteCat(catInfo.id)}>Cat Adopted</button>
                    </div>
                );
            })}
        </div>
    );
};

export default AdoptPage;
