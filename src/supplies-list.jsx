import React, { useEffect, useState } from "react";

const SuppliesList = ({ defaultList, listTitle }) => {
    const [list, setList] = useState(defaultList);
    
    useEffect(() => {
        const newList = [...list].sort((itemA, itemB) => {
            return itemA.title.localeCompare(itemB.title);
        });
        setList(newList);
    }, [list.length]);

    return (
        <div>
            <h2>{listTitle}</h2>
            {list.map((item, idx) => {
                return (
                    <div key={`${listTitle}-${idx}`}>
                        <h4>{item.title}</h4>
                        <button
                            onClick={() => {
                                const newList = list.filter((item, itemIdx) => {
                                    return idx !== itemIdx;
                                });
                                setList(newList);
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default SuppliesList;
