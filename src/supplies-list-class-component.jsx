import React, { Component } from "react";

class SuppliesListClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: props.defaultList,
        };
    }

    //this is similar to useEffect with an empty dependency array
    //It will run once on first render
    componentDidMount(prevProps, prevState) {
        const newList = [...this.state.list].sort((itemA, itemB) => {
            return itemA.title.localeCompare(itemB.title);
        });
        this.setState({
            list: newList,
        });
    }

    //this can be used similarly to useEffect
    //It will run once on every render, other than the first render
    componentDidUpdate(prevProps, prevState) {
        //We need to compare current state/props with previous state/props to determine
        //if we should perform a side effect
        if (prevState.list.length !== this.state.list.length) {
            const newList = [...this.state.list].sort((itemA, itemB) => {
                return itemA.title.localeCompare(itemB.title);
            });
            this.setState({
                list: newList,
            });
        }
    }

    render() {
        const { listTitle } = this.props;
        const { list } = this.state;
        return (
            <div>
                <h2>{listTitle}</h2>
                {list.map((item, idx) => {
                    return (
                        <div key={`${listTitle}-${idx}`}>
                            <h4>{item.title}</h4>
                            <button
                                onClick={() => {
                                    const newList = list.filter(
                                        (item, itemIdx) => {
                                            return idx !== itemIdx;
                                        }
                                    );
                                    this.setState({
                                        list: newList,
                                    });
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SuppliesListClassComponent;
