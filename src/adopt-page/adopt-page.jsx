import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getTableData, deleteTableData } from "../utils";
import "./adopt-page.css";
import CatData from "../cat-data-context";

const tableHeaders = [
    { title: "Picture" },
    {
        title: "Name",
        sort: (catInfoA, catInfoB) => {
            return catInfoA.fields.name.localeCompare(catInfoB.fields.name);
        },
    },
    {
        title: "Age",
        sort: (catInfoA, catInfoB) => {
            if (catInfoA.fields.age < catInfoB.fields.age) {
                return 1;
            } else if (catInfoA.fields.age > catInfoB.fields.age) {
                return -1;
            } else {
                return 0;
            }
        },
    },
    {
        title: "Microchipped",
        sort: (catInfoA, catInfoB) => {
            if (catInfoA.fields.microchipped === catInfoB.fields.microchipped) {
                return 0;
            } else if (catInfoA.fields.microchipped) {
                return 1;
            } else {
                return -1;
            }
        },
    },
    { title: "Delete Cat" },
];

const AdoptPage = () => {
    // const [catList, setCatList] = useState([]);
    const catData = useContext(CatData);
    const { catList, setCatList } = catData;
    const sortedCatList = [...catList];
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(null);
    const [direction, setDirection] = useState(1);

    const sortingMethod = tableHeaders.find(
        (headerInfo) => headerInfo.title === sort
    )?.sort;

    if (sortingMethod)
        sortedCatList.sort((a, b) => direction * sortingMethod(a, b));

    const filteredCatList = sortedCatList.filter((catInfo) =>
        catInfo.fields.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log("sort/direction", sort, direction);

    const handleDeleteCat = async (catId) => {
        await deleteTableData("CatAdoption", catId);
        const newCatList = catList.filter((catInfo) => {
            return catInfo.id !== catId;
        });
        setCatList(newCatList);
    };

    return (
        <div className="adopt-page">
            <h1>Adopt One of These Cats!</h1>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cat by name!"
            />
            <table>
                <thead>
                    {tableHeaders.map((headerInfo) => {
                        return (
                            <th>
                                {headerInfo.sort ? (
                                    <button
                                        onClick={() => {
                                            if (sort === headerInfo.title) {
                                                if (direction === 1) {
                                                    setDirection(-1);
                                                } else {
                                                    setDirection(1);
                                                }
                                            } else {
                                                setDirection(1);
                                            }
                                            setSort(headerInfo.title);
                                        }}
                                    >
                                        {headerInfo.title}{" "}
                                        {headerInfo.title === sort
                                            ? direction === 1
                                                ? "▲"
                                                : "▼"
                                            : ""}
                                    </button>
                                ) : (
                                    headerInfo.title
                                )}
                            </th>
                        );
                    })}
                </thead>
                <tbody>
                    {filteredCatList.map((catInfo) => {
                        return (
                            <tr className="cat-summary">
                                <td>
                                    <img src={catInfo.fields.image} />
                                </td>
                                <td>
                                    <Link to={`/cat/${catInfo.id}`}>
                                        <h3>{catInfo.fields.name}</h3>
                                    </Link>
                                </td>
                                <td>{catInfo.fields.age}</td>
                                <td>
                                    {catInfo.fields.microchipped ? "Yes" : "No"}
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDeleteCat(catInfo.id)
                                        }
                                    >
                                        Cat Adopted
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AdoptPage;
