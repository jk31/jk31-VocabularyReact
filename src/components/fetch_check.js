import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function FetchCheck() {
    const data = useSelector(state => state.fetchingReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>fetch check</h1>
            <div>
                {
                    data.fetch.map(data => <p>{data.name}</p>)
                }
            </div>
        </div>
    )
}

export default FetchCheck;
