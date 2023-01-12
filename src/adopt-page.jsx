import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTableData } from "./utils";

const AdoptPage = () => {
    const [catList, setCatList] = useState([]);
    useEffect(() => {
        getTableData("CatAdoption").then((data) => {
            console.log(data);
            setCatList(data.records);
        });
    }, []);
    return (
        <div>
            <h1>Adopt One of These Cats!</h1>
            {catList.map((catInfo) => {
                return (
                    <div className="cat-summary">
                        <Link to={`/cat/${catInfo.id}`}>
                            <h3>{catInfo.fields.name}</h3>
                        </Link>
                        <img src={catInfo.fields.image} />
                    </div>
                );
            })}
        </div>
    );
};

export default AdoptPage;
